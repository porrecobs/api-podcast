'use strict';

module.exports = function(app) {
    var feed = require('../controllers/feedController');
    var itunes = require('../controllers/itunesController');

    app.route('/episodes')
        .get(feed.list_all_episodes)
        .post(feed.create_episode);

    app.route('/episodes/:episodeId')
        .get(feed.read_episode);

    app.route('/podcast/:name')
        .get(feed.get_feed)
    
    app.route('/itunes/:name')
        .get(itunes.list_all_podcasts);
}