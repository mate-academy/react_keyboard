import React from 'react';

type Props = {
  pressedKey: string;
};

export class Message extends React.Component<Props> {
  render() {
    const { pressedKey } = this.props;

    return (
      <p className="App__message">
        {pressedKey === 'Nothing was pressed yet'
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    );
  }
}
