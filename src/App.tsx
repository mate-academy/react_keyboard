/* eslint-disable no-console */
import React from 'react';
import { Child } from './Child';

interface State {
  randomNumber: number;
}

export class App extends React.Component<{}, State> {
  public readonly state: Readonly<State> = {
    randomNumber: 0,
  };

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    console.log(this.state, prevState);
  }

  render() {
    const {
      randomNumber,
    } = this.state;

    return (
      <div className="App">
        {randomNumber > 0.5 && (
          <Child
            y={Math.floor(randomNumber * 100)}
          />
        )}

        <p className="App__message">
          randomNumber is
          {' '}
          {randomNumber}
        </p>

        <button
          type="button"
          onClick={() => {
            this.setState({
              randomNumber: Math.random(),
            });
          }}
        >
          Generate
        </button>
      </div>
    );
  }
}
