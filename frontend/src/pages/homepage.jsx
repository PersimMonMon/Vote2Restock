import ProductList from "../components/ProductList";

const HomePage = () => {
  
  // create function to toggle click
  const handleClick = ({userId}) => {
    console.log('hi');
  };



  // create function to generate userId (store with sessionStorage)

    return (
        <div className="container">
        <div className="main-section">
          <div className="products-container">
            <ProductList handleClick={handleClick}/>
          </div>
        </div>
        <div className="side-section">
          <div className="vote-container"></div>
        </div>
      </div>
    );
};

export default HomePage;