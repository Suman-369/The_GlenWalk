import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Coctails from "./components/Coctails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import ScrollWrapper from "./ScrollWrapper";

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
   <main>
    <Navbar></Navbar>
    <Hero></Hero>
    <Coctails></Coctails>
    <About></About>
    <Art></Art>
    <Menu></Menu>
    <Contact></Contact>
   </main>
  )
}

export default App
