'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      uid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passportSerial: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'passport_serial'
      },
      encryptedPassword: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'encrypted_password'
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name'
      },
      thirdName: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'third_name'
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'birth_date'
      },
      regionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'region_id'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
