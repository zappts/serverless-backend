
const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Notas = sequelize.define('Nota', {
    nota_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    valor_nota: DataTypes.INTEGER,
    aluno_id: DataTypes.INTEGER,
    materia_id: DataTypes.INTEGER
  }, {
    tableName: 'notas',
    timestamps: false
  });

module.exports = Notas;