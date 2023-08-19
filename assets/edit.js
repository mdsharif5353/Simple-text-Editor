
// Get the buttons and text input area
const boldButton = document.querySelector(".text-bold");
const italicButton = document.querySelector(".text-italic");
const underlineButton = document.querySelector(".text-underline");
const alignLeftButton = document.querySelector(".text-left");
const alignCenterButton = document.querySelector(".text-center");
const alignRightButton = document.querySelector(".text-right");
const textColorInput = document.getElementById("favcolor");
const textInput = document.getElementById("text-input");

// Add event listeners to buttons
boldButton.addEventListener("click", () => {
    document.execCommand("bold", false, null);
});

italicButton.addEventListener("click", () => {
    document.execCommand("italic", false, null);
});

underlineButton.addEventListener("click", () => {
    document.execCommand("underline", false, null);
});

alignLeftButton.addEventListener("click", () => {
    document.execCommand("justifyLeft", false, null);
});

alignCenterButton.addEventListener("click", () => {
    document.execCommand("justifyCenter", false, null);
});

alignRightButton.addEventListener("click", () => {
    document.execCommand("justifyRight", false, null);
});

// Add event listener to font color input
textColorInput.addEventListener("input", () => {
    const color = textColorInput.value;
    document.execCommand("foreColor", false, color);
});