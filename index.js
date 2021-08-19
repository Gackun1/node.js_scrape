const request = require('request');
const { JSDOM } = require('jsdom');

//リクエスト先URL
const url = 'https://tenki.jp/';

request(url, (e, response, body) => {
	if (e) { console.error(e) };

	try {
		const document = new JSDOM(body).window.document

		const news = document.querySelector('.top-notice-news a');
		const newsText = news.textContent;
		const newsUrl = news.getAttribute('href');

		console.log(`text:${newsText}\nURL:${newsUrl}`);
	} catch (e) {
		console.error(e)
	}
});