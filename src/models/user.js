// const { Sequelize, Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
// const sequelize = require("../config/connection");

// class User extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// User.init(
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     hooks: {
//       async beforeCreate(newUserData) {
//         newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         return newUserData;
//       },

//       async beforeUpdate(updatedUserData) {
//         updatedUserData.password = await bcrypt.hash(
//           updatedUserData.password,
//           10
//         );
//         return updatedUserData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "user",
//   }
// );

// module.exports = User;
