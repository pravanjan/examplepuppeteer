'use strict'
const puppeteer = require('puppeteer');

const chromeOptions = {
    headless:false
 };


(async () => {
    try{
        const browser = await puppeteer.launch(chromeOptions);
        const page = await browser.newPage();
        await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
        await browser.close();
    }
    catch(err){
        console.log('Error while processing',err);
    }
   
  })();