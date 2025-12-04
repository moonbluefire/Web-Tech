const getViewportWidth = () => window.innerwidth || document.documentElement.clientWidth;

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}.`);

const ausgangsBildschirmbreite = screen.width;

console.log(ausgangsBildschirmbreite);

if(screen.width < (ausgangsBildschirmbreite * 0,3)){
    console.log(alert(`Die verfügbare Bildschirmbreite (${screen.width}) ist zu niedrig.`));
}