const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/dark_dining.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/fine_dining.jpg'
      }]
      
    res.render('places/index', {places})
  })
  

// POST /places
router.post ('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places', )
}
)

// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
  })

  module.exports = router