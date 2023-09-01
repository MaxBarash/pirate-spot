const version = Date.now()
function loadScriptDI(){
    const injection = [
        'https://pirate-spot.lenddev.com.ua/index.js'
    ]
    let timeCounter = 0
    injection.forEach(item => {
        const element = document.createElement("script")
        element.src = `${item}?v=${version}`
        timeCounter += 300
        setTimeout(()=>{
            document.querySelector('body').appendChild(element)
        }, timeCounter)
    })
}
loadScriptDI()