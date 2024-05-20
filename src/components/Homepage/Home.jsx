import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <h2>Teknolojik Yemekler</h2>
        <h1>
          <span>KOD ACIKTIRIR</span>
          <span>PİZZA, DOYURUR</span>
        </h1>
        <NavLink to="/order">
          <div>
            <Button color="warning" className="main-btn">
              ACIKTIM
            </Button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
