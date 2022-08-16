import moment from "moment";

console.log(moment.now());
const rightNow = moment();

console.log(rightNow);

const birthday = moment("1983-04-18", "YYYY-MM-DD");

console.log(birthday.fromNow());
