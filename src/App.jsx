import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);

    let date = new Date();
    let today = date.getMonth() + 1 + "/" + date.getDate()
      + "/" + date.getFullYear() + " " + date.getHours()
      + ":" + date.getMinutes() + ":" + date.getSeconds();

    this.state = {
      chirp: "Enter Chirp Here",
      user: "Charlie ",
      date: today,
      chirps: []
    };
  }

  handleInputChange(e) {
    this.setState({ chirp: e.target.value })
  }

  postChirp = () => {
    let chirpContent = this.state.chirp;

    // we want to create an object that represents that shape of a chirp
    // ... so it will have 3 properties, the name, the content & the date.

    let newChirp = {
      name: this.state.user,
      content: chirpContent,
      date: this.state.date,
    }

    // now that we have it, we want to shove it into an array that we are keeping
    // in our state so that we can reference it in the render method

    this.setState({
      ...this.state,
      chirp: '',
      chirps: [...this.state.chirps, newChirp]
    });
  }

  render() {
    return (
      <div className="App">
        <div class="form-group">
          <label for="chirp" class="text-center align-middle"></label>
          <textarea
            class="form-control"
            rows="5"
            id="chirp"
            placeholder="Enter Chirp Here"
            value={this.state.chirp}
            onChange={this.handleInputChange}>
          </textarea>
        </div>
        <button class="btn btn-primary" onClick={this.postChirp}>Post Chirp</button>
        <div class="chirp-list">
          {/* this is where we are going to use JS to list all of the chirps we have in our component's state */}
          {this.state.chirps.map(chirp => {
            // the "map" function looks at each item in an array and returns something.
            // so for this case, we want to look at each "chirp" in the chirps array and
            // display a div with the content inside. This way you dont have to generate
            // a bunch of HTML tags manualy.
            return (

              <div class="media-body border border-primary">
                <h4 class="media-heading"> {chirp.name}: <small><i>{chirp.date}</i></small></h4>
                <p class="chirpP">{chirp.content}</p>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default App;
