import { Component } from 'react';
import cn from 'classnames';
import './App.scss';

export class App extends Component {
  state = { pressedKey: '' };

  componentDidMount() {
    document.addEventListener('keyup', this.keyWriter);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyWriter);
  }

  keyWriter = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className={cn(
          'App__message',
          {
            'App__message--pressed': pressedKey,
          },
        )}
        >
          {
            pressedKey
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
