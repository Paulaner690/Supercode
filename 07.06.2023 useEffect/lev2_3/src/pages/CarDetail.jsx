import Header from "../components/Header";
import cars from "../assets/data/Cars";
import { useParams } from "react-router-dom";

const CarDetail = () => {
    const params = useParams()
    
    const carFilter = cars.filter((item) => {
        return item.id.toString() === params.id;
    })
    return ( 
        <>
        <Header />
        <section>
            <h2>{carFilter[0].CarMake}</h2>
            <h2>{carFilter[0].CarYear}</h2>
            <h2>{carFilter[0].carModel}</h2>
        </section>
        </>
     );
}
 
export default CarDetail;