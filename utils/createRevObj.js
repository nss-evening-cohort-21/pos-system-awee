const createRevObj = (arr, beginDate, endDate) => {
  const totalRevenue = arr.map((item) => Number(item.total)).reduce((a, b) => a + b, 0);
  const totalTips = arr.map((item) => Number(item.tip)).reduce((a, b) => a + b, 0);
  const combinedRevenue = totalRevenue + totalTips;
  const dateArr = arr.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  let earliestDate = '';
  let latestDate = '';
  if (beginDate === '') {
    earliestDate = dateArr[0].date;
  } else {
    earliestDate = new Date(beginDate + 86400000).toLocaleDateString();
  }
  if (endDate === '') {
    latestDate = dateArr[dateArr.length - 1].date;
  } else {
    latestDate = new Date(endDate).toLocaleDateString();
  }
  const revObj = {
    combinedRevenue,
    totalRevenue,
    totalTips,
    callInOrders: arr.filter((item) => item.orderType === 'phone').length,
    walkInOrders: arr.filter((item) => item.orderType === 'in-person').length,
    cashOrders: arr.filter((item) => item.paymentType === 'cash').length,
    checkOrders: arr.filter((item) => item.paymentType === 'check').length,
    debitOrders: arr.filter((item) => item.paymentType === 'debit').length,
    creditOrders: arr.filter((item) => item.paymentType === 'credit').length,
    mobileOrders: arr.filter((item) => item.paymentType === 'mobile').length,
    earliestDate,
    latestDate
  };
  return revObj;
};

export default createRevObj;
