'use strict';

/**
 * player-tenure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player-tenure.player-tenure');
