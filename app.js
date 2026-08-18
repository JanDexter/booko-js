// Booko - a small buko juice ordering page.
// Plain HTML, CSS and JavaScript. No build step, no server.

// The banner text lives on this one line and nowhere else in the app.
const HEADER = "Booko - fresh buko, booked daily";

var LARGE_SURCHARGE = 15.00;

var flavors = [
  {
    name: "Classic Buko",
    description: "Fresh coconut water and young coconut meat",
    price: 45.00
  },
  {
    name: "Buko Pandan",
    description: "Coconut juice infused with pandan",
    price: 55.00
  },
  {
    name: "Buko Lychee",
    description: "Coconut juice with lychee bits",
    price: 60.00
  },
  {
    name: "Buko Melon",
    description: "Coconut juice with melon bits",
    price: 60.00
  }
];

// Which flavor the open form is booking. -1 means the form is closed.
var selectedFlavorIndex = -1;

var flavorList = document.getElementById("flavorList");
var bookingPanel = document.getElementById("bookingPanel");
var bookingTitle = document.getElementById("bookingTitle");
var bookingPrice = document.getElementById("bookingPrice");
var bookingForm = document.getElementById("bookingForm");
var cancelButton = document.getElementById("cancelButton");
var confirmation = document.getElementById("confirmation");

var nameInput = document.getElementById("customerName");
var quantityInput = document.getElementById("quantity");
var dateInput = document.getElementById("deliveryDate");

var nameError = document.getElementById("nameError");
var quantityError = document.getElementById("quantityError");
var dateError = document.getElementById("dateError");

// Today as yyyy-MM-dd in the local timezone. Built by hand because
// toISOString() converts to UTC and can shift the day.
function todayAsText() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  return now.getFullYear() + "-" + padTwo(month) + "-" + padTwo(day);
}

function padTwo(number) {
  if (number < 10) {
    return "0" + number;
  }
  return "" + number;
}

// Prices always print as "PHP 45.00": two decimals, no currency symbol.
function formatPrice(amount) {
  return "PHP " + amount.toFixed(2);
}

function selectedSize() {
  var choices = document.getElementsByName("size");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      return choices[i].value;
    }
  }
  return "regular";
}

function unitPrice(flavor, size) {
  if (size === "large") {
    return flavor.price + LARGE_SURCHARGE;
  }
  return flavor.price;
}

function showFlavors() {
  for (var i = 0; i < flavors.length; i++) {
    var flavor = flavors[i];

    var card = document.createElement("article");
    card.className = "flavor-card";

    var heading = document.createElement("h3");
    heading.textContent = flavor.name;

    var description = document.createElement("p");
    description.className = "desc";
    description.textContent = flavor.description;

    var price = document.createElement("p");
    price.className = "price";
    price.textContent = formatPrice(flavor.price);

    var bookButton = document.createElement("button");
    bookButton.className = "btn btn-book";
    bookButton.type = "button";
    bookButton.textContent = "Book";
    // The index rides along on the button so the click knows which flavor
    // it belongs to.
    bookButton.setAttribute("data-index", i);
    bookButton.addEventListener("click", function () {
      openForm(Number(this.getAttribute("data-index")));
    });

    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(bookButton);

    flavorList.appendChild(card);
  }
}

function openForm(index) {
  selectedFlavorIndex = index;
  var flavor = flavors[index];

  bookingTitle.textContent = "Book " + flavor.name;
  bookingPrice.textContent =
    formatPrice(flavor.price) + " regular, " +
    formatPrice(flavor.price + LARGE_SURCHARGE) + " large";

  bookingForm.reset();
  clearErrors();
  confirmation.classList.add("hidden");
  bookingPanel.classList.remove("hidden");

  // The date picker should not offer days that already passed.
  dateInput.setAttribute("min", todayAsText());

  bookingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  nameInput.focus();
}

function closeForm() {
  selectedFlavorIndex = -1;
  bookingPanel.classList.add("hidden");
  clearErrors();
}

function clearErrors() {
  nameError.textContent = "";
  quantityError.textContent = "";
  dateError.textContent = "";
}

// Checks every field and shows all problems at once.
// Returns true only when the booking is good to go.
function formIsValid() {
  clearErrors();
  var valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  }

  var quantityText = quantityInput.value.trim();
  if (quantityText === "") {
    quantityError.textContent = "Please enter a quantity.";
    valid = false;
  } else if (!/^[0-9]+$/.test(quantityText) || Number(quantityText) < 1) {
    quantityError.textContent = "Quantity must be a whole number, at least 1.";
    valid = false;
  }

  if (dateInput.value === "") {
    dateError.textContent = "Please pick a delivery date.";
    valid = false;
  } else if (dateInput.value < todayAsText()) {
    // yyyy-MM-dd sorts the same way it reads, so a text compare works.
    dateError.textContent = "Delivery date cannot be in the past.";
    valid = false;
  }

  return valid;
}

function submitBooking(event) {
  // Stops the browser from reloading the page on submit, which would wipe
  // out everything the customer typed.
  event.preventDefault();

  if (!formIsValid()) {
    return;
  }

  var flavor = flavors[selectedFlavorIndex];
  var customerName = nameInput.value.trim();
  var quantity = Number(quantityInput.value.trim());
  var deliveryDate = dateInput.value;
  var total = unitPrice(flavor, selectedSize()) * quantity;

  confirmation.textContent =
    "Booked! " + flavor.name + " x" + quantity + " " + formatPrice(total) +
    " for " + customerName + ", delivering on " + deliveryDate + ".";
  confirmation.classList.remove("hidden");

  bookingPanel.classList.add("hidden");
  selectedFlavorIndex = -1;
  confirmation.scrollIntoView({ behavior: "smooth", block: "center" });
}

bookingForm.addEventListener("submit", submitBooking);
cancelButton.addEventListener("click", closeForm);

document.getElementById("headerText").textContent = HEADER;
showFlavors();
