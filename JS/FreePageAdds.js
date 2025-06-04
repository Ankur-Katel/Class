// Advertisement data with different links for each image
const adImages = [
    {
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        link: "https://www.example2.com"
    }
];

let adCallback = null;
let adCountdownInterval = null;
const urlParams = new URLSearchParams(window.location.search);
const adFree = urlParams.get('class12') === '0123456789';
const singleAd = urlParams.get('ad') === '1';

function showAd(callback) {
    if (adFree) {
        callback();
        return;
    }
    
    timerPaused = true;
    adOverlay.classList.add('active');
    adCallback = callback;
    
    const randomAdIndex = singleAd ? 0 : Math.floor(Math.random() * adImages.length);
    
    adImage.innerHTML = `
        <a href="${adImages[randomAdIndex].link}" target="_blank">
            <img src="${adImages[randomAdIndex].image}" alt="Advertisement">
        </a>
        <div class="ad-countdown" id="adCountdown">2</div>
        <button class="close-ad" id="closeAd">×</button>
    `;
    
    document.getElementById('closeAd').addEventListener('click', () => {
        adOverlay.classList.remove('active');
        timerPaused = false;
        if (adCallback) {
            adCallback();
            adCallback = null;
        }
    });
    
    let countdown = 2;
    const countdownEl = document.getElementById('adCountdown');
    countdownEl.textContent = countdown;
    document.querySelector('.close-ad').style.opacity = '0';
    
    clearInterval(adCountdownInterval);
    adCountdownInterval = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(adCountdownInterval);
            document.querySelector('.close-ad').style.opacity = '1';
        }
    }, 1000);
}