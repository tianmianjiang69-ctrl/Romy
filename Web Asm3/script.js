// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

(() => {
  const root  = document.getElementById('reviews-355');
  if (!root) return;

  const track = root.querySelector('.cs-track');
  const prev  = root.querySelector('.cs-prev');
  const next  = root.querySelector('.cs-next');
  if (!track) return;

  const scrollByViewport = (dir) => {
    const amount = Math.max(track.clientWidth * 0.9, 320);
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  prev && prev.addEventListener('click', () => scrollByViewport(-1));
  next && next.addEventListener('click', () => scrollByViewport(1));

  root.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      track.scrollBy({ left: e.deltaY, behavior: 'auto' });
      e.preventDefault();
    }
  }, { passive: false });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  scrollByViewport(-1);
    if (e.key === 'ArrowRight') scrollByViewport(1);
  });
})();
