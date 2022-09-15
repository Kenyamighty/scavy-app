import { useState, useEffect } from "react";
import axios from "axios";
import Scavy from "./Scavy";

const API = process.env.REACT_APP_API_URL;
console.log(API)
function Scavydex() {
const [scavydex, setScavydex] = useState([]);

useEffect(() => {
  axios.get(`${API}/scavydex`)
  .then((response) => setScavydex(response.data))
  .catch((e) => console.error("catch", e));
}, []);
  return (
    <div className="Scavy">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Add an item in Scavy</th>
            </tr>
          </thead>
          <section>
            {scavydex.map((scavy, id) => {
              return <Scavy key={id} scavy={scavy} />;
            })}
          </section>
        </table>
      </section>
    </div>
  );
}

export default Scavydex;
