import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <nav>
        <NavLink to="/" activeClassName="active" exact>
          Anasayfa-
        </NavLink>
        <NavLink to="/Secenekler" activeClassName="active">
          Seçenekler-
        </NavLink>
        <NavLink to="/Order" activeClassName="active">
          Sipariş Oluştur
        </NavLink>
      </nav>
    </header>
  );
}
