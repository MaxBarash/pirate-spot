const DOMAIN_URL = 'https://www.goolglobal.com/files/pirate-spot'
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
				.querySelector('head')
				.insertAdjacentHTML(
					'beforeend',
					`<link rel='stylesheet' href='${DOMAIN_URL}/components/${item}/style.css?v=${version}'>`
				)
		})
	}
	loadStyleDI(scriptsCss)
}
