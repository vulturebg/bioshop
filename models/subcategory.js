'use strict';
const category = require( './category' );

module.exports = (sequelize, DataTypes) => {
  var subcategory = sequelize.define('subcategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    categoryid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: category,
            key: 'id'
        }
    }
  } );

  subcategory.associate = ( models ) => {
      subcategory.belongsTo( models.category, {
          foreignKey: 'id'
      } );
  }

  return subcategory;
};
