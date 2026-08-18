# Contributing to Booko

This repo exists to practise the everyday Git loop. Small changes are the
point - pick one issue, ship one pull request.

## The loop

### 1. Claim an issue

Open the Issues tab, pick one nobody has claimed, and comment on it:

> I'd like to work on this.

One issue per person at a time. If ISSUES.md is your list instead of GitHub,
say in chat which number you are taking.

### 2. Branch

Never work on `main`. Make a branch named after your task:

```bash
git checkout main
git pull
git checkout -b add-quantity-field
```

### 3. Change and check

Edit the files, then double-click `index.html` and click through the app.
There are no tests - your eyes are the test. Make sure nothing else broke.

### 4. Commit

Small commits with a plain message that says what changed:

```bash
git add .
git commit -m "Add quantity field to the booking form"
```

### 5. Push

```bash
git push -u origin add-quantity-field
```

### 6. Open a pull request

On GitHub, click "Compare & pull request". In the description:

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
