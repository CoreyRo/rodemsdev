import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

const App = () => (
  <HashRouter basename="/">
    <Nav />

    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
  </HashRouter>
);

export default App;
