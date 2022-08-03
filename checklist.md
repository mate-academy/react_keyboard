1. [CODE STYLE] - Method's name should start with a verb (so you could easily tell what your method actually do)

BAD EXAMPLE:
```jsx
clickHandler = () => {
 console.log('Hello, world');
}
```

GOOD EXAMPLE:
```jsx
handleClick = () => {
 console.log('Hello, world');
}
```

2. [CODE KNOWLEDGE] - Check if you remove your event listener, when component will unmount from page.

3. [CODE STYLE] - Readabily is everything. Format ternary operator operands correctly - move each operand to the separate line:

BAD EXAMPLE:
```jsx
 {condition ? 'Very important text': 'Nothing important'}
 ```
 
GOOD EXAMPLE:
```jsx
 {condition 
   ? 'Very important text'
   : 'Nothing important'
 }
```
