const products = [
    { name: 'Sofa', price: '$100', contact: 'Abhinav(123) 456-7890', room: '640', imgSrc: 'img1.jpg' },
    { name: 'Refridgerator', price: '$250', contact: 'Vignesh (987) 654-3210', room: '202', imgSrc: 'img2.jpg.avif' },
    // { name: 'Samsung HD TV', price: '$180', contact: 'Sneha (555) 123-4567', room: '303', imgSrc: 'tv.jpg.webp' },
  ];
  
  function createProductItem(product) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
  
    const img = document.createElement('img');
    img.className = 'product-img';
    img.src = product.imgSrc;
    img.alt = product.name;
  
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';
  
    const productName = document.createElement('div');
    productName.className = 'product-name';
    productName.textContent = product.name;
  
    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.textContent = product.price;
  
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.textContent = `Contact: ${product.contact} | Room: ${product.room}`;
  
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(contactInfo);
  
    productItem.appendChild(img);
    productItem.appendChild(productDetails);
  
    return productItem;
  }
  
  function renderProducts() {
    const container = document.createElement('div');
    container.className = 'container';
  
    const productContainer = document.createElement('div');
    productContainer.className = 'product';
  
    products.forEach(product => {
      const productItem = createProductItem(product);
      productContainer.appendChild(productItem);
    });
  
    container.appendChild(productContainer);
  
    document.body.appendChild(container);
  }
  
  // Call this function when you want to display the products
  renderProducts();
  