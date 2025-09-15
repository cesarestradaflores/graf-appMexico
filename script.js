document.addEventListener('DOMContentLoaded', () => {
  const greenRange = document.getElementById('greenRange');
  const greenBox = document.getElementById('green');
  const greenHex = document.getElementById('greenHex');

  const redRange = document.getElementById('redRange');
  const redBox = document.getElementById('red');
  const redHex = document.getElementById('redHex');

  function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  function updateGreenBox() {
    const g = parseInt(greenRange.value);
    const rgb = `rgb(0, ${g}, 71)`;
    const hex = rgbToHex(0, g, 71);
    greenBox.style.backgroundColor = rgb;
    greenHex.textContent = `${rgb} | ${hex}`;
  }

  function updateRedBox() {
    const r = parseInt(redRange.value);
    const rgb = `rgb(${r}, 17, 38)`;
    const hex = rgbToHex(r, 17, 38);
    redBox.style.backgroundColor = rgb;
    redHex.textContent = `${rgb} | ${hex}`;
  }

  greenRange.addEventListener('input', updateGreenBox);
  redRange.addEventListener('input', updateRedBox);

  updateGreenBox();
  updateRedBox();
});
