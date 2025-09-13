import ProductList from "../components/ProductList";

const HomePage = () => {
    return (
        <div className="container">
        <div className="main-section">
          <div class="products-container">
            <ProductList />
          </div>
        </div>
        <div className="side-section">
          <div class="vote-container"></div>
        </div>
      </div>
    );
};


export default HomePage;