require('dotenv').config()
const express = require('express')

const hbs = require('hbs');

const app = express()
const port = process.env.PORT


app.set('view engine', 'hbs' )
hbs.registerPartials(__dirname + '/views/partials');




app.use(express.static('public'))


app.get('/', (request, response) => {
    response.render('home', {
        nombre: 'Pachos',
        titulo: 'NODE'
    })
})
app.get('/generic', (request, response) => {
    response.render('generic', {
        nombre: 'Pachos',
        titulo: 'NODE'
    })
})
app.get('/elements', (request, response) => {
    response.render('elements', {
        nombre: 'Pachos',
        titulo: 'NODE'
    })
})





app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/back/404.html')
})

app.listen( port ,() =>{
    console.log(`Escuchando la ruta del servidor en el puerto ${port}`)
})