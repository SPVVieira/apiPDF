const puppeteer = require("puppeteer");

const toPDF = (async (dados) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-notifications', '--no-sandbox', '--disable-setuid-sandbox', '--disable-features=IsolateOrigins,site-per-process'],
        ignoreDefaultArgs: ['--mute-audio']
    });
    const page = await browser.newPage();
    await page.goto(dados.url);
    await page.waitForTimeout(1000);
    var caminho = dados.local + '/' + dados.nomePDF + '.pdf';
    await page.pdf({path: caminho, format: 'A4'});
    await page.waitForTimeout(1000);
    await page.close();
    await browser.close();
    return caminho;
});

module.exports = toPDF;