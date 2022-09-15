import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/scavydex">Scavy App</Link>
      </h1>
      <button>
        <Link to="/scavydex/new">New Scavy</Link>
      </button>
    </nav>
  );
}
