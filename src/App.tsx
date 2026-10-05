// import { event } from 'cypress/types/jquery';
import React from 'react';

// export const App: React.FC = () => (
// <div className="App">
//   <p className="App__message">The last pressed key is [Enter]</p>
// </div>
// );

type Props = {
  some: number;
};

type State = {
  pressedBtn: string;
};

export class App extends React.Component<Props> {
  state: State = {
    pressedBtn: '',
  };

  handlePressedKey = (event: KeyboardEvent) => {
    // console.log(event.key);
    this.setState({ pressedBtn: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  // componentDidUpdate(
  //   prevProps: Readonly<Props>,
  //   prevState: Readonly<State>,
  // ): void {

  // }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  // componentDidUpdate(
  //   prevProps: Readonly<Props>,
  //   prevState: Readonly<State>,
  // ): void {
  //   // if (prevState.pressedBtn === ) {

  //   // }
  //   // document.addEventListener('keyup', (event: KeyboardEvent) => {
  //   //   console.log(event.key);
  //   // });
  // }

  render(): React.ReactNode {
    return (
      <>
        <div className="App">
          <p className="App__message">
            {this.state.pressedBtn
              ? `The last pressed key is [${this.state.pressedBtn}]`
              : 'Nothing was pressed yet'}
          </p>
        </div>
      </>
    );
  }
}
