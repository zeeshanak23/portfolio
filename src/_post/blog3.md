---
title: 'What are React Hooks'
excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
coverImage: '/images/useState.jpg'
date: '2024-01-26T05:35:07.322Z'
author:
  name: 'Md Zeeshan'
  picture: '/images/profile.jpeg'
ogImage:
  url: ''
---

## What are React Hooks?

Hooks are the JavaScript utility functions provided by React that let you use different React features from your components. Hooks can be of two forms:

Built-in — provided by React.

Custom — created by developers, abstracting reusable logic.

Let us discuss about most commonly used built-in React Hook i.e. useState.

# State Hooks

In React, components need to “remember” things. Why? Because when React re-renders the component, it renders it from scratch. Local variables do not retain the data between renders. State lets a component remember information. This is the reason we need to use state variables.

Here, the useState() is the hook which takes in the initial value of variable named state as an argument.

The useState returns an array of exactly two values, state and setState.

state — The current state variable. During the first render, it will take the value as initState.

setState — You cannot update the state variable directly. useState hook provides you a set function that lets you update the state variable. When you call this function with a new value, it triggers a re-render of the component, updating the state to the new value.

Think of different real-life situations where useState can make your React projects more powerful. Try it out yourself by practicing different scenarios!

Thank you for reading, and Happy Coding!
