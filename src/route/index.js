const express = require('express')
const router = express.Router()

router.get('/selector', function (req, res) {
  res.render('selector', {
    layout: 'selector'
  })
})

router.get('/', function (req, res) {
  res.render('index', {
  })
})

module.exports = router
