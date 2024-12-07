function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // تحويل الساعات والدقائق والثواني إلى درجات لدارة العقارب
    const hourDeg = ((hours % 12) + minutes / 60) * 30; // كل ساعة 30 درجة
    const minuteDeg = (minutes + seconds / 60) * 6; // كل دقيقة 6 درجات
    const secondDeg = seconds * 6; // كل ثانية 6 درجات

    // تحديث حركة العقارب
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);

// استدعاء أولي لتحديث الساعة عند تحميل الصفحة
updateClock();