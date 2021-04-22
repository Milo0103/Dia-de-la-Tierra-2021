window.addEventListener("scroll", function () {
  let scrolll = window.scrollY;
  let value1 = 255 + (scrolll / 200) * -255;
  let value2 = (scrolll / 200) * 1;
  let value3 = 1 + (scrolll / 200) * -1;
  // document.documentElement.style.setProperty("");
  console.log(value3);
  document.documentElement.style.setProperty(
    "--nav-a-color",
    `rgba(${value1},${value1},${value1},1)`
  );
  document.documentElement.style.setProperty(
    "--nav-bg-color",
    `rgba(255,255 ,255,${value2})`
  );
  document.documentElement.style.setProperty("--nav-luna-opacity", `${value3}`);
});
