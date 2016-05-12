function defaultDiscountRate() {
	return 0.20;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
	return cost - (cost * discount);
}

// alert(applyDiscount(100, 0.10));

console.log(applyDiscount(100));