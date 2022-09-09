/* eslint-disable no-console */
import React from 'react';

interface State {
  x: number;
}

interface Props {
  y: number;
}

export class Child extends React.Component<Props, State> {
  intervals: ReturnType<typeof setInterval>[] = [];

  public readonly state: Readonly<State> = {
    x: 0,
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove);
  }

  componentDidUpdate(): void {
    // if (prevProps.y !== this.props.y) {
    //   if (this.props.y % 2 === 0) {
    //     window.addEventListener('mousemove', this.handleMove);
    //   } else {
    //     window.removeEventListener('mousemove', this.handleMove);
    //   }
    // }

    const intervalId = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    this.intervals.push(intervalId);
  }

  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.handleMove);
    this.intervals.forEach(clearInterval);
  }

  handleMove = (event: MouseEvent) => {
    console.log(event.clientX);

    this.setState({
      x: event.clientX,
    });
  };

  render() {
    const { x } = this.state;
    const { y } = this.props;

    return (
      <p className="App__message">
        x is
        {' '}
        {x}
        {' '}
        {y}
      </p>
    );
  }
}
