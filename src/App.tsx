/* eslint-disable react/sort-comp */
/* eslint-disable max-len */
import { Component } from 'react';

type State = {
  keyPressed: string,
  notPressed: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: '',
    notPressed: true,
  };

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ notPressed: false });

    this.setState({ keyPressed: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  render() {
    const { keyPressed, notPressed } = this.state;

    return (
      <div className="App">
        {notPressed
          ? <p className="App__message">Nothing pressed yet</p>
          : (
            <p className="App__message">
              The last pressed key is [
              {keyPressed}
              ]
            </p>
          )}
      </div>
    );
  }
}
