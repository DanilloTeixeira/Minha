/* -----------------------------
   GALERIA AUTOMÁTICA
----------------------------- */
const gallery = document.getElementById("gallery-grid");

if (gallery) {
    const photos = [
        "../image/fam1.jpg",
        "../image/fam2.jpg",
        "../image/famili.jpeg",       
        "../image/fam.jpeg",
        "../image/ju.jpeg",        
        "../image/fil.jpeg",
        "../image/joca.jpeg",
        "../image/exec3.jpg",
        "../image/exec2.jpg",
        "../image/scot.jpg",
        "../image/bike1.jpg",
        "../image/bike2.jpg",
        "../image/bikk4.jpg",
        "../image/danfit.jpeg",
        "../image/maq4.jpeg",
        "../image/result.jpeg",        
        "../image/maq2.jpeg",
        "../image/maquina2.jpeg",
        "../image/ps.jpeg",
        "../image/spfc2.jpeg",
        "../image/nunja.jpeg",
        "../image/establ2.jpeg",
        "../image/estbl.jpeg",        
        "../image/pc.jpeg",        
        "../image/W3d.jpeg",
        "../image/w3d1.jpeg"
    ];

    photos.forEach(src => {
        const div = document.createElement("div");
        div.classList.add("gallery-item");

        div.innerHTML = `
            <img src="${src}" class="gallery-img" data-src="${src}">
        `;

        gallery.appendChild(div);
    });

    /* — abrir lightbox ao clicar — */
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", () => {
            openLightbox(img.dataset.src);
        });
    });
}

/* -----------------------------
   LIGHTBOX
----------------------------- */
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.classList.add("active");
    lightboxImg.src = src;
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.classList.remove("active");
}

/* -----------------------------
   CARROSSEL DE FOTOS (MÚSICA)
----------------------------- */
const images = [];
const track = document.getElementById("carousel-music");
const indicators = document.getElementById("indicators-music");

if (track && indicators) {
    images.forEach((src, index) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");
        slide.innerHTML = `<img src="${src}" alt="Foto ${index + 1}">`;
        track.appendChild(slide);

        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");
        if (index === 0) dot.classList.add("active");
        indicators.appendChild(dot);
    });
}

/* -----------------------------
   CARROSSEL DE VÍDEOS
----------------------------- */

/* ADICIONE SEUS VÍDEOS AQUI */
const videos = [
    // exemplo:
    "../image/dan1.mp4",
    "../image/danespa.mp4",
    "../image/daneing.mp4",
    "../image/WhatsApp Video 2025-11-14 at 22.22.25.mp4",
];

let index = 0;
const videoElement = document.getElementById("carouselVideo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateVideo() {
    if (!videoElement || videos.length === 0) return;

    videoElement.pause();   // impede autoplay
    videoElement.removeAttribute("autoplay"); // impede mesmo que venha do HTML
    videoElement.src = videos[index];
    videoElement.load();
}

if (prevBtn && nextBtn && videoElement && videos.length > 0) {
    prevBtn.onclick = () => {
        index = (index - 1 + videos.length) % videos.length;
        updateVideo();
    };

    nextBtn.onclick = () => {
        index = (index + 1) % videos.length;
        updateVideo();
    };

    updateVideo(); // inicializa sem autoplay
}
