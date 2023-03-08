import axios from "axios";
import React, { Component } from "react";
import "./get.css"
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>sno</th>
          <th>brandName</th>
          <th>modelName</th>
          <th>price</th>
          <th>launchedYear</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.brandName}</td>
            <td>{user.modelName}</td>
            <td>{user.price}</td>
            <td>{user.launchedYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;