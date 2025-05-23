const triggers: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");
const highlight: HTMLSpanElement = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink(this: HTMLAnchorElement): void {
  const linkCoords = this.getBoundingClientRect();

  const coords: {width: number, height: number, left: number, top: number} = {
    width: linkCoords.width,
    height: linkCoords.height,
    
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
