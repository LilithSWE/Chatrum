import gridGenerator from "./gridGenerator.mjs";

export default function generateGridGamePage(pictureName) {
  // Gör en if sats på om denna körs eller ej! 
  /* 
  OM man väntar på spelare -> Visa inte grid
  OM alla spelare är inne -> Kör gridGenerator och skicka in pictureName i funktionen
  */
  gridGenerator(pictureName);

  // Lägg till socket.on funktion för att uppdatera grid när någon spelar. 
};