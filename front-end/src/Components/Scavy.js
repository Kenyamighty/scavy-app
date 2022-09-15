import React from "react";
import { Link } from "react-router-dom";


function Scavy({ scavy, id }) {
  return (
    <div className="Scavy">
       <Link to={`/scavydex/${id}`}>✏️</Link>
       <span>
        <img src={scavy.image} alt={scavy.name}/>
       </span>
    <tr>
      <td>
        {scavy.isNew ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
          {scavy.name}
      </td>
    </tr>
    </div>
  );
}

export default Scavy;
