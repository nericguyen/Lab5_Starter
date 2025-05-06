// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/**
 * Testing isPhoneNumber()
 */
test('valid phone number', () => {
  expect(isPhoneNumber("909-767-5109")).toBe(true);
});
test('valid phone number', () => {
  expect(isPhoneNumber("(909) 767-5109")).toBe(true);
});
test('not a phone number', () => {
  expect(isPhoneNumber("hello!")).toBe(false);
});
test('missing dashes', () => {
  expect(isPhoneNumber("9097675109")).toBe(false);
});

/**
 * Testing isEmail()
 */
test('valid email address', () => {
  expect(isEmail("ern006@ucsd.edu")).toBe(true);
});
test('valid email address', () => {
  expect(isEmail("01203124@gmail.com")).toBe(true);
});
test('missing @', () => {
  expect(isEmail("ern006ucsd.edu")).toBe(false);
});
test('missing .', () => {
  expect(isEmail("ern006@ucsdedu")).toBe(false);
});

/**
 * Testing isStrongPassword()
 */
test('valid email address', () => {
  expect(isStrongPassword("d93hwegf")).toBe(true);
});
test('valid email address', () => {
  expect(isStrongPassword("j28gh9bse")).toBe(true);
});
test('does not start with a letter', () => {
  expect(isStrongPassword("1d93hwegf")).toBe(false);
});
test('too short', () => {
  expect(isStrongPassword("jj2")).toBe(false);
});

/**
 * Testing isDate()
 */
test('valid date', () => {
  expect(isDate("1/1/2000")).toBe(true);
});
test('valid date', () => {
  expect(isDate("5/20/5020")).toBe(true);
});
test('YYYY is not 4 digits', () => {
  expect(isDate("4/4/129")).toBe(false);
});
test('XX is not 1 or 2 digits', () => {
  expect(isDate("111/111/1111")).toBe(false);
});

/**
 * Testing isHexColor()
 */
test('valid hex color', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});
test('valid hex color', () => {
  expect(isHexColor("#000000")).toBe(true);
});
test('invalid color', () => {
  expect(isHexColor("FFFF")).toBe(false);
});
test('invalid color', () => {
  expect(isHexColor("#HIFWHI")).toBe(false);
});