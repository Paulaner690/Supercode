const Item = (props) => {
    return ( 
        <div>
            <li>{props.article.toDoEins}</li>
            <li>{props.article.toDoZwei}</li>
            <li>{props.article.toDoDrei}</li>
            <li>{props.article.toDoVier}</li>
            <br />
        </div>
     );
}
 
export default Item;