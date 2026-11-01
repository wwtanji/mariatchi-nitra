const ampButton = document.querySelector('[data-amp]');
const ampArt = document.querySelector('.amp');

ampButton.addEventListener('click', () => {
  const turnedOn = ampArt.classList.toggle('is-on');
  ampButton.setAttribute('aria-pressed', String(turnedOn));
  ampButton.textContent = turnedOn ? 'Vypnúť aparát' : 'Zapnúť aparát';
});
