// Application price tables
// Typeface style price = sum of selected app prices at the chosen org size
// Each style is priced individually — no bundle options

const appPrices = {
  "Print/Desktop": {
    1: 70,
    "2-5": 120,
    "6-10": 175,
    "11-25": 320,
    "26-50": 450,
    "51-75": 520,
    "76-100": 600,
    "101-150": 750,
    "151-300": 1000,
    "301-500": 1400,
    "501-1000": 2600,
    "1001+": null,
  },
  Embedding: {
    1: 70,
    "2-5": 120,
    "6-10": 175,
    "11-25": 320,
    "26-50": 450,
    "51-75": 520,
    "76-100": 600,
    "101-150": 750,
    "151-300": 1000,
    "301-500": 1400,
    "501-1000": 2600,
    "1001+": null,
  },
  "Social Media": {
    1: 70,
    "2-5": 120,
    "6-10": 175,
    "11-25": 320,
    "26-50": 450,
    "51-75": 520,
    "76-100": 600,
    "101-150": 750,
    "151-300": 1000,
    "301-500": 1400,
    "501-1000": 2600,
    "1001+": null,
  },
  Video: {
    1: 70,
    "2-5": 120,
    "6-10": 175,
    "11-25": 320,
    "26-50": 450,
    "51-75": 520,
    "76-100": 600,
    "101-150": 750,
    "151-300": 1000,
    "301-500": 1400,
    "501-1000": 2600,
    "1001+": null,
  },
  Web: {
    1: 100,
    "2-5": 200,
    "6-10": 250,
    "11-25": 350,
    "26-50": 500,
    "51-75": 575,
    "76-100": 650,
    "101-150": 800,
    "151-300": 1200,
    "301-500": 1500,
    "501-1000": 2800,
    "1001+": null,
  },
  "Brand Identity": {
    1: 280,
    "2-5": 380,
    "6-10": 650,
    "11-25": 900,
    "26-50": 1000,
    "51-75": 1100,
    "76-100": 1200,
    "101-150": 1400,
    "151-300": 1600,
    "301-500": 2000,
    "501-1000": 3000,
    "1001+": null,
  },
  Logo: {
    1: 125,
    "2-5": 250,
    "6-10": 300,
    "11-25": 400,
    "26-50": 450,
    "51-75": 600,
    "76-100": 700,
    "101-150": 850,
    "151-300": 1400,
    "301-500": 1800,
    "501-1000": 2900,
    "1001+": null,
  },
};

const fontIdMap = {
  "Rep-Tee-Rom-Cas Condensed": "font1",
  "Rep-Ak-Gro-Uni Light": "font2",
  "Unnamed Typeface": "font3",
  Tafatolu: "font4",
};

// State
const state = {
  license: "designer",
  orgsize: "1",
  applications: new Set(),
  typefaces: {},
};

const fontOpen = { font1: false, font2: false, font3: false, font4: false };
const fontLocked = { font1: false, font2: false, font3: false, font4: false };

// Lock / unlock accordion when selections exist

function setLock(id, locked) {
  fontLocked[id] = locked;
  document.getElementById("header-" + id).classList.toggle("locked", locked);
  document.getElementById(id + "-arrow").classList.toggle("locked", locked);
}

function updateLockState(font) {
  const id = fontIdMap[font];
  const hasAny = Object.keys(state.typefaces).some(
    (k) => state.typefaces[k].font === font,
  );
  setLock(id, hasAny);
}

// Font accordion toggle

function toggleFont(id) {
  if (fontLocked[id]) return;
  fontOpen[id] = !fontOpen[id];
  const open = fontOpen[id];
  document.getElementById(id + "-styles").classList.toggle("open", open);
  const d = document.getElementById(id + "-divider");
  if (d) d.style.display = open ? "block" : "none";
  document.getElementById(id + "-arrow").textContent = open ? "\u2212" : "+";
}

function ensureOpen(font) {
  const id = fontIdMap[font];
  if (!fontOpen[id]) {
    fontOpen[id] = true;
    document.getElementById(id + "-styles").classList.add("open");
    const d = document.getElementById(id + "-divider");
    if (d) d.style.display = "block";
    document.getElementById(id + "-arrow").textContent = "\u2212";
  }
}

// Style-pill click handler

document.querySelectorAll(".style-pill").forEach((pill) => {
  pill.addEventListener("click", function () {
    const font = this.dataset.font;
    const value = this.dataset.value;
    const isActive = this.classList.contains("active");

    if (isActive) {
      this.classList.remove("active");
      delete state.typefaces[value];
    } else {
      ensureOpen(font);
      this.classList.add("active");
      state.typefaces[value] = { type: "style", font, label: value };
    }
    updateLockState(font);
    updateResult();
  });
});

// Pill click handler (licence, orgsize, application)

document.querySelectorAll(".pill").forEach((pill) => {
  pill.addEventListener("click", function () {
    const group = this.dataset.group;
    const value = this.dataset.value;

    if (group === "license") {
      document
        .querySelectorAll('[data-group="license"]')
        .forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      state.license = value;
    } else if (group === "orgsize") {
      document
        .querySelectorAll('[data-group="orgsize"]')
        .forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      state.orgsize = value;
    } else if (group === "application") {
      this.classList.toggle("active");
      const noteEl = document.getElementById("note-" + value);
      if (state.applications.has(value)) {
        state.applications.delete(value);
        if (noteEl) noteEl.classList.remove("visible");
      } else {
        state.applications.add(value);
        if (noteEl) noteEl.classList.add("visible");
      }
    }
    updateResult();
  });
});

// Result calculation and rendering

function updateResult() {
  const priceEl = document.getElementById("result-price");
  const noteEl = document.getElementById("result-note");
  const breakdownEl = document.getElementById("breakdown");
  const org = state.orgsize;
  const tfKeys = Object.keys(state.typefaces);
  const appKeys = [...state.applications];

  if (appKeys.length === 0 || tfKeys.length === 0) {
    priceEl.textContent = "\u2014";
    if (appKeys.length === 0 && tfKeys.length === 0) {
      noteEl.textContent = "Select an application and typeface to see pricing.";
    } else if (appKeys.length === 0) {
      noteEl.textContent = "Select an application to see pricing.";
    } else {
      noteEl.textContent = "Select a typeface to see pricing.";
    }
    noteEl.style.display = "block";
    breakdownEl.classList.remove("visible");
    return;
  }

  if (org === "1001+") {
    priceEl.textContent = "\u2014";
    noteEl.textContent =
      "For organisations larger than this size, license quotes are provided manually.";
    noteEl.style.display = "block";
    breakdownEl.classList.remove("visible");
    return;
  }

  // Style price = sum of selected app prices at this org size
  const stylePriceAtOrg = appKeys.reduce(
    (sum, app) => sum + appPrices[app][org],
    0,
  );

  let total = 0;
  let html = "";

  html += `<div class="breakdown-section">Application</div>`;
  appKeys.forEach((app) => {
    html += `<div class="breakdown-row name-only"><span>${app}</span><span></span></div>`;
  });

  html += `<div class="breakdown-section">Typeface</div>`;
  tfKeys.forEach((k) => {
    const sel = state.typefaces[k];
    total += stylePriceAtOrg;
    html += `<div class="breakdown-row"><span>${sel.label}</span><span>\u20ac${stylePriceAtOrg.toLocaleString()}</span></div>`;
  });

  if (tfKeys.length > 1) {
    html += `<div class="breakdown-row breakdown-total"><span>Total</span><span>\u20ac${total.toLocaleString()}</span></div>`;
  }

  priceEl.textContent = "\u20ac" + total.toLocaleString();
  noteEl.style.display = "none";
  breakdownEl.classList.add("visible");
  breakdownEl.innerHTML = html;
}

// Initialise
updateResult();
