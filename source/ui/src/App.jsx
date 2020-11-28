import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import useWindowWidth from './Hooks/useWindowWidth';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => (
  <HashRouter basename="/" data-testid="hash-router">
    <Nav windowWidth={useWindowWidth()} />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </HashRouter>
);

export default App;
