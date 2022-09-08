import { Component } from 'react';

type State = {
  pressedKey: string;
  history: string[];
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'null',
    history: [],
  };

  componentDidMount() {
    const btn = document.getElementById('btn') as HTMLElement;

    btn.addEventListener('click', this.clear);

    document.addEventListener('keyup', this.click);
  }

  componentWillUnmount() {
    const btn = document.getElementById('btn') as HTMLElement;

    document.removeEventListener('keyup', this.click);
    btn.removeEventListener('click', this.clear);
  }

  click = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    this.state.history.push(event.key as never);
  };

  clear = () => {
    this.state.history = [];
  };

  render() {
    const { pressedKey } = this.state;
    let id = 0;

    return (
      <div className="App">
        {this.state.history.length
          ? (
            <p className="App__message">
              {`The last pressed key is - [${pressedKey}]`}
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>}
        <ol className="App__story">
          <button type="button" className="btn" id="btn">
            Click to Clear and Press the key
          </button>

          {this.state.history.map((el) => {
            id += 1;

            return (
              <li key={id} className="App__story-element">
                {el}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
