function orderTotal(fetch, order) {
  fetch(
    'http://apilayer.net/api/rate?access_key=62fa34be411777b74645bb5006a2d3fd&country_code=DE'
  );
  return Promise.resolve(
    order.items.reduce((prev, cur) => prev + cur.price * (cur.quantity || 1), 0)
  );
}
module.exports = orderTotal;
