const calc = () => {

	fetch('./mozaika.html')
		.then(response => response.text())
		.then(data => {

			const noSpace = data.replace(/\s{2,}/g, ' ');

			const labels = noSpace.match(/<label for="t[1-9]">.*?<\/label>/gi);

			const arr = [];

			labels.forEach(item => {
				const reg = item.match(/>\d.*?</gi);
				const month = reg[0].replace(/\D*/g, '');
				const price = reg[1].replace(/\D*/g, '');
				console.log(arr);

				arr.push(month['month']);
				arr.push(price['price']);
			});
			console.log(arr);
			// console.log('map: ', map);
			// map.delete(4);
			// console.log('map: ', map);
		})
		.catch();

};

export default calc;
