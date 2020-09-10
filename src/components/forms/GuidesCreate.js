import React, { Component } from 'react';
import axios from 'axios';

export default class TravelsCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeImgLink = this.onChangeImgLink.bind(this);
    this.onChangeFirstText = this.onChangeFirstText.bind(this);
    this.onChangeArticleLink = this.onChangeArticleLink.bind(this);
    this.onChangeSecondText = this.onChangeSecondText.bind(this);
    this.onChangeSpanBody = this.onChangeSpanBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      imgLink: '',
      firstText: '',
      articleLink: '',
      secondText: '',
      spanBody: '',
    }
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

    axios.post('http://localhost:5000/guides/add', guide)
      .then(res => console.log(res.data));

    this.setState({
        imgLink: '',
        firstText: '',
        articleLink: '',
        secondText: '',
        spanBody: '',
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Create New Guides Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
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
            <input type="submit" value="Create Travel" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}