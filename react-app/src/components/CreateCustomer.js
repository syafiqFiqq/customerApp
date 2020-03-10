import React, { Component } from "react";
import axios from "axios";

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerAge = this.onChangeCustomerAge.bind(this);
    this.onChangeCustomerSex = this.onChangeCustomerSex.bind(this);
    this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      customerName: "",
      customerAge: 1,
      customerSex: "",
      customerAddress: ""
    };
  }

  onChangeCustomerName(e) {
    this.setState({
      customerName: e.target.value
    });
  }

  onChangeCustomerAge(e) {
    this.setState({
      customerAge: e.target.value
    });
  }

  onChangeCustomerSex(e) {
    this.setState({
      customerSex: e.target.value
    });
  }

  onChangeCustomerAddress(e) {
    this.setState({
      customerAddress: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Customer Name: ${this.state.customerName}`);
    console.log(`Customer Age: ${this.state.customerAge}`);
    console.log(`Customer Sex: ${this.state.customerSex}`);
    console.log(`Customer Address: ${this.state.customerAddress}`);

    const newCustomer = {
      customerName: this.state.customerName,
      customerAge: this.state.customerAge,
      customerSex: this.state.customerSex,
      customerAddress: this.state.customerAddress
    };

    axios
      .post("http://localhost:5000/customers/add", newCustomer)
      .then(res => console.log(res.data));
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Customer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Customer Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.customerName}
              onChange={this.onChangeCustomerName}
            />
          </div>
          <div className="form-group">
            <label>Customer Age: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.customerAge}
              onChange={this.onChangeCustomerAge}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexOptions"
                id="priorityMale"
                value="Male"
                checked={this.state.customerSex === "Male"}
                onChange={this.onChangeCustomerSex}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexOptions"
                id="priorityFemale"
                value="Female"
                checked={this.state.customerSex === "Female"}
                onChange={this.onChangeCustomerSex}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Customer Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.customerAddress}
              onChange={this.onChangeCustomerAddress}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
