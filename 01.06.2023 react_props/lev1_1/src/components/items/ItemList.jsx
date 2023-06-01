import Item from "./Item";

const ItemList = () => {
    const itemArray = [
        {
            toDoEins: "Bug Groecery",
            toDoZwei: "Send Email",
            toDoDrei: "Finish Assignment",
            toDoVier: "Write Blog"
        },
        {
            toDoEins: "Bug Groecery",
            toDoZwei: "Send Email",
            toDoDrei: "Finish Assignment",
            toDoVier: "Write Blog"
        },
        {
            toDoEins: "Bug Groecery",
            toDoZwei: "Send Email",
            toDoDrei: "Finish Assignment",
            toDoVier: "Write Blog"
        },
    ]
    return ( 
        <>
        <h1>My To-Do's</h1>
        <ul>
        {itemArray.map((item, index) => <Item article={item} key={index} />)}
        </ul>
        </>
     );
}
 
export default ItemList;