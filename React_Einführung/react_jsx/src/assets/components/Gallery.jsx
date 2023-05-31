import './Gallery.css'

// Shortcut "sfc" stateless function component!!
const Gallery = () => {
    return ( 
        <section className="gallery">
        <img src="https://unsplash.it/200/200?1" alt="1" />
        <img src="https://unsplash.it/200/200?2" alt="2" />
        <img src="https://unsplash.it/200/200?3" alt="3" />
        <img src="https://unsplash.it/200/200?4" alt="4" />
    </section>
     );
}
 
export default Gallery;