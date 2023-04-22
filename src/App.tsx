import React from 'react';
import { KeyPressed } from './Component';
import './App.scss';

type State = {
  click: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    click: true,
  };

  render() {
    const { click } = this.state;
    const clickDestroy = () => {
      this.setState({ click: false });
    };

    const clickCreate = () => {
      this.setState({ click: true });
    };

    return (
      <>
        <div className="App">
          <p className="App__message">
            { click && <KeyPressed /> }
          </p>
        </div>
        <button type="submit" onClick={clickDestroy}>Destroy element</button>
        <button type="submit" onClick={clickCreate}>Create element</button>
      </>
    );
  }
}

export default App;
