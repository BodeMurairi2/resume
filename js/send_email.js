(function () {
      emailjs.init("IXSFGlXdT2ZnWreAw");
    })();

function sendEmail(form) {
    emailjs.sendForm("bode-email200", "template_wze8jzk", form)
      .then(() => alert("Message sent successfully!"))
      .catch(error => alert("Sending failed: " + JSON.stringify(error)));
    return false;
  }