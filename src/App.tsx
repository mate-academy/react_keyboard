import React from 'react';

// Описуємо тип для нашого стану
interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  // 1. Початковий стан: клавіша ще не натиснута
  state: State = {
    pressedKey: null,
  };

  // 2. Метод-обробник, який зберігає натиснуту клавішу в state.
  // Використовуємо стрілочну функцію для збереження контексту this!
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  // 3. Додаємо слухача при монтуванні компонента
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // 4. Обов'язково видаляємо слухача перед розмонтуванням,
  // передаючи ту саму функцію handleKeyUp
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    // Дістаємо значення зі state для зручності
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {/* Робимо умовний рендер залежно від того, чи є щось у pressedKey */}
        {pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
