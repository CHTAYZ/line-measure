function calculateDistance() {
    // Giriş değerlerini al
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);

    // Çizgi uzunluğunu hesapla
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Sonucu güncelle
    document.getElementById('result').textContent = distance.toFixed(4);
}