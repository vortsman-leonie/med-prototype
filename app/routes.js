const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
router.post('/permits-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let permits = req.session.data['permits']
  if (permits === 'false') {
    res.redirect('/permits-upload')
  } else {
    res.redirect('/review')
  }
})

// Branching
router.post('/infectious-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let infectious = req.session.data['infectious']

  if (infectious === 'false') {
    res.redirect('/description-of-goods-non-infectious')
  } else {
    res.redirect('/description-of-goods-infectious')
  }
})
