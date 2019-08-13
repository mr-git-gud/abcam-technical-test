import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 1,
    }
  }

  componentDidUpdate(){
    // this.setState((state) => ({count: state.count+1}))
  }

  render(){
    //let prevCount = parseInt(window.localStorage.getItem('count'));
    //let newCount = prevCount++;
    //window.localStorage.setItem('count', newCount);

    //Maybe could have used redux-persist ???
    
    return (
      <div>You have clicked this page {this.state.count} times</div>
    )
  }

}

export default Counter;
