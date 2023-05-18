"use strict";

export function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2;
}

export function atLeast10Chars(pw) {
  return pw.length >= 10;
}

export function upperCaseLetters(pw) {
  return pw.toLowerCase() !== pw;
}

export function lowerCaseLetters(pw) {
  return pw.toUpperCase() !== pw;
}

export function containsNumbers(pw) {
  return /\d/.test(pw);
}

export function initApp() {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const checkButton = document.querySelector("#button");

  const checkEqual = document.querySelector("#check-equal");
  const check10chars = document.querySelector("#check-ten-chars");
  const uppercaseLetters = document.querySelector("#uppercase-letters");
  const lowercaseLetters = document.querySelector("#lowercase-letters");
  const checkNumbers = document.querySelector("#numbers");

  function checkPasswords() {
    const equalResult = arePasswordsEqual(password1.value, password2.value);

    if (equalResult) {
      checkEqual.innerText = " ✅ ";
    } else {
      checkEqual.innerText = " ❌ ";
    }

    const checkGreaterEqual10 = atLeast10Chars(password1.value);

    if (checkGreaterEqual10) {
      check10chars.innerText = " ✅ ";
    } else {
      check10chars.innerText = " ❌ ";
    }

    const checkUpperCase = upperCaseLetters(password1.value);

    if (checkUpperCase) {
      uppercaseLetters.innerText = " ✅ ";
    } else {
      uppercaseLetters.innerText = " ❌ ";
    }

    const checkLowerCase = lowerCaseLetters(password1.value);

    if (checkLowerCase) {
      lowercaseLetters.innerText = " ✅ ";
    } else {
      lowercaseLetters.innerText = " ❌ ";
    }

    const checkOnNumbers = containsNumbers(password1.value);

    if (checkOnNumbers) {
      checkNumbers.innerText = " ✅ ";
    } else {
      checkNumbers.innerText = " ❌ ";
    }
  }

  checkButton.addEventListener("click", checkPasswords);
}
