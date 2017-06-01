'use strict';

var mongoose = require('mongoose'),
    Episode = mongoose.model('episodes');
let request = require('request');
let base_url = 'http://feeds.feedburner.com/';
let dados = [];
var parseString = require('xml2js').parseString;

exports.list_all_episodes = function(req, res) {
    Episode.find({}, function (err, epi){
        if(err)
            res.send(err);
        res.json(epi);
    });
};

exports.read_episode = function(req, res) {
    Episode.findById(req.params.episodeId, function(err, episode) {
        if (err)
            res.send(err);
        res.json(episode);
    });
};

exports.create_episode = function(req, res) {
    var novo_epi = new Episode(req.body);
    novo_epi.save(function(err, epi) {
        if(err)
          res.send(err);
        res.json(epi);
    });
};

exports.get_podcast = function(req, res) {
    var i = 0;
    request.get(base_url + req.params.name, (error, response, body) => {
      parseString(body, function (err, result) {
        console.log('------------------------------------');
        console.log(result.rss.channel.title);
        console.log('------------------------------------');
      });
    })
 };
