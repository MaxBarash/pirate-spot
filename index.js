const DOMAIN_URL = 'https://www.goolglobal.com/files/pirate-spot'
const version = Date.now()
{
	setTimeout(init, 1000)
	function isMainPage() {
		return window.location.pathname === '/en/' || window.location.pathname === '/hi'
	}
	function init() {
		const scriptsJs = ['common']
		const scriptsCss = ['common']
		if (isMainPage() && document.querySelector('.l7--wrapper-stories')) {
			if (!scriptsCss.includes('banner')) scriptsCss.push('banner')
		}
		if (document.querySelector('.ps_app_downloads')) {
			if (!scriptsCss.includes('app_downloads')) scriptsCss.push('app_downloads')
		}
		if (document.querySelector('.ps_apps_page_banner')) {
			if (!scriptsCss.includes('app_page_banner')) scriptsCss.push('app_page_banner')
		}
		if (document.querySelector('.ps_content')) {
			if (!scriptsCss.includes('content')) scriptsCss.push('content')
			if (!scriptsJs.includes('content')) scriptsJs.push('content')
		}
		if (document.querySelector('.ps_events')) {
			if (!scriptsCss.includes('events')) scriptsCss.push('events')
		}
		if (document.querySelector('.ps_games')) {
			if (!scriptsCss.includes('games')) scriptsCss.push('games')
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
}
