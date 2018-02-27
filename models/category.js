'use strict';

module.exports = (sequelize, DataTypes) => {
    var category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    } );

    category.associate = ( models ) => {
        category.hasMany( models.subcategory );
    }

    return category;
};
