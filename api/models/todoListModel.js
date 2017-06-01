'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EpisodeSchema = new Schema({
  name: {
    type: String,
    Required: 'Insira o nome do Episodio'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pendente', 'executando', 'completado']
    }],
    default: ['pendente']
  }
});

module.exports = mongoose.model('episodes', EpisodeSchema);