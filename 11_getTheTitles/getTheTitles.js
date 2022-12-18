const getTheTitles = function (books) {
  let titleArray = [];
  books.forEach((obj) => {
    for (key in obj) {
      if (key === "title") {
        titleArray.push(obj[key]);
      }
    }
  });
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
