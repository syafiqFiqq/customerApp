const express = require("express");
const router = express.Router();

const Customer = require("../models/Customer");

router.get("/message", (req, res) => {
  res.send({ message: "Hello from Express Mongo backend." });
});

router.get("/customers", function(req, res) {
  Customer.find(function(err, customers) {
    if (err) {
      console.log(err);
    } else {
      res.json(customers);
    }
  });
});

router.get("/customers/:id", function(req, res) {
  const id = req.params.id;
  Customer.findById(id, function(err, customer) {
    res.json(customer);
  });
});

router.post("/customers/add", function(req, res) {
  const customer = new Customer(req.body);
  customer
    .save()
    .then(customer => {
      res.status(200).json({ customer: "customer added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new customer failed");
    });
});

router.delete("/customers/delete/:id", function(req, res) {
  Customer.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("deleted successfully!");
  });
});

router.post("/customers/update/:id", function(req, res) {
  Customer.findById(req.params.id, function(err, customer) {
    if (!customer) res.status(404).send("data is not found");
    else {
      customer.customerName = req.body.customerName;
      customer.customerAge = req.body.customerAge;
      customer.customerSex = req.body.customerSex;
      customer.customerAddress = req.body.customerAddress;

      customer
        .save()
        .then(customer => {
          res.json("Customer updated!");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

module.exports = router;
