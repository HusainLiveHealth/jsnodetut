const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Declare products array outside of GET and POST API endpoint functions
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 30.99 }
];

// Define GET API endpoint for retrieving product data
app.get('/products', (req, res) => {
  // Retrieve product ID from query parameters
  const productId = req.query.id;

  // Check if productId is provided in the query
  if (productId) {
    // Find product in products array based on ID
    const product = products.find(p => p.id === parseInt(productId));

    // Send product data as JSON response
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } else {
    // Send all product data as JSON response
    res.json(products);
  }
})

// Define POST API endpoint for adding a new product
app.post('/products', (req, res) => {
  // Retrieve product data from request body
  const { name, price } = req.body;

  // Generate new product ID (in this example, we are simply incrementing the last product ID by 1)
  const lastProductId = products[products.length - 1].id;
  const newProductId = lastProductId + 1;

  // Create new product object and add to products array
  const newProduct = { id: newProductId, name, price };
  products.push(newProduct);

  // Send newly created product as JSON response
  res.json(newProduct);
});

// Start server and listen on specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
