import product from '../products/products'

// return items in product in div (must be one div only as React DOM expects one root node per component)
const ProductList = () => {
    // use key property (react-specific)
    return (
        <div className="product-box">
        {product.map((item) => (
            <div key={item.id} className="product-card">  
                <img className="product-img" src={item.image}></img>
                <p class="product-name">{item.name}</p>
                <p class="product-price">${item.price}</p>
                <button class="vote-button">Vote</button>
            </div>
        ))}
        </div>
    );
};

export default ProductList;