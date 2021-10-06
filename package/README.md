# Svelte-spectre

UIkit based on spectre.css compiled & powered by SvelteJS.

### Required:

-   `node -v >= 15`
-   `npm -v >= 7`

## Install

```sh
# install dependensy
npm install
```

## Building package

```sh
# build components for GUI in package folder
npm run package
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an
[adapter](https://kit.svelte.dev/docs#adapters) for your target environment.
Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether
> you installed an adapter. This should _not_ be used to serve your app in
> production.