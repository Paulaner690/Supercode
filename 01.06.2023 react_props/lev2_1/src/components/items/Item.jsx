import ItemListCss from "./Item.css"

const Item = (props) => {
    return ( 
        <div>
            <img src={props.article.img} alt="Product" />
            <h3>{props.article.title}</h3>
            <h3>{props.article.price}$</h3>
            <button>BUY NOW</button>
        </div>
     );
}
 
export default Item;