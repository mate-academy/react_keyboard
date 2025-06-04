import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  title: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    title: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ title: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    this.setState({ title: 'Nothing was pressed yet' });
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <p className="App__message">{title}</p>
      </div>
    );
  }
}
