"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Username extends Model {}

    Username.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    len: [3, 250],
                    notEmpty: true,
                },
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Actor",
        }
    );

    Username.associate = (models) => {

    };

    return Username;
};
