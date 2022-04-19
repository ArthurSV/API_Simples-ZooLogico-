const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 3000;
server.use(bodyParser.json());
let animais = [
];


//Zoologico 

server.listen(port, () => {
    console.log(`server(ok)|porta:${port}`)
});
server.get('/', (req, res) => {
    res.send("Bem vindo ao zoologico dos guri, cadastre teu bixo ");
});
server.get('/animais-geral', (req, res) => {
    res.json({ animais: animais })
});
server.get('/buscar-animal', (req, res) => {
    const idAnimal = req.body.idAnimal
    let serchAnimal = animais.find(animal => animal.idAnimal == idAnimal)
    res.json({ serchAnimal });

});

server.post('/cadastrar-animal', (req, res) => {

    animais.push(req.body)
    let cadAnimal;
    for (let animal of animais) {
        cadAnimal = animal.nomeAnimal
    }
    res.send(`O animal: ${cadAnimal} foi cadastrado no zoologico`);
    // console.log(animais)

});

server.put('/atualizar-animal/:idAnimal', (req, res) => {
    let animalAtualizado = animais.find(animal => animal.idAnimal == req.params.idAnimal);
    animalAtualizado = req.body;
    let indiceAnimal = animais.findIndex(animal => animal.idAnimal == req.params.idAnimal)
    animais[indiceAnimal] = animalAtualizado;
    res.json({ mensagem: "Atualização completa " });
});
server.delete('/excluir-animal/:idAnimal', (req, res) => {
    let serchAnimal = animais.find(animal => animal.idAnimal == req.params.idAnimal);
    let anmF = animais.filter(animal => animal.idAnimal != req.params.idAnimal);
    animais = anmF;
    res.send(`Animal:${serchAnimal.nomeAnimal} excluido c/ sucesso`)

});


