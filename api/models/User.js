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
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );

    User.associate = (models) => {
        // associations can be defined here
    };

    return User;
};
