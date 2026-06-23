// Scratch Card Motoru - scratch.js
export function initScratchCard(rewardText = "50% OFF") {
  // 1. Oyunun tam olarak çizileceği kutuyu bul
  const container = document.querySelector(".game-svg-inner");
  if (!container) {
    console.log("Kutu bulunamadı!");
    return;
  }

  // 2. Eski canvas varsa temizle (üst üste binmesin)
  const oldCanvas = container.querySelector("canvas");
  if (oldCanvas) oldCanvas.remove();

  // 3. Canvas (Kazıma Alanı) Oluştur
  const canvas = document.createElement("canvas");
  canvas.width = 400; // Genişlik
  canvas.height = 400; // Yükseklik
  const ctx = canvas.getContext("2d");

  // Gri kaplamayı çiz
  ctx.fillStyle = "#A9A9A9"; // Gri renk
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Üzerine "Kazı" yazısı ekle
  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText("Kazımak İçin Sürükle", canvas.width / 2, canvas.height / 2);

  // Canvas'ı kutunun üstüne sabitle
  container.style.position = "relative";
  canvas.style.position = "absolute";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%, -50%)";
  canvas.style.zIndex = "10";
  canvas.style.cursor = "crosshair";
  canvas.style.borderRadius = "50%"; // Yuvarlak görünüm için

  container.appendChild(canvas);

  let isDrawing = false;

  // Kazıma Fonksiyonu
  const scratch = (e) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    // Mouse veya parmak koordinatlarını al
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // "Silgi" moduna geç
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2); // 30 fırça büyüklüğü
    ctx.fill();
  };

  // Olay Dinleyicileri (Fare ve Dokunmatik)
  canvas.addEventListener("mousedown", () => (isDrawing = true));
  canvas.addEventListener("mousemove", scratch);
  window.addEventListener("mouseup", () => (isDrawing = false)); // Dışarı çıkarsa da bırak

  canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    scratch(e);
  });
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    scratch(e);
  });
  window.addEventListener("touchend", () => (isDrawing = false));
}
