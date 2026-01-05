const getViewportWidth = () => window.innerwidth || document.documentElement.clientWidth;

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}px.`);

console.log(screen.width * 0.3);

if(getViewportWidth() < (screen.width * 0.3)){
    alert(`Die verfügbare Fensterbreite (${getViewportWidth()}px) ist zu niedrig.`);
}