$(document).ready(function () {
  const text = "PORTFOLIO";
  const typingText = $("#typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.append(text.charAt(index));
      index++;
      setTimeout(type, 150); // Adjust the delay to control the typing speed
    }
  }

  type();
});
