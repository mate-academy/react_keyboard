import React from 'react';

// Тип для state компонента
// pressedKey може бути:
// string — якщо клавішу вже натиснули
// null — якщо ще нічого не натискали
type State = {
  pressedKey: string | null;
};

// Створюємо класовий компонент
// <{}, State>
// {} — тип props (у нас їх немає)
// State — тип state
export class App extends React.Component<{}, State> {
  // До натискання клавіші значення null
  state: State = {
    pressedKey: null,
  };

  // Метод-обробник події клавіатури
  // event: KeyboardEvent — стандартна DOM подія
  handleKeyUp = (event: KeyboardEvent) => {
    //Оновлюємо state    // event.key містить назву натиснутої клавіші
    // Наприклад: "Enter", "a", "Escape"
    this.setState({
      pressedKey: event.key,
    });
  };

  // Lifecycle метод React
  // Викликається після того, як компонент з'явився в DOM
  componentDidMount() {
    // Додаємо глобальний listener на подію клавіатури
    // keyup спрацьовує
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // Lifecycle метод
  // Викликається перед видаленням компонента
  componentWillUnmount() {
    // Видаляємо listener щоб уникнути memory leak
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // Метод render відповідає за відображення UI
  render() {
    // Деструктуризація state

    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {/*
            Якщо pressedKey не null → показуємо клавішу
            Якщо null → показуємо повідомлення що нічого не натиснули
          */}
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
