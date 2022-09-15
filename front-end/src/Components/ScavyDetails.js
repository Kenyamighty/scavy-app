import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";



function ScavyDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [scavy, setScavy] = useState([]);
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get(`${API}/scavydex/${id}`)
    .then((res) => {
      setScavy(res.data.payload);
    })
    .catch(() => {
      navigate("/not-found");
    })
  }, [id, navigate, API]);

  const deleteScavy = () => {
    axios.delete(`${API}/scavydex/${id}`)
    .then(() => {
      navigate(`/scavydex`)
    })
    .catch((c) => console.error('catch', c))
  }

  const handleDelete = () => {
    deleteScavy()
  };
  return (
    <article className="Scavy">
      <h1>Scavy</h1>
      <h3>
        {scavy.isNew ? <span>⭐️</span> : null} {scavy.name}
      </h3>
      <h6>{scavy.category}</h6>
      <p>{scavy.description}</p>
      <p>{scavy.condition}</p>
      <p>{scavy.location}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/scavydex`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/scavydex/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default ScavyDetails;
