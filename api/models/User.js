"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    len: [3, 250],
                    notEmpty: true,
                },
                unique: false,
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    len: [3, 250],
                    notEmpty: true,
                },
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: [6, 100],
                    notEmpty: true,
                },
                unique: false,
            },
            hours: {
                type: DataTypes.INTEGER,
                validate: {
                    len: [1, 100],
                    notEmpty: false,
                },
                unique: false,
            }
        },
        {
            sequelize,
            modelName: "User",
        }
    );


    return User;
};
