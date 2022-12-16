const currency = (num) => Number(num).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default currency;
