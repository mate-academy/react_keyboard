import { Component } from 'react';

interface State {
  lastkey: string | null;
}

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>

//   componetDidMount() : void {
//     document.addListener()
//   }
// );

export class App extends Component<{}, State> {
  state: State = {
    lastkey: null,
  };

  handleDocumentRightClick = (event: KeyboardEvent): void => {
    this.setState({ lastkey: event.key });
    // console.log(event.key);
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentRightClick);
  }

  render() {
    const { lastkey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastkey
            ? `The last pressed key is [${lastkey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
