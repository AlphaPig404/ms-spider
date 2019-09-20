// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Spider = require('./spider.js')
let spider 

const button = document.querySelector('#button')

button.addEventListener('click', async function(){
    console.log('start search...')
    const results = await spider.search([
        "002399554157",
        "011657154657",
        "046122680153",
        "040899574553",
        "024708772653",
        "003149481953",
        "000992181153",
        "037361180453",
        "026176674553",
        "008968474653",
        "046457280553",
        "008895571753",
        "040721781853",
        "008284681553",
        "036521472853",
        "026517784453",
        "008805771453",
        "013423171953",
        "040903583253"
    ], (result)=>{
        console.log(result)
    })
})

async function start(){
    spider = new Spider()
    console.log('start initBrowser...')
    await spider.initBrowser({
        headless: true,
        timeout: 60000, 
    })
    console.log('start login...')
    await spider.login({
        url: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=b00d22c0-7298-4e1c-a139-2934dd0a0ba9&redirect_uri=https%3a%2f%2frobo.partners.extranet.microsoft.com&response_mode=form_post&response_type=id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dwl2wCe1t6Rl-dYasZNi6mZGWakiYg4ZaY0-CiQwRhXUdnz-URyly4L6qLvEgQFzHtq2dDdDGmkVXUHzq3Be0TZQ_NO3XR5hmBs2SK6m80RCC3JIXlUDzj3yKrcQ0hChZaR_6B2lvp61Delk-MUQ_t1HEyX3e1tPdwXM75xi-eDYxBjkKpqVMCLos2Aj8QK60DeIBMxhjyk9FeYySpUibGakoWNBQ4jmxXy5663tGszYg4rci2eRHR0xgzgKNcPePMz9dchF6YR2wGHIAUgoNSg&nonce=637044825654804474.ZDFiNDkxMGItYzRiNS00MzllLTk2OGMtOWI0NDE1MGNlOTg4ZGE1MDMyODEtNmQ4OC00Njc0LTkxNzMtOGM4N2I1OWRiYjc4',
        name: 'ee13427384788@outlook.com',
        password: '123123aaaBBB'
    })
    console.log('complete login...')
}

start()



