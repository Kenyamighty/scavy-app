import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Scavydex from "./Scavydex";

const API = process.env.REACT_APP_API_URL;

function ScavyEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [scavy, setScavy] = useState({
    name: "",
    category: "",
    description: "",
    isNew: false,
    condition: "",
    location: "",
  });

  const handleTextChange = (event) => {
    setScavy({ ...scavy, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setScavy({ ...Scavydex, isNew: !scavy.isNew });
  };

  useEffect(() => {
    axios
    .put(`${API}/scavydex/${index}`,Scavydex)
    .then((res) => {
      setScavy(res.data)
      navigate(`/scavydex/${index}`)
    })
    .catch((c) => console.warn("catch", c));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={scavy.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={scavy.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={scavy.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isNew">New:</label>
        <input
          id="isNew"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={scavy.isNew}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={scavy.description}
          onChange={handleTextChange}
          placeholder="Describe in detail all physical feature of the item found"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/Scavydex/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default ScavyEditForm;
