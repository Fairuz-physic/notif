let kotak = document.getElementById("kotak")

// Step 1: Minta izin untuk menampilkan notifikasi
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Fungsi untuk menampilkan notifikasi
function showNotification() {
    if (Notification.permission === "granted") {
        new Notification("Hitungan selesai!", {
            body: "Perulangan telah mencapai angka 10",
            icon: "image/grafikk.png" // sesuaikan dengan icon Anda
        });
        
    }
}

// Fungsi perulangan
function startCounting() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        kotak.innerHTML = count
        console.log(count);
        if (count === 10) {
            count = 0
            showNotification();
            clearInterval(interval); // hentikan perulangan setelah mencapai 10
            window.location.href = window.location.href;
        }
    }, 1000); // interval 1 detik
}

// Panggil fungsi untuk memulai perhitungan
startCounting();
