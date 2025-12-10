import React from 'react';

type Props = {
  pressedKey: string;
};

export class PressedKey extends React.Component<Props> {
  
  render() {
    const { pressedKey } = this.props;

    return (
      <div className="App">
            {
                pressedKey === '' 
                ? (
                <p className="App__message">Nothing was pressed yet</p>
                ) 
                : (
                <p className="App__message">The last pressed key is [{pressedKey}]</p>
                )
            }
      </div>

    );
  }
}
