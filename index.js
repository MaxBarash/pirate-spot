const DOMAIN_URL = 'https://pirate-spot.lenddev.com.ua'
const version = Date.now()
{
    function loadScriptDI(){
        const injection = [
            '/components/common/script.js'
        ]
        let timeCounter = 0
        injection.forEach(item => {
            const element = document.createElement("script")
            element.src = `${DOMAIN_URL}${item}?v=${version}`
            timeCounter += 300
            setTimeout(()=>{
                document.querySelector('body').appendChild(element)
            }, timeCounter)
        })
    }
    loadScriptDI()
}