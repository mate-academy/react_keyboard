import { Component } from 'react';

type State = {
  title: string;
};

type Props = {
  onAdd: (title: State) => void;
};

export class App extends Component<Props, State> {
  state: State = {
    title: '',
  };

  constructor(props: Props) {
    super(props);
    this.detectKey = this.detectKey.bind(this);
  }

  detectKey(event: KeyboardEvent) {
    if (event.key === '') {
      this.setState({ title: 'SpaceBar' });
    }

    this.setState({ title: event.key });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.detectKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.detectKey, false);
  }

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!title
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${title}]`}
        </p>
        <button onClick={() => this.setState({ title: '' })}>Reset</button>
      </div>
    );
  }
}

// import React, { useEffect, useState } from 'react';

// export const App2: React.FC = () => {
//   const [key, setKey] = useState('');

//   const detectKeyDown = (e: KeyboardEvent) => {
//     setKey(e.key);

//     if (e.key === ' ') {
//       setKey('SpaceBar');
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', detectKeyDown, true);
//   }, []);

//   return (
//     <div className="App">
//       <p className="App__message">
//         {!key ? 'Nothing was pressed yet' : `The last pressed key is [${key}]`}
//       </p>
//       <button onClick={() => setKey('')}>Reset</button>
//     </div>
//   );
// };
