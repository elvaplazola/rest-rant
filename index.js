// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})
app.listen(app.listen(process.env.PORT))

// Adding links to index
let placesFormatted = data.places.map((place, index) => {
    return (
        <div className = "col-sm-6">
            <h2>
                <a href = {'/places/${index}'}>
                    {place.name} 
                </a>
            </h2>
            <p className="text-center">
                {places.cuisines}
            </p>
            <img src={place.pic} alt={place.name}/>
                <p className="text-center">
                Located in {place.city}, {place.state}
                </p>
        </div>
    )
});