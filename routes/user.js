const express = require('express');


let router = express.Router();

router.get('/', (req, res) => {
  let user = { name: "John" }
  res.json({ user })
})

router.post('/', (req, res) => {
  res.json(req.body)
})


module.exports = router;
