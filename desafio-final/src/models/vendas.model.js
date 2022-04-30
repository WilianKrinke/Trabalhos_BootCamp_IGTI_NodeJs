import Sequelize from 'sequelize';
import db from '../connection/db.js';
import Cliente from './clientes.model.js';
import Livro from './livros.model.js';

const vendas_SEQ_MAP = db.define('vendas', {
    vendaid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    vendaData:{
        type: Sequelize.DATE,
        allowNull: false
    }
}, {underscored: true})

vendas_SEQ_MAP.belongsTo(Cliente, {foreignKey: 'clienteid'})
vendas_SEQ_MAP.belongsTo(Livro, {foreignKey: 'livroid'})

export default vendas_SEQ_MAP;