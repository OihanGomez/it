const targetDate = new Date('2024-06-24:00:00');

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('myButton').style.display = 'block';
    document.getElementById('myButton').addEventListener('click', redirectToOtherPage);
  } else {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdown = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    document.getElementById('countdown').innerText = countdown;
  }
}

function redirectToOtherPage() {
  window.location.href = "amor.png";
}

setInterval(updateCountdown, 1000);

updateCountdown();
