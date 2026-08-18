# Booko workshop issues

Six starter tasks for the Booko app. Pick one, claim it, and open a pull
request. This file is the fallback list in case GitHub Issues are not
available - the same six tasks live there as "good first issue" tickets.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the claim -> branch -> PR loop.

---

## 1. Add a quantity prompt to the order

Right now every order is fixed at one drink. Add a quantity field to the
booking form and use that quantity in the confirmation message.

Acceptance: The form has a quantity input and the confirmation reflects the
number ordered (e.g. "x3").

---

## 2. Add a fourth flavor to the menu

Booko only sells three flavors today. Add "Buko Melon" - "Coconut juice with
melon bits" - PHP 60.00 to the flavor list.

Acceptance: The flavor list shows four flavors and all four can be booked.

---

## 3. Show the total price in the confirmation

The confirmation message currently only shows the unit price. Multiply price
by quantity and show the total instead.

Acceptance: Booking two or more drinks shows a total price, not just the
per-drink price, in the same PHP %.2f format.

---

## 4. Reject a delivery date in the past

Booko currently accepts any valid date, including ones before today. Validate
the chosen date against today's date and reject past dates.

Acceptance: Picking a past date shows an inline error and does not submit the
booking; today or a future date still works.

---

## 5. Add a "cancel order" menu option

Once a customer starts booking, there is no way to back out. Add a Cancel
button to the booking form.

Acceptance: Clicking Cancel closes the form and returns to the flavor list
without showing a confirmation.

---

## 6. Add a size option (regular / large) with different prices

All drinks are one size today. Add a regular/large toggle to the booking form,
with large adding PHP 15.00 to the unit price.

Acceptance: Choosing large changes the price used in the total; regular keeps
the original price.
