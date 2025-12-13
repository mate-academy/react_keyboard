import React from 'react';
type State = {
  pressed: string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    pressed: '',
  };
  componentDidMount() {
    document.addEventListener('keyup', this.handelKeyUp);
  };
  handelKeyUp = (event: KeyboardEvent) => {
    this.setState({pressed: event.key});
  };

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handelKeyUp);
  };
  
  render () {
    return (
    <div className="App">
    <p className="App__message">{this.state.pressed? `The last pressed key is [${this.state.pressed}]`: 'Nothing was pressed yet'}</p>
  
  </div>
  );
  } 
}

  
  
  
  

