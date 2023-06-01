import Item from "./Item";
import ItemListCss from "./ItemList.css"

const ItemList = () => {
    const itemArray = [
        {
            img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
            title: "cocooil",
            price: 30,
        },
        {
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
            title: "Polaroid",
            price: 60,
        },
        {
            img: "https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
            title: "Maui Moisture",
            price: 20,
        }
    ]
    return ( 
        <section>
        {itemArray.map((item, index) => <Item article={item} key={index} />)}
        </section>
     );
}
 
export default ItemList;