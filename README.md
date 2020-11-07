## Getting Started with nextJS

To Create a new project run the following command:

```bash
npx create-next-app
# or
yarn create next-app
```

this command will prompt for some informations about the project like, name and the template, so when you answer the questions, the project dependencies will be installed and you will receive this message:

```bash
Success! Created next-boilerplate at path_to_your_project
Inside that directory, you can run several commands:

  yarn dev
    Starts the development server.

  yarn build
    Builds the app for production.

  yarn start
    Runs the built app in production mode.

We suggest that you begin by typing:
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Using typescript on project

1. create a `tsconfig.json` file (can be an empty file)

2. run the following command:

```bash
npm run dev
# or with yarn
yarn dev
```
this command will output the this message:

```bash
ready - started server on http://localhost:3000
It looks like you're trying to use TypeScript but
do not have the required package(s) installed.

Please install typescript, @types/react, and @types/node by running:

        npm install --save-dev typescript @types/react @types/node
        yarn add --dev typescript @types/react @types/node

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).
```

so we need to install the dependencies of typescript that we need in the project

```bash
npm install --save-dev typescript @types/react @types/node
# or with yarn
yarn add --dev typescript @types/react @types/node
```

3. run the command above to make the next populate `tsconfig.json` with the default typescript options.

```bash
npm run dev
# or with yarn
yarn dev
```

## styled component on NextJS

1. install the dependencies

```bash
npm i styled-components

# just when using typescript
npm i --save-dev @types/styled-components

# or with yarn
yarn add styled-components

# just when using typescript
yarn add -D @types/styled-components
```

2. install the babel plugin

```bash
npm i --save-dev babel-plugin-styled-components

# if you're using yarn
yarn add babel-plugin-styled-components -D
```

3. config the babel plugin

```javascript
"plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true
      }
    ]
  ]
```

4. create a `_document.js` with the following content:

```javascript
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## Links about NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
