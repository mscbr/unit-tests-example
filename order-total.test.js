const orderTotal = require('./order-total');

const emptyFunction = () => {};

it('calls apilayer.net correctly if country code specified', () => {
  let isFakeFetchCaled = false;
  const fakeFetch = url => {
    expect(url).toBe(
      'http://apilayer.net/api/rate?access_key=62fa34be411777b74645bb5006a2d3fd&country_code=DE'
    );
    isFakeFetchCalled = true;
  };
  orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      { name: 'Dragon candy', price: 3, quantity: 1 },
      { name: 'Dragon bat', price: 213, quantity: 2 }
    ]
  }).then(res => {
    expect(isFakeFetchCaled).toBe(true);
  });
});

it('Quantity', () =>
  orderTotal(emptyFunction, {
    items: [{ name: 'Dragon candy', price: 2, quantity: 3 }]
  }).then(result => expect(result).toBe(6)));

it('No quantity specified', () =>
  orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon candy', price: 3 },
      { name: 'Dragon bat', price: 213 }
    ]
  }).then(result => expect(result).toBe(216)));
