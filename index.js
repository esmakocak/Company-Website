// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .cards");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(cards => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(cards.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return cards.classList.replace("hide", "show");
        }
        cards.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));