
## What's inside?
   This repository contains react app. This app fetches users and displays them as a list.
   The core functionality is to create a request to the API (https://jsonplaceholder.typicode.com/users) for information about users.
   Loading indicator is present.
   Whenever an error occurs, the app will display an error page with the possibility to trigger a request for users again.
   The user also can filter results from the API.
   To provide better UX, after providing search criteria, the CSS property "opacity" is changed to a lower value, to indicate that the app is filtering. 

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [MSW](https://mswjs.io/)
- [Testing Library](https://testing-library.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [Redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- [Theme-ui](https://github.com/system-ui/theme-ui)

## Getting started

1. Create the project.

   ```bash
   git clone https://github.com/bartoszgolebiowski/placeholder-search.git
   ```

2. Access the project directory.

   ```bash
   cd placeholder-search
   ```

3. Install dependencies.

   ```bash
   yarn install
   ```

4. Serve with hot reload at http://localhost:3000.
   ```bash
   yarn dev
   ```

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Lint commands

  ```bash
  yarn lint
  ```

### Build commands

```bash
yarn build
```

### Test commands

- Run tests
  ```bash
  yarn test
  ```
- Watch tests
  ```bash
  yarn test:watch
  ```

## License

This project is licensed under the MIT License.
