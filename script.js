"use strick";

// ELEMENTS
const submitBtn = document.querySelector(".submit");

const rateBtns = document.querySelectorAll(".feedback");

const cardContainer = document.querySelector(".card-container");

// CHOICEN RATE
let rate;
let id;

// GET DATASET ID AND TOGEL ACTIVE CLASS
const getId = (e) => {
  id = e.dataset.id;
  removeActive();
  e.classList.toggle("active");
};
// REMOVE ACTIVE CLASS
const removeActive = () => {
  rateBtns.forEach((el) => {
    el.classList.remove("active");
  });
};

// CREATE A THANKS WITH THE GIVEN RATE
const createThanks = (e) => {
  const html = `
    
            <div class="icon-container">
                <img src="images/illustration-thank-you.svg" alt="" />
            </div>

            <div class="your-rate-container">
                <p>You selected ${rate} out 5</p>
            </div>
            <div class="thanks-container">
                <h1>Thank you!</h1>
                <p>
                We appreciate you taking the time to give a rating. If you ever need
                more support, don’t hesitate to get in touch!
                </p>
            </div>
      `;

  cardContainer.innerHTML = "";
  cardContainer.innerHTML = html;
};
// RESET RATE
const reset = () => {
  id = "";
  rate = "";
};
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
 
  if (id) rate = id;
  if (rate) {
    if (rate) createThanks();

    // REMOVE ACTIVE
    removeActive();
    reset();
  }
});
