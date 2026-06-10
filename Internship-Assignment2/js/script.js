const privileges = [
  {
    title: "ACTIVATION VOUCHER",
    amount: "₹1,500 OFF",
    brand: "Reliance Digital"
  },

  {
    title: "ENJOY BENEFITS",
    amount: "₹500 OFF",
    brand: "BookMyShow"
  },

  {
    title: "APPLE OFFER",
    amount: "₹7,000 OFF",
    brand: "Apple"
  },

  {
    title: "TRAVEL OFFER",
    amount: "₹2,000 OFF",
    brand: "Ixigo"
  }
];

let current = 1;

function createCard(data) {
  return `
    <h3>${data.title}</h3>

    <p>Worth up to</p>

    <span>${data.amount}</span>

    <div class="brand">
      ${data.brand}
    </div>
  `;
}

function renderCards() {

  const left =
    (current - 1 + privileges.length)
    % privileges.length;

  const right =
    (current + 1)
    % privileges.length;

  document.querySelector(".left-card")
    .innerHTML = createCard(privileges[left]);

  document.querySelector(".active-card")
    .innerHTML = createCard(privileges[current]);

  document.querySelector(".right-card")
    .innerHTML = createCard(privileges[right]);
}

document
  .getElementById("next")
  .addEventListener("click", () => {

    current =
      (current + 1)
      % privileges.length;

    renderCards();

  });

document
  .getElementById("prev")
  .addEventListener("click", () => {

    current =
      (current - 1 + privileges.length)
      % privileges.length;

    renderCards();

  });

renderCards();