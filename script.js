const content = document.getElementById("content");
const glitch = new Audio("video-game-vintage-jump-ascend_zkbs6f4_.mp3");
const donateSound = new Audio("16446_1460642689 (mp3cut.net).mp3");
glitch.volume = 0.2;
donateSound.volume = 0.5;

const wallet = 'UQCiOnRxozBuryhaQ5QlCnCDwCcC7arbqnrGIlKg_4J_YQRa';

function showPaymentOptionsWithDescription(description) {
  glitch.currentTime = 0;
  glitch.play();
  // Экранируем одинарные кавычки в описании, чтобы оно не сломало HTML-атрибут onclick
  const escapedDescription = description.replace(/'/g, "\\'");
  content.innerHTML = `
    <div class='fade-in centered-container'>
      <p class='text-highlight' style='margin-top: auto;'>${description}</p>
      <button class='btn' onclick="showQR('TONCOIN', '${escapedDescription}')">TONCOIN</button>
      <button class='btn' onclick="showQR('USDT (TON)', '${escapedDescription}')">USDT (TON)</button>
      <button class='btn'>БАНКОВСКАЯ КАРТА</button>
      <button class='btn'>TELEGRAM STARS</button>
      <button class='btn' onclick="navigate('start')">← НАЗАД</button>
    </div>
  `;
}

// Второй параметр изменен на 'serviceDescription', чтобы хранить описание услуги
function showQR(label, serviceDescription) {
  glitch.currentTime = 0;
  glitch.play();
  // Также экранируем кавычки здесь для безопасной передачи в следующую функцию
  const escapedServiceDescription = serviceDescription.replace(/'/g, "\\'");
  content.innerHTML = `
    <div class='fade-in centered-container'>
      <p class='text-highlight'>${label}</p>
      <div class="qr-wrapper">
        <img src="screenshot_20250510-200727~2.webp" alt="QR Code" class="qr-img" loading="lazy">
      </div>
      <div style="word-wrap: break-word; max-width: 260px; margin: auto;">
        <p style="cursor: pointer; color: #00f0ff;" onclick="navigator.clipboard.writeText('${wallet}')">${wallet}</p>
      </div>
      <p style="font-size: 8px; color: #aaa;">Нажмите, чтобы скопировать адрес</p>
      <button class='btn' onclick="showPaymentOptionsWithDescription('${escapedServiceDescription}')">← НАЗАД</button>
    </div>
  `;
}

function showChannel(channel) {
  glitch.currentTime = 0;
  glitch.play();
  content.innerHTML = `
    <div class='fade-in centered-container'>
      <div class="channel-wrapper" style="margin-bottom: 14px;">
        <img src="${channel.avatar}" alt="${channel.name}" class="channel-img" loading="lazy">
      </div>
      <a href="${channel.link}" target="_blank">
        <button class='btn' onclick="glitch.play()">Перейти</button>
      </a>
      <button class='btn' onclick="navigate('channels')">← НАЗАД</button>
    </div>
  `;
}

const sections = {
  home: `
    <div class='fade-in centered-container'>
      <button class='btn' onclick="navigate('start')">СТАРТ</button>
      <button class='btn' onclick="navigate('portfolio')">ПОРТФОЛИО</button>
      <button class='btn' onclick="navigate('channels')">ТГ-КАНАЛЫ</button>
      <button class='btn' onclick="navigate('donate')">ДОНАТ</button>
    </div>
  `,
  start: `
    <div class='fade-in centered-container'>
      <button class='btn' onclick="showPaymentOptionsWithDescription('Монтаж вертикальных видео под соцсети, динамично и цепляюще.')">Shorts, Reels, TikTok</button>
      <button class='btn' onclick="showPaymentOptionsWithDescription('Создание канала с нуля: оформление, структура, наполнение.')">Создание ТГ-канала под ключ</button>
      <button class='btn' onclick="showPaymentOptionsWithDescription('Ежедневный контент, сторителлинг, вовлечённость.')">Ведение ТГ-канала (контент)</button>
      <button class='btn' onclick="showPaymentOptionsWithDescription('Анимация под стиль проекта, с саунд-дизайном.')">Анимационный видеоролик</button>
      <button class='btn' onclick="showPaymentOptionsWithDescription('Создание мини-приложений с авторским UI под Telegram.')">Создание приложений в Телеграм</button>
      <button class='btn' onclick="navigate('home')">← НАЗАД</button>
    </div>
  `,
  portfolio: `
    <div class='fade-in centered-container'>
      <p class='text-highlight'>[Здесь будет портфолио]</p>
      <button class='btn' onclick="navigate('home')">← НАЗАД</button>
    </div>
  `,
  channels: `
    <div class='fade-in centered-container'>
      <button class='btn' onclick='showChannel({avatar: "news.webp", name: "Улица Вестей", link: "https://t.me/ulitsa_vestei"})'>Самые свежие новости</button>
      <button class='btn' onclick='showChannel({avatar: "img_20250511_032340_697.webp", name: "Республика Рецептов", link: "https://t.me/republic_of_recipes"})'>Простые и вкусные рецепты</button>
      <button class='btn' onclick='showChannel({avatar: "photo_2025-04-17_20-15-21.webp", name: "Сержант Комедиант", link: "https://t.me/serjant_komediant"})'>Лучшие мемы Рунета</button>
      <button class='btn' onclick='showChannel({avatar: "photo_2025-04-22_19-40-13.webp", name: "Cryptouch This", link: "https://t.me/cryptouch_this"})'>Всё про крипту</button>
      <button class='btn' onclick="navigate('home')">← НАЗАД</button>
    </div>
  `,
  donate: `
    <div class='fade-in centered-container'>
      <p class='text-highlight'>Поддержать проект можно здесь:</p>
      <a href="https://donate.stream/dawgrugby" target="_blank" onclick="donateSound.play()">
        <button class='btn'>ПОДДЕРЖАТЬ</button>
      </a>
      <button class='btn' onclick="navigate('home')">← НАЗАД</button>
    </div>
  `
};

let current = 'home';
function navigate(section) {
  glitch.currentTime = 0;
  glitch.play();
  content.classList.remove('fade-in');
  content.classList.add('fade-out');
  setTimeout(() => {
    current = section;
    document.getElementById('logo').style.marginBottom = '6px';
    document.querySelector('.subtitle').style.marginBottom = '10px';
    content.innerHTML = sections[current];
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
  }, 250);
}

window.onload = () => {
  content.innerHTML = sections[current];
};
