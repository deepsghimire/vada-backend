const express = require('express');
const Product = require('../models/Product');

let router = express.Router();

router.get('/:id', async (req, res) => {
  let user = Product.findById(req.params.id);
  res.json(user)

})

router.post('/', async (req, res) => {
  let user;
  try {
    user = await Product.create(req.body);
  } catch (err) {
    console.log(err)
    res.json(err)
  }
  res.json(user)
})

router.put('/:id', async (req, res) => {
  await Product.findOneAndUpdate({ _id: req.params.id }, res.body);
  res.json({ message: 'success' })

})


module.exports = router;
