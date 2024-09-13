import React from 'react';

type AppState = {
  key: string;
  message: string;
};

class App extends React.Component<AppState> {
  // Инициализация состояния как поле класса
  state: AppState = {
    key: '', // Хранит нажатую клавишу
    message: 'Nothing was pressed yet', // Начальное сообщение
  };

  // Добавление обработчика keyup при монтировании компонента
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // Удаление обработчика keyup при размонтировании компонента
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // Обработчик события keyup, который обновляет состояние
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key }, this.updateMessage);
  };

  // Метод для обновления сообщения
  updateMessage = () => {
    const { key } = this.state;

    if (key === '') {
      this.setState({ message: 'Nothing was pressed yet' });
    } else {
      this.setState({ message: `The last pressed key is [${key}]` });
    }
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
