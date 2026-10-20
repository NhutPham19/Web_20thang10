/* ==========================================================================
   TASK 1: BỘ CẤU HÌNH TRUNG TÂM (CHỈ CẦN THAY ẢNH & CHỮ TẠI ĐÂY)
   ========================================================================== */
const CONFIG = {
    // 1. Thông tin cơ bản
    heroGreeting: "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10",
    recipientName: "Cô Gái Tuyệt Vời Nhất",
    recipientRole: "Bông hoa rạng rỡ & ngọt ngào nhất ngày 20/10 🌸",

    // 2. Ảnh đại diện (Bỏ ảnh vào assets/images/avatar.jpg)
    avatarUrl: "assets/images/avatar.jpg",
    fallbackAvatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",

    // 3. Nhạc nền (Bỏ file mp3 vào assets/audio/music.mp3)
    musicUrl: "assets/audio/music.mp3",

    // 4. Các thẻ thông tin (Nút pha lê 1)
    tags: [
        "🌷 Biệt danh: Công chúa nhỏ",
        "🎂 Ngày đặc biệt: 20/10",
        "✨ Hệ: Xinh đẹp tuyệt đối",
        "🧋 Sở thích: Trà sữa & Đi dạo",
        "💎 Danh hiệu: Nóc nhà quyền lực"
    ],

    // 5. Thanh chỉ số đáng yêu (Nút pha lê 2)
    stats: [
        { label: "💖 Độ xinh đẹp & rạng rỡ", valueText: "1000%", percent: 100 },
        { label: "🌸 Sự dịu dàng & đáng yêu", valueText: "Vô cực ∞", percent: 100 },
        { label: "✨ Sức sát thương của nụ cười", valueText: "9999+", percent: 100 }
    ],

    // 6. Lời nhắn bí mật (Nút pha lê 3)
    secretQuote: "Thế giới có hàng tỷ bông hoa đẹp, nhưng trong mắt mình, bông hoa rực rỡ và đáng trân trọng nhất chính là bạn!",

    // 7. TASK 5: Danh sách ảnh Album 3D (Tự động scale mọi kích thước dọc/ngang/vuông)
    // Bạn chỉ cần chép ảnh vào assets/images/1.jpg, 2.jpg... web sẽ tự động hiển thị
    gallery: [
        {
            src: "assets/images/1.jpg",
            fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
            caption: "Nụ cười tỏa nắng ✨"
        },
        {
            src: "assets/images/2.jpg",
            fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
            caption: "Khoảnh khắc dịu dàng 🌸"
        },
        {
            src: "assets/images/3.jpg",
            fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
            caption: "Rạng rỡ trong mọi khung hình 💖"
        },
        {
            src: "assets/images/4.jpg",
            fallback: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
            caption: "Xinh đẹp bất chấp góc chụp 👑"
        },
        {
            src: "assets/images/5.jpg",
            fallback: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
            caption: "Ngày 20/10 thật hạnh phúc nhé 🌷"
        }
    ],

    // 8. TASK 6.1: Nội dung Bức thư 20/10
    letter: {
        salutation: "Gửi người con gái đặc biệt,",
        paragraphs: [
            "Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn giữ được nụ cười rạng rỡ trên môi, trái tim ấm áp và tâm hồn luôn ngập tràn niềm vui.",
            "Cảm ơn bạn vì đã luôn mang đến nguồn năng lượng tích cực, sự dịu dàng và những khoảnh khắc thật đẹp. Mong rằng mọi dự định và ước mơ của bạn đều sẽ nở hoa rực rỡ.",
            "Hôm nay và cả những ngày sau nữa, hãy luôn yêu thương bản thân, luôn tự tin và tỏa sáng theo cách riêng tuyệt vời nhất của bạn nhé!"
        ],
        signature: "Gửi ngàn lời chúc tốt đẹp nhất ❤️"
    },

    // 9. TASK 6.2: 3 Hộp quà Đặc quyền 20/10 (Chạm để lật 3D)
    gifts: [
        {
            frontTitle: "Đặc Quyền #1",
            rewardIcon: "🧋",
            rewardTitle: "Trà Sữa Full Topping",
            rewardDesc: "1 ly nước yêu thích bất kỳ lúc nào bạn muốn, ship tận nơi!"
        },
        {
            frontTitle: "Đặc Quyền #2",
            rewardIcon: "🍽️",
            rewardTitle: "Một Buổi Đi Ăn Ngon",
            rewardDesc: "Bạn chỉ việc chọn quán và lên đồ xinh đẹp, mọi thứ còn lại cứ để mình lo!"
        },
        {
            frontTitle: "Đặc Quyền #3",
            rewardIcon: "🌠",
            rewardTitle: "Một Điều Ước Bất Kỳ",
            rewardDesc: "Vé đặc quyền yêu cầu 1 việc bất kỳ trong ngày 20/10 không được từ chối!"
        }
    ]
};

/* ==========================================================================
   KHỞI TẠO TOÀN BỘ ỨNG DỤNG
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initProfileData();
    initPetalCanvas();
    initIntroAndMusic();
    init3DTiltCard();
    initCrystalButtons();
    init3DCarousel();
    initLetter3D();
    initGiftCards3D();
    initGrandFinale();
});

/* ================= TASK 1 & 4: DỮ LIỆU HỒ SƠ & NÚT PHA LÊ ================= */
function initProfileData() {
    document.getElementById("hero-greeting").textContent = CONFIG.heroGreeting;
    document.getElementById("profile-name").textContent = CONFIG.recipientName;
    document.getElementById("profile-role").textContent = CONFIG.recipientRole;
    document.getElementById("secret-quote-text").textContent = CONFIG.secretQuote;

    const avatarImg = document.getElementById("profile-avatar");
    avatarImg.src = CONFIG.avatarUrl;
    avatarImg.onerror = () => { avatarImg.src = CONFIG.fallbackAvatarUrl; };

    const tagsContainer = document.getElementById("tags-container");
    CONFIG.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "info-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    const statsContainer = document.getElementById("stats-container");
    CONFIG.stats.forEach((stat) => {
        const item = document.createElement("div");
        item.className = "stat-item";
        item.innerHTML = `
            <div class="stat-header">
                <span>${stat.label}</span>
                <span class="stat-value">${stat.valueText}</span>
            </div>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" data-percent="${stat.percent}"></div>
            </div>
        `;
        statsContainer.appendChild(item);
    });
}

function init3DTiltCard() {
    const card = document.getElementById("profile-card");
    const glare = document.getElementById("card-glare");

    card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.55), transparent 60%)`;
    });

    card.addEventListener("pointerleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        glare.style.opacity = "0";
    });
}

function initCrystalButtons() {
    document.querySelectorAll(".crystal-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const panel = document.getElementById(targetId);
            const isOpen = panel.classList.toggle("open");
            btn.classList.toggle("active", isOpen);

            const rect = btn.getBoundingClientRect();
            spawnTouchBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 22);

            if (targetId === "panel-stats" && isOpen) {
                setTimeout(() => {
                    document.querySelectorAll(".stat-bar-fill").forEach((bar) => {
                        bar.style.width = bar.getAttribute("data-percent") + "%";
                    });
                }, 120);
            }
        });
    });
}

/* ================= TASK 5: ALBUM ẢNH 3D TỰ SCALE & LIGHTBOX ================= */
let currentSlide = 0;

function init3DCarousel() {
    const track = document.getElementById("carousel-track");
    const dotsWrap = document.getElementById("carousel-dots");
    const items = CONFIG.gallery;

    items.forEach((item, index) => {
        const slide = document.createElement("div");
        slide.className = "slide-3d";
        slide.innerHTML = `
            <div class="slide-img-frame">
                <div class="slide-blur-bg"></div>
                <img class="slide-main-img" src="${item.src}" alt="${item.caption}">
                <span class="zoom-badge">🔍 Chạm để phóng to</span>
            </div>
            <div class="slide-caption">${item.caption}</div>
        `;

        const imgEl = slide.querySelector(".slide-main-img");
        const blurBg = slide.querySelector(".slide-blur-bg");

        // Đặt nền mờ tự động theo ảnh thật hoặc ảnh dự phòng
        const updateBlurBg = (url) => { blurBg.style.backgroundImage = `url('${url}')`; };
        updateBlurBg(item.src);

        imgEl.onerror = () => {
            imgEl.src = item.fallback;
            updateBlurBg(item.fallback);
        };

        slide.addEventListener("click", (e) => {
            e.stopPropagation();
            if (currentSlide === index) {
                openLightbox(imgEl.src, item.caption);
            } else {
                goToSlide(index);
            }
        });

        track.appendChild(slide);

        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => goToSlide(index));
        dotsWrap.appendChild(dot);
    });

    document.getElementById("carousel-prev").addEventListener("click", () => {
        goToSlide((currentSlide - 1 + items.length) % items.length);
    });

    document.getElementById("carousel-next").addEventListener("click", () => {
        goToSlide((currentSlide + 1) % items.length);
    });

    // Hỗ trợ vuốt cảm ứng trái/phải trên điện thoại (Task 7)
    const container = document.getElementById("carousel-3d");
    let startX = 0;
    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        if (Math.abs(diffX) > 42) {
            if (diffX < 0) {
                goToSlide((currentSlide + 1) % items.length);
            } else {
                goToSlide((currentSlide - 1 + items.length) % items.length);
            }
        }
    }, { passive: true });

    updateCarousel3D();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel3D();
    const container = document.getElementById("carousel-3d").getBoundingClientRect();
    spawnTouchBloom(container.left + container.width / 2, container.top + container.height / 2, 14);
}

function updateCarousel3D() {
    const slides = document.querySelectorAll(".slide-3d");
    const dots = document.querySelectorAll(".dot");
    const total = slides.length;

    slides.forEach((slide, i) => {
        slide.className = "slide-3d";
        let diff = (i - currentSlide + total) % total;
        if (diff > total / 2) diff -= total;

        if (diff === 0) slide.classList.add("active");
        else if (diff === -1) slide.classList.add("prev-1");
        else if (diff === 1) slide.classList.add("next-1");
        else if (diff === -2) slide.classList.add("prev-2");
        else if (diff === 2) slide.classList.add("next-2");
        else slide.classList.add("hidden-slide");
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

function openLightbox(src, caption) {
    const modal = document.getElementById("lightbox-modal");
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-caption").textContent = caption;
    modal.classList.remove("hidden");
}

document.getElementById("lightbox-close").addEventListener("click", () => {
    document.getElementById("lightbox-modal").classList.add("hidden");
});
document.getElementById("lightbox-modal").addEventListener("click", (e) => {
    if (e.target.id === "lightbox-modal") {
        e.currentTarget.classList.add("hidden");
    }
});

/* ================= TASK 6.1: BỨC THƯ 3D GỠ CON DẤU ================= */
function initLetter3D() {
    const envelope = document.getElementById("envelope-sealed");
    const paper = document.getElementById("letter-paper");
    const titleEl = document.getElementById("letter-title");
    const bodyEl = document.getElementById("letter-paragraphs");
    const signEl = document.getElementById("letter-sign");

    titleEl.textContent = CONFIG.letter.salutation;
    signEl.textContent = CONFIG.letter.signature;

    envelope.addEventListener("click", (e) => {
        const rect = envelope.getBoundingClientRect();
        spawnTouchBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
        playMagicalChime();

        envelope.classList.add("hidden");
        paper.classList.remove("hidden");

        bodyEl.innerHTML = "";
        CONFIG.letter.paragraphs.forEach((text, idx) => {
            const p = document.createElement("p");
            p.textContent = text;
            p.style.animationDelay = `${0.25 + idx * 0.45}s`;
            bodyEl.appendChild(p);
        });
    });
}

/* ================= TASK 6.2: 3 HỘP QUÀ ĐẶC QUYỀN LẬT 3D ================= */
function initGiftCards3D() {
    const grid = document.getElementById("gifts-grid");

    CONFIG.gifts.forEach((gift) => {
        const card = document.createElement("div");
        card.className = "gift-card-3d";
        card.innerHTML = `
            <div class="gift-card-inner">
                <div class="gift-face gift-front">
                    <div class="gift-box-icon">🎁</div>
                    <div class="gift-front-title">${gift.frontTitle}</div>
                    <div class="gift-front-hint">✨ Chạm để lật mở quà ✨</div>
                </div>
                <div class="gift-face gift-back">
                    <div class="gift-reward-icon">${gift.rewardIcon}</div>
                    <div class="gift-reward-title">${gift.rewardTitle}</div>
                    <p class="gift-reward-desc">${gift.rewardDesc}</p>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
            const rect = card.getBoundingClientRect();
            spawnTouchBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 32);
            playMagicalChime();
        });

        grid.appendChild(card);
    });
}

function initGrandFinale() {
    document.getElementById("grand-bloom-btn").addEventListener("click", () => {
        triggerSupernova();
        playMagicalChime();
    });
}

/* ================= TASK 2 & 3: ENGINE NỔ HOA 3D & ÂM THANH ================= */
let burstParticles = [];
let fallingPetals = [];
let canvas, ctx;

function initPetalCanvas() {
    canvas = document.getElementById("petal-canvas");
    ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 35; i++) {
        fallingPetals.push(createFallingPetal(true));
    }

    window.addEventListener("pointerdown", (e) => {
        spawnTouchBloom(e.clientX, e.clientY, 15);
    });

    requestAnimationFrame(animateCanvas);
}

function createFallingPetal(randomY = false) {
    const colors = ["#fb7185", "#f43f5e", "#fda4af", "#fecdd3", "#fbbf24"];
    return {
        x: Math.random() * window.innerWidth,
        y: randomY ? Math.random() * window.innerHeight : -30,
        size: 7 + Math.random() * 10,
        speedY: 0.8 + Math.random() * 1.4,
        speedX: -0.6 + Math.random() * 1.2,
        angle: Math.random() * Math.PI * 2,
        spin: -0.03 + Math.random() * 0.06,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.02 + Math.random() * 0.03,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.55 + Math.random() * 0.4
    };
}

function spawnTouchBloom(x, y, count = 20) {
    const symbols = ["🌸", "💖", "✨", "🌷", "💮"];
    const colors = ["#e11d48", "#fb7185", "#fda4af", "#fbbf24", "#ffffff"];

    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 2.5 + Math.random() * 8.5;
        burstParticles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.5,
            gravity: 0.15,
            size: 12 + Math.random() * 14,
            alpha: 1,
            decay: 0.014 + Math.random() * 0.012,
            rotation: Math.random() * Math.PI * 2,
            rSpeed: (Math.random() - 0.5) * 0.15,
            isEmoji: Math.random() > 0.45,
            emoji: symbols[Math.floor(Math.random() * symbols.length)],
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

function triggerSupernova() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    spawnTouchBloom(cx, cy, 85);
    setTimeout(() => spawnTouchBloom(cx * 0.5, cy * 0.7, 45), 160);
    setTimeout(() => spawnTouchBloom(cx * 1.5, cy * 0.7, 45), 300);
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fallingPetals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.012) * 0.4;
        p.angle += p.spin;
        p.flip += p.flipSpeed;

        if (p.y > canvas.height + 25) {
            Object.assign(p, createFallingPetal(false));
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(1, Math.cos(p.flip));
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size, -p.size, p.size * 1.4, p.size, 0, p.size * 1.3);
        ctx.bezierCurveTo(-p.size * 1.4, p.size, -p.size, -p.size, 0, 0);
        ctx.fill();
        ctx.restore();
    });

    for (let i = burstParticles.length - 1; i >= 0; i--) {
        const b = burstParticles[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += b.gravity;
        b.vx *= 0.98;
        b.alpha -= b.decay;
        b.rotation += b.rSpeed;

        if (b.alpha <= 0) {
            burstParticles.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, b.alpha);
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);

        if (b.isEmoji) {
            ctx.font = `${b.size}px serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(b.emoji, 0, 0);
        } else {
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(0, 0, b.size * 0.35, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    requestAnimationFrame(animateCanvas);
}

function initIntroAndMusic() {
    const openGiftBtn = document.getElementById("open-gift-btn");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const shockwave = document.getElementById("shockwave");
    const musicBtn = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");

    bgMusic.src = CONFIG.musicUrl;

    openGiftBtn.addEventListener("click", () => {
        shockwave.classList.add("active");
        triggerSupernova();
        playMagicalChime();

        bgMusic.play().catch(() => {
            musicBtn.classList.add("paused");
        });

        setTimeout(() => {
            introScreen.classList.add("fade-out");
            mainContent.classList.remove("hidden");
            musicBtn.classList.remove("hidden");
        }, 350);

        setTimeout(() => {
            introScreen.classList.add("hidden");
        }, 1250);
    });

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => musicBtn.classList.remove("paused")).catch(() => {});
        } else {
            bgMusic.pause();
            musicBtn.classList.add("paused");
        }
    });
}

function playMagicalChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioCtx();
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.85);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.08);
            osc.stop(audioCtx.currentTime + idx * 0.08 + 0.85);
        });
    } catch (e) {}
}