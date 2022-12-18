const findTheOldest = function (people) {
  const peopleOrdered = people.sort((a, b) => {
    aYear = !a.yearOfDeath ? (year = new Date().getFullYear()) : a.yearOfDeath;
    bYear = !b.yearOfDeath ? (year = new Date().getFullYear()) : b.yearOfDeath;
    return aYear - a.yearOfBirth > bYear - b.yearOfBirth ? -1 : 1;
  });

  return peopleOrdered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
