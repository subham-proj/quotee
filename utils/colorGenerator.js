export const generateRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 20) + 10;
  const lightness = Math.floor(Math.random() * 20) + 70;

  const rgbColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return rgbColor;
};

export default generateRandomPastelColor;