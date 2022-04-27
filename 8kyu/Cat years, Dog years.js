//Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }
    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }
    return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(5));
console.log(humanYearsCatYearsDogYears(23));