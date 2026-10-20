/* ==========================================================================
   BỘ CẤU HÌNH TRUNG TÂM DÀNH CHO CHÂU VI
   ========================================================================== */
const CONFIG = {
    // 1. Mật khẩu mở web (Ngày sinh của Châu Vi: 19/09)
    passcode: "1909",

    // 2. Thông tin chính
    heroGreeting: "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10",
    recipientName: "Châu Vi",
    recipientRole: "Bông hoa rạng rỡ & ngọt ngào nhất ngày 20/10 🌸",

    // 3. Ảnh đại diện: Bạn chỉ cần đặt tên ảnh trong thư mục assets/images/ là "avt"
    // (Tự động nhận cả avt.jpg, avt.png, avt.jpeg, avt.webp)
    avatarBaseName: "assets/images/avt",
    fallbackAvatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",

    // 4. Nhạc nền
    musicUrl: "assets/audio/music.mp3",

    // 5. Mục xem thông tin (Đã cập nhật theo đúng yêu cầu)
    tags: [
        "🌷 Châu Vi",
        "🎂 Sinh nhật: 19/09",
        "🎧 Sở thích: Nghe nhạc & Mua sắm",
        "💎 Nóc nhà quyền lực"
    ],

    // 6. Thanh chỉ số đáng yêu
    stats: [
        { label: "💖 Độ xinh đẹp & rạng rỡ", valueText: "1000%", percent: 100 },
        { label: "🌸 Sự dịu dàng & đáng yêu", valueText: "Vô cực ∞", percent: 100 },
        { label: "✨ Sức sát thương của nụ cười", valueText: "9999+", percent: 100 }
    ],

    // 7. Lời nhắn bí mật
    secretQuote: "Thế giới có hàng tỷ bông hoa đẹp, nhưng bông hoa rực rỡ, ngọt ngào và đáng trân trọng nhất chính là ViVi!",

    // 8. Danh sách ảnh Album 3D (Đặt tên từ 1, 2, 3, 4, 5... trong thư mục assets/images/)
    // Muốn thêm ảnh thứ 6, 7, 8... bạn chỉ cần copy thêm 1 dòng tương tự bên dưới
    gallery: [
        {
            baseName: "assets/images/1",
            fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
            caption: "Nụ cười tỏa nắng của Châu Vi ✨"
        },
        {
            baseName: "assets/images/2",
            fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
            caption: "Khoảnh khắc dịu dàng 🌸"
        },
        {
            baseName: "assets/images/3",
            fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
            caption: "Rạng rỡ trong mọi khung hình 💖"
        },
        {
            baseName: "assets/images/4",
            fallback: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
            caption: "Xinh đẹp bất chấp góc chụp 👑"
        },
        {
            baseName: "assets/images/5",
            fallback: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
            caption: "Ngày 20/10 thật hạnh phúc nhé 🌷"
        }
    ],

    // 9. Nội dung Bức thư 20/10
    letter: {
        salutation: "Gửi Châu Vi thương mến,",
        paragraphs: [
            "Nhân ngày Phụ nữ Việt Nam 20/10, chúc em luôn giữ được nụ cười rạng rỡ trên môi, tâm hồn luôn vui vẻ, bình yên và ngập tràn hạnh phúc.",
            "Cảm ơn em vì đã luôn mang đến nguồn năng lượng tích cực, sự dịu dàng và những khoảnh khắc thật đáng nhớ. Mong rằng mọi dự định và ước mơ của em đều sẽ nở hoa rực rỡ.",
            "Hôm nay và cả những ngày sau nữa, hãy luôn tự tin, yêu đời và tỏa sáng theo cách tuyệt vời nhất của riêng em nhé!"
        ],
        signature: "Dành tặng em tất cả điều tốt đẹp nhất ❤️"
    },

    // 10. 3 Phần quà mang ý nghĩa và giá trị thiết thực dành cho Châu Vi
    gifts: [
        {
            frontTitle: "Món Quà #1",
            rewardIcon: "🛍️",
            rewardTitle: "Chuyến Shopping Tự Do",
            rewardDesc: "Tặng Châu Vi một buổi mua sắm thỏa thích những món đồ em đang yêu thích nhất!"
        },
        {
            frontTitle: "Món Quà #2",
            rewardIcon: "💎",
            rewardTitle: "Quà Tặng Kỷ Niệm Tinh Tế",
            rewardDesc: "Một món quà đặc biệt được chuẩn bị riêng để tôn lên vẻ rạng rỡ của em ngày 20/10."
        },
        {
            frontTitle: "Món Quà #3",
            rewardIcon: "💖",
            rewardTitle: "Trọn Vẹn Yêu Thương",
            rewardDesc: "Một buổi hẹn hò lãng mạn tại nơi em chọn cùng đặc quyền luôn được lắng nghe & chiều chuộng!"
        }
    ]
};

/* ==========================================================================
   HÀM TỰ ĐỘNG NHẬN DIỆN ĐUÔI ẢNH (.jpg, .png, .jpeg, .webp)
   Giúp bạn chỉ cần đặt tên ảnh là avt, 1, 2, 3, 4, 5 mà không sợ lệch đuôi file
   ========================================================================== */
function loadSmartImage(imgElement, baseName, fallbackUrl) {
    const extensions = [".jpg", ".png", ".jpeg", ".webp", ".JPG", ".PNG"];
    let extIndex = 0;

    const tryNext = () => {
        if (extIndex < extensions.length) {
            imgElement.src = baseName + extensions[extIndex];
            extIndex++;
        } else {
            imgElement.onerror = null;
            imgElement.src = fallbackUrl;
        }
    };

    imgElement.onerror = tryNext;
    tryNext();
}

/* ==========================================================================
   KHỞI TẠO HỆ THỐNG
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initProfileData();
    initSmoothPetalCanvas();
    initPasscodeAndMusic();
    init3DTiltCard();
    initCrystalButtons();
    init3DCarousel();
    initLetter3D();
    initGiftCards3D();
});

/* ================= 1. KHỞI TẠO THÔNG TIN CHÂU VI ================= */
function initProfileData() {
    document.getElementById("hero-greeting").textContent = CONFIG.heroGreeting;
    document.getElementById("profile-name").textContent = CONFIG.recipientName;
    document.getElementById("profile-role").textContent = CONFIG.recipientRole;
    document.getElementById("secret-quote-text").textContent = CONFIG.secretQuote;

    const avatarImg = document.getElementById("profile-avatar");
    loadSmartImage(avatarImg, CONFIG.avatarBaseName, CONFIG.fallbackAvatarUrl);

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

/* ================= 2. MẬT KHẨU NGÀY SINH (1909) & ÂM THANH ================= */
function initPasscodeAndMusic() {
    const passInput = document.getElementById("passcode-input");
    const unlockBtn = document.getElementById("unlock-btn");
    const passBox = document.getElementById("passcode-box");
    const passError = document.getElementById("passcode-error");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const shockwave = document.getElementById("shockwave");
    const musicBtn = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");

    bgMusic.src = CONFIG.musicUrl;
    let isUnlocked = false;

    const checkAndUnlock = () => {
        if (isUnlocked) return;
        const val = passInput.value.trim();

        if (val === CONFIG.passcode) {
            isUnlocked = true;
            passError.classList.add("hidden");
            shockwave.classList.add("active");

            // Hiệu ứng bung cánh hoa mượt mà không lag
            spawnSmoothBloom(window.innerWidth / 2, window.innerHeight / 2, 24);
            playMagicalChime();

            bgMusic.play().catch(() => {
                musicBtn.classList.add("paused");
            });

            setTimeout(() => {
                introScreen.classList.add("fade-out");
                mainContent.classList.remove("hidden");
                musicBtn.classList.remove("hidden");
            }, 300);

            setTimeout(() => {
                introScreen.classList.add("hidden");
            }, 1050);
        } else {
            passError.classList.remove("hidden");
            passBox.classList.remove("shake");
            void passBox.offsetWidth; // Kích hoạt lại hiệu ứng rung
            passBox.classList.add("shake");
        }
    };

    // Tự động mở khóa ngay khi gõ đủ "1909"
    passInput.addEventListener("input", () => {
        passError.classList.add("hidden");
        if (passInput.value.trim() === CONFIG.passcode) {
            checkAndUnlock();
        }
    });

    passInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkAndUnlock();
    });

    unlockBtn.addEventListener("click", checkAndUnlock);

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => musicBtn.classList.remove("paused")).catch(() => {});
        } else {
            bgMusic.pause();
            musicBtn.classList.add("paused");
        }
    });
}

/* ================= 3. THẺ 3D & NÚT PHA LÊ ================= */
function init3DTiltCard() {
    const card = document.getElementById("profile-card");
    const glare = document.getElementById("card-glare");

    card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.6), transparent 60%)`;
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
            spawnSmoothBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);

            if (targetId === "panel-stats" && isOpen) {
                setTimeout(() => {
                    document.querySelectorAll(".stat-bar-fill").forEach((bar) => {
                        bar.style.width = bar.getAttribute("data-percent") + "%";
                    });
                }, 100);
            }
        });
    });
}

/* ================= 4. ALBUM ẢNH 3D TỰ ĐỘNG SCALE ================= */
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
                <img class="slide-main-img" alt="${item.caption}">
                <span class="zoom-badge">🔍 Phóng to</span>
            </div>
            <div class="slide-caption">${item.caption}</div>
        `;

        const imgEl = slide.querySelector(".slide-main-img");
        loadSmartImage(imgEl, item.baseName, item.fallback);

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

    const container = document.getElementById("carousel-3d");
    let startX = 0;
    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        if (Math.abs(diffX) > 40) {
            if (diffX < 0) goToSlide((currentSlide + 1) % items.length);
            else goToSlide((currentSlide - 1 + items.length) % items.length);
        }
    }, { passive: true });

    updateCarousel3D();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel3D();
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

/* ================= 5. BỨC THƯ & HỘP QUÀ 3D ================= */
function initLetter3D() {
    const envelope = document.getElementById("envelope-sealed");
    const paper = document.getElementById("letter-paper");
    const titleEl = document.getElementById("letter-title");
    const bodyEl = document.getElementById("letter-paragraphs");
    const signEl = document.getElementById("letter-sign");

    titleEl.textContent = CONFIG.letter.salutation;
    signEl.textContent = CONFIG.letter.signature;

    envelope.addEventListener("click", () => {
        const rect = envelope.getBoundingClientRect();
        spawnSmoothBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
        playMagicalChime();

        envelope.classList.add("hidden");
        paper.classList.remove("hidden");

        bodyEl.innerHTML = "";
        CONFIG.letter.paragraphs.forEach((text) => {
            const p = document.createElement("p");
            p.textContent = text;
            bodyEl.appendChild(p);
        });
    });
}

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
                    <div class="gift-front-hint">✨ Mở quà đặc biệt ✨</div>
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
            spawnSmoothBloom(rect.left + rect.width / 2, rect.top + rect.height / 2, 14);
            playMagicalChime();
        });

        grid.appendChild(card);
    });
}

/* ==========================================================================
   6. ENGINE HOA RƠI & HIỆU ỨNG CHẠM SIÊU MƯỢT (PRE-RENDERED SPRITES)
   Đã loại bỏ hoàn toàn fillText Emoji gây lag, đạt chuẩn 60FPS trên mọi thiết bị
   ========================================================================== */
let burstParticles = [];
let fallingPetals = [];
let petalSprites = [];
let canvas, ctx;

function createPetalSprite(color) {
    const off = document.createElement("canvas");
    off.width = 24;
    off.height = 24;
    const oCtx = off.getContext("2d");
    oCtx.fillStyle = color;
    oCtx.translate(12, 6);
    oCtx.beginPath();
    oCtx.moveTo(0, 0);
    oCtx.bezierCurveTo(8, -6, 11, 8, 0, 14);
    oCtx.bezierCurveTo(-11, 8, -8, -6, 0, 0);
    oCtx.fill();
    return off;
}

function initSmoothPetalCanvas() {
    canvas = document.getElementById("petal-canvas");
    ctx = canvas.getContext("2d");

    const colors = ["#fb7185", "#f43f5e", "#fda4af", "#fecdd3", "#fbbf24"];
    petalSprites = colors.map(c => createPetalSprite(c));

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Chỉ duy trì 16 cánh hoa rơi nhẹ nhàng, vẽ từ bộ nhớ đệm Sprite
    for (let i = 0; i < 16; i++) {
        fallingPetals.push(createFallingPetal(true));
    }

    // Khi chạm màn hình: Tạo vòng gợn sóng GPU + 5 cánh hoa nhẹ
    window.addEventListener("pointerdown", (e) => {
        createTouchRipple(e.clientX, e.clientY);
        spawnSmoothBloom(e.clientX, e.clientY, 5);
    });

    requestAnimationFrame(animateCanvas);
}

function createTouchRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "touch-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function createFallingPetal(randomY = false) {
    return {
        x: Math.random() * window.innerWidth,
        y: randomY ? Math.random() * window.innerHeight : -25,
        scale: 0.55 + Math.random() * 0.55,
        speedY: 0.7 + Math.random() * 1.1,
        speedX: -0.4 + Math.random() * 0.8,
        angle: Math.random() * Math.PI * 2,
        spin: -0.02 + Math.random() * 0.04,
        sprite: petalSprites[Math.floor(Math.random() * petalSprites.length)],
        opacity: 0.55 + Math.random() * 0.35
    };
}

function spawnSmoothBloom(x, y, count = 10) {
    // Khóa giới hạn tối đa 35 hạt trên màn hình để không bao giờ bị tụt FPS
    if (burstParticles.length > 35) {
        burstParticles.splice(0, count);
    }

    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = 2 + Math.random() * 5.5;
        burstParticles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.2,
            gravity: 0.14,
            scale: 0.6 + Math.random() * 0.5,
            alpha: 1,
            decay: 0.024 + Math.random() * 0.015,
            rotation: Math.random() * Math.PI * 2,
            rSpeed: (Math.random() - 0.5) * 0.1,
            sprite: petalSprites[i % petalSprites.length]
        });
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Vẽ hoa rơi bằng drawImage (Nhanh gấp 50 lần bezierCurveTo trực tiếp)
    for (let i = 0; i < fallingPetals.length; i++) {
        const p = fallingPetals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.angle += p.spin;

        if (p.y > canvas.height + 25) {
            p.y = -25;
            p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(p.scale, p.scale);
        ctx.drawImage(p.sprite, -12, -12);
        ctx.restore();
    }

    // 2. Vẽ hạt bung nở nhẹ nhàng
    for (let i = burstParticles.length - 1; i >= 0; i--) {
        const b = burstParticles[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += b.gravity;
        b.alpha -= b.decay;
        b.rotation += b.rSpeed;

        if (b.alpha <= 0) {
            burstParticles.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.globalAlpha = b.alpha;
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);
        ctx.scale(b.scale, b.scale);
        ctx.drawImage(b.sprite, -12, -12);
        ctx.restore();
    }

    requestAnimationFrame(animateCanvas);
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
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.7);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.08);
            osc.stop(audioCtx.currentTime + idx * 0.08 + 0.7);
        });
    } catch (e) {}
}