import './App.css'

// Coponents Import...................
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/Menu'
import Technologies from './components/Technologies'


export default function App() {
  return (
    <>
      <Nav />
      <Menu />
      <Header />
      <About />
      <Experience />
      <Technologies />
      <Project />
      <Testimonials />
      <Contact />

    </>
  )
}
