import Users from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, username, email, password, confirmPassword } = req.body;
    if(password !== confirmPassword) return res.status(400).json({msg: "Password dan Confrim Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}

export const Login =  async (req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                username: req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Password salah"});
        const userId = user[0].id;
        const name = user[0].name;
        const username = user[0].username;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, username, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '30s' // waktu token di set expired dlm waktu 30 seconds
        });
        const refreshToken = jwt.sign({userId, name, username, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly:true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken, msg: "Login Berhasil" });
    } catch (error) {
        res.status(404).json({msg: "Username tidak ditemukan"});
    }
}

export const Logout =  async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}