/**
 * Report Service
 * Generates filtered transaction reports (daily, monthly, date range).
 */

function getDailyReport(date) {
  try {
    if (!date) {
      return errorResponse('Date is required');
    }
    const transactions = readTransactions().filter(function (t) {
      return isSameDay_(t.date, date);
    });
    return successResponse(buildReport_(transactions));
  } catch (e) {
    return errorResponse(e.message);
  }
}

function getMonthlyReport(month, year) {
  try {
    if (!month || !year) {
      return errorResponse('Month and year are required');
    }
    const transactions = readTransactions().filter(function (t) {
      return isInMonth_(t.date, year, month);
    });
    return successResponse(buildReport_(transactions));
  } catch (e) {
    return errorResponse(e.message);
  }
}

function getRangeReport(startDate, endDate) {
  try {
    if (!startDate || !endDate) {
      return errorResponse('Start date and end date are required');
    }
    const transactions = readTransactions().filter(function (t) {
      return isInDateRange_(t.date, startDate, endDate);
    });
    return successResponse(buildReport_(transactions));
  } catch (e) {
    return errorResponse(e.message);
  }
}

function getPeriodReport() {
  try {
    const period = getCurrentPeriod_();
    const transactions = readTransactions().filter(function (t) {
      return isInDateRange_(t.date, period.start, period.end);
    });
    return successResponse(buildReport_(transactions, period.start, period.end));
  } catch (e) {
    return errorResponse(e.message);
  }
}

function buildReport_(transactions, periodStart, periodEnd) {
  const totals = sumByType_(transactions);
  const result = {
    income: totals.income,
    expense: totals.expense,
    balance: totals.net,
    transactions: transactions
  };
  if (periodStart) result.periodStart = periodStart;
  if (periodEnd) result.periodEnd = periodEnd;
  return result;
}

function getCategoryReport(category, filterType, dateFilter) {
  try {
    if (!category) {
      return errorResponse('Category is required');
    }
    let transactions = readTransactions().filter(function (t) {
      return t.category === category;
    });
    if (filterType && filterType !== 'all') {
      transactions = transactions.filter(function (t) {
        return t.type.toLowerCase() === filterType.toLowerCase();
      });
    }
    if (dateFilter) {
      if (dateFilter.period === 'period') {
        const period = getCurrentPeriod_();
        transactions = transactions.filter(function (t) {
          return isInDateRange_(t.date, period.start, period.end);
        });
      } else if (dateFilter.period === 'daily' && dateFilter.date) {
        transactions = transactions.filter(function (t) {
          return isSameDay_(t.date, dateFilter.date);
        });
      } else if (dateFilter.period === 'monthly' && dateFilter.month && dateFilter.year) {
        transactions = transactions.filter(function (t) {
          return isInMonth_(t.date, dateFilter.year, dateFilter.month);
        });
      } else if (dateFilter.period === 'range' && dateFilter.startDate && dateFilter.endDate) {
        transactions = transactions.filter(function (t) {
          return isInDateRange_(t.date, dateFilter.startDate, dateFilter.endDate);
        });
      }
    }
    return successResponse(buildReport_(transactions));
  } catch (e) {
    return errorResponse(e.message);
  }
}
