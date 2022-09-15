import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function ScavyNewForm() {
  const navigate = useNavigate();
  const addToScavydex = (newScavydex) => {
    axios
      .post(`${API}/scavydex`, newScavydex)
      .then(
        () => {
          navigate(`/scavydex`);
        })
      .catch((c) => console.error("catch", c));
  };
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
    setScavy({ ...scavy, isNew: !scavy.isNew });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToScavydex();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={scavy.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Item Found"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          value={scavy.category}
          placeholder="cloths, homegoods, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={scavy.description}
          placeholder="Tell us a bit about the item:"
          onChange={handleTextChange}
        />
        <label htmlFor="condition">Condtion:</label>
        <textarea
          id="condition"
          name="condition"
          value={scavy.condition}
          onChange={handleTextChange}
          placeholder="What's the items condition?"
        />
         <label htmlFor="location">Location:</label>
        <textarea
          id="location"
          name="location"
          value={scavy.location}
          onChange={handleTextChange}
          placeholder="Where can the item be found?"
        />
           <label htmlFor="isNew">New:</label>
        <input
          id="isNew"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={scavy.isNew}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ScavyNewForm;
