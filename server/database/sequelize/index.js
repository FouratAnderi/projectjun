// const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// Create a database connection using Sequelize
const connection = new Sequelize('music', 'fourat', 'Liverpool1892', {
  host: 'localhost', // or '127.0.0.1'
  dialect: 'mysql', // Specify the dialect
});
// Verify your connection
connection.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Define my table for users
const User = connection.define("users", {
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
});

// Define my table for tracks
const Track = connection.define("tracks", {
  idtrack: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  trackname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  artistname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  tracklink: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  imageLink: { // New field for image link
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  users_iduser: {
    type: DataTypes.INTEGER,
    foreignKey:true,


  },
});

// Define my table for liked tracks
const LikeTable = connection.define("likestable", {
  idlikestable: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tracks_idtrack: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,

  },
  users_iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,

  },
});

User.hasMany(Track, { foreignKey: 'users_iduser' });
Track.belongsTo(User, { foreignKey: 'users_iduser' });

User.belongsToMany(Track, { through: LikeTable, foreignKey: 'users_iduser' });
Track.belongsToMany(User, { through: LikeTable, foreignKey: 'tracks_idtrack' });

// Sync the models with the database (create the tables)
connection
  .sync()
  .then(() => {
    console.log("Tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create tables:", error);
  });

// Export your models
module.exports = {
  connection,
  User,
  Track,
  LikeTable,
};
