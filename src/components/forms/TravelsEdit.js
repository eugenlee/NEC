import React, { Component } from 'react';
import axios from 'axios';
import { tokenConfig } from '../../actions/authAction';
import store from '../../store';

export default class TravelsEdit extends Component {
  constructor(props) {
    super(props);

    this.onChangeTravel = this.onChangeTravel.bind(this);
    this.onChangeContinent = this.onChangeContinent.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTravel = this.deleteTravel.bind(this);

    this.state = {
      _id: '',
      continent: '',
      image: '',
      city: '',
      country: '',
      link: '',
      travels: [],
    }
  }

  componentDidMount() {
    axios.get('https://nec-mongodb.herokuapp.com/travels/')
      .then(response => {
          this.setState({
            travels: response.data.map(travel => travel.city),
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTravel(e) {
    const bebo = e.target.value;
    axios.get('https://nec-mongodb.herokuapp.com/travels/')
    .then(response => {
        const tendies = response.data.filter(travel => travel.city === bebo);
        this.setState({
            _id: tendies[0]['_id'],
            continent: tendies[0]['continent'],
            image: tendies[0]['image'],
            city: tendies[0]['city'],
            country: tendies[0]['country'],
            link: tendies[0]['link'],
          })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeContinent(e) {
    this.setState({
      continent: e.target.value
    })
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const travel = {
      continent: this.state.continent,
      image: this.state.image,
      city: this.state.city,
      country: this.state.country,
      link: this.state.link,
    }

    console.log(travel);

    axios.post('https://nec-mongodb.herokuapp.com/travels/update/' + this.state._id, travel, tokenConfig(store.getState))
      .then(res => {
        console.log(res.data)
        alert('Travel Edited!')
      })
      .catch(err => alert(err));

  }

  deleteTravel() {

    axios.delete('https://nec-mongodb.herokuapp.com/travels/' + this.state._id, tokenConfig(store.getState))
      .then(res => {
        console.log(res.data)
        alert('Travel Deleted!')
      })
      .catch(err => alert(err));
      
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>Update Travels Post</h3>
          </div>
          <div className="col">
            <button style={{ float: "right", padding: 0, border: "none", background: "none"}}>
              <img src={ process.env.PUBLIC_URL + '/assets/basura.png'} style={{ width:"1em" }} alt="delete" onClick={this.deleteTravel}/>
              </button>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
          <label>Travel: </label>
            <select type="text"
                required
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeTravel}>
                <option value="Not Selected">Not Selected</option>
              {
                this.state.travels.map(travel => {
                  return <option 
                    key={travel}
                    value={travel}>{travel}
                    </option>;
                })
              }
            </select>
            <label>Continent: </label>
            <select type="text"
                required
                className="form-control"
                value={this.state.continent}
                onChange={this.onChangeContinent}>
                <option value="Not Selected">Not Selected</option>
                <option value="Asia/Oceania">Asia/Oceania</option>
                <option value="The Americas">The Americas</option>
                <option value="Europe">Europe</option>
                <option value="Africa/Middle East">Africa/Middle East</option>
            </select>
            <label>Country: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="What Country?"
                value={this.state.country}
                onChange={this.onChangeCountry}
                />
            <label>City: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="What City?"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
            <label>Image Path: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Default is /assets/travels/square.png"
                value={this.state.image}
                onChange={this.onChangeImage}
                />
            <label>Link: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Notion link"
                value={this.state.link}
                onChange={this.onChangeLink}
                />      
          </div>
          <div className="form-group">
            <input type="submit" value="Update Travel" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}