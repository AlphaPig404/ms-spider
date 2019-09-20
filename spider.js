const puppeteer = require('puppeteer')

class Spider{
    constructor(){
        this.browser = undefined
        this.mainPage = undefined
    }

    async initBrowser(options){
        this.browser = await puppeteer.launch(options)
    }

    async login({url, name, password}){
        const page = await this.browser.newPage();
        this.mainPage = page
        await page.goto(url);
        const elementHandle = await page.$('#i0116');
        await elementHandle.type(name);
        await elementHandle.press('Enter');
        await page.waitForNavigation();

        const _elementHandle = await page.waitForSelector('#i0118')
        await _elementHandle.type(password);
        await _elementHandle.press('Enter');
        await page.waitForNavigation();

        const _elementHandle1 = await page.waitForSelector('a[tabindex="2"]')
        await _elementHandle1.click()
        await page.waitForNavigation();
    }

    async search(serialNumbers, cb){
        const list = serialNumbers.map(async serialNumber => {
            const page = await this.browser.newPage()
            page.goto(this.mainPage.url())
            await page.waitForNavigation();
            
            const elementHandle = await page.waitForSelector('#txtSerialnumber')
            await elementHandle.type(serialNumber);
            await elementHandle.press('Enter');
    
            await page.waitForNavigation();
            const details = await page.$$eval('.checkWarrantyItem-otherDetails', nodes => nodes.map(n => n.innerText))
            cb && cb(details)
            return details
        })

        const result = await Promise.all(list)
        console.log('complete all.')
        return result
    }
    
}

module.exports = Spider
