function closeBanner() {
    const banner = document.getElementById('meetGreetBanner');
    banner.style.display = 'none';
}

// Show the banner only on Mondays, Tuesdays, Wednesdays, and Saturdays
const today = new Date().getDay();
if (today >= 1 && today <= 3 || today === 6) {
    const banner = document.getElementById('meetGreetBanner');
    banner.style.display = 'block';
}