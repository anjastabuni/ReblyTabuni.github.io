// about
var about = {
  title: "Tentang Saya",
  image: "<img class='img-fluid rounded' width='60%'  src='https://th.bing.com/th/id/OIP._agLADaYSz8GdSsUFIueTQHaJq?w=138&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'  alt='rebly tabuni'>",
  nama: "Rebly Megib Tabuni",
  description: "Saat ini saya dalam pertumbuhan, ketika saya terjung di bidang yang saya sukai, Setiap hari saya sibuk  mengumpulkan pengalaman berharga,",
  text: "Saya menemukan diri saya tertarik pada kualitas yang beresonansi dengan saya dan saya aspirasi dalam berbagai bentuk desain grafis, antarmuka pengguna, animasi interaktif. Segala sesuatu yang membangkitkan estetika",
};

document.getElementById("image").innerHTML = about.image;
document.getElementById("title").innerText = about.title;
document.getElementById("description").innerText = about.description + " " + about.text;

// resume
// education
var eduKuliah = {
  title: "<h3 class='fs-4 fw-bold'>Kuliah</h3>",
  description: "<p class='fs-5'>Universitas Sains Dan Teknologi Jayapura</p>",
  date: "<p class='text-muted mt-2'>Tahun 2018-2023</p>;",
};
var eduSmk = {
  title: "<h3 class='fs-4 fw-bold'>Sekolah SMK</h3>",
  description: "<p class='fs-5'>SMK Yasores Wamena</p>",
  date: "<p class='text-muted mt-2'>Tahun 2016-2018</p>",
};
var eduSmp = {
  title: "<h3 class='fs-4 fw-bold'>Sekolah SMP</h3>",
  description: "<p class='fs-5'>SMP Negeri Bolakme</p>",
  date: "<p class='text-muted mt-2'>Tahun 20013-2016</p>",
};
var eduSd = {
  title: "<h3 class='fs-4 fw-bold'>Sekolah Dasar</h3>",
  description: "<p class='fs-5'>SD Negeri Kelila</p>",
  date: "<p class='text-muted mt-2'>Tahun 2007-2013</p>",
};

document.getElementById("eduKuliah").innerHTML = eduKuliah.title + eduKuliah.description + eduKuliah.date;
document.getElementById("eduSmk").innerHTML = eduSmk.title + eduSmk.description + eduSmk.date;
document.getElementById("eduSmp").innerHTML = eduSmp.title + eduSmp.description + eduSmp.date;
document.getElementById("eduSd").innerHTML = eduSd.title + eduSd.description + eduSd.date;

//kursus
var kursus = [
  {
    title: "<h3 class='fs-4 fw-bold'>Offline Courses at SaCode Papua</h3>",
    description: "<p class='fs-5'>Design E Commerce Applications and make Login Register with PHP MysQl</p>",
    date: "<p class='text-muted mt-2'>Year 2022-2023</p>",
  },

  {
    title: "<h3 class='fs-4 fw-bold'>Online Courses At Codepolitan</h3>",
    description: "<p class='fs-5'>Full-Stack Developer</p>",
    date: "<p class='text-muted mt-2'>Year 2022</p>",
  },
  {
    title: "<h3 class='fs-4 fw-bold'>VSGA Makasar</h3>",
    description: "<p class='fs-5'>Junior Networking Administrator Training</p>",
    date: "<p class='text-muted mt-2'>1 week</p>",
  },
  {
    title: "<h3 class='fs-4 fw-bold'>UPT BLK Kediri</h3>",
    description: "<p class='fs-5'>Computer and Network Science Training</p>",
    date: "<p class='text-muted mt-2'>2 months</p>   ",
  },
];
document.getElementById("soursSacode").innerHTML = kursus[0].title + kursus[0].description + kursus[0].date;
document.getElementById("soursCodepolitan").innerHTML = kursus[1].title + kursus[1].description + kursus[1].date;
document.getElementById("soursJna").innerHTML = kursus[2].title + kursus[2].description + kursus[2].date;
document.getElementById("soursKediri").innerHTML = kursus[3].title + kursus[3].description + kursus[3].date;

// iterasi data dari array dengan for
var skill = [
  "<span class='px-4 py-2 bg-dark text-white me-5'><i class='fa-brands fa-html5'></i> HTML</span>",
  "<span class='px-4 py-2 bg-info text-white me-5'><i class='fa-brands fa-css3-alt'></i> CSS</span>",
  "<span class='px-4 py-2 bg-warning me-5'><i class='fa-brands fa-square-js'></i> JAVASCRIPT</span>",
  "<span class='px-4 py-2 bg-primary-subtle me-5'><i class='fa-brands fa-php'></i> PHP </span>",
  // cssBoots: "BOOTSTRAB",
  // vuejs: "VUE JS",
  // laravel: "LARAVEL",
  // mysql: "MYSQL",
  "<span class='px-4 py-2 bg-info-subtle me-5'><i class='fa-brands fa-figma'></i> FIGMA</span>",
  "<span class='px-4 py-2 bg-dark text-white'><i class='fa-brands fa-git-alt'></i> GIT & GITHUB</span>",
];

var i;
for (i = 0; i < skill.length; i++) {
  skill[i];
}
var mySkill = skill.join(" ");
document.getElementById("techSkill").innerHTML = mySkill;

// kerja
var kerja = [
  {
    title: "<h3 class='fs-4 fw-bold'>Social Media Admin</h3>",
    description: "<p class='fs-5'>At Youth/I GIDI Immanuel Post 7</p>",
    date: "<p class='text-muted mt-2'>Year 2022-2023</p>",
  },
  {
    title: "<h3 class='fs-4 fw-bold'>Freelance Computer Technician</h3>",
    description: "<p class='fs-5'>SD Negeri Kelila</p>",
    date: "<p class='text-muted mt-2'>Year 2018</p>",
  },
];
// tampilkan
document.getElementById("adminGidi").innerHTML = kerja[0].title + kerja[0].description + kerja[0].date;
document.getElementById("freelance").innerHTML = kerja[1].title + kerja[1].description + kerja[1].date;
