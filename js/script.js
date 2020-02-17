var cards = document.querySelectorAll(".cards_item, .cards_item__caption a");

for (var i = 0; i < cards.length; i++) {

  cards[i].addEventListener('click', function(e) {
    e.preventDefault();

    var parent = this.parentNode;
    if (!this.classList.contains('cards_item'))
    {
      parent = parent.parentNode;
    }

    var productCheckbox = parent.querySelector(".product_checkbox:not(:disabled)");
    if (productCheckbox != null)
    {
      productCheckbox.checked = !productCheckbox.checked;
      if (this.classList.contains("cards_item")) {
        this.classList.add("just_selected");
      }
    }
  });

  cards[i].addEventListener('mouseleave', function(e) {
    this.classList.remove("just_selected");
  });

}
