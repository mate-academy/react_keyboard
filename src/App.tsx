import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

export class App extends React.Component {
  state: Readonly<{
    key: string,
  }> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventKeyBord);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventKeyBord);
  }

  eventKeyBord = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? ('Nothing was pressed yet')
            : (`The last pressed key is [${key}]`)}
        </p>
      </div>
    );
  }
}
