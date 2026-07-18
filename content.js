(function () {
  "use strict";

  const values = ['human-only', 'ai-assisted', 'ai-autonomous'];

  function scan() {
    const elements = [];
    for (const element of document.querySelectorAll("[ai-disclosure]")) {
      const v = element.getAttribute("ai-disclosure");
      if (values.includes(v))
        elements.push({ element, value: v });
    }

    for (const { element, value } of elements) {
      label(element, value);
    }
  }

  function label(el, value) {
    el.classList.add("acd-label", "acd-" + value);
  }

  scan();
})();
