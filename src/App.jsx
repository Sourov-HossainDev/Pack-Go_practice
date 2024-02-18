import Banar from "./Component/Banar/Banar"
import Counter from "./Component/Counter/Counter"
import Destination from "./Component/Destination/Destination"
import Explore from "./Component/Explore/Explore"
import Futter from "./Component/FuterPart/Futter"
import Navber from "./Component/Navber/Navber"
import Popular from "./Component/PopularDestination/Popular"
import Subcribe from "./Component/Subcribe/Subcribe"
import Testimonial from "./Component/Testimonial/Testimonial"
import Travel from "./Component/Travel/Travel"


function App() {
  
  return (
    <>
      <Navber></Navber>
      <Banar></Banar>
      <Travel></Travel>
      <Popular></Popular>
      <Counter></Counter>
      <Destination></Destination>
      <Explore></Explore>
      <Testimonial></Testimonial>
      <Subcribe></Subcribe>
      <Futter></Futter>
    </>
  )
}

export default App
