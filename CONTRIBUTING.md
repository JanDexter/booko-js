# Contributing to Booko

This repo exists to practise the everyday Git loop. Small changes are the
point - pick one issue, ship one pull request.

You do not have write access here, and you do not need it. You work on your
own fork and send the change back as a pull request.

## The loop

### 1. Fork this repo

On GitHub, click **Fork** at the top right of `JanDexter/booko-js`.

Uncheck **Copy the `main` branch only** before you create the fork. Later labs
use the `promo-banner` branch, and it only comes across if that box is
unchecked.

### 2. Clone your fork

Copy the clone URL from **your** fork - it has your username in it, not
`JanDexter`:

```bash
git clone https://github.com/<your-username>/booko-js.git
```

```bash
cd booko-js
```

Do not download the ZIP. A download has no Git history, so none of the labs
will work.

### 3. Pick an issue

Open the Issues tab and pick one that looks fun. No need to claim it - everyone
works on their own fork, so two people picking the same issue costs nothing.

Comment on the issue if you want to ask a question about it. If ISSUES.md is
your list instead of GitHub, just pick a number.

### 4. Branch

Never work on `main`. Name the branch `feat/<short-name>` after your task:

```bash
git switch main
```

```bash
git pull
```

```bash
git switch -c feat/quantity-field
```

`git switch -c` creates the branch and moves you onto it. Other examples:
`feat/fourth-flavor`, `feat/cancel-button`, `feat/large-size`.

### 5. Change and check

Edit the files, then double-click `index.html` and click through the app.
There are no tests - your eyes are the test. Make sure nothing else broke.

### 6. Commit

Small commits with a plain message that says what changed:

```bash
git add .
```

```bash
git commit -m "Add quantity field to the booking form"
```

### 7. Push to your fork

```bash
git push -u origin feat/quantity-field
```

`origin` is your fork, so this always works - no write access needed.

### 8. Open a pull request

GitHub shows a "Compare & pull request" button after the push. Check the target
before you submit: the base repo is `JanDexter/booko-js` and the base branch is
`main`; the head is your fork and your `feat/...` branch.

In the description:

- say which issue it closes, e.g. `Closes #1`
- say in one line what you changed

Then wait for review. If reviewers ask for changes, commit on the same branch
and push again - the pull request updates itself.

## House rules

- Keep the code beginner-readable. No frameworks, no build step, no
  dependencies. `index.html` must still open by double-clicking it.
- The banner text lives in the `HEADER` constant at the top of `app.js`.
  Change it there and nowhere else.
- Plain ASCII only in text shown on the page - no em dashes, no fancy quotes.
- Prices always print as `PHP 45.00`: the `PHP ` prefix, a space, and two
  decimals.
- Stick to your issue. Spotted something else? Open a new issue for it.

Stuck? Ask. Getting unstuck is part of the workshop.
