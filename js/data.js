// Course Data
const coursesData = {
  subjects: [
    {
      id: 1,
      title: 'Roblox',
      description: 'Learn to create amazing games and worlds',
      icon: '🎮',
      color: '#FF6B35',
      materials: [
        {
          id: 1,
          title: 'Apa Itu Roblox Studio?',
          description: 'Pengenalan dasar tentang Roblox Studio dan cara menggunakannya',
          image: '🏗️',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Memahami Roblox Studio',
              content: 'Roblox Studio adalah platform untuk membuat game 3D dengan tools yang powerful dan user-friendly.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Teens/roblox%20exp/1/17.png']
            },
            {
              number: 2,
              title: 'Pelajari Mouse Control',
              content: 'Untuk dapat mengoperasikan Roblox Studio dengan baik, kita perlu mengerti Mouse Control yang akan digunakan nantinya.',
              images: ['roblox/image.png']
            },
            {
              number: 3,
              title: 'Buka Roblox Studio dan Pilih Template',
              content: 'Buka Roblox Studio lalu pilih Template hingga muncul tampilan template selection.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d6e762-8a3c-4969-a547-942ead228dd7']
            },
            {
              number: 4,
              title: 'Pilih Template Baseplate',
              content: 'Pilih Baseplate sebagai template. Baseplate adalah salah satu Empty Project yang dapat digunakan untuk membuat project baru. Contoh Empty Project yang lain adalah Classic Baseplate dan Flat Terrain.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d6e84f-f397-4d7e-a068-67eba6a7d4e6']
            },
            {
              number: 5,
              title: 'Template Terbuka',
              content: 'Template akan segera terbuka setelah selesai loading.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a0d1c862-9c35-4831-b15a-e2a308bf57fe']
            }
          ]
        },
        {
          id: 2,
          title: 'Mini Adventure Game - Terrain',
          description: 'Buat lingkungan game menggunakan Terrain Editor dengan berbagai material',
          image: '⛰️',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Memahami Terrain Editor',
              content: 'Dalam membuat sebuah lingkungan dalam game, kita memerlukan sebuah Tools yang bernama Terrain Editor.',
              images: ['roblox/image 1.png', 'https://filemanager.tmdsite.my.id/api/files/presigned/a13b0814-367b-4daf-86ac-bb14fdb8f290']
            },
            {
              number: 2,
              title: 'Buka Template Flat Terrain',
              content: 'Buka Roblox Studio > Templates > Flat Terrain untuk memulai project Mini Adventure Game.'
            },
            {
              number: 3,
              title: 'Buka Terrain Editor',
              content: 'Pada bagian tab Home, klik icon Terrain. Ini akan membuka Terrain Editor pada sisi kiri layar-mu.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b07c1-59c3-4833-8ba0-4df14e104ed2']
            },
            {
              number: 4,
              title: 'Gunakan Paint Tool',
              content: 'Pada Terrain Editor, pilih tab Edit. Lalu gunakan Paint Tool untuk mengubah material sesuai keinginanmu. Tools paint dapat digunakan untuk menggambar dengan material lain di Terrain kamu. Kamu bisa mengubahnya menjadi Air, Batu, bahkan Lava.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b089f-3216-419c-a6f0-50f38c67abf2']
            },
            {
              number: 5,
              title: 'Ubah Material',
              content: 'Untuk mengubah material, pilih Material Setting -> Material yang kamu inginkan. Material Setting berisi pilihan material yang dapat mengubah dasar material (Source Material) menjadi material target (Target Material).',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b0ab9-1d70-4c5f-a974-a9e1b510b074']
            },
            {
              number: 6,
              title: 'Gambar Desain Lingkungan',
              content: 'Gambarlah desain lingkungan terrain sesuai dengan keinginanmu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/1.5.png']
            },
            {
              number: 7,
              title: 'Buat Bukit dengan Add dan Subtract',
              content: 'Buatlah bukit menggunakan tool Add dan Subtract. Sesuaikan dengan rencana desainmu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/add%20subtract%20met4.png']
            }
          ]
        },
        {
          id: 3,
          title: 'Mini Adventure Game - Harvestable Item',
          description: 'Buat item yang bisa dikumpulkan (Cupcake) dalam game',
          image: '🧁',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Tujuan: Mengumpulkan Harvestable Items',
              content: 'Tujuan akhir dari mini game adventure ini adalah mengumpulkan Harvestable Items, yaitu Cupcake.',
              images: ['roblox/image 2.png']
            },
            {
              number: 2,
              title: 'Buat Model Cupcake',
              content: 'Pada Explore Tab -> Workspace -> Klik Kanan -> Model -> Klik kanan -> Rename menjadi Cupcake.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a150b267-f100-427f-879a-3694775ab5c5']
            },
            {
              number: 3,
              title: 'Pahami Parent-Child Relationship',
              content: 'Explore Tab biasanya ada di bagian kanan layar kerjamu. Namun jika tidak muncul kamu bisa membuka dibagian tab Home -> pilih Explore Tab. List hirarki pada Explore Tab lebih sering disebut dengan Parent-Child Relationship. Untuk membuat sebuah object menjadi Child dari sebuah object cukup dengan drag-and-drop ke dalam object parent yang diinginkan.',
              images: ['roblox/image 3.png', 'https://filemanager.tmdsite.my.id/api/files/presigned/a13b0d10-fcd4-4aa3-aea3-5b729f6fa0cc', 'roblox/image 4.png']
            },
            {
              number: 4,
              title: 'Tentang Default Object',
              content: 'Dalam Explore Tab sudah terdapat Object - Object yang disebut dengan Default Object. Object ini adalah Object yang penting dan harus ada di Engine Game Roblox. Default Object dibagi kedalam 4 bagian besar.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Explorer/Meeting%204/objectiv.png']
            },
            {
              number: 5,
              title: 'Tambahkan Beberapa Part',
              content: 'Tambahkan beberapa Part lalu susunanlah menjadi Cupcake.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Explorer/Meeting%204/ck.png']
            },
            {
              number: 6,
              title: 'Gunakan Union',
              content: 'Select semua Part dan pilih Union. Ini akan membuat semua part dalam model tersebut menjadi satu.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/Part%202%20Modelling%20Harvestable%20Item%20(Harvestable%20Item).gif']
            },
            {
              number: 7,
              title: 'Anchor Part',
              content: 'Pastikan part telah di Anchor agar terkunci di posisinya. Jika tidak maka part akan jatuh atau menggelinding.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a13b0e12-532e-4b2d-a8b0-c1461397988e']
            },
            {
              number: 8,
              title: 'Masukkan ke Model Cupcake',
              content: 'Lalu masukkan ke dalam sebuah Model dengan nama Cupcake.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a150d225-008e-4b23-aebd-1ff612bfa028']
            },
            {
              number: 9,
              title: 'Tambahkan BoolValue',
              content: 'Dalam Model Cupcake tadi tambahkan objek BoolValue. Ganti nama BoolValue tersebut menjadi canHarvest. Aktifkan Valuenya dengan cara klik Properties -> Value -> Centang.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%204/Part%206%20Modelling%20Harvestable%20Item%20(Harvestable%20Item).gif']
            }
          ]
        },
        {
          id: 4,
          title: 'Mini Adventure Game - Spoon Tool',
          description: 'Tambahkan tool untuk mengumpulkan item dalam game',
          image: '🥄',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          toolDownloadUrl: 'https://bit.ly/SpoonRoblox',
          steps: [
            {
              number: 1,
              title: 'Pengenalan Spoon Tool',
              content: 'Untuk membuat tool langsung berada ada pada player pada saat pertama kali start. Tool akan ditambahkan di folder StarterPack.'
            },
            {
              number: 2,
              title: 'Download Starter Tool',
              content: 'Download terlebih dahulu starter tool. Tool ini akan kita gunakan sebagai basis untuk membuat Spoon Tool.'
            },
            {
              number: 3,
              title: 'Import Tool ke StarterPack',
              content: 'Pada Tab Explore, dibagian bawah Workspace, klik kanan pada StarterPack. Lalu Insert > Import Roblox Model > Pilih Starter Tool yang sudah kamu download tadi.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a140946e-7f20-4847-b771-915db2261d47']
            },
            {
              number: 4,
              title: 'Rename Tool',
              content: 'Rename Tool yang sudah ditambahkan, dengan nama sesuai yang ingin kamu tampilkan pada game. Contoh: Scoop.',
              images: ['https://filemanager.tmdsite.my.id/api/files/presigned/a14095bc-a577-4e31-993f-db96653a8a5c']
            }
          ]
        },
        {
          id: 5,
          title: 'Mini Adventure Game - Coding For Spoon',
          description: 'Buat coding untuk fungsi Spoon Tool',
          image: '💻',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Pengenalan Coding',
              content: 'Kita akan membuat kode, Jika Tool menyentuh Harvestable Item dan player masih memiliki spaces untuk itemnya, maka Item akan bertambah 1 pada Leaderboard. Lalu Harvestable Item akan menghilang beberapa detik sebelum akhirnya nanti muncul kembali.'
            },
            {
              number: 2,
              title: 'Tambahkan Script pada Tool',
              content: 'Pada Tool, tambahkan sebuah script didalamnya. Lalu Rename script tersebut menjadi ToolScript.',
              images: ['https://tmd-academy-dev.s3.ap-southeast-1.amazonaws.com/uploads/photos/shares/Roblox/ROBLOX2/scrip.png', 'roblox/image 5.png']
            },
            {
              number: 3,
              title: 'Buat Local Variables',
              content: 'Hapus kode yang ada pada Script lalu tambahkan kode untuk membuat variable bernama tool dan scoop. local scoop = tool.Scoop berfungsi untuk menyimpan part Scoop ke dalam variable.',
              images: ['roblox/image 5.png']
            },
            {
              number: 4,
              title: 'Buat Function onTouch',
              content: 'Untuk membuatnya kita perlu membuat sebuah function bernama onTouch() dengan parameter partTouch. Ketika Scoop menyentuh Cupcake akan mengubah nilai dari Boolvalue dan mencetak "Found an Item".',
              images: ['roblox/image 6.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%204%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 5,
              title: 'Tambahkan Print untuk Testing',
              content: 'Tambahkan kode untuk membuat kode print didalam conditional statement untuk testing apakah code yang dibuat berjalan dengan baik.',
              images: ['roblox/image 7.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%205%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 6,
              title: 'Buat Leaderboard Variables',
              content: 'Tambahkan kode pada ToolScript setelah kode local scoop = tool.Scoop. Variable-variable ini berfungsi untuk membuat leaderboard dapat menghitung berapa jumlah Gold dan Item.',
              images: ['roblox/image 8.png', 'roblox/image 9.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%206%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 7,
              title: 'Tambahkan Harvest Logic',
              content: 'Tambahkan kode berikut ini setelah kode print("Found an item"). Kode di atas artinya Jika terdapat BoolValue CanHarvest dan jumlah Item kurang dari Spaces, maka nilai Items bertambah 1.',
              images: ['roblox/image 10.png']
            },
            {
              number: 8,
              title: 'Set Respawn Timer',
              content: 'Selanjutnya tambahkan kode di bawah ini setelah kode canHarvest.Value = false. Ini akan membuat Harvestable Item menghilang beberapa detik sebelum muncul kembali.',
              images: ['roblox/image 11.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Roblox/Roblox%20Coder/Meet%206/Part%207%20Coding%20pada%20Spoon.gif']
            },
            {
              number: 9,
              title: 'Connect onTouch ke Event',
              content: 'Terakhir hubungkan function onTouch() dengan Event Touched() di baris paling bawah setelah penutup function.',
              images: ['roblox/image 12.png']
            }
          ]
        },
        {
          id: 6,
          title: 'Mini Adventure Game - Testing',
          description: 'Test dan debug game Mini Adventure yang sudah dibuat',
          image: '🧪',
          video: 'https://www.youtube.com/embed/P4MmDHP52Ro?si=0KgW4lyRiBQ3GW4i',
          steps: [
            {
              number: 1,
              title: 'Jalankan Game',
              content: 'Klik tombol Play untuk menjalankan game dan test semua fungsi yang sudah dibuat.',
              images: ['roblox/image 13.png']
            },
            {
              number: 2,
              title: 'Test Pengumpulan Item',
              content: 'Gunakan Scoop Tool untuk menyentuh Cupcake dan lihat apakah item bertambah di leaderboard.',
              images: ['roblox/image 14.png']
            },
            {
              number: 3,
              title: 'Test Respawn',
              content: 'Pastikan Cupcake menghilang dan muncul kembali setelah beberapa detik.'
            },
            {
              number: 4,
              title: 'Debugging',
              content: 'Jika ada error, periksa Output Console untuk melihat pesan error dan perbaiki code sesuai kebutuhan.'
            },
            {
              number: 5,
              title: 'Selesai!',
              content: 'Selamat! Anda sudah berhasil membuat Mini Adventure Game pertama Anda di Roblox!'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Website Development',
      description: 'Build beautiful websites with modern web technologies',
      icon: '🌐',
      color: '#4169E1',
      materials: [
        {
          id: 3,
          title: 'HTML Basics',
          description: 'Master the foundation of web development with HTML',
          image: '📝',
          video: 'https://www.youtube.com/embed/UB3IHstG2jA',
          steps: [
            {
              number: 1,
              title: 'Learn HTML Structure',
              content: 'Understand the basic structure: HTML, HEAD, BODY tags and how they organize content.'
            },
            {
              number: 2,
              title: 'Work with Elements',
              content: 'Learn about headings, paragraphs, links, images, and other essential HTML elements.'
            },
            {
              number: 3,
              title: 'Create Semantic HTML',
              content: 'Use semantic tags like <header>, <nav>, <main>, <section>, and <footer> for better structure.'
            },
            {
              number: 4,
              title: 'Build Forms',
              content: 'Create interactive forms with input fields, buttons, and validation.'
            },
            {
              number: 5,
              title: 'Create Your First Page',
              content: 'Build a complete HTML page with multiple sections and elements.'
            }
          ]
        },
        {
          id: 4,
          title: 'CSS Styling & Layout',
          description: 'Learn to style and layout your web pages beautifully',
          image: '🎨',
          video: 'https://www.youtube.com/embed/OXGznpKZ_sA',
          steps: [
            {
              number: 1,
              title: 'CSS Basics',
              content: 'Learn selectors, properties, and how to apply styles to HTML elements.'
            },
            {
              number: 2,
              title: 'Box Model & Positioning',
              content: 'Understand margins, padding, borders, and different positioning techniques.'
            },
            {
              number: 3,
              title: 'Flexbox Layout',
              content: 'Master Flexbox for creating flexible, responsive layouts with ease.'
            },
            {
              number: 4,
              title: 'Responsive Design',
              content: 'Create websites that look great on all devices using media queries.'
            },
            {
              number: 5,
              title: 'Animations & Effects',
              content: 'Add smooth transitions and animations to make your site interactive and engaging.'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Scratch',
      description: 'Learn programming through visual block coding',
      icon: '🧩',
      color: '#FF6B9D',
      materials: [
        {
          id: 5,
          title: 'Apa Itu Scratch?',
          description: 'Pengenalan dasar tentang Scratch dan cara menggunakannya',
          image: '🎬',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          steps: [
            {
              number: 1,
              title: 'Memahami Scratch',
              content: 'Scratch adalah aplikasi untuk membuat animasi dan game sederhana dengan menggunakan blok coding yang telah disiapkan.',
              images: ['scratch/dreamina-2026-05-12-2571-Change_the_background_to_white_keeping_....jpeg']
            },
            {
              number: 2,
              title: 'Buka Website Scratch',
              content: 'Kunjungi website https://scratch.mit.edu/ dan buat akun gratis Anda.'
            },
            {
              number: 3,
              title: 'Klik Create',
              content: 'Setelah login, klik tombol "Create" untuk membuat project baru.'
            },
            {
              number: 4,
              title: 'Explore Interface',
              content: 'Pelajari tentang Stage (area permainan), Sprites (karakter), Block palette, dan Script area.'
            },
            {
              number: 5,
              title: 'Siap Membuat Game',
              content: 'Sekarang Anda sudah siap untuk membuat game pertama Anda dengan Scratch!'
            }
          ]
        },
        {
          id: 6,
          title: 'Scratch - Clone Wars',
          description: 'Buat game menembak dengan spaceship dan alien',
          image: '🚀',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/715403315',
          steps: [
            {
              number: 1,
              title: 'Buat Variable Speed',
              content: 'Buat Variable bernama "Speed" dan sembunyikan variable dengan cara menghapus tanda centang pada variable tersebut.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/17.png']
            },
            {
              number: 2,
              title: 'Setup Title Sprite',
              content: 'Tambahkan coding pada Title sprite untuk membuatnya muncul ketika game dimulai.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/19.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/7.png']
            },
            {
              number: 3,
              title: 'Setup Rocketship Movement',
              content: 'Tambahkan coding pada Rocketship untuk membuatnya bergerak ke kiri-kanan jika tombol panah keyboard ditekan.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/8.png']
            },
            {
              number: 4,
              title: 'Setup Rocketship Collision',
              content: 'Tambahkan coding pada Rocketship untuk membuatnya meledak jika terkena Alien dan mengirim pesan dengan Broadcast.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/9.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/15.png']
            },
            {
              number: 5,
              title: 'Setup Laser Clone',
              content: 'Tambahkan coding pada Laser untuk membuat clone setiap kali tombol Space di tekan (gunakan Control > Clone).',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/10.png', 'https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/16.png']
            },
            {
              number: 6,
              title: 'Setup Laser Movement',
              content: 'Tambahkan coding pada Laser untuk membuat clone menuju spaceship dan bergerak ke atas.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/11.png']
            },
            {
              number: 7,
              title: 'Setup Alien Clone',
              content: 'Tambahkan coding pada Alien untuk membuat clone setiap 2 sampai 5 detik.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/12.png']
            },
            {
              number: 8,
              title: 'Setup Alien Movement',
              content: 'Tambahkan coding pada Alien untuk membuat clone muncul secara random di sisi atas layar dan bergerak dengan kecepatan 0,5 sampai 2. Clone akan hancur apabila terkena Laser.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/13.png']
            },
            {
              number: 9,
              title: 'Setup Alien Hit',
              content: 'Tambahkan coding pada Alien untuk membuat clone hancur ketika menerima broadcast Hit dari Spaceship.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/EN%20Xplorer%20Kid%20Self%20Learning/Meeting%2021/img/14.png']
            },
            {
              number: 10,
              title: 'Challenge - Tambah Score System',
              content: 'Tambahkan Variable Score agar player mendapat skor ketika laser berhasil mengenai alien.',
            },
            {
              number: 11,
              title: 'Challenge - Create Win Screen',
              content: 'Tambahkan Sprite Win menggunakan Paint Sprite > Text. Berikan coding agar jika player mendapat skor 10, semua sprite hide dan sprite ini muncul.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/28.png']
            },
            {
              number: 12,
              title: 'Challenge - Create Lose Screen',
              content: 'Tambahkan Sprite Lose dengan coding agar jika player hancur, semua sprite hide dan sprite ini akan muncul saat menerima broadcast Hit.',
              images: ['https://academy.tmdcdn.my.id/uploads/photos/shares/Kids/Kids%20Self%20Learning%20Xplorer/Meeting%2021/img/29.png']
            },
            {
              number: 13,
              title: 'Challenge - Add Start Button',
              content: 'Tambahkan tombol Start sehingga ketika game dimulai semua sprite hide dan hanya menampilkan tombol start. Ketika start di klik semua sprite muncul dan game dimulai.'
            },
            {
              number: 14,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Sekarang mainkan game Clone Wars yang sudah Anda buat!'
            }
          ]
        },
        {
          id: 7,
          title: 'Scratch - Car Racing',
          description: 'Buat game balap mobil dengan obstacle dan nyawa',
          image: '🏎️',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/1318949686',
          steps: [
            {
              number: 1,
              title: 'Buat Variables',
              content: 'Buat Variable bernama "Speed", "Life", dan "Score". Sembunyikan variable Speed dan Life dengan menghapus tanda centang pada variable tersebut.',
              images: ['scratch/image.png']
            },
            {
              number: 2,
              title: 'Setup Buildings Background',
              content: 'Tambahkan coding pada sprite Buildings untuk membuat gedung bergerak terus dari atas ke bawah seperti background berjalan.',
              images: ['scratch/image 1.png']
            },
            {
              number: 3,
              title: 'Setup Buildings2 Background',
              content: 'Tambahkan coding pada sprite Buildings2 (di sisi kanan) untuk membuat gedung bergerak turun terus seperti background berjalan.',
              images: ['scratch/image 2.png']
            },
            {
              number: 4,
              title: 'Setup Road Marking',
              content: 'Tambahkan coding pada sprite Road Marking untuk membuat garis jalan muncul terus dan bergerak ke bawah seperti efek jalan berjalan.',
              images: ['scratch/image 3.png']
            },
            {
              number: 5,
              title: 'Setup Opponent Car',
              content: 'Tambahkan coding pada sprite Opponent Car untuk membuat mobil musuh bergerak turun dari atas dan muncul kembali secara acak.',
              images: ['scratch/image 4.png']
            },
            {
              number: 6,
              title: 'Setup Normal Car',
              content: 'Tambahkan coding pada sprite Normal Car untuk menampilkan mobil, mengatur posisi awal, menggerakkan mobil ke kiri, kanan, atas, bawah menggunakan tombol panah keyboard, serta mendeteksi tabrakan dengan musuh.',
              images: ['scratch/image 5.png']
            },
            {
              number: 7,
              title: 'Setup Life Display',
              content: 'Tambahkan coding pada sprite Life untuk menampilkan jumlah nyawa pemain dan mengubah tampilan nyawa saat terkena musuh.',
              images: ['scratch/image 6.png']
            },
            {
              number: 8,
              title: 'Challenge - Create Game Over Screen',
              content: 'Tambahkan Backdrop "Game Over" menggunakan Paint Background > Text. Tambahkan coding agar jika nyawa player = 0, semua sprite stop dan menuju backdrop game over.',
              images: ['scratch/image 7.png']
            },
            {
              number: 9,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Game Car Racing Anda sudah siap dimainkan. Hindari mobil musuh dan raih skor setinggi mungkin!'
            }
          ]
        },
        {
          id: 8,
          title: 'Scratch - Astronaut',
          description: 'Buat game petualangan astronaut dengan sistem oksigen',
          image: '👨‍🚀',
          video: 'https://www.youtube.com/embed/KB_HJ7qYi8w?si=Tf5GkwJYJQU9xEl3',
          templateUrl: 'https://scratch.mit.edu/projects/1318946201',
          steps: [
            {
              number: 1,
              title: 'Buat Variable Oxygen',
              content: 'Buat Variable bernama "Oxygen" untuk melacak tingkat oksigen astronaut Anda.',
              images: ['scratch/image 8.png']
            },
            {
              number: 2,
              title: 'Setup Astronaut Movement',
              content: 'Tambahkan coding pada sprite Astronaut untuk membuat astronaut bergerak ke atas, bawah, kiri, dan kanan menggunakan tombol panah keyboard.',
              images: ['scratch/image 9.png']
            },
            {
              number: 3,
              title: 'Setup Star Collection',
              content: 'Tambahkan coding pada sprite Star untuk membuat bintang berpindah ke posisi acak dan mengeluarkan suara saat disentuh oleh Astronaut.',
              images: ['scratch/Cuplikan_layar_2026-05-12_130738.png']
            },
            {
              number: 4,
              title: 'Setup Meteor Falling',
              content: 'Tambahkan coding pada sprite Meteor untuk membuat meteor jatuh dari atas secara acak dan mengurangi Oxygen saat menyentuh Astronaut.',
              images: ['scratch/image 10.png']
            },
            {
              number: 5,
              title: 'Setup Oxygen Depletion',
              content: 'Kembali ke sprite Astronaut dan tambahkan coding untuk membuat oksigen berkurang secara otomatis setiap 1 detik. Jika oksigen habis (kurang dari 1), maka semua permainan akan berhenti.',
              images: ['scratch/image 11.png']
            },
            {
              number: 6,
              title: 'Setup Oxygen Increase',
              content: 'Tambahkan coding pada sprite Astronaut untuk menambah oksigen saat menyentuh sprite Star. Jika oksigen melebihi 100, maka nilainya akan kembali menjadi maksimal 100.',
              images: ['scratch/image 12.png']
            },
            {
              number: 7,
              title: 'Challenge - Create Game Over Screen',
              content: 'Tambahkan Backdrop "Game Over" menggunakan Paint Background > Text. Tambahkan coding agar jika Oxygen = 0, semua sprite stop dan menuju backdrop game over.',
              images: ['scratch/image 13.png']
            },
            {
              number: 8,
              title: 'Tambah Challenge',
              content: 'Coba tambahkan fitur lain seperti scoring, level yang berbeda, atau musuh tambahan untuk membuat game lebih seru!'
            },
            {
              number: 9,
              title: 'Mainkan Game Anda',
              content: 'Selamat! Game Astronaut Anda sudah selesai. Jangan biarkan oksigen Anda habis dan kumpulkan bintang sebanyak mungkin!'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Design',
      description: 'Master visual design and user experience principles',
      icon: '🎭',
      color: '#9D4EDD',
      materials: [
        {
          id: 7,
          title: 'Design Principles',
          description: 'Learn the fundamentals of good design',
          image: '✨',
          video: 'https://www.youtube.com/embed/YqQx75OPY6A',
          steps: [
            {
              number: 1,
              title: 'Understanding Balance',
              content: 'Learn how to arrange elements symmetrically and asymmetrically for visual harmony.'
            },
            {
              number: 2,
              title: 'Color Theory',
              content: 'Explore primary colors, complementary colors, and how colors affect mood and emotion.'
            },
            {
              number: 3,
              title: 'Typography',
              content: 'Learn about fonts, hierarchy, and how text can guide users through your design.'
            },
            {
              number: 4,
              title: 'Whitespace & Layout',
              content: 'Master the use of empty space to create clean, organized, and readable designs.'
            },
            {
              number: 5,
              title: 'Apply Your Knowledge',
              content: 'Create a design project using all the principles you\'ve learned.'
            }
          ]
        },
        {
          id: 8,
          title: 'UI/UX Design for Beginners',
          description: 'Learn to design user interfaces and experiences',
          image: '🖥️',
          video: 'https://www.youtube.com/embed/nOFNOWIktfI',
          steps: [
            {
              number: 1,
              title: 'UX Basics',
              content: 'Understand user research, personas, and how to design for your audience.'
            },
            {
              number: 2,
              title: 'Wireframing',
              content: 'Create simple wireframes to plan your interface layout before adding details.'
            },
            {
              number: 3,
              title: 'UI Elements',
              content: 'Design buttons, forms, menus, and other common UI components.'
            },
            {
              number: 4,
              title: 'Responsive Design',
              content: 'Learn how to design interfaces that work on phones, tablets, and desktops.'
            },
            {
              number: 5,
              title: 'Prototyping',
              content: 'Create interactive prototypes to test your designs before development.'
            }
          ]
        }
      ]
    }
  ]
};

// Get subject by ID
function getSubject(id) {
  return coursesData.subjects.find(subject => subject.id === id);
}

// Get material by subject ID and material ID
function getMaterial(subjectId, materialId) {
  const subject = getSubject(subjectId);
  return subject ? subject.materials.find(material => material.id === materialId) : null;
}

// Get all materials for a subject
function getSubjectMaterials(subjectId) {
  const subject = getSubject(subjectId);
  return subject ? subject.materials : [];
}
