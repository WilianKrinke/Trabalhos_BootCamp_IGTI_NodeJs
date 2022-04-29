import Sequelize from 'sequelize';
import db from '../connection/db.js';

const autores_SEQ_MAP = db.define('autores', {
    autorid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default autores_SEQ_MAP;