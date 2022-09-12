'use strict'
const res = require('express')
var mongoose = require('mongoose')
var personagem = mongoose.model('personagem')


// GET ALL
exports.lista_todos_os_personagens = function(req, res) {
    personagem.find({}, function(err, personagens){
        if(err) {
            res.send(err)
        }
        res.json(personagens)
    })
}

//GET ID
exports.lista_um_personagens = function(req, res) {
    personagem.findOne({"_id": req.params.personagemId}, function(err, personagem){
        if(err) {
            res.send(err)
        }
        res.json(personagem)
    })
}

//POST
exports.adiciona_um_personagem = function(req, res) {
    var novo_personagem = new personagem(req.body)
    novo_personagem.save(function(err, personagem) {
        if(err) {
            res.send(err)
        }
        res.json(personagem)
    })
}

//PUT
exports.atualiza_um_personagem = function(req, res) {
    personagem.findOneAndUpdate({_id: req.params.personagemId}, req.body, {new: true}, 
        function(err, personagem){
            if (err) {
                res.send(err)
            }
            res.json(personagem)
    })
}

//DELETE
exports.remove_um_personagem = function(req, res) {
    personagem.remove({_id: req.params.personagemId}, function(err, personagem) {
        if (err) {
            res.send(err)
        }
        res.json({"Mensagem": "Personagem deletado com sucesso!"})
    })
}