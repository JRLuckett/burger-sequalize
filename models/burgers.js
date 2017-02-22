module.exports = function(sequelize, dataTypes){
  var Burger = sequelize.define('Burger', {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    devoured:{
      type: dataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
