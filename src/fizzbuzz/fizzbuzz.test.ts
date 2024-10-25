import {FizzBuzz} from "./fizzbuzz";

describe('Fizzbuzz Converter', () => {
    let converter: FizzBuzz

    beforeEach(() => {
        converter = new FizzBuzz();
    })

    describe('Numbers that are not converted', () => {
        it('should return the number when given 1', () => {
            expect(converter.convert(1)).toEqual("1");
        });

        it('should return the number when given 2', () => {
            expect(converter.convert(2)).toEqual("2");
        });
    });

    describe('Numbers that are devisble by 3', () => {
        it('should return fizz when given 3', () => {
            expect(converter.convert(3)).toEqual("fizz");
        });

        it('should return fizz when given 6', () => {
            expect(converter.convert(6)).toEqual("fizz");
        });

        it('should return fizz when given 9', () => {
            expect(converter.convert(9)).toEqual("fizz");
        });
    });

    describe('numbers divisible by 5', () => {
        it('should return buzz for 5', () => {
            expect(converter.convert(5)).toEqual("buzz");
        });

        it('should return buzz for 10', () => {
            expect(converter.convert(10)).toEqual("buzz");
        });

        it('should return buzz for 20', () => {
            expect(converter.convert(20)).toEqual("buzz");
        });
    });

    describe('numbers divisible by 3 and 5', () => {
        it('should return fizzbuzz when given 15', () => {
            expect(converter.convert(15)).toEqual("fizzbuzz");
        });

        it('should return fizzbuzz when given 30', () => {
            expect(converter.convert(30)).toEqual("fizzbuzz");
        });

        it('should return fizzbuzz when given 45 ', () => {
            expect(converter.convert(45)).toEqual("fizzbuzzz");
        });
    });
});