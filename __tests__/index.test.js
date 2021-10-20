const LeapYearAnalyzer = require("../index.js");

describe("isALeapYear should", () => {

    test("retrieve true if the year is leap", () => {
        expect(LeapYearAnalyzer.isALeapYear(1996)).toBeTruthy();
    });

    test("retrieve false if the year is not leap", () => {
        expect(LeapYearAnalyzer.isALeapYear(2001)).toBeFalsy();
    });

    test("retrieve true if the year is divisible by 4", () => {
       expect(LeapYearAnalyzer.isALeapYear(2000)).toBeTruthy();
    });

    test("retrieve false if the year is divisible by 100", () => {
        expect(LeapYearAnalyzer.isALeapYear(1900)).toBeFalsy();
    });

});