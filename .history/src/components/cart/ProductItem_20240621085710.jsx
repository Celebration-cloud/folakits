const ProductItem = ({ name, color, size, price, quantity }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src="product-image.jpg" alt={name} style={{ maxWidth: '100px' }} />
      <div>
        <p>{name}</p>
        <p>Color: {color}</p>
        <p>HD Size: {size}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${price * quantity}</p>
      </div>
    </div>
  );
};

