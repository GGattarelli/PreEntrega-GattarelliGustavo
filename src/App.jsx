import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const saludo = "Bienvenido/a a nuestra tienda"

  return (
    <ChakraProvider>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ItemListContainer} greeting = {saludo}/>
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
