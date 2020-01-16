function orderTotal(fetch, order) {
  if (order.country) {
    return fetch(
      `http://apilayer.net/api/rate?access_key=62fa34be411777b74645bb5006a2d3fd&country_code=${order.country}`
    )
      .then(res => res.json())
      .then(data => data.standard_rate)
      .then(
        vat =>
          order.items.reduce(
            (prev, cur) => prev + cur.price * (cur.quantity || 1),
            0
          ) *
          (1 + vat / 100)
      );
  }

  return Promise.resolve(
    order.items.reduce((prev, cur) => prev + cur.price * (cur.quantity || 1), 0)
  );
}
module.exports = orderTotal;
