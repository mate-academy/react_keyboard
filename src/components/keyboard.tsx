import React from 'react';

type Props = {
  pressedKey: string;
};

export class Keyboard extends React.Component<Props> {
  render() {
    const { pressedKey } = this.props;

    return (
      <div className="Keyboard">
        <p>Last pressed key: {pressedKey}</p>
      </div>
    );
  }
}
