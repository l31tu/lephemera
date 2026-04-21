// TYPE SPECIMENS
document.querySelectorAll("div.stage-outer").forEach(function (stage) {
  const outputTag = stage.querySelector("div.output");
  const typesizeTag = stage.querySelector("input[name=typesize]");
  const typesizeOutput = stage.querySelector("span.typesize-output");

  const lineheightTag = stage.querySelector(`input[name="lineheight"]`);
  const lineheightOutput = stage.querySelector("span.lineheight-output");

  const kerningTag = stage.querySelector(`input[name="kerning"]`);
  const kerningOutput = stage.querySelector("span.kerning-output");

  const typefaceTag = stage.querySelector(`select[name="typeface"]`);

  typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px";
    typesizeOutput.innerHTML = this.value + " px";
  });

  lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value;
    lineheightOutput.innerHTML = this.value;
  });

  kerningTag.addEventListener("input", function () {
    outputTag.style.letterSpacing = this.value + "em";
    kerningOutput.innerHTML = this.value + " em";
  });

  typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value;
  });

  // Toolbar hide and show
  const tb = stage.querySelector("div.toolbar");
  const tx = stage.querySelector("div.output");

  function show() {
    tb.classList.add("visible");
    hint.style.opacity = "0";
  }

  function hide() {
    setTimeout(() => {
      if (
        document.activeElement !== tx &&
        !tb.contains(document.activeElement)
      ) {
        tb.classList.remove("visible");
        hint.style.opacity = "1";
      }
    }, 100);
  }

  tx.addEventListener("focus", show);
  tx.addEventListener("blur", hide);
});

// INFOMATION AND CHARACTER PREVIEW SECTIONS
var styles = [
  {
    id: "tafatolu-masani",
    label: "Tāfatolu Masani",
    folder: "glyphs-tafatolu-masani",
    btnClass: "tafatolu-masani",
  },
  {
    id: "tafatolu-tele",
    label: "Tāfatolu Tele",
    folder: "glyphs-tafatolu-tele",
    btnClass: "tafatolu-tele",
  },
];

var currentFolder = styles[0].folder;
var selectedCell = null;
var selectedCh = null;
var selectedFile = null;

var groups = [
  {
    label: "Uppercase",
    chars: [
      { ch: "A", file: "u0041" },
      { ch: "B", file: "u0042" },
      { ch: "C", file: "u0043" },
      { ch: "D", file: "u0044" },
      { ch: "E", file: "u0045" },
      { ch: "F", file: "u0046" },
      { ch: "G", file: "u0047" },
      { ch: "H", file: "u0048" },
      { ch: "I", file: "u0049" },
      { ch: "J", file: "u004A" },
      { ch: "K", file: "u004B" },
      { ch: "L", file: "u004C" },
      { ch: "M", file: "u004D" },
      { ch: "N", file: "u004E" },
      { ch: "O", file: "u004F" },
      { ch: "P", file: "u0050" },
      { ch: "Q", file: "u0051" },
      { ch: "R", file: "u0052" },
      { ch: "S", file: "u0053" },
      { ch: "T", file: "u0054" },
      { ch: "U", file: "u0055" },
      { ch: "V", file: "u0056" },
      { ch: "W", file: "u0057" },
      { ch: "X", file: "u0058" },
      { ch: "Y", file: "u0059" },
      { ch: "Z", file: "u005A" },
    ],
  },
  {
    label: "Lowercase",
    chars: [
      { ch: "a", file: "u0061" },
      { ch: "b", file: "u0062" },
      { ch: "c", file: "u0063" },
      { ch: "d", file: "u0064" },
      { ch: "e", file: "u0065" },
      { ch: "f", file: "u0066" },
      { ch: "g", file: "u0067" },
      { ch: "h", file: "u0068" },
      { ch: "i", file: "u0069" },
      { ch: "j", file: "u006A" },
      { ch: "k", file: "u006B" },
      { ch: "l", file: "u006C" },
      { ch: "m", file: "u006D" },
      { ch: "n", file: "u006E" },
      { ch: "o", file: "u006F" },
      { ch: "p", file: "u0070" },
      { ch: "q", file: "u0071" },
      { ch: "r", file: "u0072" },
      { ch: "s", file: "u0073" },
      { ch: "t", file: "u0074" },
      { ch: "u", file: "u0075" },
      { ch: "v", file: "u0076" },
      { ch: "w", file: "u0077" },
      { ch: "x", file: "u0078" },
      { ch: "y", file: "u0079" },
      { ch: "z", file: "u007A" },
    ],
  },
  {
    label: "Accented Uppercase",
    chars: [
      { ch: "\u00C1", file: "u00C1" },
      { ch: "\u00C2", file: "u00C2" },
      { ch: "\u00C4", file: "u00C4" },
      { ch: "\u0226", file: "u0226" },
      { ch: "\u1EA0", file: "u1EA0" },
      { ch: "\u00C0", file: "u00C0" },
      { ch: "\u0100", file: "u0100" },
      { ch: "\u0104", file: "u0104" },
      { ch: "\u00C5", file: "u00C5" },
      { ch: "\u00C3", file: "u00C3" },
      { ch: "\u00C6", file: "u00C6" },
      { ch: "\u0106", file: "u0106" },
      { ch: "\u00C7", file: "u00C7" },
      { ch: "\u010A", file: "u010A" },
      { ch: "\u1E0E", file: "u1E0E" },
      { ch: "\u00D0", file: "u00D0" },
      { ch: "\u00C9", file: "u00C9" },
      { ch: "\u00CA", file: "u00CA" },
      { ch: "\u00CB", file: "u00CB" },
      { ch: "\u00C8", file: "u00C8" },
      { ch: "\u0112", file: "u0112" },
      { ch: "\u0118", file: "u0118" },
      { ch: "\u018E", file: "u018E" },
      { ch: "\u0120", file: "u0120" },
      { ch: "\u0241", file: "u0241" },
      { ch: "\u0126", file: "u0126" },
      { ch: "\u00CD", file: "u00CD" },
      { ch: "\u00CE", file: "u00CE" },
      { ch: "\u00CF", file: "u00CF" },
      { ch: "\u00CC", file: "u00CC" },
      { ch: "\u012A", file: "u012A" },
      { ch: "\u012E", file: "u012E" },
      { ch: "\u1E3A", file: "u1E3A" },
      { ch: "\u0141", file: "u0141" },
      { ch: "M\u0304", file: "u004D_u0304" },
      { ch: "M\u0303", file: "u004D_u0303" },
      { ch: "\u019D", file: "u019D" },
      { ch: "\u1E48", file: "u1E48" },
      { ch: "\u00D1", file: "u00D1" },
      { ch: "\u014A", file: "u014A" },
      { ch: "O\u0331", file: "u004F_u0331" },
      { ch: "\u00D3", file: "u00D3" },
      { ch: "\u00D4", file: "u00D4" },
      { ch: "\u00D6", file: "u00D6" },
      { ch: "\u00D2", file: "u00D2" },
      { ch: "\u014C", file: "u014C" },
      { ch: "\u01EA", file: "u01EA" },
      { ch: "\u00D8", file: "u00D8" },
      { ch: "\u00D5", file: "u00D5" },
      { ch: "\u0152", file: "u0152" },
      { ch: "P\u0303", file: "u0050_u0303" },
      { ch: "\u00DE", file: "u00DE" },
      { ch: "R\u0302", file: "u0052_u0302" },
      { ch: "\u1E5E", file: "u1E5E" },
      { ch: "\u0160", file: "u0160" },
      { ch: "\u1E6E", file: "u1E6E" },
      { ch: "\u00DA", file: "u00DA" },
      { ch: "\u00DB", file: "u00DB" },
      { ch: "\u00DC", file: "u00DC" },
      { ch: "\u00D9", file: "u00D9" },
      { ch: "\u016A", file: "u016A" },
      { ch: "\u0172", file: "u0172" },
      { ch: "\u0168", file: "u0168" },
      { ch: "\u00DD", file: "u00DD" },
      { ch: "\u0178", file: "u0178" },
      { ch: "\u017D", file: "u017D" },
      { ch: "\u017B", file: "u017B" },
    ],
  },
  {
    label: "Accented Lowercase",
    chars: [
      { ch: "\u00E1", file: "u00E1" },
      { ch: "\u00E2", file: "u00E2" },
      { ch: "\u00E4", file: "u00E4" },
      { ch: "\u0227", file: "u0227" },
      { ch: "\u1EA1", file: "u1EA1" },
      { ch: "\u00E0", file: "u00E0" },
      { ch: "\u0101", file: "u0101" },
      { ch: "\u0105", file: "u0105" },
      { ch: "\u00E5", file: "u00E5" },
      { ch: "\u00E3", file: "u00E3" },
      { ch: "\u00E6", file: "u00E6" },
      { ch: "\u0107", file: "u0107" },
      { ch: "\u00E7", file: "u00E7" },
      { ch: "\u010B", file: "u010B" },
      { ch: "\u1E0F", file: "u1E0F" },
      { ch: "\u00F0", file: "u00F0" },
      { ch: "\u00E9", file: "u00E9" },
      { ch: "\u00EA", file: "u00EA" },
      { ch: "\u00EB", file: "u00EB" },
      { ch: "\u00E8", file: "u00E8" },
      { ch: "\u0113", file: "u0113" },
      { ch: "\u0119", file: "u0119" },
      { ch: "\u01DD", file: "u01DD" },
      { ch: "\u0121", file: "u0121" },
      { ch: "\u0242", file: "u0242" },
      { ch: "\u0127", file: "u0127" },
      { ch: "\u0131", file: "u0131" },
      { ch: "\u00ED", file: "u00ED" },
      { ch: "\u00EE", file: "u00EE" },
      { ch: "\u00EF", file: "u00EF" },
      { ch: "\u00EC", file: "u00EC" },
      { ch: "\u012B", file: "u012B" },
      { ch: "\u012F", file: "u012F" },
      { ch: "\u1E3B", file: "u1E3B" },
      { ch: "\u0142", file: "u0142" },
      { ch: "m\u0304", file: "u006D_u0304" },
      { ch: "m\u0303", file: "u006D_u0303" },
      { ch: "\u0272", file: "u0272" },
      { ch: "\u1E49", file: "u1E49" },
      { ch: "\u00F1", file: "u00F1" },
      { ch: "\u014B", file: "u014B" },
      { ch: "o\u0331", file: "u006F_u0331" },
      { ch: "\u00F3", file: "u00F3" },
      { ch: "\u00F4", file: "u00F4" },
      { ch: "\u00F6", file: "u00F6" },
      { ch: "\u00F2", file: "u00F2" },
      { ch: "\u014D", file: "u014D" },
      { ch: "\u01EB", file: "u01EB" },
      { ch: "\u00F8", file: "u00F8" },
      { ch: "\u00F5", file: "u00F5" },
      { ch: "\u0153", file: "u0153" },
      { ch: "p\u0303", file: "u0070_u0303" },
      { ch: "\u00FE", file: "u00FE" },
      { ch: "r\u0302", file: "u0072_u0302" },
      { ch: "\u1E5F", file: "u1E5F" },
      { ch: "\u0161", file: "u0161" },
      { ch: "\u1E6F", file: "u1E6F" },
      { ch: "\u00FA", file: "u00FA" },
      { ch: "\u00FB", file: "u00FB" },
      { ch: "\u00FC", file: "u00FC" },
      { ch: "\u00F9", file: "u00F9" },
      { ch: "\u016B", file: "u016B" },
      { ch: "\u0173", file: "u0173" },
      { ch: "\u0169", file: "u0169" },
      { ch: "\u00FD", file: "u00FD" },
      { ch: "\u00FF", file: "u00FF" },
      { ch: "\u017E", file: "u017E" },
      { ch: "\u017C", file: "u017C" },
    ],
  },
  {
    label: "Figures",
    chars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map(function (c) {
      return {
        ch: c,
        file:
          "u" + c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0"),
      };
    }),
  },
  {
    label: "Punctuation",
    chars: [
      { ch: ".", file: "u002E" },
      { ch: ",", file: "u002C" },
      { ch: ":", file: "u003A" },
      { ch: ";", file: "u003B" },
      { ch: "…", file: "u2026" },
      { ch: "!", file: "u0021" },
      { ch: "\u00A1", file: "u00A1" },
      { ch: "?", file: "u003F" },
      { ch: "\u00BF", file: "u00BF" },
      { ch: "\u2022", file: "u2022" },
      { ch: "*", file: "u002A" },
      { ch: "#", file: "u0023" },
      { ch: "/", file: "u002F" },
      { ch: "\\", file: "u005C" },
      { ch: "-", file: "u002D" },
      { ch: "\u2013", file: "u2013" },
      { ch: "\u2014", file: "u2014" },
      { ch: "_", file: "u005F" },
      { ch: "(", file: "u0028" },
      { ch: ")", file: "u0029" },
      { ch: "{", file: "u007B" },
      { ch: "}", file: "u007D" },
      { ch: "[", file: "u005B" },
      { ch: "]", file: "u005D" },
      { ch: "\u2018", file: "u2018" },
      { ch: "\u2019", file: "u2019" },
      { ch: "\u201C", file: "u201C" },
      { ch: "\u201D", file: "u201D" },
      { ch: "'", file: "u0027" },
      { ch: '"', file: "u0022" },
    ],
  },
  {
    label: "Symbols",
    chars: [
      { ch: "@", file: "u0040" },
      { ch: "&", file: "u0026" },
      { ch: "|", file: "u007C" },
      { ch: "\u2020", file: "u2020" },
      { ch: "\u2021", file: "u2021" },
      { ch: "+", file: "u002B" },
      { ch: "\u2212", file: "u2212" },
      { ch: "\u00D7", file: "u00D7" },
      { ch: "\u00F7", file: "u00F7" },
      { ch: "=", file: "u003D" },
      { ch: ">", file: "u003E" },
      { ch: "<", file: "u003C" },
      { ch: "^", file: "u005E" },
      { ch: "%", file: "u0025" },
      { ch: "\u2190", file: "u2190" },
      { ch: "\u2192", file: "u2192" },
      { ch: "\u2191", file: "u2191" },
      { ch: "\u2193", file: "u2193" },
    ],
  },
  {
    label: "Motifs",
    chars: [
      { ch: "\u3164", file: "faaulutao", label: "_faaulutao_" },
      { ch: "\u3164", file: "faagogo", label: "_faagogo_" },
    ],
  },
];

function glyphPath(file, folder) {
  return (folder || currentFolder) + "/" + file + ".webp";
}

function toggleAccordion(header) {
  var toggle = header.querySelector(".accordion-toggle");
  var body = header.nextElementSibling;
  var isOpen = body.classList.contains("open");
  body.classList.toggle("open", !isOpen);
  toggle.textContent = isOpen ? "+" : "\u2212";
}

function switchStyle(folder) {
  currentFolder = folder;
  document.querySelectorAll(".cell").forEach(function (cell) {
    var img = cell.querySelector("img");
    var file = cell.dataset.file;
    if (img && file) img.src = glyphPath(file, folder);
  });
  if (selectedFile) {
    document.getElementById("char-preview-img").src = glyphPath(
      selectedFile,
      folder,
    );
  }
  document.querySelectorAll(".style-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.folder === folder);
  });
}

function selectCell(cell, ch, file, displayLabel) {
  if (selectedCell) selectedCell.classList.remove("selected");
  selectedCell = cell;
  selectedCh = ch;
  selectedFile = file;
  cell.classList.add("selected");
  document.getElementById("char-preview-img").src = glyphPath(file);
  document.getElementById("char-preview-img").alt = ch;
  document.getElementById("char-label").textContent = displayLabel;
}

function makeLabel(item) {
  if (item.label) return item.label;
  var cps = [];
  for (var i = 0; i < item.ch.length; ) {
    var cp = item.ch.codePointAt(i);
    cps.push("U+" + cp.toString(16).toUpperCase().padStart(4, "0"));
    i += cp > 0xffff ? 2 : 1;
  }
  return cps.join(" ");
}

function init() {
  // Style switcher — now inside preview panel
  var switcher = document.getElementById("style-switcher");
  styles.forEach(function (s) {
    var btn = document.createElement("button");
    btn.className =
      "style-btn " + s.btnClass + (s.folder === currentFolder ? " active" : "");
    btn.textContent = s.label;
    btn.dataset.folder = s.folder;
    btn.addEventListener("click", function () {
      switchStyle(s.folder);
    });
    switcher.appendChild(btn);
  });

  var sections = document.getElementById("char-sections");
  var firstCell = null;
  var firstItem = null;

  for (var gi = 0; gi < groups.length; gi++) {
    var group = groups[gi];

    var lbl = document.createElement("div");
    lbl.className = gi === 0 ? "section-label first" : "section-label";
    lbl.textContent = group.label;
    sections.appendChild(lbl);

    var grid = document.createElement("div");
    grid.className = "char-grid";

    for (var ci = 0; ci < group.chars.length; ci++) {
      (function (item) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.file = item.file;
        cell.dataset.ch = item.ch;
        cell.title = item.label || item.ch;

        var img = document.createElement("img");
        img.src = glyphPath(item.file);
        img.alt = item.ch;
        img.loading = "lazy";
        cell.appendChild(img);

        if (!firstCell) {
          firstCell = cell;
          firstItem = item;
        }
        cell.addEventListener("click", function () {
          selectCell(cell, item.ch, item.file, makeLabel(item));
        });
        grid.appendChild(cell);
      })(group.chars[ci]);
    }

    sections.appendChild(grid);
  }

  if (firstCell)
    selectCell(firstCell, firstItem.ch, firstItem.file, makeLabel(firstItem));
}

document.addEventListener("DOMContentLoaded", init);

// COPYRIGHT
document.querySelector(".year").textContent = new Date().getFullYear();
