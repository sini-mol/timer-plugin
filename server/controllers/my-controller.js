'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custome-timer')
      .service('myService')
      .getWelcomeMessage();
  },
});
