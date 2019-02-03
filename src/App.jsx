import React, { Component } from 'react';



class App extends Component {

  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    let date = new Date();
    let today = date.getMonth()+1 + "/" + date.getDate() 
                + "/" + date.getFullYear() + " " + date.getHours() 
                + ":" + date.getMinutes() + ":" + date.getSeconds();

    this.state = {
      chirp: "Enter Chirp Here",
      user: "Charlie ",
      date: today,
    };
  }

  //handle event for setting the text in state
  handleInputChange(e) {
    this.setState({ chirp: e.target.value})
}

  postChirp = (postContent, name, date) => {

    postContent = this.state.chirp;
    name = this.state.user;
    date = this.state.date;
   
    let containerDiv = document.getElementsByClassName("container")[0];
    let mediaDiv = document.createElement("div");
    mediaDiv.classList.add("media-body");
    containerDiv.classList.add("border");

    mediaDiv.classList.add("border-primary", "border");

    let postH = document.createElement('h4');
    postH.classList.add("media-heading");
    let post = document.createTextNode(name);
    postH.appendChild(post);

    let smallI = document.createElement('small');
    let smallI2 = document.createElement('i');
    let dateA = document.createTextNode(date);

    smallI2.appendChild(dateA);
    smallI.appendChild(smallI2);

    
    containerDiv.appendChild(mediaDiv);
    mediaDiv.appendChild(postH);
    postH.appendChild(smallI);

    let par = document.createElement('p');
    let parT = document.createTextNode(postContent);

    par.appendChild(parT);

    mediaDiv.appendChild(par);

  }

componentDidMount() {

  this.postChirp();
  this.postChirp();

}

  render() {

    return (

      <div className="App">


          <div class="form-group">
            <label for="chirp" class="text-center align-middle"></label>
            <textarea class="form-control" rows="5" id="chirp"
              placeholder="Enter Chirp Here"
              onChange={this.handleInputChange}></textarea>
          </div>

          <button class="btn btn-primary" onClick={this.postChirp.bind(this)}>Post Chirp</button>
        </div>
        
        );
      }
    }
    
    export default App;
