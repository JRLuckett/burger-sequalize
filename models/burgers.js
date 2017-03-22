module.exports = function(sequelize, dataTypes){
  var Burgers = sequelize.define('Burgers', {
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
  return Burgers;
};
