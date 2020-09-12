import React, { Component } from 'react';
import axios from 'axios';

export default class GuidesEdit extends Component {
  constructor(props) {
    super(props);

    this.onChangeGuide = this.onChangeGuide.bind(this);
    this.onChangeImgLink = this.onChangeImgLink.bind(this);
    this.onChangeFirstText = this.onChangeFirstText.bind(this);
    this.onChangeArticleLink = this.onChangeArticleLink.bind(this);
    this.onChangeSecondText = this.onChangeSecondText.bind(this);
    this.onChangeSpanBody = this.onChangeSpanBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      _id: '',
      imgLink: '',
      firstText: '',
      articleLink: '',
      secondText: '',
      spanBody: '',
      guides: []
    }
  }

  componentDidMount() {
    axios.get('https://nec-mongodb.herokuapp.com/guides/')
      .then(response => {
          this.setState({
            guides: response.data.map(guide => guide.secondText),
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeGuide(e) {
    const bebo = e.target.value;
    axios.get('https://nec-mongodb.herokuapp.com/guides/')
    .then(response => {
        const chicken = response.data.filter(guide => guide.secondText === bebo);
        this.setState({
            _id: chicken[0]['_id'],
            imgLink: chicken[0]['imgLink'],
            firstText: chicken[0]['firstText'],
            articleLink: chicken[0]['articleLink'],
            secondText: chicken[0]['secondText'],
            spanBody: chicken[0]['spanBody'],
          })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeImgLink(e) {
    this.setState({
      imgLink: e.target.value
    })
  }

  onChangeFirstText(e) {
    this.setState({
      firstText: e.target.value
    })
  }

  onChangeArticleLink(e) {
    this.setState({
      articleLink: e.target.value
    })
  }

  onChangeSecondText(e) {
    this.setState({
      secondText: e.target.value
    })
  }

  onChangeSpanBody(e) {
    this.setState({
      spanBody: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const guide = {
      imgLink: this.state.imgLink,
      firstText: this.state.firstText,
      articleLink: this.state.articleLink,
      secondText: this.state.secondText,
      spanBody: this.state.spanBody,
    }

    console.log(guide);

    axios.post('https://nec-mongodb.herokuapp.com/guides/update/' + this.state._id, guide)
      .then(res => {
        console.log(res.data)
        alert('Guide Edited!')
      })
      .catch(err => alert(err));

  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Edit Guides Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
          <label>Guide: </label>
            <select type="text"
                required
                className="form-control"
                value={this.state.secondText}
                onChange={this.onChangeGuide}>
                <option value="Not Selected">Not Selected</option>
              {
                this.state.guides.map(guide => {
                  return <option 
                    key={guide}
                    value={guide}>{guide}
                    </option>;
                })
              }
            </select>
            <label>Generic Title </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="One word description"
                value={this.state.firstText}
                onChange={this.onChangeFirstText}
                />
            <label>Specific Title: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="What is the topic of the guide?"
                value={this.state.secondText}
                onChange={this.onChangeSecondText}
                />
            <label>Description: </label>
            <textarea  type="text"
                required
                className="form-control"
                placeholder="Small blurb about article"
                value={this.state.spanBody}
                onChange={this.onChangeSpanBody}
                />  
            <label>Image Path: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Default is /assets/travels/square.png"
                value={this.state.imgLink}
                onChange={this.onChangeImgLink}
                />
            <label>Link: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Notion link"
                value={this.state.articleLink}
                onChange={this.onChangeArticleLink}
                />        
          </div>
          <div className="form-group">
            <input type="submit" value="Update Guide" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}