

class Nav {

	constructor () {

		this.DOMElement = document.querySelector('nav');

		// Add active class to nav when not on top
		document.addEventListener('scroll', () => {

			if (window.pageYOffset <= 0) {

				this.DOMElement.classList.remove('on_scroll');

			} else {

				this.DOMElement.classList.add('on_scroll');

			}
		});

		return true;
	}


}

export default Nav;
