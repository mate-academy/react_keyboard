import React from 'react';

export class App extends React.Component<{}, { pressedKey: string }> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}
