const db = require("../db/dbConfig.js");

const getAllScavydex = async () => {
     try {
          const allScavydex = await db.any("SELECT * FROM scavydex");
          return allScavydex;
      } catch (error) {
          return error;
      }
};
//async awaits the response from the database
//so throw a try/catch in the to catch errors

module.exports = { getAllScavydex };

//bringing in the database connection and
//exporting it