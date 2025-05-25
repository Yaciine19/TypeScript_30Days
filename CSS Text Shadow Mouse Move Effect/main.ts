const hero = document.querySelector(".hero") as HTMLDivElement;
const text = document.querySelector("h1") as HTMLHeadingElement;
const walk = 100; // 100px

function shadow(e: MouseEvent): void {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if(hero !== e.target) {
        x = x + (e.target as HTMLDivElement).offsetLeft;
        y = y + (e.target as HTMLDivElement).offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(255, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 255, 0, 0.7)
    `;
}

hero.addEventListener("mousemove", shadow);