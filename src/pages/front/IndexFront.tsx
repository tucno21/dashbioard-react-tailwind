import Analytics from "./components/Analytics"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"


const IndexFront = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    )
}

export default IndexFront