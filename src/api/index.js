const data = [
	{ name: 'Orange Juice', category: 'Drinks', price: 14.99 ,onClick:false},
	{ name: 'Apples', category: 'Fruits', price: 4.99 ,onClick:false},
	{ name: 'Tomatos', category: 'Vegitables', price: 6.99 ,onClick:false },
	{ name: 'Coffee', category: 'Drinks', price: 10.99  ,onClick:false},
	{ name: 'Sweet Paper', category: 'Vegitables', price: 7.99 ,onClick:false },
	{ name: 'Grapes', category: 'Fruits', price: 13.99 ,onClick:false },
]
export function getData() {

	return new Promise((resolve) => {
		setTimeout(() => { resolve(data) }, 2000)
	})
}