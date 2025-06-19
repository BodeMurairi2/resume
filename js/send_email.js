// js/contact.js

(function () {
  emailjs.init("IXSFGlXdT2ZnWreAw");
})();

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendEmail(form) {
  const email = form.email.value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  emailjs.sendForm("bode-email200", "template_wze8jzk", form)
    .then(() => alert("Message sent successfully!"))
    .catch(error => alert("Sending failed: " + JSON.stringify(error)));

  return false;
}
