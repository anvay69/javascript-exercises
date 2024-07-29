const findTheOldest = function(arr) {
    let maxage = 0;
    let maxperson = null;
    arr.forEach(element => {
        let birthYear = element.yearOfBirth;
        let deathYear = element.yearOfDeath || new Date().getFullYear();
        let age = deathYear - birthYear;

        if (age > maxage) {
            maxage = age;
            maxperson = element;
        }
    });
    return maxperson;
};

// Do not edit below this line
module.exports = findTheOldest;
