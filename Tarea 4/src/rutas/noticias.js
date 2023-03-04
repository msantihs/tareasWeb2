// las rutas 

//GET https://newsapi.org/v2/everything?q={MAMADAABUSCAR}&apiKey={LAPINCHEKEY}

const axios = require('axios')
const express = require('express')
const router = express.Router()

const apiKey = 'f3080e03241c4f2bbe0f1a95d1b99672'

router.get('/',function(req,res){ //la pagina en general

    res.render('home')//la pagina esta de inicio 
}) 

router.get('/search', function(req,res){
    //se supone que req.query va a traer la chingadera, pero quien sabe como 
    url = 'https://newsapi.org/v2/everything?q='+ req.query.filter +'&apiKey=' + apiKey
    axios.get(url)
    .then(response => { //ya que se obtenga la respuesta 
        arr = response.data.articles
        //console.log(response.data.articles)
        res.render('noticia',{noticias:arr})
    })
    .catch(e => {
        // Podemos mostrar los errores en la consola
        console.log(e);
    })


})

module.exports = router