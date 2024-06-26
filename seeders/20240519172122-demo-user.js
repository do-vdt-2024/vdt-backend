'use strict';

/** @type {import('sequelize-cli').Migration} */
const uuid = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      id: uuid.v4(),
      name: 'John Doe',
      school: "Đại hoc quốc gia hà nội",
      gender: "Nam",
      email: "ramdom email",
      birthDay: "11/11/2222",
      phone: 11011,
      nation: "VN"
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
