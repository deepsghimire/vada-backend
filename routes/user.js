const express = require('express');
const User = require('../models/User');

let router = express.Router();

router.get('/:id', (req, res) => {
  let { id } = req.params;
  let user = User.findById({ _id: id })
})

router.post('/', (req, res) => {
  let
})


module.exports = router;
