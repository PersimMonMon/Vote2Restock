import product from '../products/products'

// return items in product in div (must be one div only as React DOM expects one root node per component)
const ProductList = ({handleClick}) => {
    // use key property (react-specific)
    return (
        <div className="product-box">
        {product.map((item) => (
            <div key={item.id} className="product-card">  
                <img className="product-img" src={item.image}></img>
                <p className="product-name">{item.name}</p>
                <p className="product-price">${item.price}</p>
                <button className="vote-button" onClick={() => {handleClick(item.id)}}>Vote</button>
            </div>
        ))}
        </div>
    );
};

export default ProductList;