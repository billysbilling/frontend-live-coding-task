# Frontend Live Coding Task

Build a small React app that displays characters from the Rick and Morty API.

API documentation: https://rickandmortyapi.com/documentation

## Tech Stack

- React
- TypeScript
- Material UI
- Vitest + Testing Library
- MSW for API mocking in tests

You may use `fetch` or add a data-fetching library if you prefer.

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Rules

- You may use AI tools for support, but not to generate the full solution.
- Documentation is allowed, including MDN, React docs, Material UI docs, and API docs.
- Keep the code typed. If you are blocked by a TypeScript error, use `any` temporarily and come back to it later.
- Focus on a working solution first. Tests and extra polish are optional if time allows.

## Requirements

1. Fetch the first page of characters from the Rick and Morty API.
2. Display each character using Material UI components.
3. Show the character name, species, and avatar.
4. Add an input field to filter characters by name using the API.
5. Add a button to sort the currently displayed characters alphabetically by name using JavaScript.
6. Add a "Load more" button that fetches the next page and appends it to the current list.
7. Hide or disable the "Load more" button when there are no more pages.

## Optional Improvements

- Refactor and organize the code to keep it readable and easy to extend.
- Add loading, error, and empty states.
- Add one or more tests in `src/__tests__/App.test.tsx`. Use MSW to mock Rick and Morty API responses in tests that cover data fetching behavior.
