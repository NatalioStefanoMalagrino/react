import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import LoginContainer from "./components/LoginContainer/LoginContainer";

function App() {
  return (
    <div className="App">
      <Layout>
      <Header/>
      <LoginContainer/>
      <ItemListContainer usuario="Maria" apellido="Lopez" edad="22"/>
      </Layout>
    </div>
  )
}

export default App;

//<Navbar /> === Navbar()