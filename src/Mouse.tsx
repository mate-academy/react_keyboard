import { Component } from 'react';

type State = {
  x: number,
  y: number,
};

export class Mouse extends Component <{}, State> {
  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      this.setState({
        x: e.x,
        y: e.y,
      });
    });
  }

  render() {
    const { x, y } = this.state;

    return (
      <h1>{`X: ${x},Y: ${y}`}</h1>
    );
  }
}
