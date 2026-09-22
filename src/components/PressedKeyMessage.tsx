import React from 'react';

type Props = {
  pressedKey: string | null;
};

export class PressedKeyMessage extends React.Component<Props> {
  render(): React.ReactNode {
    const { pressedKey } = this.props;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
