const searchInput = document.getElementById('search');
const productGrid = document.getElementById('product-grid');

searchInput.addEventListener('input', (event) => {
  const userInput = event.target.value;
  const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (pattern.test(userInput)) {
    event.target.style.backgroundColor = 'red';
  } else {
    event.target.style.backgroundColor = '';
  }
});

fetch('/products')
  .then(response => response.json())
  .then(products => {
    const productItems = products.map(product => `
      <div class="product-item">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
      </div>
    `).join('');
    productGrid.innerHTML = productItems;
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
