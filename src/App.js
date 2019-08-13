import React from 'react';
import Header from './Header';
import Image from './Image';
import Counter from './Counter';

window.localStorage.setItem('count', 0);

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid" style={{height: "100%", width: "100%"}}>
        <Header/>
        <Image/>
        <Counter/>
      </div>
    );
  }
}

export default App;
