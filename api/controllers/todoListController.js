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
        res.json(epi);
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
    console.log('------------------------------------');
    console.log(res);
    console.log('------------------------------------');
    var i = 0;
    request.get(base_url + req.params.url, (error, response, body) => {
        console.log('------------------------------------');
        console.log(body);
        console.log('------------------------------------');
      parseString(body, function (err, result) {
        for (i in result.rss.channel[0].item) {
          dados.push({
            titulo: result.rss.channel[0].item[i].title[0],
            link: result.rss.channel[0].item[i].link[0],
            descricao: result.rss.channel[0].item[i].description[0],
            autor: result.rss.channel[0].item[i]["itunes:author"][0],
            data_publicacao: result.rss.channel[0].item[i].pubDate[0],
            media: result.rss.channel[0].item[i]["media:content"][0].$

            })
          }
        });
      res.json(dados);
    })
 };
