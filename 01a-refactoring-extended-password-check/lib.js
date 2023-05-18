"use strict";

export function initApp() {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const checkButton = document.querySelector("#button");

  const checkEqual = document.querySelector("#check-equal");
  const check10chars = document.querySelector("#check-ten-chars");

  function checkPasswords() {
    if (password1.value === password2.value) {
      checkEqual.innerText = " ✅ ";
    } else {
      checkEqual.innerText = " ❌ ";
    }

    if (password1.value.length >= 10) {
      check10chars.innerText = " ✅ ";
    } else {
      check10chars.innerText = " ❌ ";
    }
  }

  checkButton.addEventListener("click", checkPasswords);
}
