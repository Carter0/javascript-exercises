const findTheOldest = function (people) {
    return people.reduce((person1, person2) => compareOldestPerson(person1, person2));
};

function compareOldestPerson(person1, person2) {
    const person1Age = getAge(person1.yearOfBirth, person1.yearOfDeath);
    const person2Age = getAge(person2.yearOfBirth, person2.yearOfDeath);

    return person1Age >= person2Age ? person1 : person2;
}

function getAge(yearOfBirth, yearOfDeath) {
    return !yearOfDeath ? (new Date().getFullYear()) - yearOfBirth : yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
