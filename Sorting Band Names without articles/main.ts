const bands: string[] = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const strip = (bandName: string): string => {
  return bandName.replace(/^(a |the |an )/i, "").trim();
};

const sortedBands: string[] = bands.sort((a, b) =>
  strip(a).localeCompare(strip(b))
);
console.log(sortedBands);

const bandsList: HTMLUListElement | null = document.querySelector("#bands");

if (bandsList) {
  bandsList.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
}
