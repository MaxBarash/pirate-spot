const DOMAIN_URL = 'https://pirate-spot.lenddev.com.ua'
const version = Date.now()
{
    function loadScriptDI(){
        const injection = [
            'common'
        ]
        injection.forEach(item => {
            const element = document.createElement("script")
            element.src = `${DOMAIN_URL}/components/${item}/script.js?v=${version}`
            document.querySelector('body').appendChild(element)
        })
    }
    loadScriptDI()
}