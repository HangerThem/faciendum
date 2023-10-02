"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .dark {
  --primary-color: #111;
  --secondary-color: #fff;
  --tertiary-color: #444;
  --quaternary-color: #222;
  }

  .light {
    --primary-color: #fff;
    --secondary-color: #111;
    --tertiary-color: #ccc;
    --quaternary-color: #eee;
  }

  html {
    background-color: var(--primary-color);
    font-family: "K2D", sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  button {
    background-color: var(--primary-color);
    font-family: "K2D", sans-serif;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    padding: 0.625rem 1.25rem;
    border-radius: 0.3125em;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    background-color: var(--quaternary-color);
    width: 100%;
    height: 5rem;
    margin: 0;
  }

  nav h1 {
    color: inherit;
  }

  nav > * {
    margin: 0 1.25rem;
  }

  nav button {
    margin: 0 0.625rem;
  }

  dialog {
    border-radius: 0.9375em;
    border: none;
  }

  dialog form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    padding: 1.25rem;
    background-color: #fff;
    border-radius: 0.9375em;
    height: 10.9375rem;
    border: none;
  }

  dialog form input {
    border: none;
    outline: none;
    border-bottom: 1px solid #222;
    font-family: "K2D", sans-serif;
  }
`;

export default GlobalStyle;
