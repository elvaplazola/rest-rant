const router = require('express').Router()
const places = require('../models/places.js')

// GET /places 
router.get('/', (req, res) => {
    res.render('places/index', {places})
  })
  

// POST /places
router.post ('/', (req, res) => {
    if(!req.body.pic) {
        // Default img not provided
    req.body.pic = 'http://placekitten.com/400/400'
    }
    if(!req.body.city) {
        req.body.city ='Any town'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
}
)

// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
  })

//   show route
  router.get('/:id', (req,res) => {
    let id = Number(req.params.id)
    if (is NaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render({place: places[id]})
    }
  })

  module.exports = router
