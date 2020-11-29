import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { color as c } from './Utils/CssVariables';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import useWindowWidth from './Hooks/useWindowWidth';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const GlobalStyles = createGlobalStyle`
  a:not(.nav-link) {
    font-weight: bold;
    color: ${c.BLUE};
    text-decoration: underline;
    &:hover {
      color: ${c.DARKER};
      background-color: ${c.YELLOW};
    }
  }
`;

const App = () => (
  <HashRouter basename="/" data-testid="hash-router">
    <GlobalStyles />
    <Nav windowWidth={useWindowWidth()} />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </HashRouter>
);

export default App;
