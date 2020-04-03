Prototype app created for STRV interview process. Created by Matěj Strnad using `TypeScript/React`.

## Live demo

https://eventio.torfune.now.sh

## Installation

Use `npm` to install dependencies.

```
npm install
```

## Available scripts

Run for development:

```
npm run dev
```

Build for production:

```
npm run build
```

Run production build:

```
npm start
```

Run unit tests with Jest:

```
npm test
```

Run ESLint:

```
npm run lint
```

Compile TypeScript:

```
npm run type-check
```

## Environment variables

To run project locally you have to create `.env` file in a root directory with following variables:

```
APP_API_KEY=YOUR_STRV_API_KEY
```

## Testing

I have written unit tests for `utils` functions and `redux` reducers. However, for future development I would also consider writing E2E tests using `Cypress` and component snapshot tests using `Jest` and `React Testing Library`.

## CI/CD

The project uses `GitHub Actions` to run tests, linter and typecheck in the cloud. Automatic deployment is setup using `Zeit Now`.

## State management

I decided to use `Redux` with the official [Redux Toolkit](https://redux-toolkit.js.org) library to handle global state management.

## What needs to be done

We now need to implement following features to finish the MVP:

- Sign Up

  - Use `CoverImageLayout` component
  - Create form component with `Formik`
  - Connect to `Redux` and `API`

- Event Detail

  - Create page/layout
  - Use `EventItemCard` component
  - Connect to `Redux` and `API`

- My Profile

  - Create page/layout
  - Use `EventList` component
  - Connect to `Redux` and `API`

- Reset Password
  - Haven't found any designs on that yet

Last but not least, I would also recommend implementing an error handling mechanism for failed AJAX requests. Check out `React Error Boundaries`.

Good luck.
