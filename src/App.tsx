import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key })
  }
  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className='App__message'>
        {this.state.pressedKey
          ? <p>The last pressed key is [{this.state.pressedKey}]</p>
          : <p>Nothing was pressed yet</p>
        }
      </div>
    )
  }
}
