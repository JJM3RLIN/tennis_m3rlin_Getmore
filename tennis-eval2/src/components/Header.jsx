import Nav from './Nav'
import '../styles/Header.css'
const Header = () => {
  return (
    <header>
      <Nav />
      <div className='contenido'>
        <h1>EL MEJOR DEPORTE</h1>
        <p>Lorem Ipsum is simply dummy text 
          of the printing and typesetting industry. </p>
          <a href="#" className="enlace">Compar ahora</a>
      </div>
    </header>
  )
}

export default Header