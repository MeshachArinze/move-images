import React from 'react';
import ReactDOM from 'react-dom';

import "../src/index.css";

const testData = [
    {name: "Meshach Arinze", image: "/room/product-1.jpeg", Dept: "Pet Engr", level: "400"}
]

const CardList = (props) => {
    return(
        <div>
        {props.profiles
        .map(profile => <Card {...profile} />)}
    </div>
    )
};

class Form extends React.Component {
    userNameInput = React.createRef();
      handleSubmit = (event) => {
          event.preventDefault();
          console.log(

            this.userNameInput.current.value
          )
      }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter username" ref={this.userNameInput} required />
                
                <button>Add Card</button>
            </form>
        );
    }
  }
  

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="card-holder">
                <h2>simple profile card</h2>
                <div className="card-div">
                    <div className="card-img">
                        <img src={profile.image} width="100" alt=""></img>
                    </div>
                    <div className="card-box">
                        <div className="card-name">
                            <div>Meshach Arinze <ins>01</ins></div>
                            <p>Nigeria</p>
                        </div>
                    </div>
                    <div className="card-line"></div>
                    <div className="card-footer">
                        <div className="github-acc">
                            <p>github.com/Meshach Arinze</p>
                        </div>
                    </div>
                </div>
            </div>
            
        ); 
    }
} 

class App extends React.Component {
    state = {
        profiles: testData,
    };
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <CardList profiles={testData}/>
                <Form />
            </div>
            
        ); 
    }
}

ReactDOM.render(
    <React.StrictMode>
      <div>
        <App title="Profile Card" />
        
      </div>
    </React.StrictMode>,
    document.getElementById('ekene')
);


 