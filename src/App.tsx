import React, { useRef } from 'react';

type State = {
  pressedKey: string;
}

export class App extends React.Component<State> {
  

  constructor(props) {
    super(props);
    this.state = {
      pressedKey: ''
    };

    this.handleKeyUp = (event: KeyboardEvent) => {
      console.log(event.key);
    }

    this.handleKeyDown = (event: KeyboardEvent) => {
      this.setState({
        pressedKey: event.key
      })
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('keypress', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  render() {

    return(
      <>
        <div className="App"
          onKeyUp={this.handleKeyDown}
        >
              <p className="App__message">{this.state.pressedKey !== '' ? `The last pressed key is [${this.state.pressedKey}]` : 'Nothing was pressed yet'}</p>
        </div>
      </>
    )
  }
}
