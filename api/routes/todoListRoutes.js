'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    app.route('/episodes')
        .get(todoList.list_all_episodes)
        .post(todoList.create_episode);

    app.route('/episodes/:episodeId')
        .get(todoList.read_episode);

    app.route('/podcast/:name')
        .get(todoList.get_podcast)
}