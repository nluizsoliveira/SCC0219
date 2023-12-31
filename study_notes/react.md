# React Notes

Index: 

0. Thinking in React
1. 
2. 
3. 


## 0: Thinking in React
Link: https://react.dev/learn/thinking-in-react
0. Start with a JSON and a Mockup
1. Break the UI into Components hiearchy
2. Build a Static Version in React
3. Find the minimal but complete representation of UI state
4. Identify where states should live 
5. Add inverse data flow

### 0.0: Start with a JSON and a Mockup
Json: 

```javascript
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```
Mockup for displaying JSON: 

![](https://react.dev/images/docs/s_thinking-in-react_ui.png)

### 0.1: Break the UI into a component hierarchy

![](https://react.dev/images/docs/s_thinking-in-react_ui_outline.png)

Components: 

1. **FilterableProductTable** (grey): contains the entire app.
2. **SearchBar** (blue): receives the user input.
3. **ProductTable** (lavender): displays and filters the list according to the user input.
4. **ProductCategoryRow** (green): displays a heading for each category.
5. **ProductRow** (yellow): displays a row for each product.

Hierarchy: 

```
FilterableProductTable
    SearchBar
    ProductTable
        ProductCategoryRow
        ProductRow
```

### 0.2: Build a Static version in React
Build components that reuse other components and pass data through props.

Don't use state yet, as they're intent to be used in interactive data.

Objective is to build a library of reusable components that render data model. As a static app, the components will only return JSX. The component at the top of the hierarchy (FilterableProductTable) take data model as a prop. This is called one-way data flow (data flows down from the top-level component to the ones at the bottom of the tree).

```javascript
let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  return (
    <div className="App">
      <FilterableProductsTable products={products}/>    
    </div>
  );
}

function FilterableProductsTable({products}){
  return (
    <div className="FilterableProductsTable"
      style = {{padding: '5px', margin: '5px', border: '3px solid grey', width: '500px'}}
    >
      <h1>Filterable Products Table</h1>
      <SearchBar/>
      <ProductTable products={products} />
    </div>
  )
}

function SearchBar(){
  return (
    <div className="SearchBar"
      style = {{padding: '5px', margin: '5px', border: '3px solid blue'}}
    >
      <h2>Search Bar</h2>
      <input placeholder="Search..."></input>

      <input type="checkbox"></input>
      <span>Only show products in stock</span>
    </div>
  )
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null 

  products.forEach((product) =>{
    if (product.category != lastCategory){
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      )
    }
    
    rows.push(
      <ProductRow 
        product = {product}
        key = {product.name}
      />

    )
    lastCategory = product.category
  })

  return (
    <div className="ProductTable"
    style = {{padding: '5px', margin: '5px', border: '3px solid lavender'}}>
      <h2>Product Table</h2>
      <div
      style = {{display: 'flex', width: '100%', justifyContent: 'space-around'}}
      >
        <span>Name</span>
        <span>Price</span>
      </div>
      {rows}
    </div>
  )
}

function ProductCategoryRow({category}){
  return (
    <div className="ProductCategoryRow"
    style = {{ margin: '5px', padding: '5px', display: 'flex', justifyContent: 'center', border: '3px solid green'}}
    >
        {category}
    </div>
  )
}

function ProductRow({product}){
  return (
    <div className="ProductRow"
      style = {{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-around', border: '3px solid yellow'}}
    >
      <span
      style = {product.stocked? {}:{color: 'red'}}
      >{product.name}</span>
      <span>{product.price}</span>
    </div>
  )
}
export default App;
```

The version above is only static: search and filter are not implemented yet. 
However, the data model (JSON) is properly being rendered as hierachical components in react through top->down passing props. 


![](https://i.imgur.com/v3Vk9PK.png)

### 0.3: Find the minimal but complete representation of UI state 

**States** allow changes made to data model dinamically reflect on the UI. 

**DRY** (Don't Repeat Yourself) principle: **"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system"**.

Try to figure out the absolute minimal representation of the application needs and compute everything else on demand. 

EX: In a shopping list, items can be stored as an array in state. The numbers of items don't need to be a state: simply read the length of the array. 

#### **MINDSET FOR DEFINING STATES**: 

1. Does it remain unchanged over time? If so, it isn’t state.
2. Is it passed in from a parent via props? If so, it isn’t state.
3. Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

What’s left is probably state.


On the example: 

1. The original list of products
2. The search text the user has entered
3. The value of the checkbox
4. The filtered list of products

We have:
1. List of produts **is not** a state. As it's passed via props. 
2. Search text the user has entered **is** a state. It changes over time, it's not passed via props and cannot be computed via existant props. 
3. Value of the checkbox **is** a state. 
4. Filtered list of products **is not** a state. Although it changes over time, it's computable based on the original list of products which is passed via props. 

### 0.4 - Identify where state should live
After defining what are the states of the application, we need to define which components owns the state. 

React uses one-way data flow, passing data from parent to childs on the hierarchy. 

Rules are: 
1. List all components that render something based on the state
2. Find their closest parent in common. It should hold the state.
3. If there's not a parent, wrap them in a parent state holder. 

The example application has two states: 
1. Search text user promped. 
2. Value of the checkbox that defines if only stored items will be displayed. 

Those are our components hierarchy by now: 


```
1.FilterableProductTable
    2. SearchBar
    3. ProductTable
        3.1 ProductCategoryRow
        3.2 ProductRow
```

The components that need the state are: 
2. SearchBar, that displays the chexbox and text searched
3. ProductTable, that displays the content filtered based 

Therefore, `1. FilterableProductTable` should be the owner of both states. 
Since it's the component higher up in the hierarchy that parents all subcomponents
that need the states. 


## Hook #1 - UseState(state, setState)
Add a state to the component. Ex:

```javascript
const [age, setAge] = useState(28);
const [name, setName] = useState('Taylor');
const [todos, setTodos] = useState(() => createTodos());
```

**Parameters**:
- `initialState`: Can be any type (number, integer, objects, etc), but have a special behaviour if it's a function. 

  If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.

**Returns**:
Returns an array (which is destructured when assigning `[state, stateState]`:
1. Current state. During first render, the one passed as argument to useState().
2. A `setState()` function that:
    1. Update the state based on the argument. 
    2. Forces a re-render.   

**Warning**:
1. UseState is a hook. It can only be called at the top level of the component or other custom hooks. It's not possible to
call useState from loops or conditionals. If you need that, create another component and move the hook to it. 
2. In Strict mode, react calls initializer function twice in order to help finding accidental impurities. This is a 
development-only behavior and doesnt affect production. 

**About setState() function**
Its possible to: 
1. Pass a state directly to setState()
2. Pass a function whose argument will be the previous state, and return, the new state. 

Ex:

```js
const [name, setName] = useState('Edward');
const [age, setAge] = useState(12);

function handleClick() {
  setName('Taylor');
  setAge(state => state + 1);
```

**Warnings**
1. set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.
```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!

```
2. If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children.
3. React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use flushSync.
```js
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Atualiza o estado assincronamente
    setCount(count + 1);

    // Executa imediatamente após a atualização do estado
    flushSync(() => {
      // Acessa o DOM ou realiza operações dependentes do DOM
      const updatedCount = count + 1; // Usando a atualização já realizada no estado
      console.log(`Count atualizado imediatamente: ${updatedCount}`);
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default ExampleComponent;
```
4. Calling the set function during rendering is only allowed from within the currently rendering component. React will discard its output and immediately attempt to render it again with the new state. This pattern is rarely needed, but you can use it to store information from the previous renders.
```javascript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause the warning because it changes state during rendering
    setCount(count + 1);
  }, []);

  // Instead of updating count directly, use a setTimeout to update it later
  //  setTimeout(() => {
  //    setCount(count + 1);
  //  }, 0);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```

**BASIC USE CASES OF SETSTATE()**: 
1. Counter
2. Textual inputs
3. CheckBox
4. Forms

