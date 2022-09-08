import { Component } from 'react';

type State = {
  pressedKey: string;
};

let story: string[] = [];

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'null',
  };

  componentDidMount() {
    const btn = document.getElementById('btn') as HTMLElement;

    btn.addEventListener('click', () => {
      story = [];
    });

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
      story.push(event.key);
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {story.length
          ? (
            <p className="App__message">
              The last pressed key is
              {' - '}
              {`[${pressedKey}]`}
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>}
        <ol className="App__story">
          <button type="button" className="btn" id="btn">
            Click to Clear and Press the key
          </button>

          {story.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className="App__story-element">
              {el}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
