const express = require("express");
const router = express.Router();
const connection = require("../database");

function completePayment() {
  return true;
}

router.post("/", async (req, res) => {
  console.log(req.body);
  var done = completePayment();
  var sql = `insert into yoga.userData values ('${req.body.firstName}', '${req.body.lastName}' , '${req.body.mobile}' , ${req.body.age}, '${req.body.address}', '${req.body.city}', '${req.body.state}', '${req.body.zip}', ${req.body.batchNo})`;
  console.log(sql);
  connection.query(sql, function (err, result) {
    console.log(err);
    if (err) res.status(400).send("Failed");
    else res.send("User added successfully");
  });
});

module.exports = router;
