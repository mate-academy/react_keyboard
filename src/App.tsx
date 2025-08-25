import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  // Обробник події, який буде викликатися при натисканні клавіші
  handleKeyUp = (event: KeyboardEvent) => {
    // 1. Отримуємо ключ натиснутої клавіші
    const pressedKey = event.key;

    // 2. Оновлюємо стан компонента
    this.setState({ pressedKey });
  };

  componentDidMount() {
    // 3. Додаємо слухач події до документа
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // 4. Додаємо метод життєвого циклу componentWillUnmount
  componentWillUnmount() {
    // 2. Видаляємо слухач події
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // 1. Оновлюємо метод render()
  render() {
    const { pressedKey } = this.state;
    let message = 'Nothing was pressed yet';

    // 2. Перевіряємо, чи була натиснута клавіша
    if (pressedKey !== null) {
      message = `The last pressed key is ${pressedKey}`;
    }

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
