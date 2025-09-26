import product from '../products/products'
import VoteButton from './VoteButton';
import {useState, useEffect} from "react"; 


// return items in product in div (must be one div only as React DOM expects one root node per component)
const ProductList = ({handleClick, choices, total, fetchTotal}) => {

    // use key property (react-specific)
    return (
        <div className="product-box">
        {product.map((item) => (
            <div key={item.id} className="product-card">  
                <img className="product-img" src={item.image}></img>
                <p className="product-name">{item.name}</p>
                <p className="product-price">${item.price}</p>
                <p>Votes: {total[item.id] ?? 0}</p>
                <VoteButton handleClick={handleClick} itemId={item.id} fetchTotal={fetchTotal} choices={choices[item.id] ?? 0}/>  
            </div>
        ))}
        </div>
    );
};
export default ProductList;