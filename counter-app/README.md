# React Counter App

Minimal counter app built with React and Vite. This README contains concise course notes and a short description of how the counter was implemented.

## Features

- Simple counter with increment and decrement
- Component-based structure
- Small, focused example to demonstrate core React concepts

## How this Counter App is implemented

- State: `useState` in `src/App.jsx` stores the `count` value and exposes `add` and `subtract` handlers.
- Component: a `Counter` component (in `src/components/Counter.jsx`) was created to render the UI and buttons.
- Props: `count`, `add`, and `subtract` are passed from `App` to `Counter` as props to keep UI and logic separated.
- Styling: intended to use Tailwind CSS utility classes on JSX elements for rapid styling. (If Tailwind is not yet configured, install and configure Tailwind/PostCSS per its docs.)
- Extensibility: the app structure makes it easy to add hooks (custom data hooks), context, or Redux for larger state needs.

## Run locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Notes / Next steps

- To enable Tailwind CSS, follow the official Tailwind + Vite setup and add utility classes to components.
- Consider adding a custom hook for persisting the counter (localStorage) or connecting to Redux for global state examples.

---
