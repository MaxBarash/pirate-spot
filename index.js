const DOMAIN_URL = 'https://pirate-spot.lenddev.com.ua'
const version = Date.now()
{
	const scriptsJs = ['common']
	function loadScriptDI(arrScripts) {
		arrScripts.forEach(item => {
			const element = document.createElement('script')
			element.src = `${DOMAIN_URL}/components/${item}/script.js?v=${version}`
			document.querySelector('body').appendChild(element)
		})
	}
	loadScriptDI(scriptsJs)

	const scriptsCss = ['common']
	function loadStyleDI(arrScripts) {
		arrScripts.forEach(item => {
			document
				.querySelector('body')
				.insertAdjacentElement(
					'beforeend',
					`<link rel='stylesheet' href='${DOMAIN_URL}/components/${item}/style.css?v=${version}'>`
				)
		})
	}
	loadStyleDI(scriptsCss)
}
