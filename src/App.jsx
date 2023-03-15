import './App.css'
import LogoBanner from './components/Logo';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div>
      <LogoBanner imagen="img/Xcell.png"/>
      <NavBar navClass1="navbar navbar-expand-lg justify-content-center" divClass1="container-fluid" divClass2="collapse navbar-collapse justify-content-center" ulClass1="navbar-nav"/>
      <div>
        <ItemListContainer greeting="HOLA"/>
      </div>
    </div>

  )
}

export default App
