# React Keyboard

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

Make the `App` a class component with `pressedKey` in the `state`.

> Here is [the working version](https://mate-academy.github.io/react_keyboard/)

- before any key was pressed show the `Nothing was pressed yet` message;
- when a key is pressed show a `The last pressed key is [key]` message;
- use `componentDidMount` to add `keyup` handler:
    ```ts
    // DON'T import KeyboardEvent from React, because it is a regular event
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    });
    ```
- use `removeEventListener` to remove a global handler in `componentWillUnmount`.

Сделайте `App` компонентом класса с `pressedKey` в `state`.

> Вот [рабочая версия](https://mate-academy.github.io/react_keyboard/)

- перед нажатием любой клавиши показывать сообщение «Еще ничего не нажималось»;
- при нажатии клавиши показывать сообщение `Последняя нажатая клавиша [клавиша]`;
- используйте `componentDidMount`, чтобы добавить обработчик `keyup`:
     ```тс
     // НЕ импортируйте KeyboardEvent из React, потому что это обычное событие
     document.addEventListener('keyup', (событие: KeyboardEvent) => {
       console.log(событие.ключ);
     });
     ```
- используйте `removeEventListener`, чтобы удалить глобальный обработчик в `componentWillUnmount`.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://yevhenii-stanchenko.github.io/react_keyboard/) and add it to the PR description.
