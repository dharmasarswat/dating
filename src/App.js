import { BrowserRouter , Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dating" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
