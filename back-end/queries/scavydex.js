const db = require("../db/dbConfig.js");

const getAllScavydex = async () => {
     try {
          const allScavydex = await db.any("SELECT * FROM scavy");
          return allScavydex;
      } catch (error) {
          return error;
      }
};
//querying for one Item
const getScavy = async (id) => {
    try {
        const oneItem = await db.one("SELECT * FROM scavy WHERE id=$1", id);
        return oneItem;
    } catch (error) {
        return error;
    }
};

// {"length":94,"name":"error","severity":"ERROR","code":"42601","position":"85","file":"scan.l","line":"1180","routine":"scanner_yyerror"}

//querying to create a item
const createScavy = async (scavy) => {
    const { name, category, description, condition, location, is_new, image } = scavy;
    try {
        const newScavy = await db.one(
            "INSERT INTO scavy (name, category, description, condition, location, is_new, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, category, description, condition, location, is_new, image]
        );
        console.log("scavy", scavy)
        return newScavy;
    } catch (error) {
        return error;
    }
};

//querying to delete a item
const deleteScavy = async (id) => {
    try {
        const deletedscavy = await db.one("DELETE FROM scavy WHERE id = $1 RETURNING *", id);
        return deletedscavy
    } catch (error) {
        return error;
    }
}
// querying to update a item
const updateScavy = async (scavy, id) => {
    try {
        const updatedScavy = await db.one("UPDATE scavy SET name=$1, category=$2, description=$3, condition=$4, location=$5, is_new=$6, image=$6 WHERE id=$7 RETURNING *",
        [scavy.name, scavy.category, scavy.description, scavy.condition, scavy.location, scavy.is_new, scavy.image, id]);
        return updatedScavy;
    } catch (error) {
        return error;
    }
};
//async awaits the response from the database
//so throw a try/catch in the to catch errors

module.exports = { getAllScavydex, getScavy, createScavy, deleteScavy, updateScavy };

//bringing in the database connection and
//exporting it