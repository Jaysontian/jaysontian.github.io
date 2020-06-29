---
layout: post
title: "React JS Beginner Notes"
date:   2019-12-7
tags: dev
published: true
categories: blog

---
* Table of Contents Placeholder
{:toc}

# Introduction

## What is React?

ReactJS is a JavaScript library framework that helps build user interfaces. It is open-source and created by Facebook. It is special as it uses the virtual JavaScript DOM and Web Components to make rendering code faster and easier.

## Why is it Useful?

Web Components allow for developers to create custom 'elements' for a webpage that can be rendered and returned. This also allows for reuse of elements without copying and pasting the code many times.

```html
<body>
  <MyCustomNavbar />
  <ScaryStory />
  <CoolSurvey />
<body>
```

Here, it can be seen that the component `<MyCustomNavBar />` will be called from a function which will return all the HTML or JavaScript code to render that specific component. This makes web components that are reusable. Also, it is very fast as it uses the [virtualDOM](https://reactjs.org/docs/faq-internals.html).

# Creating A New React App

> Be sure you have [npm installed](https://www.npmjs.com/get-npm) beforehand.

## Initiating the project
Initiating the project with React is quite simple! Open up terminal and enter the following:

```command
npx create-react-app app-name
cd app-name
npm start
```
It's incredibly straight forward. Now go into files and delete everything in the folder `src`.

## Import and Render
Open up the src folder in a code editor and create a file named `index.js`.

In every react file, there will be an import statement. This refers to the dependencies installed so that we can actually __use__ react. And don't forget the ReactDOM dependecy too.

```jsx
import React from "react"
import ReactDOM from "react-dom"
```
Now, we will use ReactDOM's render method to render something to the screen.

```jsx
ReactDOM.render(
  /* the component or HTML element that we want to render*/
  , document.getElementById('root') // styles it to the root element <body> in this case
)

// for example

ReactDOM.render(
  <h1>Hello God<h1/>, document.getElementById('root')
)
```

Now it is obvious it will become crowded when there are more than one element, so one can replace it with a component. We are going to call the component `<App />` in this example and call it, which will return the block of HTML code.

```jsx
function App() {
  return {
    <ul>
      <li>Buy Milk</li>
      <li>Eat Spaghetti</li>
    </ul>
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
```

## Separate Component files

It is usual for there to be many components, which can be stored in their separate files.

You must create a file with that name, using the example above, `App.js`. It is common to store many components in a folder called 'components'. Then accessing this `App.js` file from `index.js`:

```jsx
import App from ./components/App
```

it is already assumed that App is a JS file so no need to put `.js`.

In the beggining of the new component file created, `App.js`, import React, as we want it to run not in vanilla JS. Copy the function returning the elements of the component into the main body and then conclude with an **EXPORT** statement. This part is crucial.

```jsx
import React from 'react'

// all of the body code
// blah blah more code

export default App
```
# The Basics

## JSX

Note that React runs on JSX, which is a special version of vanilla JavaScript within brackets. For example, doing this would work:

```jsx
const userAge = 5

function App(){
  return <p>You are {userAge} years old.</p>
}
```

## ClassName

In regular HTML code, class = 'navbar' would work, however because jsx runs, it must be in Camel Case:

```jsx
<div className='navbar'><div>
```
>Only apply classname to react elements, NOT components!

## Inline Styling

Inline styling is placed between double curly brackets, as this recognizes the first as JSX and the second as the data for the style.
For example, `<h1 style={'{font-size:5pt}}'></h1>`

Notice that styling options with dash such as `background-color` must be camel cased, which now becomes `backgroundColor`.


# Props

What are props? Short form for properties, commonly the different props that are in HTML elements, but can be customized and modified containing data for each:

```html
<p class='title' text='Eat spaghetti' checked='true' note="Don't eat too much"></p>
```

This example has the different props of class, text, checked, and note, which can have the values 'title', 'eat spaghetti', 'true', 'dont eat too much'. This can be made into a JSON data:

```term
[
  {
    'props':'data',
    'text':'eat spaghetti',
    'checked':'true',
    'note':'Dont eat too much'
  }
]
```

Why is this useful? We can have the same HTML framework or elements for different properties, like for a list of you tube videos, the list styles are all the same, but the name, links, and comments, of each video are different.

```jsx
function Contacts(props) {
  return {
    <div>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  }
}

ReactDOM.render(<Contacts
  name="Mario"
  job="Chef"
/>)
```

Or the props can be stated as a JSON data, where I call the data info, and then call it as a prop parent:

```jsx
function Contacts(props) {
  return {
    <div>
      <h1>{props.info.name}</h1>
      <p>{props.info.job}</p>
    </div>
  }
}

ReactDOM.render(<Contacts
  info = { {
      'name':'Mario',
      'job':'Chef'
    } }
/>)
```

## Styling and Props Example

For example, if I have an app showing emails and I want to show any message that doesn't have a reply to be red.

Here will be `index.js`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import Email from './Email'

function Inbox(){
  return(){
    <Email
      text='Call me back'
      reply='Ok boomer.'
    />
    <Email
      text='Remember to send me links!'
      reply=''
    />
  }
}

ReactDOM.render(
    <Inbox />, document.getElementById('root')
  )
```

This is `Email.js` for each email component:

```jsx
import React from 'react'

function Email(props){
  return(
      <div>
        <h1 style = { {display: !props.reply && 'none'} }>{props.text}</h1>
        <p style = { {backgroundColor: !props.reply && red} }>{props.reply}</p>
      </div>
    )
}
```

`display: !props.reply && 'none'` reads if there is no reply then display equals none.

# Mapping (For Loop)

Now with the email example above, it can be very inefficient if there were three hundred emails and I needed to copy and paste that component from 300 different emails.

Mapping, is like the for loop where given an array of props, it will render a component for each in the list. For example, I have a JSON data named `inboxData.js` that contains a 300 properties for name and details, and I import it.

```jsx
import inboxData from './inboxData'

function App(){
    const allEmails = inboxData.map(item => <Email sender={item.name} message={item.details} )
}

return {
  <div>
    {allEmails}
  </div.
}
```
the `.map()` function looped through all the props of the data and then created a new component for each. Each was defined as item in this example, but it can really be any word. 'Item' represents each in data (inboxData) that is being mapped.

# Class Based Components

Why is there a small blur into object oriented programming? Well React has a useful feature called state that can only be called within a class, so its useful to know how to make a class. Looking at this function-based code:

```jsx
function App() {
  return {
    <div>
      <PizzaMenu />
    </div>
  }
}
```
Can be converted to this class-based code:
```jsx
class App extends React.Component {
  render() {
    return {
      <div>
        <PizzaMenu />
      </div>
    }
  }
}
```
When switching to a class, function parameters are recognized from `this`. For example in this function based component where a property is passed so that the name data can be accessed:
```jsx
function Header(props) {
  return {
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  }
}
```
is changed where props is recognized from `this` instead. So from `props.name` it is changed to `this.props.name`. Notice how there is still the render function.
```jsx
class Header extends React.Component {
  render(){
    return {
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    }
  }
}
```

# State

Props defined some part of a component that was unchangeable once it is rendered, as it will cause syntax errors when it is altered during the rendering process. However, state allows objects to be manipulative.

States are only created in classes. Be aware that they cannot be made in functions. The constructor function creates a state.

```jsx
class App extends React.Component{
  constructor(){
    super()           // include this! it's important!!
    this.state = {
      answer = 'yes'
    }
  }
  render(){
    return (
      <div>
        <p>Are you really that important? {this.state.answer}</p>
        <RandomComponent answer = {this.state.answer}/>
      </div>
      )
  }
}
```

Ok this might not seem that incredible but it is superb for uses when there needs to be different variables for one component.

## Changing State

What if there's a number and you want it to go from 0 to 1 on click?

```jsx
class clicker extends React.Component{
  constructor(){
    super()
    this.state = {
      count = 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick{
    this.setState({count:1})
  }

  render(){
    return {
      <h1>You have {this.state.count} coins. </h1>
      <button onClick = {this.handleClick}> Add 1 </button>
    }
  }
}
```
What if you want the number to increment? This sets a function in setState where the previous state was referred to.
```jsx
  handleClick{
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
```

# Lifecycle Methods

Lifecycle methods are function motifs that can be used to refer the different states of a component. For example, in the example below, the function `componentDidMount` will only return something once the component is mounted (loaded).

The code below fetches for some api data and then turns it into accessible JSON data. Then, the character state is set as the data. If the data was 'name: John', then in code, `this.state.character.name` will return  `John`

```jsx
import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch()  // some api fetch url
      .then(response => response.json)
      .then(data => {
          this.setState({
              character:data,
              loading:true
            })
        })
  }

  render(){
    const text = this.state.loading ? "loading..." : this.state.character.name
    return{
      <div> {text} </div>
    }
  }
}
```

This will return the character name when finished loading, but if there is slow internet, it will show the text loading while it loads.


# Forms
