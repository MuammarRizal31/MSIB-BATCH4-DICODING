Markdown merupakan bahasa markah (markup language) ringan yang dapat digunakan untuk menambahkan format pada dokumen teks biasa [1]. Saat ini Markdown menjadi salah satu bahasa markup yang cukup populer. Lalu, apa itu bahasa markah? 

Bahasa markah (markup language) merupakan sistem modern untuk memberikan keterangan pada dokumen dengan sintaksis yang dapat dibedakan dari kontennya. Biasanya ia menggunakan tag atau tanda tertentu untuk mendefinisikan elemen dalam dokumen, dikenal dari istilah "marking up" (memberikan penanda). Begitu juga dengan bahasa markdown yang merupakan salah satu bahasa markup yang ringan. Jadi ketika ingin menambahkan format pada teks, Anda cukup menambahkan tanda atau tags pada teks tersebut.


Hampir semua pengguna Git pasti membuat README pada repository mereka, yakni berkas teks yang berisi informasi tentang penjelasan singkat/detail, cara penggunaan, dan sebagainya pada projek yang ada di dalam repository tersebut.

Berkas readme biasanya akan dilihat pertama kali sewaktu mengunjungi repository Anda. Berkas README biasanya berekstensi markdown (.md) yang digunakan untuk menghasilkan sebuah html ringkasan. Maksudnya seperti apa? Jika kita mengeksplorasi repository yang ada di GitHub, perhatikan pada bagian bawah repository tersebut, pasti terdapat tampilan dari berkas README.md. Untuk lebih jelasnya, coba perhatikan bagian gambar yang ditandai berikut.

Dalam membuat README.md, ada beberapa hal yang perlu diperhatikan, yaitu struktur README.md.

Lalu, bagaimana cara membuat README.md yang baik? Untuk itu, ikutilah beberapa tahap berikut untuk mengikuti latihan membuat berkas readme untuk repository:
    1. buka repository/membuat repository
    2. kemudian klik tautan README untuk membuat berkas 
    3. setelah menekan tautan untuk membuat readme,kita akan emnuju ke halaman pembuatan berkas README
    4. penulisan di README.md itu cukup unik,dimana untuk membuat tulisan heading kita perlu menggunakan simbol(#),lalu diikuti dengan kalimat yang akan menjadi heading
        -kita juga bisa menulis menggunakan simbol(==) pada baris baru setelah kalimat yang ingin anda ubah menjadi heading..
    5. untuk membuat sub-heading kita juga bisa menggunakan simbol (--) pada baris baru setelah kalimat yang ingin diubah menjadi sub-heading
    6. kita juga dapat mengapit kalimat menggunakan simbol bintang(*) untuk membuat tulisan bercetak miring
    7. jika ingin membuat list,kita dapat menggunakan simbol(-) dan diikuti dengan kata yang dijadikan item dari list tersebut
    8. setelah selesai,periksalah terlebih dahulu tampilan dari apa yang telah kita tulis anda bisa menggunakan fitur preview

    noted: Tentunya masih banyak cara dalam memberikan format penulisan pada berkas README.md. Untuk latihan membuat README.md ini, kita cukup menggunakan format heading, subheading, list, serta penulisan bercetak miring saja

    contoh membuat readme : 

    # Daftar-Biodata-Siswa
    ==
    Daftar biodata Siswa Dicoding Academy
    --
    *biodata siswa terdiri dari 3 angkatan yaitu sebagai berikut*
    - Angkatan 2019
    - Angkatan 2020
    - Angkatan 2021

1.heading   
    -Dalam bahasa markdown, tanda pagar digunakan untuk membangun sebuah heading. Semakin banyak jumlah tanda pagar (#), maka semakin besar level heading-nya. Ketika semakin besar level heading-nya, maka teks akan menjadi lebih kecil.
        * # heading level 1
        * ## heading level 2
        * ### heading level 3
        * dan seterusnya sampai 6

2.Line breaks
    - Anda bisa membuat baris baru dalam bahasa markdown menggunakan dua spasi atau lebih. Selain itu, Anda juga bisa menggunakan tanda atau tag <br> alias break.

3.Unordered list
Tanda bintang dalam bahasa markdown akan berubah menjadi daftar atau list yang tidak berurutan. Selain tanda bintang, tanda hubung (-) dan tanda tambah (+) juga akan diartikan sebagai daftar yang tidak berurutan atau unordered list.
    - -first item
    - -second item
    - -third item
    - *first item
    - *second item
    - *third item

Ingat ya, pastikan Anda sudah menambahkan dua spasi setelah tanda bintang pada baris tanggal sebelum menyimpannya. Hal ini dilakukan agar kalimat selanjutnya dapat berganti baris.

