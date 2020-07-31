import gsap, { Power2 } from "gsap";

export default function Animation() {
  const t1 = gsap.timeline();
  return t1
    .fromTo(
      ".card",
      0.4,
      { x: "-100%", opacity: 0, ease: Power2.easeInOut() },
      { x: "0%", opacity: 1, ease: Power2.easeInOut() }
    )
    .fromTo(
      "h1",
      0.3,
      { x: "-80%", opacity: 0, ease: Power2.easeInOut() },
      { x: "0%", opacity: 1, ease: Power2.easeInOut() },
      "-=0.4"
    )
    .fromTo(
      ".instruction",
      0.3,
      { x: "100%", opacity: 0, ease: Power2.easeInOut() },
      { x: "-10%", opacity: 0.5, ease: Power2.easeInOut() },
      "-=0.4"
    )
    .to(".instruction", 0.1, { x: "0%", opacity: 1, ease: Power2.easeInOut() });
}
