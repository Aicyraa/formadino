document.querySelector("button").addEventListener("click", (e) => {
   const inputs = document.querySelectorAll(".inputs");
   console.log(inputs);

   inputs.forEach((el) => {
      let value;
      if (el.id == "fname") {
         value = el.value;
         if (value < 1) validate(false, el, "*Length Must Be more than 1");
      } else if (el.id == "lname") {
         value = el.value;
         if (value < 1) validate(false, el, "*Length Must Be more than 1");
      } else if (el.id == "age") {
         value = el.value;
         if (value < 1) validate(false, el, "*You are to young!");
         else if (value > 100)
            validate(false, el, "*You are too old to come abord");
      } else if (el.id == "email") {
      } else if (el.id == "number") {
         value = el.value;
         if (value < 1 && value > 12) validate(false, el, "*Invalid Number!");
      }
   });
});

function validate(isValid, element, msg) {
   const parent = element.parentNode;
   const input = parent.querySelector("input");
   const span = parent.querySelector("#message");
   
   if (!isValid) {
      span.classList.add("invalid");
      input.classList.add("invalid");
      span.textContent = msg;
      return;
   } else {
      input.classList.add("valid");
      span.textContent = "";
   }
}
