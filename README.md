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


Зробіть `App` компонентом класу з `pressedKey` у `state`.

> Ось [робоча версія](https://mate-academy.github.io/react_keyboard/)

- перед натисканням будь-якої клавіші показувати повідомлення `Ще нічого не було натиснуто`;
- під час натискання клавіші показувати повідомлення `Остання натиснута клавіша - [клавіша]`;
- використовуйте `componentDidMount` для додавання обробника `keyup`:
```ts
// НЕ імпортуйте KeyboardEvent з React, оскільки це звичайна подія
document.addEventListener('keyup', (event: KeyboardEvent) => {
console.log(event.key);
});
```
- використовуйте `removeEventListener` для видалення глобального обробника в `componentWillUnmount`.


## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ElinaMrachkovska.github.io/react_keyboard/) and add it to the PR description.
