const DOMAIN_URL = 'https://www.goolglobal.com/files/pirate-spot'
const version = Date.now()
{
	function isMainPage() {
		return (
			window.location.pathname === '/en/' || window.location.pathname === '/hi'
		)
	}
	const scriptsJs = ['common']
	const scriptsCss = ['common']
	if (isMainPage() && document.querySelector('.l7--wrapper-stories')) {
		if (!scriptsCss.includes('banner')) scriptsCss.push('banner')
	}
	function loadScriptDI(arrScripts) {
		arrScripts.forEach(item => {
			const element = document.createElement('script')
			element.src = `${DOMAIN_URL}/components/${item}/script.js?v=${version}`
			document.querySelector('body').appendChild(element)
		})
	}
	loadScriptDI(scriptsJs)
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
