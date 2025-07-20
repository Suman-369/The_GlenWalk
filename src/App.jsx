import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Coctails from "./components/Coctails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import ScrollWrapper from "./ScrollWrapper"


gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollWrapper>
        <main>
          <section data-scroll-section><Hero /></section>
          <section data-scroll-section><Coctails /></section>
          <section data-scroll-section><About /></section>
          <section data-scroll-section><Art /></section>
          <section data-scroll-section><Menu /></section>
          <section data-scroll-section><Contact /></section>
        </main>
      </ScrollWrapper>
    </>
  )
}
export default App

