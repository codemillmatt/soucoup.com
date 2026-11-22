const themePicker = document.querySelector("[data-theme-picker]");
if (themePicker) {
  const select = themePicker.querySelector("select");
  select.value = document.documentElement.dataset.theme || "system";
  themePicker.hidden = false;
  select.addEventListener("change", () => {
    if (select.value === "system") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = select.value;
    try {
      localStorage.setItem("reading-theme", select.value);
    } catch (error) { console.debug("Theme applies to this page only.", error); }
  });
}

document.querySelectorAll(".highlight").forEach((block) => {
  const code = block.querySelector("pre code, pre");
  if (!code || block.querySelector(".copy-code")) return;

  const button = document.createElement("button");
  button.className = "copy-code";
  button.type = "button";
  button.textContent = "Copy code";
  button.setAttribute("aria-label", "Copy code block to clipboard");

  button.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard access is unavailable");
      await navigator.clipboard.writeText(code.innerText);
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy unavailable";
    }
  });

  block.append(button);
});
