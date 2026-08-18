# Booko

Booko is a tiny buko juice ordering page: pick a flavor, enter your name and a
delivery date, and get a booking confirmation.

This is the JavaScript companion to the Booko Java workshop app. Same menu,
same prices, same confirmation wording - different language.

## Run it

There is no build step, no server, and nothing to install.

1. Fork this repo on GitHub (uncheck "Copy the `main` branch only" so
   `promo-banner` comes across too).
2. Clone your fork:

   ```bash
   git clone https://github.com/<your-username>/booko-js.git
   ```

3. Double-click `index.html`.

That is it. The page opens in your browser and works offline. Clone it, do not
download the ZIP - a download has no Git history, and the labs need it.

## Files

| File         | What it holds                                   |
|--------------|-------------------------------------------------|
| `index.html` | The page structure: banner, menu, booking form   |
| `style.css`  | All the styling, including the CSS coconut       |
| `app.js`     | The flavor list, validation, and confirmation    |

## The menu

| Flavor        | Description                                  | Price      |
|---------------|----------------------------------------------|------------|
| Classic Buko  | Fresh coconut water and coconut meat         | PHP 45.00  |
| Buko Pandan   | Coconut juice infused with pandan            | PHP 55.00  |
| Buko Lychee   | Coconut juice with lychee bits               | PHP 60.00  |

## Branches

| Branch         | What it is                                                    |
|----------------|---------------------------------------------------------------|
| `main`         | The base app, with the six tasks still unsolved               |
| `promo-banner` | Changes the `HEADER` line only - merge it to practise conflicts |
| `solutions`    | Worked answers, one commit per issue. Look only when stuck    |

## Workshop tasks

This app is deliberately unfinished. Six starter tasks are open as GitHub
issues labelled **good first issue**, and listed in [ISSUES.md](ISSUES.md) as a
fallback.

Maintainers can open the issues in one go:

```bash
./scripts/create-issues.sh
```

New here? Read [CONTRIBUTING.md](CONTRIBUTING.md) first - it walks through the
whole claim -> branch -> commit -> push -> pull request loop.
