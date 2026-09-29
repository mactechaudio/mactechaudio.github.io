// ─────────────────────────────────────────────────────────────
//  EDIT THESE — every page on the site reads from here.
// ─────────────────────────────────────────────────────────────
const SITE = {
  company:     "Mactechaudio",
  product:     "Batch Pkg Manager",
  price:       "$19.99",                                            // shown on the pricing card
  priceNote:   "One-time purchase · 2 Macs · free updates for v1.x",
  buyURL:      "https://mactechaudio.lemonsqueezy.com/buy/REPLACE-ME",   // Lemon Squeezy checkout link
  downloadURL: "https://github.com/REPLACE-ME/REPLACE-ME/releases/latest/download/BatchPkgManager.dmg",
  email:       "support@mactechaudio.com",
  minMacOS:    "macOS 13.5 or later",
  updated:     "September 29, 2026",                            // "last updated" date on legal pages
};
// ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-cfg]").forEach(el => { el.textContent = SITE[el.dataset.cfg]; });
  document.querySelectorAll("[data-href]").forEach(el => {
    const key = el.dataset.href;
    el.href = key === "email" ? "mailto:" + SITE.email : SITE[key];
  });
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
