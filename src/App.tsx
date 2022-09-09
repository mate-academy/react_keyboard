import { Component } from 'react';
import classNames from 'classnames';

type State = {
  key: string;
  isKeyDown: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
    isKeyDown: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const eventKey = event.key === ' '
      ? 'Space'
      : event.key;

    this.setState({ key: eventKey, isKeyDown: false });
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event) {
      this.setState({ isKeyDown: true });
    }
  };

  render() {
    const { key, isKeyDown } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? (
            <>
              The last pressed key is
              <span
                className={classNames(
                  'App__message-key',
                  {
                    'App__message-key--keydown': isKeyDown,
                  },
                )}
              >
                {key}
              </span>
            </>
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
