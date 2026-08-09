import React from 'react';

type Props = {
  name: string
}

export class App extends React.Component<Props> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key
    })
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  render() {
    return (
      <div className = "App" >
        <p className="App__message">{this.state.pressedKey === 'Nothing was pressed yet'
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${this.state.pressedKey}]`}</p>
      </div >
    )
  }
};

{/* <p className="App__message">The last pressed key is [Enter]</p> */}
