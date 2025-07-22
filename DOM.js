// document.addEventListener('DOMContentLoaded', function() {

//             // === BAGIAN 1: MEMILIH ELEMEN DARI DOM ===

//             // 1. Memilih elemen berdasarkan ID-nya
            const judul = document.getElementById('judul-utama');
            console.log("Elemen berdasarkan ID 'judul-utama':", judul);

//             // 2. Memilih elemen querySelector 
            const paragrafPertama = document.querySelector('.paragraf');
            console.log("Elemen pertama dengan class '.paragraf':", paragrafPertama);
            const judulViaQuery = document.querySelector('#judul-utama');
            console.log("Memilih ID dengan querySelector:", judulViaQuery);

//             // 3. Memilih SEMUA elemen yang cocok dengan selector CSS
            const semuaItem = document.querySelectorAll('.item-list');
            console.log("Semua elemen dengan class '.item-list':", semuaItem);
            // Mengakses elemen tertentu dari querySelectorAll
            console.log("Item kedua dari daftar:", semuaItem[1]);
            

//             // === BAGIAN 2: MENGUBAH KONTEN DAN ATRIBUT ELEMEN ===
            
//             // 1. Mengubah konten HTML di dalam elemen. Bisa memasukkan tag HTML lain.
                judul.innerHTML = "<em>Judul Diubah menggunakan DOM!</em>";

//             // 2. Mengubah HANYA teks di dalam elemen. Lebih aman dan cepat jika tidak butuh HTML.
            paragrafPertama.textContent = "Teks paragraf ini sudah diubah menggunakan 'textContent'.";

//             // 3. Mengubah atribut. Contoh: mengubah sumber gambar.
            const gambar = document.getElementById('gambar-utama');
            gambar.setAttribute('src', 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/dicoding-logo-full.png');
            gambar.setAttribute('alt', 'Logo Dicoding');
            gambar.style.width = '250px';

//             // 4. Mengubah style elemen secara langsung
            const boxStyle = document.getElementById('box-style');
            boxStyle.style.backgroundColor = 'lightyellow';
            boxStyle.style.color = 'darkgreen';
            boxStyle.style.border = '2px solid darkgreen';
            

//             // === BAGIAN 3: MEMBUAT DAN MENAMBAHKAN ELEMEN BARU ===
            
//             // 1. Membuat elemen baru di memori
            const itemBaru = document.createElement('p');

            // 2. Mengisi konten dan menambahkan class pada elemen baru tersebut
            itemBaru.textContent = 'Item 4 (ditambahkan dari JS)';
            itemBaru.classList.add('item-list'); 

            // 3. Memilih 'kontainer' atau elemen 'parent' tempat elemen baru akan diletakkan
            const listContainer = document.getElementById('list-container');
            
            // 4. Menambahkan elemen baru sebagai anak terakhir dari kontainer
            listContainer.appendChild(itemBaru);


//             // === BAGIAN 4: MENANGANI INTERAKSI PENGGUNA ===
            
            // 1. Memilih elemen tombol 
            const tombolAksi = document.getElementById('tombol-aksi');
            const pesanEvent = document.getElementById('pesan-event');
            
            // 2. Menambahkan 'event listener' pada tombol.
            tombolAksi.addEventListener('click', function() {
                console.log('Tombol diklik!');
                
                // Mengubah konten paragraf pesan
                pesanEvent.textContent = 'Terima kasih telah mengklik tombol ini!';
                pesanEvent.style.color = 'green';
                pesanEvent.style.fontWeight = 'bold';
                
                // Mengubah teks tombol dan menonaktifkannya setelah diklik
                tombolAksi.textContent = 'Sudah Diklik';
                tombolAksi.setAttribute('disabled', 'true');
            });