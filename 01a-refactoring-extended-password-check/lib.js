"use strict";

export function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2;
}

export function atLeast10Chars(pw) {
  return pw.length >= 10;
}

export function initApp() {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const checkButton = document.querySelector("#button");

  const checkEqual = document.querySelector("#check-equal");
  const check10chars = document.querySelector("#check-ten-chars");

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
  }

  checkButton.addEventListener("click", checkPasswords);
}
