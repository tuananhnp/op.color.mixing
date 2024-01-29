const colorPicker = document.querySelectorAll("input.input-color-picker");

const colorUpdate = (cssVars) => {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
};

colorPicker.forEach((item) => {
  item.addEventListener("input", (e) => {
    const cssPropName = `--picked-${e.target.getAttribute("data-id")}`;
    console.log(cssPropName);
    colorUpdate({
      [cssPropName]: e.target.value
    });
  });
});