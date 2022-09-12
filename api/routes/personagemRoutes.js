'use strict'
module.exports = function(app){
    var personagemController = require('../controllers/personagemController')

    app.route('/personagem')
        .get(personagemController.lista_todos_os_personagens)
        .post(personagemController.adiciona_um_personagem)
    
    app.route('/personagem/:personagemId')
        .get(personagemController.lista_um_personagens)
        .put(personagemController.atualiza_um_personagem)
        .delete(personagemController.remove_um_personagem)

}