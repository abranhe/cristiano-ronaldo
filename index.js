'use strict';

const got = require('got');

const buildHtml = type => `</span> <span class="type">${type}</span>`;
const getNumber = (str, digits = 3) => str.slice(str.length - digits);

module.exports = async () => {
	try {
		const res = await got('https://messivsronaldo.net/all-time-stats/');
		const htmlBlock = res.body
			.split('Cristiano Ronaldo All Time Career Goals')[1]
			.split('article')[0];

		const extras = htmlBlock
			.split('extras">')[1]
			.split('</ul>')[0]
			.split('<li>');

		extras.shift();

		return {
			goals: Number(getNumber(htmlBlock.split(buildHtml('Goals'))[0])),
			assists: Number(getNumber(htmlBlock.split(buildHtml('Assists'))[0])),
			apps: Number(getNumber(htmlBlock.split(buildHtml('Apps'))[0])),
			penaltis: Number(getNumber(extras[0].split('</span>')[0])),
			penaltisMissed: Number(getNumber(extras[0].split(' missed')[0], 2)),
			hatTricks: Number(getNumber(extras[1].split('</span>')[0], 2)),
			goalRatio: Number(getNumber(extras[2].split('</span>')[0], 4))
		};
	} catch (error) {
		if (error) {
			throw new Error('Something went wrong while fetching the data.');
		}
	}
};
