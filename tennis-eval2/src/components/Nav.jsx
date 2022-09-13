import '../styles/Navegacion.css'
import icono from '../images/icono-hombreRaqueta.png'
import arrow from '../images/arrow.png';
const Nav = () => {
  return (
    <nav className='nav-header'>
        <button className='btn-producto' type="button">
          Productos
          <img src={arrow} alt='arrow-nav-despegable'/>
          </button>
        <img src={icono} alt='icono-nav' className='icono-nav' aria-hidden="true" />
        <a href='#'>Contacto</a>
    </nav>
  )
}

export default Nav