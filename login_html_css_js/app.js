// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("./app/public"));

// app.set("view engine", "ejs");
// app.set("views", "./app/views");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// var rotas = require("./app/routes/router");
// app.use("/", rotas);

// app.listen(port, () => {
 // console.log(`Servidor ouvindo na porta ${port}`);
// });

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./config/cadastro")

app.use(express.static('public'))

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//rotas

app.get('/login', function(req,res){
    res.render('login');
});

app.get('/perfil', function(req, res){
    res.render('perfil');
});

app.post('/cadastro', function(req, res){
    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.send("Cadastro feito com sucesso!")
    }).catch(function(erro){
         res.send("Erro: o cadastro não foi feito" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Email: " + req.body.email + "<br>Senha: " + req.body.senha)
})


app.listen(8088);
