import React, { Component } from 'react';
import classNames from 'classnames';

type AppState = {
  latestPressedKey: string | null;
};

export class App extends Component<{}, Readonly<AppState>> {
  state: Readonly<AppState> = {
    latestPressedKey: null,
  };

  private readonly handleDocumentKeyUp = (keyboardEvent: KeyboardEvent) => {
    this.setState({ latestPressedKey: keyboardEvent.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render() {
    const { latestPressedKey } = this.state;

    const applicationContainerClassName = classNames('App');

    const messageClassName = classNames('App__message', {
      'App__message--empty': latestPressedKey === null,
      'App__message--withKey': latestPressedKey !== null,
    });

    return (
      <div className={applicationContainerClassName}>
        {latestPressedKey === null ? (
          <p className={messageClassName}>Nothing was pressed yet</p>
        ) : (
          <p className={messageClassName}>
            The last pressed key is [{latestPressedKey}]
          </p>
        )}
      </div>
    );
  }
}
