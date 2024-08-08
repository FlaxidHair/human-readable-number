module.exports = function toReadable (number) {
   const numberToText = {
        "0": "",
        "00": "",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
        "100": "one hundred",
        "200": "two hundred",
        "300": "three hundred",
        "400": "four hundred",
        "500": "five hundred",
        "600": "six hundred",
        "700": "seven hundred",
        "800": "eight hundred",
        "900": "nine hundred",
    };
    const max = 999;
    const min = 0;

    const textNum = number;
    let stringNum = "";
    let numberString = number.toString();
    number = Math.abs(number);
    if (number == 0) {
        stringNum += "zero";
    }
    if (number >= 1 && number <= 19) {
        stringNum += numberToText[number];
    } else if (number >= 20 && number <= 99) {
        stringNum += numberToText[numberString[0] + "0"];
        if (!number.toString().endsWith("0")) {
            stringNum += " " + numberToText[number % 10];
        }
    } else if (number >= 100 && number <= 999) {
        stringNum += numberToText[numberString[0] + "00"];
        let twoSymb = (number % 100).toString();
        if (twoSymb >= 1 && twoSymb <= 19) {
            stringNum += " " + numberToText[twoSymb];
        } else {
            stringNum += " " + numberToText[twoSymb[0] + "0"];
        }
        if (!numberString.endsWith("0") && twoSymb >= 20 && twoSymb <= 99) {
            stringNum += " " + numberToText[twoSymb[1]];
        }
    }
    stringNum = stringNum.replaceAll("  ", " ");
    stringNum = stringNum.trim();

    return stringNum || textNum.toString();
}
