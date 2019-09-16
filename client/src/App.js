import React from 'react';
import 'antd/dist/antd.css'

const title = (text) => {

}

const note = (text) => {

}

const fullNote = (note) => {

}

const fullJournal = () => {
  
}

const App = () => {
  const journal = [{
    user : {username: "justin", pin: 8989},
    regitser: {name: "Justin Parrish", age: 19, 
                state: "GA", email:"justin@gmail.com",
                username:"justin", pin: 8989} ,
    Note: [
          {title: "my login", note: "username is justin and pin is 0000"}
          ]
  }]
  return (
    <div>
      <h1>Journal</h1>

    </div>
  );
}

export default App;
