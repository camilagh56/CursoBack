const express = require('express');
const app = express();
const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    hola: 'hola 2',
    price: '10500',
  });
});

module.exports = router;