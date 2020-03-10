const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerName: {
    type: String
  },
  customerAge: {
    type: Number
  },
  customerSex: {
    type: String
  },
  customerAddress: {
    type: String
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
