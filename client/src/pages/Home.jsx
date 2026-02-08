import ExclusiveOffers from "../components/ExclusiveOffers"
import FeaturedDestination from "../components/FeaturedDestination"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonials />
    </>
  )
}

export default Home