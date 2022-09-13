import Producto from './Producto';
import '../styles/Productos.css';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';


const Productos = () => {
    //Creando un arreglo de objetos con la info de cada producto
    const PRODUCTOS = [
        {
            id:1,
            imagen: p1,
            nombre: 'Wilson Championship Extra Duty Tennis Balls, 3-pk',
            precio: '$22.09'
        },
        {
            id:2,
            imagen: p2,
            nombre: 'Wilson Starter 3 Balls',
            precio: '$24.69'
        },
        {
            id:3,
            imagen: p3,
            nombre: 'Wilson Tour Slam Lite Tennis Racquet',
            precio: '$24.95'
        }
    ]
  return (
    <section className='productos'>
        <Producto productos={PRODUCTOS} />
        <a href='#' className='enlace'>Ver todos</a>
    </section>
  )
}

export default Productos