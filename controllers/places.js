const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.post('/', (req, res) => {
    res.redirect('POST /places')
})

router.get('/places/new', (req, res) => {
    res.send('GET /places/new'
    )
})

router.get('/places/:id', (req, res) => {
    res.send('GET /places/:id')
})

module.exports = router