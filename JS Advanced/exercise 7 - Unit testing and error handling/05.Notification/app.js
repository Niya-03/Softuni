function notify(message) {
  let output = document.getElementById('notification');
  output.textContent = message;
  output.style.display = 'block';
  output.addEventListener('click', () => output.style.display = 'none');
}

