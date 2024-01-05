export const getMinScreenScale = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  return Math.min(1, Math.min(screenWidth / 1440, screenHeight / 900));
};
