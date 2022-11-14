import { Sequelize } from "sequelize";

const db = new Sequelize('sai_dashboard', 'root', '', {
    host: "localhost",
    dialect: "mysql",
});

export default db;