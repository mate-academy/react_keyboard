import { Component, ReactNode } from 'react';

export class App extends Component {
  state: Readonly<{ key?: string }> = {
    key: undefined,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        key: event.key,
      });
    });

    return (
      document.removeEventListener('keyup', (event: KeyboardEvent) => {
        this.setState({
          key: event.key,
        });
      })
    );
  }

  render(): ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.key
              ? `The last pressed key is [${this.state.key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
