'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'custome-timer',
    plugin: 'custome-timer',
    type: 'time',
  });
};
