import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Customer = props => (
  <tr>
    <td>{props.customer.customerName}</td>
    <td>{props.customer.customerAge}</td>
    <td>{props.customer.customerSex}</td>
    <td>{props.customer.customerAddress}</td>
    <td>
      <Link to={"/edit/" + props.customer._id}>
        <button className="btn btn-primary">Edit</button>
      </Link>
      <button
        onClick={() => props.onDelete(props.customer._id)}
        className="btn btn-danger ml-1"
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers")
      .then(response => {
        this.setState({ customers: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onDelete = id => {
    axios
      .delete("http://localhost:5000/customers/delete/" + id)
      .then(res => {
        axios
          .get("http://localhost:5000/customers")
          .then(response => {
            this.setState({ customers: response.data });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  customerList() {
    return this.state.customers.map((currentCustomer, i) => {
      return (
        <Customer customer={currentCustomer} onDelete={this.onDelete} key={i} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Customer List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.customerList()}</tbody>
        </table>
      </div>
    );
  }
}
