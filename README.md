# React Keyboard

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

Make the `App` a class component with `pressedKey` in the `state`.
Зробіть `App` компонентом класу з `pressedKey` у `state`.

> Here is [the working version](https://mate-academy.github.io/react_keyboard/)

- before any key was pressed show the `Nothing was pressed yet` message;
- when a key is pressed show a `The last pressed key is [key]` message;
- use `componentDidMount` to add `keyup` handler:

- перед натисканням будь-якої клавіші показувати повідомлення `Nothing was pressed yet`;
- при натисканні клавіші показувати повідомлення `The last pressed key is [key]`;
- використовуйте `componentDidMount`, щоб додати обробник `keyup`:
    ```ts
    // DON'T import KeyboardEvent from React, because it is a regular event
    //НЕ імпортуйте KeyboardEvent з React, оскільки це звичайна подія
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    });
    ```
- use `removeEventListener` to remove a global handler in `componentWillUnmount`.
- використовуйте `removeEventListener`, щоб видалити глобальний обробник у `componentWillUnmount`.

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://pushkalov.github.io/react_keyboard/) and add it to the PR description.
