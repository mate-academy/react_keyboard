import { Component } from 'react';

type State = {
  pressedKeyOrMaybeMessageWhoKnows: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKeyOrMaybeMessageWhoKnows: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener(
      'keyup',
      this.changerOfpressedKeyOrMaybeMessageWhoKnowsValueInStateObject,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keyup',
      this.changerOfpressedKeyOrMaybeMessageWhoKnowsValueInStateObject,
    );
  }

  changerOfpressedKeyOrMaybeMessageWhoKnowsValueInStateObject = (
    event: KeyboardEvent,
  ) => {
    this.setState({ pressedKeyOrMaybeMessageWhoKnows: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKeyOrMaybeMessageWhoKnows}
        </p>
      </div>
    );
  }
}

/* and cute cat
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⡴⠖⢆⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠛⠛⢹⡇⠀⠀⠀⠀⠀⠀⡇⠀⠈⠉⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠤⠟⠀⠀⠀⠀⠀⠀⠀⠻⠤⠤⠔⠋⠀⠀⠀⠀⣠⢤⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠈⢧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⢤⡀⠀⠀⠀⠀⢰⠛⠲⢤⡀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⠼⠀⠀⢹⡀⠀⠀⠀⢸⡀⠀⠀⠙⠦⣀⢀⡠⠤⠤⠖⠚⠁⣠⡤⣄⣸⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⢰⠇⠀⠀⠀⠀⢧⠀⠀⠀⠀⠈⠣⣤⠖⠒⠀⠀⠀⠀⠀⣴⣮⠹⢦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠒⠒⠋⠀⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⢀⣠⣤⡀⠀⠀⠀⠀⢹⣿⠀⣨⣷⡂⡒⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢹⡹⢿⣿⡇⠀⠀⣴⣿⡄⠘⠛⠹⡧⢌⡉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠉⣉⢭⣶⡆⠀⠉⢹⡁⢀⠀⢠⠇⠀⠈
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡄⠀⠀⠀⠀⠠⠊⡠⠃⡜⠐⠒⠤⠚⠉⠁⢀⡞⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠤⣀⠀⠀⠰⠁⢠⡇⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡖⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀
⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀
⢸⡏⠉⠉⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀
⠈⠓⠦⡄⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀
⠀⠀⢀⡇⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
⠀⢀⠞⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
⢀⡎⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀
⢸⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀
⢸⡄⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⢀⠀⠀⡞⠀⠀⢸⠀⠀⠀⠀
⠀⢇⠀⢱⡀⠀⠀⠀⠀⠀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⣸⠀⣰⠃⠀⠀⢸⠀⠀⠀⠀
⠀⠘⣆⠀⠹⣄⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⢀⡇⢠⠇⡇⠀⠀⢼⠀⠀⠀⠀
⠀⠀⠈⠣⡀⠀⠑⠦⣄⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⢸⡷⠃⠘⡇⠀⠀⠘⣇⠀⠀⠀
⠀⠀⠀⠀⠈⠲⢤⣀⣀⣀⣀⣹⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠀⠤⣤⡼⣇⠀⠀⠈⢷⡀⠀⢳⡀⠀⠀⠘⢳⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⠤⣀⣀⠀⠀⠀⢀⡼⠁⠀⠰⡌⢳⠿⡄⠀⠀⠀⠱⡄⠀⠳⢤⣀⣼⠾⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠚⠉⠳⠤⠼⠿⠛⠉⠀⠳⣄⣰⣤⣷⠗⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⣁⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/
