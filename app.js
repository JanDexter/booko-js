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

var flavorList = document.getElementById("flavorList");

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

    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(price);

    flavorList.appendChild(card);
  }
}

document.getElementById("headerText").textContent = HEADER;
showFlavors();
