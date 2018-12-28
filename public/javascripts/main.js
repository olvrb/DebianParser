const SearchTextField = new mdc.textField.MDCTextField(
    document.querySelector(".mdc-text-field")
);
const SearchButton = new mdc.ripple.MDCRipple(
    document.querySelector(".mdc-button")
);

// Debugging.
window.mdc = mdc;

document.querySelector("#google").onsubmit = (e) => {
    console.log("s u b m i t");
    window.location = `https://google.com/search?q=${encodeURIComponent(
        SearchTextField.value
    )}`;
    return false;
};

(() => {
    if (!navigator.geolocation) return;
    const location = navigator.geolocation.getCurrentPosition(DisplayLocation);
})();

function DisplayLocation(pos) {
    console.log(pos);
}
