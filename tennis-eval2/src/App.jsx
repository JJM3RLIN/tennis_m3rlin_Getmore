import EnvioGratis from "./components/EnvioGratis";
import Grafico from "./components/Grafico";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Secciones from "./components/Secciones";
import './styles/Footer.css';
import iconoFacebook from './images/icono-facebook.png';
import iconoInstagram from './images/icono-instagram.png';
import iconoPelota from './images/pelota.png';
function App() {
 
  return (
    <div className="App">
     <EnvioGratis />
     <Header />
     <main>
      <Productos />
      <Secciones />
      <Grafico />
     </main>
     <footer>
      <div className="socialMedia-footer">
      <a href="#"> <img src={iconoInstagram} alt="Icono-instagram" /></a>
        <a href="#"><img src={iconoFacebook} alt="Icono-facebook" /></a>
      </div>
      <p>© DEV. All Rights Reserved. <a href="#">Privacy Policy, Terms & Conditions</a></p>
      <img src={iconoPelota} className="icono-pelota" alt="Pelota-icono" aria-hidden="true" />
     </footer>
    </div>
  )
}

export default App
