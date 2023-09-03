export default function splitJudul(judul) {
    const words = judul.split(" ");
  const startIdx = 1;
  const extractedText = words.slice(startIdx).join(" ");
  const originalTime2 = new Date(`${extractedText}`);
  const time2 = `${originalTime2.toLocaleTimeString()} - ${originalTime2.toLocaleDateString()}`;

  return `${words[0]} ${time2}`;
}
