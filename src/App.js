import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screen/Home";
import AboutUs from "./screen/AboutUs";
import Contacts from "./screen/Contacts";
import Footer from "./components/Footer";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/cocktail/:id" component={SingleCocktailScreen} />
        <Route path="*" component={ErrorScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
