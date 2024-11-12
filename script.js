let kotak = document.getElementById("kotak");

// Step 1: Cek dukungan notifikasi
if ("Notification" in window) {
    // Meminta izin notifikasi jika belum diberikan
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission !== "granted") {
                alert("Notifikasi diizinkan hanya di beberapa perangkat atau browser.");
            }
        });
    }
} else {
    console.log("Browser tidak mendukung notifikasi.");
    alert("Tidak dukung Notif cuy");
}

// Fungsi untuk menampilkan notifikasi
function showNotification() {
    if (Notification.permission === "granted") {
        let notification = new Notification("Hitungan selesai!", {
            body: "Perulangan telah mencapai angka 10",
            icon: "image/grafikk.png" // sesuaikan dengan icon Anda
        });
        
        // Menutup notifikasi secara otomatis setelah 5 detik (untuk kompatibilitas Android)
        setTimeout(() => {
            notification.close();
        }, 5000);
        
        alert("Perulangan telah mencapai angka 10");
    } else {
        alert("Perulangan telah mencapai angka 10");
    }
}

// Fungsi perulangan
function startCounting() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        kotak.innerHTML = count;
        console.log(count);
        if (count === 10) {
            count = 0;
            showNotification();
            clearInterval(interval); // hentikan perulangan setelah mencapai 10
            window.location.href = window.location.href;
        }
    }, 1000); // interval 1 detik
}

// Panggil fungsi untuk memulai perhitungan
startCounting();
