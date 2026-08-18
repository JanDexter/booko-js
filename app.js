// Booko - a small buko juice ordering page.
// Plain HTML, CSS and JavaScript. No build step, no server.

// The banner text lives on this one line and nowhere else in the app.
const HEADER = "Booko";

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
  }
];

// Which flavor the open form is booking. -1 means the form is closed.
var selectedFlavorIndex = -1;

var flavorList = document.getElementById("flavorList");
var bookingPanel = document.getElementById("bookingPanel");
var bookingTitle = document.getElementById("bookingTitle");
var bookingPrice = document.getElementById("bookingPrice");
var bookingForm = document.getElementById("bookingForm");

var nameInput = document.getElementById("customerName");
var dateInput = document.getElementById("deliveryDate");

// Prices always print as "PHP 45.00": two decimals, no currency symbol.
function formatPrice(amount) {
  return "PHP " + amount.toFixed(2);
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
  bookingPrice.textContent = formatPrice(flavor.price) + " each";

  bookingForm.reset();
  bookingPanel.classList.remove("hidden");

  bookingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  nameInput.focus();
}

document.getElementById("headerText").textContent = HEADER;
showFlavors();
