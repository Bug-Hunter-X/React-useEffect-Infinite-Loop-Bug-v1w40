# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.  The `useEffect` hook, when used with an empty dependency array (`[]`), is intended to run only once after the initial render. However, the provided example attempts to update the state within the `useEffect` itself, causing a continuous loop of re-renders.