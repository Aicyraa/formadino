document.querySelector("button").addEventListener("click", (e) => {
   const inputs = document.querySelectorAll(".inputs");

   inputs.forEach((el) => {
      let value;
      let id = el.id;
      if (id == "fname") {
         value = el.value;
         if (value < 1) validate(false, el, "*Length Must Be more than 1");
         else validate(true, el);
      } else if (id == "lname") {
         value = el.value;
         if (value < 1) validate(false, el, "*Length Must Be more than 1");
         else validate(true, el);
      } else if (id == "age") {
         value = el.value;
         if (value == "") validate(false, el, "*Age is required.");
         else if (value < 12) validate(false, el, "*You are to young!");
         else if (value > 100) validate(false, el, "*You are too old to come abord");
         else validate(true, el);
      } else if (id == "email") {
         value = el.value;
         if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/.test(value)) validate(false, el, "*Invalid Email!");
         else validate(true, el);
      } else if (id == "number") {
         value = el.value;
         if (value < 1 || value > 12) validate(false, el, "*Invalid Number!");
         else validate(true, el);
      } 
   });
});

function validate(isValid, element, msg) {
   const parent = element.parentNode;
   const input = parent.querySelector("input");
   const span = parent.querySelector("#message");

   if (!isValid) {
      input.classList.remove("valid");
      span.classList.add("invalid");
      input.classList.add("invalid");
      span.textContent = msg;
      return;
   } else {
      input.classList.remove("invalid");
      input.classList.add("valid");
      span.textContent = "";
   }
}
