import React from 'react';

export class App extends React.PureComponent {
  state = {
    keyHandler: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyBoardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyBoardClick);
  }

  onKeyBoardClick = (event: KeyboardEvent): void => {
    this.setState({ keyHandler: event.key });
  };

  render() {
    const { keyHandler } = this.state;

    return (
      <div className="App">
        {keyHandler
          ? (<p className="App__message">{`The last pressed key is [${keyHandler}]`}</p>)
          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}
