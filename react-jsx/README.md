## JSX 

JSX - JavaScript eXtension is a special syntax that produces React Elements - it reminds you 
of handlebars but it has the full power of javascipt


In index.js: render this element instead of the string 'Hello World'
```
const element = <h1>Hello, world!</h1>;
```

### Embedding JavaScript Expressions in JSX

You can enbed any JS Expression in JSX within curly brace

```
const name = 'Dan Abramov';
const element = <h1>Hello, {name}</h1>;
```

### Return it from functions
```
const greet = () => {
    return <h1 className="heading">Hello World!!</h1>;
}

ReactDOM.render(
    greet(),
    document.getElementById('root')
);
```

### Wrap multilines with parenthesis
```
const element = (
  <h1>
    Hello, {use}!
  </h1>
);
```


### HTML Attributes change because these are also reserved keywords in JavaScript:
for -> htmlfor
class -> className  ( from react-16 on also class works but not everywhere )



### Inline styling - style attribute has to reference an object - either create object before or inline 
### You can also only return a single node - that is why you have to wrap the element in a div
```
const myStyle = {
  height: "200px"
};

const element = (
    <div>
        <p
        style={{
            backgroundColor: "pink"
        }}
        >
        Random number: {Math.floor(Math.random() * 10)}
        </p>
        <p style={myStyle}>
            Second Paragraph
        </p>
    </div>
);
```

### You need to close all tags 
```
<br> -> <br />
<img src="" alt=""> -> <img src="" alt="" />
```

### That's what's happening internally - babel compiles to REACT.createElement()

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// get's compiled to this:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```