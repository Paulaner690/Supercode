import Header from "../components/Header";
import cars from "../assets/data/Cars";
import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <Header />
        <section className="grid">
        {cars.map((item, index) => {
            return(
            <div className="grid-item" key={index}>
                <h3>{item.CarMake}</h3>
                <NavLink to={`/cardetail/${item.id}`}>Read more</NavLink>
            </div>
            )
        })}
        </section>
        </>
     );
}
 
export default Home;