'use strict'
const { default: mongoose } = require('mongoose')
var moongoose = require('mongoose')
var Schema = mongoose.Schema

var personagemSchema = Schema({
    nomePersonagem: {
        type: String
    },
    level: {
        type: String
    },
    power: {
        type: String
    },
    codex: {
        type: String
    }
})

module.exports = mongoose.model('personagem', personagemSchema)