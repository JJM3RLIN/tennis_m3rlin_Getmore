import arrow from '../images/arrow.png';
import '../styles/Productos.css';
const Producto = ({productos}) => {
  return (
    <>
        <div className='productos-contenedor '>
            <div className='siguiente-producto '>
                <img src={arrow} alt="arrow-ant" className='ant' />
            </div>
            
        {
            productos.map(producto =>(
                <div key={producto.id} className='producto-card'>
                    <img src={producto.imagen} alt={`Imagen-${producto.nombre}`} />
                    <div className='producto-info'>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio}</p>
                    </div>
                </div>
            ))
           }
           <div className='siguiente-producto'>
                <img src={arrow} alt="arrow-sig" className='sig'/>
            </div>
        </div>
    
    </>
  )
}

export default Producto