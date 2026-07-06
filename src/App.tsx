import React from 'react';

// Описуємо тип для стану нашого компонента
type State = {
  pressedKey: string | null; // Зберігає символ натиснутої клавіші або null, якщо нічого не натиснуто
};

// Створюємо компонент класу, де перші фігурні дужки — це пропси (порожні), а другі — наш State
export class App extends React.Component<{}, State> {
  // Ініціалізуємо початковий стан компонента
  state: State = {
    pressedKey: null,
  };

  // Викликається автоматично відразу після того, як компонент з'явився в DOM
  componentDidMount() {
    // Реєструємо глобального слухача події відпускання клавіші на рівні всього документа
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // Викликається безпосередньо перед видаленням компонента з DOM
  componentWillUnmount() {
    // Обов'язково видаляємо слухача, щоб уникнути витоків пам'яті та зайвого навантаження
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // Стрілочна функція зберігає контекст `this`, тому ми можемо безпечно викликати setState
  handleKeyUp = (event: KeyboardEvent) => {
    // Оновлюємо стан назвою клавіші, яку щойно відпустив користувач
    this.setState({
      pressedKey: event.key,
    });
  };

  // Метод рендеру відповідає за побудову інтерфейсу на основі поточного стану
  render() {
    return (
      <div className="App">
        {/* За допомогою тернарного оператора перевіряємо, чи є в стані натиснута клавіша */}
        {this.state.pressedKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}
