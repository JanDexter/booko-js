#!/usr/bin/env bash
#
# Opens the six Booko workshop tasks as GitHub issues, each labelled
# "good first issue". Safe to re-run: an issue whose title already exists
# is skipped.
#
# Requires the GitHub CLI (https://cli.github.com) and `gh auth login`.
#
# Usage:  ./scripts/create-issues.sh

set -euo pipefail

LABEL="good first issue"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh (GitHub CLI) not found. Install it from https://cli.github.com" >&2
  exit 1
fi

if ! gh repo view >/dev/null 2>&1; then
  echo "Not inside a GitHub repository, or gh is not logged in." >&2
  echo "Run 'gh auth login' and try again from the repo folder." >&2
  exit 1
fi

# Create the label if this repo does not have it yet.
if gh label list --limit 200 | cut -f1 | grep -Fxq "$LABEL"; then
  echo "Label already exists: $LABEL"
else
  echo "Creating label: $LABEL"
  gh label create "$LABEL" --color "7057ff" --description "Good for newcomers"
fi

# Titles that already exist (open or closed), so re-runs skip them.
existing_titles="$(gh issue list --state all --limit 500 --json title --jq '.[].title')"

create_issue() {
  title="$1"
  body="$2"

  if printf '%s\n' "$existing_titles" | grep -Fxq "$title"; then
    echo "Skipping (already exists): $title"
    return
  fi

  echo "Creating: $title"
  gh issue create --title "$title" --body "$body" --label "$LABEL"
}

create_issue "Add a quantity prompt to the order" \
"Right now every order is fixed at one drink. Add a quantity field to the booking form and use that quantity in the confirmation message.

Acceptance: The form has a quantity input and the confirmation reflects the number ordered (e.g. \"x3\")."

create_issue "Add a fourth flavor to the menu" \
"Booko only sells three flavors today. Add \"Buko Melon\" - \"Coconut juice with melon bits\" - PHP 60.00 to the flavor list.

Acceptance: The flavor list shows four flavors and all four can be booked."

create_issue "Show the total price in the confirmation" \
"The confirmation message currently only shows the unit price. Multiply price by quantity and show the total instead.

Acceptance: Booking two or more drinks shows a total price, not just the per-drink price, in the same PHP %.2f format."

create_issue "Reject a delivery date in the past" \
"Booko currently accepts any valid date, including ones before today. Validate the chosen date against today's date and reject past dates.

Acceptance: Picking a past date shows an inline error and does not submit the booking; today or a future date still works."

create_issue "Add a \"cancel order\" menu option" \
"Once a customer starts booking, there is no way to back out. Add a Cancel button to the booking form.

Acceptance: Clicking Cancel closes the form and returns to the flavor list without showing a confirmation."

create_issue "Add a size option (regular / large) with different prices" \
"All drinks are one size today. Add a regular/large toggle to the booking form, with large adding PHP 15.00 to the unit price.

Acceptance: Choosing large changes the price used in the total; regular keeps the original price."

echo "Done."
