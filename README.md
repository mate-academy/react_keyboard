# React keyboard
Make the `App` a class component with `pressedKey` in the `state`.

- Before any key was pressed show a message `Nothing was pressed yet`
- When a key is pressed show `The last pressed key is <event.key>`
- use `componentDidMount` to add `keyup` handler
    ```js
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    });
    ```
- `removeEventListener` when component is removed from the page 

## Instructions
**IMPORTANT** This task does not have tests yet

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://andrewkhorsun.github.io/react_keyboard/) and add it to PR description

