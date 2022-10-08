import { Link } from "react-router-dom";

// images
import logo from "../logo.svg";

// styles
import "../App.css";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Inmersoft Referencies</h1>
      <Link className="App-link" to="/images">
        Go to /images
      </Link>
    </header>
  </div>
);

export default Home;
