const searchInput = document.getElementById('search');
const placesContainer = document.getElementById('placesContainer');
const cards = placesContainer.getElementsByClassName('card');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0];
    if (title) {
      let textValue = title.textContent || title.innerText;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }       
  }
});
