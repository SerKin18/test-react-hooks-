const data = [
	{ name: 'Orange Juice', category: 'Drinks', price: 14.99 },
	{ name: 'Apples', category: 'Fruits', price: 4.99 },
	{ name: 'Tomatos', category: 'Vegitables', price: 6.99 },
	{ name: 'Coffee', category: 'Drinks', price: 10.99 },
	{ name: 'Sweet Paper', category: 'Vegitables', price: 7.99 },
	{ name: 'Grapes', category: 'Fruits', price: 13.99 },
]
export function getData() {

	return new Promise((resolve) => {
		setTimeout(() => { resolve(data) }, 2000)
	})
}