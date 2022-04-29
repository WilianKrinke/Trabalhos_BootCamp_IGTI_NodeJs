import Sequelize from 'sequelize';
import db from '../connection/db.js';
import Autor from './autores.model.js'

const livros_SEQ_MAP = db.define('livros', {
    livroid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.NUMBER,
        allowNull: false
    }, 
    estoque:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

livros_SEQ_MAP.belongsTo(Autor, {foreignKey: 'autorid'})

export default livros_SEQ_MAP;