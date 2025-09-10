const formatCurrency = new Intl.NumberFormat(navigator.location, {
  style: "currency",
  currency: "NGN",
});

export { formatCurrency };
