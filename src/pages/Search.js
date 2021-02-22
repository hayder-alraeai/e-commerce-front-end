import ProductCard2 from '../components/ProductCard2'
import '../styles/Search.css'
const Search = ({searchedItems, handleAddToCart }) => {

    return(
        <div className="search-display-products-body">
        {/* <p>this is the display component!</p> */}
        {console.log(searchedItems)}
        <div className="search-display-products">
            {searchedItems.length > 0  ? searchedItems.map(item => {
                    return(
                        <div className="search-child" key={item.id}>
                            {/* <ProductCard obj={item} handleAddToCart={handleAddToCart}  /> */}
                            <ProductCard2 obj={item}  handleAddToCart={handleAddToCart} />
                        </div>    
                    )
                }) : 
            <div>No items found</div>
            }
        </div>
    </div>
    )
}
export default Search