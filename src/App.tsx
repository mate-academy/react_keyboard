import React from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  // Create a ref for the root div element
  private rootRef: React.RefObject<HTMLDivElement> = React.createRef();

  // Initialize state as a class property
  state: AppState = {
    pressedKey: null,
  };

  // Use arrow function to automatically bind 'this'
  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    // Add the keyup event listener to the root div element using ref
    if (this.rootRef.current) {
      this.rootRef.current.addEventListener('keyup', this.handleKeyUp);
      // Focus the div so it can capture keyboard events
      this.rootRef.current.focus();
    }
  }

  componentWillUnmount(): void {
    // Remove the event listener from the root div element using ref
    if (this.rootRef.current) {
      this.rootRef.current.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  render(): React.ReactNode {
    return (
      <div
        className="App"
        ref={this.rootRef}
        tabIndex={0} // Make the div focusable to capture keyboard events
        style={{ outline: 'none' }} // Remove the outline that appears when focused
      >
        <p className="App__message">
          {this.state.pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

export default App;
