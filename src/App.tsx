import React from "react";

interface State {
  char: string;
}

export class App extends React.Component {
  state: Readonly<State>;

  constructor(props: any) {
    super(props);
    this.state = { char: "" };
  }

  onKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({char:event.key});
  };

  componentDidMount(): void {
    document.addEventListener("keyup", this.onKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keyup", this.onKeyboardEvent);
  }

  render() {
    return (
      <div className="App">
        {this.state.char ? (
          <p className="App__message">{`The last pressed key is [${this.state.char}]`}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

/*
REACT FUNCTIONAL COMPONENT

import React, { useState, useEffect, useCallback } from "react";
 export const App: React.FC = () => {
  const [char, setChar] = useState("");

  const checkKey = useCallback((event: KeyboardEvent) => {
    console.log(event.key);
    setChar(event.key);
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", checkKey);

    return () => {
      document.removeEventListener("keyup", checkKey);
    };
  }, []);

  return (
    <div className="App">
      {char ? (
        <p className="App__message">{`The last pressed key is [${char}]`}</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
}; */
