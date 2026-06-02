// Injects "Open in Colab / View on GitHub / Download" buttons at the top of each
// rendered notebook page. The notebooks are self-contained in this repo under
// docs/notebooks/, so the repo path is just the site slug + ".ipynb".

(function () {
  "use strict";

  var REPO = "mlciv/nlp-ebook";
  var BRANCH = "main";
  var REPO_PREFIX = "docs/";

  var NOTEBOOK_SLUGS = [
    "notebooks/hw1/Assignment_1",
    "notebooks/hw1/setup_tutorial",
    "notebooks/hw1/check_word",
    "notebooks/hw2/Assignment_2",
    "notebooks/hw3/Assignment_3",
    "notebooks/hw4/Assignment_4",
    "notebooks/hw4/Transformer_Illustration",
    "notebooks/hw5/Part1-sft_trl_lora_qlora",
    "notebooks/hw5/Part2-Exam_Agent_For_NLP"
  ];

  // slug -> path inside the repo
  var NOTEBOOK_MAP = {};
  NOTEBOOK_SLUGS.forEach(function (slug) {
    NOTEBOOK_MAP[slug] = REPO_PREFIX + slug + ".ipynb";
  });

  function currentSlug() {
    // Normalize the path to a trailing-slash-free, leading-slash-free form,
    // independent of where the site is hosted (root or /CS5293-NLP/).
    var path = decodeURIComponent(window.location.pathname);
    path = path.replace(/index\.html$/, "").replace(/\.html$/, "");
    path = path.replace(/\/+$/, "").replace(/^\/+/, "");
    for (var slug in NOTEBOOK_MAP) {
      if (!NOTEBOOK_MAP.hasOwnProperty(slug)) continue;
      if (path === slug || path.endsWith("/" + slug)) {
        return slug;
      }
    }
    return null;
  }

  function button(cls, href, label) {
    var a = document.createElement("a");
    a.className = "nb-launch-btn " + cls;
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = label;
    return a;
  }

  function inject() {
    var slug = currentSlug();
    if (!slug) return;
    var repoPath = NOTEBOOK_MAP[slug];

    var content = document.querySelector("article.md-content__inner") ||
                  document.querySelector(".md-content__inner");
    if (!content) return;
    if (content.querySelector(".nb-launch-bar")) return; // avoid duplicates on instant nav

    var encoded = repoPath.split("/").map(encodeURIComponent).join("/");
    var colab = "https://colab.research.google.com/github/" + REPO + "/blob/" + BRANCH + "/" + encoded;
    var github = "https://github.com/" + REPO + "/blob/" + BRANCH + "/" + encoded;
    var download = "https://raw.githubusercontent.com/" + REPO + "/refs/heads/" + BRANCH + "/" + encoded;

    var bar = document.createElement("div");
    bar.className = "nb-launch-bar";

    var label = document.createElement("span");
    label.className = "nb-launch-label";
    label.textContent = "Run this notebook:";
    bar.appendChild(label);

    bar.appendChild(button("nb-launch-btn--colab", colab, "Open in Colab"));
    bar.appendChild(button("nb-launch-btn--github", github, "View on GitHub"));
    bar.appendChild(button("nb-launch-btn--download", download, "Download .ipynb"));

    var firstChild = content.firstElementChild;
    if (firstChild) {
      content.insertBefore(bar, firstChild);
    } else {
      content.appendChild(bar);
    }
  }

  // Run on first load and on Material's instant-navigation page changes.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(inject);
  } else {
    document.addEventListener("DOMContentLoaded", inject);
  }
})();
