const moment = require("moment");

module.exports = {
  getWeek(date) {
    const mDate = moment(date);
    return mDate.weekYear() * 100 + mDate.isoWeek();
  }
}
