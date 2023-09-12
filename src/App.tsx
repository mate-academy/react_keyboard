import React from 'react';
import 'bulma/css/bulma.min.css';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <div className=" box notification is-link">
              <p>
                {pressedKey
                  ? (`The last pressed key is [${pressedKey}]`)
                  : ('Nothing was pressed yet')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
