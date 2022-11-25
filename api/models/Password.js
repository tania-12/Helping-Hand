"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Password extends Model {}

    Password.init(
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
            modelName: "Password",
        }
    );

    Passowrd.associate = (models) => {
        // associations can be defined here

    };

    return Password;
};
