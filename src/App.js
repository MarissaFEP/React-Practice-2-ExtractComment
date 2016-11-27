import React from 'react';
import './App.css';

import Comment from './Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />,
      </div>
    );
  }
}

export default App;
