document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className === "toggle-panel") {
      event.target.parentNode.parentNode.classList.toggle('active');
    }
  });
});
