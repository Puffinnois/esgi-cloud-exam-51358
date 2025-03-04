const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://mydatabase_xnh3_user:gUmSMEnMOy8xGsfz7xqatQUqxgTbLiKm@dpg-cv3amrt2ng1s73ft61sg-a/mydatabase_xnh3', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
