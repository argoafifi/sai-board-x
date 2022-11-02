// Table Users in Database MySQL
import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js";

const Users = db.define('users', {
    name:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },

},{
    freezeTableName:true
});

export default Users;