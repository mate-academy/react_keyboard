import React from 'react';
/*eslint-disable*/

export class App extends React.Component {
  state = {
    item: '',
  };

  updateInnerHtml(message: any) {
    let element = document.getElementById("some-message");
    if (element !== null) {
      element.innerHTML = message
    }
  }

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ item: event.key });
      this.updateInnerHtml(`The last pressed key is [${this.state.item}]`);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.updateInnerHtml);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message" id="some-message">Nothing was pressed yet</p>
      </div>
    );
  }
}

// document.addEventListener('keyup', (event) => {
//   document.write(event.key)
// });
