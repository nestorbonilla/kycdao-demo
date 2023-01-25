# KYCDAO Demo

Celo Composer demo using KYCDAO.

## Setup & Intallation

```bash
yarn
```

Run `yarn` or `npm install` to install all the required dependencies to run the dApp.

- To start the dApp, run the following command.

```bash
yarn react-dev
```

## Dependencies

### Default
- [Next.js](https://nextjs.org/) app framework
- [TailwindCSS](https://tailwindcss.com/) for UI
- [KYCDAO](https://kycdao.xyz/) for KYC

### Frontend web3 library
- [rainbowkit-celo](https://www.npmjs.com/package/@celo/rainbowkit-celo), a plugin to help rainbowkit developers support the CELO protocol faster.

## Architecture

- `/pages` includes the main application components (specifically `index.tsx` and `_app.tsx`)
  - `_app.tsx` includes configuration
  - `index.tsx` is the main page of the application
- `/components` includes components that are rendered in `index.tsx`
- `/public` includes static files
