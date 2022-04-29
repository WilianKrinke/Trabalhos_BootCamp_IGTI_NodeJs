import 'dotenv/config.js';
import Sequelize from "sequelize";

const sequelize = new Sequelize(
    'igtidesafio','igti_admin', process.env.PASS,
    {
        dialect: 'mysql',
        host: 'localhost',
        define: {
            timestamps: false
        }
    }
)

export default sequelize;

