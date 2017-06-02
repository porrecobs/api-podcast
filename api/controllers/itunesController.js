'use strict';

let request = require('request');
let base_url = 'https://itunes.apple.com/search?term=';
let end_url = '&media=podcast';
let dados = [];
var parseString = require('xml2js').parseString;

exports.list_all_podcasts = function(req, res) {
    request.get(base_url + req.params.name + end_url, (error, response, body) => {
        console.log('------------------------------------');
        console.log(body);
        console.log('------------------------------------');
      parseString(body, function (err, result) {
          console.log('------------------------------------');
          console.log(err);
          console.log(result);
          console.log('------------------------------------');
        dados.push({  
        })
      })
    })
}