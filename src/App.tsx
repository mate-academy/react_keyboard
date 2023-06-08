import React from 'react';
import './App.scss';

export class App extends React.Component {
  state = {
    keyPressed: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.event);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.event);
  }

  event = (event: KeyboardEvent) => {
    this.setState({
      keyPressed: event.key,
    });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPressed
              ? (
                <>
                  <span>The last pressed key is</span>
                  <span className="App__key">{keyPressed}</span>
                </>
              )
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
