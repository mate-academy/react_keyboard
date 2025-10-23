import React, { Component } from 'react';
import classNames from 'classnames';

type PressedKey = {
  pressedKey: string | null;
};

export class App extends Component<{}, PressedKey> {
  state: PressedKey = {
    pressedKey: null,
  };

  handleUp = (e: Event) => {
    const ev = e as KeyboardEvent;

    this.setState({ pressedKey: ev.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleUp);
  }

  render() {
    const { pressedKey } = this.state;

    const containerClass = classNames('App');

    const msgClass = classNames('App__message', {
      'App__message--empty': pressedKey === null,
      'App__message--set': pressedKey !== null,
    });

    return (
      <div className={containerClass}>
        {pressedKey === null ? (
          <p className={msgClass}>Nothing was pressed yet</p>
        ) : (
          <p className={msgClass}>The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
