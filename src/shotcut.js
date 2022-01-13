const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// fs = require('fs'),
//  const $ = require('jquery')
// path = require('path');

// const iPhone = devices['iPhone 6'];


let shotcut = async (url, opt, cb) => {

  // const browser = await puppeteer.launch({
  //   // executablePath: '/opt/google/chrome/chrome',
  //   headless: true,
  // });

  console.log('进入截屏应用：', url, opt)

  const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' });

  const page = await browser.newPage();
  // await page.emulate(iPhone);
  await page.setJavaScriptEnabled(true);
  await page.goto(url, {
    waitUtil: "networkidle0"
  });
  // page.$('body').prepend(`<div>机密数据请勿外传！${new Date()}</div>`)

  if (opt.isMark) {
    let arr = await page.evaluate(() => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', `<div style="line-height: 100px;font-size: 30px;z-index: 66666666666;color: rgba(200,0,0,.5);position: fixed;">机密数据请勿外传！Sat Feb 27 2021 17:31:22 GMT+0800 (中国标准时间)</div>`);
      return 55
    });
  }
  await page.waitFor(1000 * (+opt.wait || 20))


  let imgStr = await page.screenshot({ fullPage: true, encoding: opt.encoding == 'binary' ? 'binary':'base64' });

  cb((opt.encoding != 'binary'? 'data:image/png;base64,':'') + imgStr.toString())

  console.log(imgStr)
  browser.close()
};



exports.shotcut = shotcut