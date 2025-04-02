import React from 'react';

type State = {
  title: string;
};

export class App extends React.Component<{}, State> {
  state = {
    title: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      title: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { title } = this.state;

    return (
      <div className="App">
        <p className="App__message">{title}</p>
      </div>
    );
  }
}

// import React, { useState } from 'react';

// export const App: React.FC = () => {
//   const [title, setTitle] = useState('');

//   document.addEventListener('keypress', e => setTitle(e.key));

//   return (
//     <div className="App">
//       {!title ? (
//         <p className="App__message">Nothing was pressed yet</p>
//       ) : (
//         <p className="App__message">The last pressed key is [{title}]</p>
//       )}
//     </div>
//   );
// };
