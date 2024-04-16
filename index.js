const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola usuaria bonita');
});

app.get('/hola-ruta', (req, res) => {
  res.send('eyyy, que tal');
});

routerApi(app);

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('mi port ' + port);
});
