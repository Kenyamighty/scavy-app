const CheckName = (req, res, next) => {
     if (req.body.name){
          console.log("name is confirmed")
          next()
     } else {
          res.status(400).json({error:"name is needed"});
     }
     
   };
   
   module.exports = { CheckName };