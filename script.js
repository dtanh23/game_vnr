// ==========================================
// GAME DATA
// ==========================================

// Challenge Data
const CHALLENGES = {
    // Quiz Challenges
    quiz_1: {
        type: 'quiz',
        questionPool: 'quiz_ra_di_tim_duong_cuu_nuoc'
    },
    quiz_2: {
        type: 'quiz',
        questionPool: 'quiz_hoat_dong_tai_phap'
    },
    quiz_3: {
        type: 'quiz',
        questionPool: 'quiz_duong_kach_menh'
    },
    legacy_cards_finale: {
        type: 'legacy',
        questionPool: 'legacy_cards_finale'
    },
    
    // Timeline Sorting Challenges
    timeline_1: {
        type: 'timeline',
        questionPool: 'timeline_versailles_tours_thanhnien'
    },
    timeline_2: {
        type: 'timeline',
        questionPool: 'timeline_ba_to_chuc_cong_san'
    },
    timeline_3: {
        type: 'timeline',
        questionPool: 'timeline_hoat_dong_cua_nguoi'
    },
    
    // Map Challenges
    map_1: {
        type: 'map',
        questionPool: 'map_asia_1920s'
    },
    map_2: {
        type: 'map',
        questionPool: 'map_china_1927'
    },
    map_3: {
        type: 'map',
        questionPool: 'map_china_1930'
    }
};

const LOCATIONS = [
    {
        id: 0,
        name: 'Bến Nhà Rồng, Sài Gòn',
        year: 1911,
        x: 750,
        y: 480,
        unlocked: true,
        visited: false,
        points: 0,
        story: {
            title: 'Ra đi tìm đường cứu nước',
            content: `<p>Ngày 5/6/1911, Nguyễn Tất Thành rời Bến Nhà Rồng, bắt đầu hành trình 30 năm bôn ba tìm đường cứu nước.</p>
                     <p>Người đi qua nhiều nước châu Á, châu Phi, châu Âu để tìm hiểu con đường giải phóng dân tộc.</p>`,
            quote: '"Tôi muốn đi ra ngoài xem nước Pháp và xem nước khác làm như thế nào."',
            image: 'assets/images/1.png',
            imageAlt: 'Con tàu Amiral Latouche-Tréville',
            video: null,
            audio: null
        },
        achievement: { id: 'first_steps', name: '🎓 Bước Đầu Tiên', desc: 'Bắt đầu hành trình' }
    },
    {
        id: 1,
        name: 'Paris, Pháp',
        year: 1917,
        x: 280,
        y: 160,
        unlocked: false,
        visited: false,
        points: 100,
        challenge: 'quiz_1',
        story: {
            title: 'Hoạt động tại Pháp',
            content: `<p>Sau Chiến tranh Thế giới thứ nhất, Nguyễn Ái Quốc ở Pháp, tham gia phong trào công nhân và yêu cầu Chính phủ Pháp thừa nhận quyền tự do, dân chủ cho nhân dân Việt Nam.</p>`,
            quote: '"Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng."',
            image: 'assets/images/2.jpg',
            imageAlt: 'Quốc tế Cộng sản',
            video: null,
            audio: null
        }
    },
    {
        id: 2,
        name: 'Versailles, Pháp',
        year: 1919,
        x: 320,
        y: 240,
        unlocked: false,
        visited: false,
        points: 100,
        challenge: 'timeline_1',
        story: {
            title: 'Bản yêu sách của nhân dân An Nam',
            content: `<p>Năm 1919, Người gửi "Bản yêu sách của nhân dân An Nam" đến Hội nghị Versailles.</p>`,
            quote: '"Mỗi dân tộc đều có quyền sống, quyền tự do và quyền mưu cầu hạnh phúc."',
            image: 'assets/images/3.jpg',
            imageAlt: 'Giấy bản yêu sách + lá cờ đỏ sao vàng',
            video: null,
            audio: null
        },
        achievement: { id: 'voice', name: '📰 Tiếng Nói', desc: 'Gửi bản yêu sách' }
    },
    {
        id: 3,
        name: 'Tours, Pháp',
        year: 1920,
        x: 400,
        y: 200,
        unlocked: false,
        visited: false,
        points: 150,
        challenge: 'map_1',
        story: {
            title: 'Gia nhập Quốc tế Cộng sản',
            content: `<p>Tháng 12/1920, tại Đại hội Tours (Pháp), Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản và trở thành người Cộng sản Việt Nam đầu tiên.</p>`,
            quote: '"Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản."',
            image: 'assets/images/4.jpg',
            imageAlt: 'Sách, ảnh Lênin, logo Quốc tế Cộng sản',
            video: null,
            audio: null
        },
        achievement: { id: 'revolutionary', name: '⭐ Cách Mạng', desc: 'Gia nhập Quốc tế CS' }
    },
    {
        id: 4,
        name: 'Paris - Le Paria',
        year: 1921,
        x: 360,
        y: 120,
        unlocked: false,
        visited: false,
        points: 100,
        challenge: 'quiz_2',
        story: {
            title: 'Truyền bá tư tưởng cách mạng',
            content: `<p>Người sáng lập và viết cho tờ báo Le Paria (Người cùng khổ) – lên án tội ác thực dân, kêu gọi đoàn kết nhân dân thuộc địa.</p>`,
            quote: '"Chúng ta phải đoàn kết lại để đấu tranh cho tự do, bình đẳng, bác ái thật sự."',
            image: 'assets/images/5.jpg',
            imageAlt: 'Ảnh tờ báo Le Paria',
            video: null,
            audio: null
        }
    },
    {
        id: 5,
        name: 'Quảng Châu, TQ',
        year: 1924,
        x: 580,
        y: 240,
        unlocked: false,
        visited: false,
        points: 150,
        challenge: 'timeline_2',
        story: {
            title: 'Thành lập Hội Việt Nam Cách mạng Thanh niên',
            content: `<p>Năm 1925, Người sáng lập Hội Việt Nam Cách mạng Thanh niên – tổ chức cách mạng đầu tiên theo khuynh hướng vô sản.</p>
                     <p>Hội đào tạo nhiều cán bộ ưu tú cho cách mạng Việt Nam.</p>`,
            quote: '',
            image: 'assets/images/6.jpg',
            imageAlt: 'Biểu tượng búa liềm, bản đồ Việt Nam – Trung Quốc',
            video: null,
            audio: null
        },
        achievement: { id: 'teacher', name: '📚 Nhà Giáo', desc: 'Đào tạo cán bộ' }
    },
    {
        id: 6,
        name: 'QC - Đường Kách mệnh',
        year: 1927,
        x: 680,
        y: 200,
        unlocked: false,
        visited: false,
        points: 100,
        challenge: 'map_2',
        story: {
            title: 'Xuất bản "Đường Kách mệnh"',
            content: `<p>Nguyễn Ái Quốc biên soạn "Đường Kách mệnh" – tập hợp bài giảng tại lớp huấn luyện ở Quảng Châu.</p>
                     <p>Đây là cuốn sách lý luận cách mạng đầu tiên của Việt Nam.</p>`,
            quote: '"Cách mệnh là việc chung của cả dân chúng bị áp bức. Chứ không phải việc một hai người."',
            image: 'assets/images/7.jpg',
            imageAlt: 'Cuốn sách + ảnh lớp huấn luyện',
            video: null,
            audio: null
        },
        achievement: { id: 'writer', name: '✍️ Nhà Văn', desc: 'Xuất bản sách' }
    },
    {
        id: 7,
        name: 'VN - Ba tổ chức',
        year: 1929,
        x: 820,
        y: 400,
        unlocked: false,
        visited: false,
        points: 100,
        challenge: 'quiz_3',
        story: {
            title: 'Phong trào "Vô sản hóa"',
            content: `<p>Nhiều tổ chức cộng sản lần lượt ra đời: Đông Dương Cộng sản Đảng (6/1929), An Nam Cộng sản Đảng (8/1929), Đông Dương Cộng sản Liên đoàn (cuối 1929).</p>
                     <p>Sự chia rẽ giữa các tổ chức gây khó khăn cho phong trào.</p>`,
            quote: '',
            image: 'assets/images/8.jpg',
            imageAlt: 'Ba logo tượng trưng cho các tổ chức cộng sản',
            video: null,
            audio: null
        }
    },
    {
        id: 8,
        name: 'Hương Cảng, TQ',
        year: 1930,
        x: 720,
        y: 320,
        unlocked: false,
        visited: false,
        points: 150,
        challenge: 'timeline_3',
        story: {
            title: 'Hội nghị hợp nhất',
            content: `<p>Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất tại Cửu Long (Hương Cảng, Trung Quốc).</p>
                     <p>Hội nghị thống nhất ba tổ chức cộng sản thành Đảng Cộng sản Việt Nam.</p>`,
            quote: '',
            image: 'assets/images/9.jpg',
            imageAlt: 'Bản đồ Hồng Kông + hình Nguyễn Ái Quốc',
            video: null,
            audio: null
        },
        achievement: { id: 'unifier', name: '🤝 Người Hợp Nhất', desc: 'Thống nhất các tổ chức' }
    },
    {
        id: 9,
        name: 'VN - Đảng ra đời',
        year: 1930,
        x: 750,
        y: 480,
        unlocked: false,
        visited: false,
        points: 200,
        challenge: 'map_3',
        story: {
            title: '⭐ Sự ra đời của Đảng Cộng sản Việt Nam',
            content: `<p><strong>Sự kiện ra đời Đảng Cộng sản Việt Nam là bước ngoặt vĩ đại trong lịch sử dân tộc.</strong></p>
                     <p>Đảng đã xác định rõ mục tiêu: Độc lập dân tộc, gắn liền với chủ nghĩa xã hội, đoàn kết công – nông – trí.</p>`,
            quote: '"Đảng ta là đạo đức, là văn minh."',
            image: 'assets/images/10.png',
            imageAlt: 'Lá cờ Đảng, văn kiện Chính cương vắn tắt',
            video: null,
            audio: null
        },
        achievement: { id: 'founder', name: '👑 Người Sáng Lập', desc: 'Hoàn thành hành trình!' }
    },
    {
        id: 10,
        name: 'Ý nghĩa lịch sử',
        year: '🎯',
        x: 850,
        y: 350,
        unlocked: false,
        visited: false,
        points: 150,
        challenge: 'legacy_cards_finale',
        story: {
            title: '⭐ Di sản Bác Hồ!',
            content: `<h3>Ý nghĩa to lớn:</h3>
                     <ul>
                        <li>Chấm dứt khủng hoảng đường lối cứu nước đầu thế kỷ XX.</li>
                        <li>Khẳng định vai trò lãnh đạo duy nhất của giai cấp công nhân và Đảng Cộng sản.</li>
                        <li>Mở ra kỷ nguyên mới: Độc lập dân tộc gắn liền với chủ nghĩa xã hội.</li>
                     </ul>`,
            quote: '"Nguyễn Ái Quốc – Hồ Chí Minh không chỉ tìm ra con đường giải phóng dân tộc, mà còn thắp sáng ngọn đuốc soi đường cho cách mạng Việt Nam suốt thế kỷ XX."',
            image: 'assets/images/11.jpg',
            imageAlt: 'Quốc kỳ Việt Nam tung bay, bản đồ đất nước',
            video: null,
            audio: null
        },
        achievement: { id: 'perfect', name: '🎯 Hoàn Hảo', desc: '1300/1300 điểm!' }
    }
];

const ACHIEVEMENTS = {
    first_steps: { unlocked: false, name: '🎓 Bước Đầu Tiên', desc: 'Bắt đầu hành trình' },
    voice: { unlocked: false, name: '📰 Tiếng Nói', desc: 'Gửi bản yêu sách' },
    revolutionary: { unlocked: false, name: '⭐ Cách Mạng', desc: 'Gia nhập Quốc tế CS' },
    traveler: { unlocked: false, name: '🌏 Du Hành Gia', desc: 'Đi qua 3 châu lục' },
    teacher: { unlocked: false, name: '📚 Nhà Giáo', desc: 'Đào tạo cán bộ' },
    writer: { unlocked: false, name: '✍️ Nhà Văn', desc: 'Xuất bản sách' },
    unifier: { unlocked: false, name: '🤝 Người Hợp Nhất', desc: 'Thống nhất tổ chức' },
    founder: { unlocked: false, name: '👑 Người Sáng Lập', desc: 'Hoàn thành hành trình' },
    speedrun: { unlocked: false, name: '⚡ Tốc Độ', desc: 'Hoàn thành < 3 phút' },
    perfect: { unlocked: false, name: '🎯 Hoàn Hảo', desc: '1300/1300 điểm' }
};

// ==========================================
// GAME STATE
// ==========================================

const SPEEDRUN_TIME_LIMIT = 180; // 3 minutes in seconds

const game = {
    canvas: null,
    ctx: null,
    width: 1000,
    height: 600,
    character: {
        x: 750,
        y: 480,
        targetX: null,
        targetY: null,
        speed: 3,
        moving: false,
        sprite: '🚶'
    },
    currentLocation: 0,
    totalPoints: 0,
    maxPoints: 1300,
    achievementsCount: 0,
    startTime: null,
    endTime: null,
    soundEnabled: true,
    // Movement
    moveInterval: null,
    targetLocation: null,
    // Audio
    audioContext: null
};

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    console.log('🎮 Initializing Journey Game...');
    
    // Canvas setup
    game.canvas = document.getElementById('game-canvas');
    game.ctx = game.canvas.getContext('2d');
    game.canvas.width = game.width;
    game.canvas.height = game.height;
    
    // Initialize sound system
    initSounds();
    
    // Event listeners
    game.canvas.addEventListener('click', handleCanvasClick);
    
    // Start game loop for animations
    gameLoop();
    
    updateUI();
    
    console.log('✅ Game Ready!');
    console.log('🎵 Sound effects enabled!');
    console.log('📸 Images loaded for all locations!');
}

function gameLoop() {
    render();
    requestAnimationFrame(gameLoop);
}

// ==========================================
// CHALLENGE SYSTEM
// ==========================================

let currentChallenge = null;
let currentChallengeLocation = null;
let timelineOrder = [];

function showChallenge(location) {
    const challengeKey = location.challenge;
    if (!challengeKey || !CHALLENGES[challengeKey]) {
        // No challenge, show story directly
        showStory(location);
        return;
    }
    
    currentChallenge = CHALLENGES[challengeKey];
    currentChallengeLocation = location;
    
    // Show modal
    const modal = document.getElementById('challenge-modal');
    modal.classList.add('active');
    
    // Hide all challenge containers
    document.getElementById('quiz-challenge').style.display = 'none';
    document.getElementById('timeline-challenge').style.display = 'none';
    document.getElementById('map-challenge').style.display = 'none';
    document.getElementById('legacy-challenge').style.display = 'none';
    
    // Clear all feedback
    const quizFeedback = document.getElementById('quiz-feedback');
    quizFeedback.textContent = '';
    quizFeedback.className = 'quiz-feedback';
    
    const timelineFeedback = document.getElementById('timeline-feedback');
    timelineFeedback.textContent = '';
    timelineFeedback.className = 'timeline-feedback';
    
    const mapFeedback = document.getElementById('map-feedback');
    mapFeedback.textContent = '';
    mapFeedback.className = 'map-feedback';
    
    const legacyFeedback = document.getElementById('legacy-feedback');
    legacyFeedback.textContent = '';
    legacyFeedback.className = 'legacy-feedback';
    
    // Show appropriate challenge type
    if (currentChallenge.type === 'quiz') {
        showQuizChallenge();
    } else if (currentChallenge.type === 'timeline') {
        showTimelineChallenge();
    } else if (currentChallenge.type === 'map') {
        showMapChallenge();
    } else if (currentChallenge.type === 'legacy') {
        showLegacyCardsChallenge();
    }
}

// ===================
// QUIZ CHALLENGE
// ===================

let currentQuizQuestion = null;

function showQuizChallenge() {
    const container = document.getElementById('quiz-challenge');
    container.style.display = 'block';
    
    // Get question pool
    const poolKey = currentChallenge.questionPool;
    const questionPool = QUESTION_BANK[poolKey];
    
    if (!questionPool || questionPool.length === 0) {
        console.error('Quiz question pool not found:', poolKey);
        return;
    }
    
    // Randomly select a question
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    currentQuizQuestion = questionPool[randomIndex];
    
    // Set question
    document.getElementById('quiz-question').textContent = currentQuizQuestion.question;
    
    // Shuffle options
    const shuffledOptions = [...currentQuizQuestion.options].sort(() => Math.random() - 0.5);
    
    // Create options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = `${String.fromCharCode(65 + index)}) ${option.text}`;
        btn.onclick = function() { checkQuizAnswer(option.correct, this); };
        optionsContainer.appendChild(btn);
    });
    
    // Clear feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
}

function checkQuizAnswer(isCorrect, buttonElement) {
    const feedback = document.getElementById('quiz-feedback');

    if (isCorrect) {
        feedback.textContent = '✅ Chính xác! Bạn đã vượt qua thử thách!';
        feedback.className = 'quiz-feedback correct';

        if (game.soundEnabled) {
            playSound('achievement');
        }

        setTimeout(() => {
            closeChallengeModal();
            onChallengeSuccess();
        }, 1500);
    } else {
        feedback.textContent = '❌ Sai rồi! Hãy thử lại hoặc sử dụng gợi ý.';
        feedback.className = 'quiz-feedback incorrect';

        // Disable the wrong option
        if (buttonElement) {
            buttonElement.disabled = true;
            buttonElement.style.opacity = '0.5';
        }
    }
}

function useHint() {
    if (game.totalPoints < 20) {
        alert('Bạn không đủ điểm để dùng gợi ý! (Cần 20 điểm)');
        return;
    }
    
    game.totalPoints -= 20;
    updateUI();
    
    const hint = currentQuizQuestion ? currentQuizQuestion.hint : 'Không có gợi ý';
    alert(`💡 Gợi ý: ${hint}`);
}

// ===================
// TIMELINE CHALLENGE
// ===================

let currentTimelineData = null;

function showTimelineChallenge() {
    const container = document.getElementById('timeline-challenge');
    container.style.display = 'block';
    
    // Get timeline pool
    const poolKey = currentChallenge.questionPool;
    const timelinePool = QUESTION_BANK[poolKey];
    
    if (!timelinePool || timelinePool.length === 0) {
        console.error('Timeline pool not found:', poolKey);
        return;
    }
    
    // Randomly select a timeline set
    const randomIndex = Math.floor(Math.random() * timelinePool.length);
    currentTimelineData = timelinePool[randomIndex];
    
    // Set question
    document.getElementById('timeline-question').textContent = 'Sắp xếp các sự kiện theo thứ tự thời gian đúng:';
    
    // Shuffle events
    const events = [...currentTimelineData.events].sort(() => Math.random() - 0.5);
    
    // Create draggable events
    const eventsContainer = document.getElementById('timeline-events');
    eventsContainer.innerHTML = '';
    timelineOrder = [];
    
    events.forEach((event, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-event';
        div.draggable = true;
        div.dataset.eventId = event.id;
        div.textContent = event.text;
        
        // Drag & Drop events
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', e.target.innerHTML);
            e.target.classList.add('dragging');
        });
        
        div.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
        
        div.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');
            const afterElement = getDragAfterElement(eventsContainer, e.clientY);
            if (afterElement == null) {
                eventsContainer.appendChild(dragging);
            } else {
                eventsContainer.insertBefore(dragging, afterElement);
            }
        });
        
        eventsContainer.appendChild(div);
        timelineOrder.push(event.id);
    });
    
    // Clear feedback
    const feedback = document.getElementById('timeline-feedback');
    feedback.textContent = '';
    feedback.className = 'timeline-feedback';
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.timeline-event:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function checkTimelineOrder() {
    const eventsContainer = document.getElementById('timeline-events');
    const elements = eventsContainer.querySelectorAll('.timeline-event');
    const currentOrder = Array.from(elements).map(el => parseInt(el.dataset.eventId));
    
    // Get correct order
    const correctOrder = currentTimelineData.events
        .sort((a, b) => a.correctOrder - b.correctOrder)
        .map(e => e.id);
    
    // Check if correct
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    
    const feedback = document.getElementById('timeline-feedback');
    
    if (isCorrect) {
        feedback.textContent = '✅ Chính xác! Bạn đã sắp xếp đúng thứ tự!';
        feedback.className = 'timeline-feedback correct';
        
        if (game.soundEnabled) {
            playSound('achievement');
        }
        
        setTimeout(() => {
            closeChallengeModal();
            onChallengeSuccess();
        }, 1500);
    } else {
        feedback.textContent = '❌ Chưa đúng! Hãy sắp xếp lại.';
        feedback.className = 'timeline-feedback incorrect';
    }
}

// ===================
// MAP CHALLENGE
// ===================

let currentMapData = null;
let currentMapQuestion = 0;
let mapCorrectAnswers = 0;
let mapAnswers = [];

function showMapChallenge() {
    const container = document.getElementById('map-challenge');
    container.style.display = 'block';
    
    // Get map data
    const poolKey = currentChallenge.questionPool;
    const mapPool = QUESTION_BANK[poolKey];
    
    if (!mapPool || !mapPool.locations || !mapPool.questions) {
        console.error('Map pool not found:', poolKey);
        return;
    }
    
    currentMapData = mapPool;
    currentMapQuestion = 0;
    mapCorrectAnswers = 0;
    mapAnswers = [];
    
    // Set title
    document.getElementById('map-title').textContent = currentMapData.mapTitle;
    
    // Create map with locations
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = '';
    
    currentMapData.locations.forEach(location => {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.style.left = `${location.x}%`;
        pin.style.top = `${location.y}%`;
        pin.dataset.locationId = location.id;
        pin.innerHTML = `
            <div class="map-pin-marker">📍</div>
            <div class="map-pin-label">${location.name}</div>
        `;
        
        pin.addEventListener('click', () => handleMapClick(location.id));
        
        mapContainer.appendChild(pin);
    });
    
    // Show first question
    showMapQuestion();
}

function showMapQuestion() {
    if (currentMapQuestion >= currentMapData.questions.length) {
        checkMapComplete();
        return;
    }
    
    const question = currentMapData.questions[currentMapQuestion];
    
    document.getElementById('map-question-number').textContent = `Câu ${currentMapQuestion + 1}/${currentMapData.questions.length}`;
    document.getElementById('map-question-text').textContent = question.question;
    document.getElementById('map-feedback').textContent = '';
    document.getElementById('map-feedback').className = 'map-feedback';
    
    // Reset pin states
    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.classList.remove('selected', 'correct', 'incorrect');
    });
}

function handleMapClick(locationId) {
    const question = currentMapData.questions[currentMapQuestion];
    const isCorrect = (locationId === question.correctLocation);
    
    // Mark the clicked pin
    const clickedPin = document.querySelector(`.map-pin[data-location-id="${locationId}"]`);
    clickedPin.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    // Show feedback
    const feedback = document.getElementById('map-feedback');
    
    if (isCorrect) {
        mapCorrectAnswers++;
        mapAnswers.push({ question: currentMapQuestion + 1, correct: true });
        
        feedback.textContent = `✅ Đúng rồi! +${question.points} điểm`;
        feedback.className = 'map-feedback correct';
        
        if (game.soundEnabled) {
            playSound('correct');
        }
    } else {
        mapAnswers.push({ question: currentMapQuestion + 1, correct: false });
        
        // Highlight correct location
        const correctPin = document.querySelector(`.map-pin[data-location-id="${question.correctLocation}"]`);
        correctPin.classList.add('correct');
        
        feedback.textContent = `❌ Sai rồi! Đáp án đúng được đánh dấu.`;
        feedback.className = 'map-feedback incorrect';
    }
    
    // Disable all pins temporarily
    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.style.pointerEvents = 'none';
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentMapQuestion++;
        document.querySelectorAll('.map-pin').forEach(pin => {
            pin.style.pointerEvents = 'auto';
        });
        showMapQuestion();
    }, 2000);
}

function checkMapComplete() {
    const feedback = document.getElementById('map-feedback');
    const required = currentMapData.requiredCorrect;
    const total = currentMapData.questions.length;
    
    if (mapCorrectAnswers >= required) {
        feedback.textContent = `🎉 HOÀN THÀNH! Bạn trả lời đúng ${mapCorrectAnswers}/${total} câu!`;
        feedback.className = 'map-feedback correct';
        
        if (game.soundEnabled) {
            playSound('achievement');
        }
        
        setTimeout(() => {
            closeChallengeModal();
            onChallengeSuccess();
        }, 2500);
    } else {
        feedback.textContent = `❌ Bạn chỉ đúng ${mapCorrectAnswers}/${total}. Cần ít nhất ${required} đúng! Thử lại.`;
        feedback.className = 'map-feedback incorrect';
        
        // Reset and try again
        setTimeout(() => {
            currentMapQuestion = 0;
            mapCorrectAnswers = 0;
            mapAnswers = [];
            showMapQuestion();
        }, 3000);
    }
}

// ===================
// LEGACY CARDS CHALLENGE - FINALE
// ===================

let currentLegacyData = null;
let cardPlacements = {}; // { cardId: categoryId }

function showLegacyCardsChallenge() {
    const container = document.getElementById('legacy-challenge');
    container.style.display = 'block';
    
    // Get legacy cards data
    const poolKey = currentChallenge.questionPool;
    const legacyPool = QUESTION_BANK[poolKey];
    
    if (!legacyPool || !legacyPool.categories || !legacyPool.cards) {
        console.error('Legacy pool not found:', poolKey);
        return;
    }
    
    currentLegacyData = legacyPool;
    cardPlacements = {};
    
    // Create categories
    const categoriesContainer = document.getElementById('legacy-categories');
    categoriesContainer.innerHTML = '';
    
    currentLegacyData.categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'legacy-category';
        div.dataset.categoryId = category.id;
        
        div.innerHTML = `
            <div class="legacy-category-header">
                <span class="legacy-category-icon">${category.icon}</span>
                <span class="legacy-category-name">${category.name}</span>
            </div>
            <div class="legacy-category-desc">${category.description}</div>
            <div class="legacy-category-dropzone" data-category="${category.id}"></div>
        `;
        
        categoriesContainer.appendChild(div);
    });
    
    // Shuffle cards
    const cards = [...currentLegacyData.cards].sort(() => Math.random() - 0.5);
    
    // Create draggable cards
    const cardsContainer = document.getElementById('legacy-cards');
    cardsContainer.innerHTML = '';
    
    cards.forEach((card) => {
        const div = document.createElement('div');
        div.className = 'legacy-card';
        div.draggable = true;
        div.dataset.cardId = card.id;
        
        div.innerHTML = `
            <div class="legacy-card-year">${card.year}</div>
            <div class="legacy-card-title">${card.title}</div>
            <div class="legacy-card-desc">${card.description}</div>
        `;
        
        // Drag & Drop events
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', card.id);
            e.target.classList.add('dragging');
        });
        
        div.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
        
        cardsContainer.appendChild(div);
    });
    
    // Allow drop in dropzones
    document.querySelectorAll('.legacy-category-dropzone').forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', (e) => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const cardId = parseInt(e.dataTransfer.getData('text/plain'));
            const categoryId = zone.dataset.category;
            const cardElement = document.querySelector(`.legacy-card[data-card-id="${cardId}"]`);
            
            if (cardElement) {
                zone.appendChild(cardElement);
                cardPlacements[cardId] = categoryId;
            }
        });
    });
    
    // Clear feedback
    const feedback = document.getElementById('legacy-feedback');
    feedback.textContent = '';
    feedback.className = 'legacy-feedback';
}

function checkLegacyCards() {
    const feedback = document.getElementById('legacy-feedback');
    
    // Check if all cards are placed
    if (Object.keys(cardPlacements).length < currentLegacyData.cards.length) {
        feedback.textContent = '⚠️ Vui lòng xếp tất cả 10 thẻ vào các nhóm trước khi kiểm tra!';
        feedback.className = 'legacy-feedback warning';
        return;
    }
    
    // Check correctness
    let correctCount = 0;
    currentLegacyData.cards.forEach(card => {
        if (cardPlacements[card.id] === card.category) {
            correctCount++;
        }
    });
    
    const totalCards = currentLegacyData.cards.length;
    const requiredCorrect = 8; // Need 8/10 correct
    
    if (correctCount >= requiredCorrect) {
        feedback.textContent = `🎉 HOÀN HẢO! Bạn phân loại đúng ${correctCount}/${totalCards} di sản! Hiểu sâu về Bác Hồ!`;
        feedback.className = 'legacy-feedback correct';
        
        if (game.soundEnabled) {
            playSound('achievement');
        }
        
        setTimeout(() => {
            closeChallengeModal();
            onChallengeSuccess();
        }, 2500);
    } else {
        feedback.textContent = `❌ Đúng ${correctCount}/${totalCards}. Cần ít nhất ${requiredCorrect} đúng! Hãy đọc kỹ mô tả các nhóm và thử lại!`;
        feedback.className = 'legacy-feedback incorrect';
    }
}

// ===================
// COMMON FUNCTIONS
// ===================

function skipChallenge() {
    // Show different message for dice challenge
    let message = 'Bạn chỉ nhận được 50% điểm nếu bỏ qua. Xác nhận?';
    
    if (currentChallenge && currentChallenge.type === 'dice') {
        message = `🎲 BỎ QUA CHALLENGE\n\nĐiểm hiện tại: ${diceScore}/${currentChallenge.targetScore}\n\nBỏ qua sẽ KẾT THÚC thử thách này.\nBạn chỉ nhận 50% điểm của location.\n\nXác nhận bỏ qua?`;
    }
    
    if (!confirm(message)) {
        return;
    }
    
    closeChallengeModal();
    onChallengeSuccess(0.5); // 50% points
}

function closeChallengeModal() {
    const modal = document.getElementById('challenge-modal');
    modal.classList.remove('active');
}

function onChallengeSuccess(pointsMultiplier = 1.0) {
    const location = currentChallengeLocation;
    
    // Mark as visited and unlock next
    location.visited = true;
    game.currentLocation = location.id;
    
    if (location.id + 1 < LOCATIONS.length) {
        LOCATIONS[location.id + 1].unlocked = true;
    }
    
    // Add points (with multiplier for skip)
    const points = Math.floor(location.points * pointsMultiplier);
    game.totalPoints += points;
    
    // Check achievements
    if (location.achievement) {
        unlockAchievement(location.achievement.id);
    }
    
    // Check for special achievements
    checkSpecialAchievements();
    updateUI();
    updateJourneyLog();
    
    // Show story
    showStory(location);
}

// ==========================================
// GAME FUNCTIONS
// ==========================================

function startGame() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    game.startTime = Date.now();
    init();
}

function showInstructions() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('instructions-screen').classList.add('active');
}

function hideInstructions() {
    document.getElementById('instructions-screen').classList.remove('active');
    startGame();
}

// ==========================================
// CANVAS INTERACTION
// ==========================================

function handleCanvasClick(e) {
    const rect = game.canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // Check if clicked on a location
    LOCATIONS.forEach(loc => {
        const dist = Math.sqrt((clickX - loc.x) ** 2 + (clickY - loc.y) ** 2);
        if (dist < 30 && loc.unlocked && !loc.visited) {
            moveToLocation(loc);
        }
    });
}

function moveToLocation(location) {
    if (game.character.moving) return;
    
    game.character.targetX = location.x;
    game.character.targetY = location.y;
    game.character.moving = true;
    game.targetLocation = location;
    
    updateLocationInfo(`Đang di chuyển đến ${location.name}...`);
    
    // Clear any existing interval
    if (game.moveInterval) {
        clearInterval(game.moveInterval);
    }
    
    game.moveInterval = setInterval(() => {
        if (!game.character.moving) {
            // Movement paused (by event), don't move but keep interval
            return;
        }
        
        const dx = game.character.targetX - game.character.x;
        const dy = game.character.targetY - game.character.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < game.character.speed) {
            game.character.x = game.character.targetX;
            game.character.y = game.character.targetY;
            game.character.moving = false;
            clearInterval(game.moveInterval);
            game.moveInterval = null;
            arriveAtLocation(location);
        } else {
            game.character.x += (dx / dist) * game.character.speed;
            game.character.y += (dy / dist) * game.character.speed;
        }
        
        render();
    }, 1000 / 60);
}

function arriveAtLocation(location) {
    // Check if location has challenge
    if (location.challenge && !location.visited) {
        // Show challenge first
        showChallenge(location);
    } else {
        // No challenge or already visited, show story directly
        location.visited = true;
        game.currentLocation = location.id;
        
        if (location.id + 1 < LOCATIONS.length) {
            LOCATIONS[location.id + 1].unlocked = true;
        }
        
        showStory(location);
        game.totalPoints += location.points;
        
        if (location.achievement) {
            unlockAchievement(location.achievement.id);
        }
        
        checkSpecialAchievements();
        updateUI();
        updateJourneyLog();
    }
}

// ==========================================
// STORY MODAL
// ==========================================

function showStory(location) {
    const modal = document.getElementById('story-modal');
    
    // Reset media
    document.getElementById('story-image').style.display = 'none';
    document.getElementById('story-video').style.display = 'none';
    document.getElementById('story-audio').style.display = 'none';
    
    // Show media if available
    if (location.story.image) {
        const img = document.getElementById('story-image');
        img.src = location.story.image;
        img.alt = location.story.imageAlt || location.name;
        img.style.display = 'block';

        // Add loading animation
        img.onload = () => {
            img.style.animation = 'fadeIn 0.5s ease';
        };

        // Handle image load error
        img.onerror = () => {
            console.error('Failed to load image:', location.story.image);
            img.style.display = 'none';
        };
    }
    
    if (location.story.video) {
        const video = document.getElementById('story-video');
        video.src = location.story.video;
        video.style.display = 'block';
    }
    
    if (location.story.audio) {
        const audio = document.getElementById('story-audio');
        audio.src = location.story.audio;
        audio.style.display = 'block';
    }
    
    // Set text content
    document.getElementById('story-title').textContent = location.story.title;
    document.getElementById('story-year').textContent = location.year;
    document.getElementById('story-body').innerHTML = location.story.content;
    
    if (location.story.quote) {
        document.getElementById('story-quote').innerHTML = location.story.quote;
        document.getElementById('story-quote').style.display = 'block';
    } else {
        document.getElementById('story-quote').style.display = 'none';
    }
    
    document.getElementById('story-points').textContent = `+${location.points} Điểm Tri Thức`;
    
    if (location.achievement) {
        document.getElementById('story-achievement').style.display = 'flex';
    }
    
    // Play sound effect
    if (game.soundEnabled) {
        playSound('unlock');
    }
    
    modal.classList.add('active');
}

function closeStoryModal() {
    document.getElementById('story-modal').classList.remove('active');
}

function continueJourney() {
    closeStoryModal();
    updateLocationInfo('Chọn địa điểm tiếp theo...');

    // Check if all locations have been visited (game completed)
    const allVisited = LOCATIONS.every(loc => loc.visited);
    if (allVisited) {
        setTimeout(showVictoryScreen, 500);
    }
}

// ==========================================
// ACHIEVEMENTS
// ==========================================

function unlockAchievement(id) {
    if (ACHIEVEMENTS[id] && !ACHIEVEMENTS[id].unlocked) {
        ACHIEVEMENTS[id].unlocked = true;
        game.achievementsCount++;
        showAchievementPopup(ACHIEVEMENTS[id]);
        updateAchievementsPanel();
        
        // Play achievement sound
        if (game.soundEnabled) {
            playSound('achievement');
        }
    }
}

function showAchievementPopup(achievement) {
    const popup = document.getElementById('achievement-popup');
    document.getElementById('achievement-name').textContent = achievement.name;
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

function checkSpecialAchievements() {
    // Traveler: visited locations in 3 continents
    const visitedContinents = new Set();
    LOCATIONS.forEach(loc => {
        if (loc.visited) {
            if (loc.name.includes('Pháp')) visitedContinents.add('Europe');
            if (loc.name.includes('Trung Quốc') || loc.name.includes('QC') || loc.name.includes('Hương Cảng')) visitedContinents.add('Asia');
            if (loc.name.includes('Việt Nam') || loc.name.includes('VN') || loc.name.includes('Ý nghĩa')) visitedContinents.add('SoutheastAsia');
        }
    });
    
    if (visitedContinents.size >= 3) {
        unlockAchievement('traveler');
    }
    
    // Perfect: 1300 points (all locations completed with full score)
    if (game.totalPoints >= 1300) {
        unlockAchievement('perfect');
    }
    
    // Speedrun: Complete all locations in < 3 minutes
    const allVisited = LOCATIONS.every(loc => loc.visited);
    if (allVisited && game.startTime) {
        const timeElapsed = (Date.now() - game.startTime) / 1000; // seconds
        if (timeElapsed < SPEEDRUN_TIME_LIMIT) {
            unlockAchievement('speedrun');
        }
    }
}

// ==========================================
// UI UPDATES
// ==========================================

function updateUI() {
    // Progress bar
    const progress = (game.totalPoints / game.maxPoints) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = Math.round(progress) + '%';
    
    // Points
    document.getElementById('points-value').textContent = `${game.totalPoints}/${game.maxPoints}`;
    
    // Achievements
    document.getElementById('achievements-value').textContent = `${game.achievementsCount}/10`;
}

function updateLocationInfo(text) {
    document.getElementById('current-location').textContent = text;
}

function updateJourneyLog() {
    const logContent = document.getElementById('journey-log-content');
    logContent.innerHTML = '';
    
    LOCATIONS.forEach(loc => {
        const item = document.createElement('div');
        item.className = 'journey-item' + (loc.visited ? '' : ' locked');
        item.innerHTML = `
            <div class="year">${loc.year}</div>
            <div class="title">${loc.name}</div>
            <div class="status">${loc.visited ? '✓ Đã hoàn thành' : loc.unlocked ? '○ Có thể đến' : '🔒 Chưa mở khóa'}</div>
        `;
        logContent.appendChild(item);
    });
}

function updateAchievementsPanel() {
    const content = document.getElementById('achievements-content');
    content.innerHTML = '';
    
    Object.entries(ACHIEVEMENTS).forEach(([id, ach]) => {
        const item = document.createElement('div');
        item.className = 'achievement-item' + (ach.unlocked ? '' : ' locked');
        item.innerHTML = `
            <div class="icon">${ach.unlocked ? ach.name.split(' ')[0] : '🔒'}</div>
            <div class="details">
                <span class="name">${ach.name}</span>
                <span class="desc">${ach.desc}</span>
            </div>
        `;
        content.appendChild(item);
    });
}

// ==========================================
// PANEL TOGGLES
// ==========================================

function toggleJourneyLog() {
    document.getElementById('journey-log').classList.toggle('active');
    updateJourneyLog();
}

function toggleAchievements() {
    document.getElementById('achievements-panel').classList.toggle('active');
    updateAchievementsPanel();
}

function toggleSound() {
    game.soundEnabled = !game.soundEnabled;
    alert(game.soundEnabled ? '🔊 Âm thanh: BẬT' : '🔇 Âm thanh: TẮT');
}

// ==========================================
// RENDER
// ==========================================

function render() {
    const ctx = game.ctx;
    
    // Clear canvas
    ctx.clearRect(0, 0, game.width, game.height);
    
    // Draw ocean background
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, game.height);
    oceanGradient.addColorStop(0, '#8ec5d6');
    oceanGradient.addColorStop(0.5, '#6fa8c4');
    oceanGradient.addColorStop(1, '#5a93b3');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, game.width, game.height);
    
    // Draw continents (simplified shapes)
    drawContinents(ctx);
    
    // Draw animated ocean waves
    drawWaves(ctx);
    
    // Draw paths between locations with glow
    drawPaths(ctx);
    
    // Draw locations with enhanced visuals
    drawLocations(ctx);
    
    // Draw character with shadow
    drawCharacter(ctx);
    
    // Draw compass rose
    drawCompass(ctx);
}

function drawContinents(ctx) {
    ctx.fillStyle = '#d4c5a0';
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 2;
    
    // Europe (simplified)
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.bezierCurveTo(250, 130, 280, 180, 320, 200);
    ctx.bezierCurveTo(360, 220, 420, 200, 440, 180);
    ctx.bezierCurveTo(460, 160, 450, 140, 420, 130);
    ctx.bezierCurveTo(380, 120, 340, 140, 300, 150);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Asia (simplified)
    ctx.beginPath();
    ctx.moveTo(550, 200);
    ctx.bezierCurveTo(520, 180, 540, 240, 600, 280);
    ctx.bezierCurveTo(660, 320, 720, 300, 760, 280);
    ctx.bezierCurveTo(800, 260, 780, 220, 740, 200);
    ctx.bezierCurveTo(700, 180, 650, 190, 620, 210);
    ctx.bezierCurveTo(590, 190, 570, 200, 550, 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Southeast Asia
    ctx.beginPath();
    ctx.moveTo(700, 380);
    ctx.bezierCurveTo(680, 360, 690, 400, 720, 440);
    ctx.bezierCurveTo(740, 470, 780, 480, 800, 460);
    ctx.bezierCurveTo(820, 440, 810, 400, 780, 380);
    ctx.bezierCurveTo(750, 360, 720, 370, 700, 380);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Add country labels
    ctx.font = 'bold 18px VT323';
    ctx.fillStyle = '#5a4a3a';
    ctx.textAlign = 'center';
    ctx.fillText('FRANCE', 360, 170);
    ctx.fillText('CHINA', 670, 250);
    ctx.fillText('VIETNAM', 750, 430);
}

function drawWaves(ctx) {
    const time = Date.now() / 1000;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < game.width; x += 20) {
            const y = 100 + i * 100 + Math.sin((x + time * 100) / 50) * 5;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}

function drawPaths(ctx) {
    // Draw journey paths with glow and animation
    ctx.lineWidth = 4;
    
    for (let i = 0; i < LOCATIONS.length - 1; i++) {
        const current = LOCATIONS[i];
        const next = LOCATIONS[i + 1];
        
        if (current.visited) {
            // Completed path - solid gold
            ctx.strokeStyle = '#d4af37';
            ctx.setLineDash([]);
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#FFCD00';
        } else if (next.unlocked) {
            // Available path - dashed red
            ctx.strokeStyle = '#DA251D';
            ctx.setLineDash([15, 10]);
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#DA251D';
        } else {
            // Locked path - gray
            ctx.strokeStyle = '#999';
            ctx.setLineDash([5, 10]);
            ctx.shadowBlur = 0;
        }
        
        // Draw curved path
        ctx.beginPath();
        ctx.moveTo(current.x, current.y);
        
        const midX = (current.x + next.x) / 2;
        const midY = (current.y + next.y) / 2 - 50;
        ctx.quadraticCurveTo(midX, midY, next.x, next.y);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
}

function drawLocations(ctx) {
    LOCATIONS.forEach((loc, index) => {
        // Pulsing glow for unlocked locations
        if (loc.unlocked && !loc.visited) {
            const pulse = Math.sin(Date.now() / 300) * 0.3 + 0.7;
            ctx.save();
            ctx.shadowBlur = 30 * pulse;
            ctx.shadowColor = '#FFCD00';
            
            // Outer glow ring
            ctx.beginPath();
            ctx.arc(loc.x, loc.y, 40 * pulse, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 205, 0, 0.2)';
            ctx.fill();
            ctx.restore();
        }
        
        // Location marker base (like a pin)
        const markerHeight = 50;
        const markerWidth = 35;
        
        // Pin shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(loc.x, loc.y + 5, markerWidth / 3, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Pin body
        ctx.beginPath();
        ctx.arc(loc.x, loc.y - 15, markerWidth / 2, 0, Math.PI * 2);
        
        if (loc.visited) {
            const gradient = ctx.createRadialGradient(loc.x, loc.y - 15, 0, loc.x, loc.y - 15, markerWidth / 2);
            gradient.addColorStop(0, '#66bb6a');
            gradient.addColorStop(1, '#2e7d32');
            ctx.fillStyle = gradient;
        } else if (loc.unlocked) {
            const gradient = ctx.createRadialGradient(loc.x, loc.y - 15, 0, loc.x, loc.y - 15, markerWidth / 2);
            gradient.addColorStop(0, '#ff5252');
            gradient.addColorStop(1, '#c62828');
            ctx.fillStyle = gradient;
        } else {
            const gradient = ctx.createRadialGradient(loc.x, loc.y - 15, 0, loc.x, loc.y - 15, markerWidth / 2);
            gradient.addColorStop(0, '#bdbdbd');
            gradient.addColorStop(1, '#757575');
            ctx.fillStyle = gradient;
        }
        
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Pin point
        ctx.beginPath();
        ctx.moveTo(loc.x, loc.y - 15 + markerWidth / 2);
        ctx.lineTo(loc.x - 6, loc.y);
        ctx.lineTo(loc.x + 6, loc.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Icon inside pin
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';
        
        if (loc.visited) {
            ctx.fillText('✓', loc.x, loc.y - 15);
        } else if (loc.unlocked) {
            ctx.fillText('⭐', loc.x, loc.y - 15);
        } else {
            ctx.fillText('🔒', loc.x, loc.y - 15);
        }
        
        // Year badge
        const badgeWidth = 60;
        const badgeHeight = 24;
        const badgeY = loc.y - 60;
        
        ctx.fillStyle = 'rgba(218, 37, 29, 0.9)';
        ctx.beginPath();
        ctx.roundRect(loc.x - badgeWidth / 2, badgeY - badgeHeight / 2, badgeWidth, badgeHeight, 12);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px VT323';
        ctx.fillText(loc.year.toString(), loc.x, badgeY);
        
        // Location name on hover/active
        if (loc.unlocked) {
            ctx.font = '14px VT323';
            ctx.fillStyle = '#2d2d2d';
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 3;
            
            // Split long names
            const words = loc.name.split(',');
            words.forEach((word, i) => {
                const textY = loc.y + 20 + (i * 16);
                ctx.strokeText(word.trim(), loc.x, textY);
                ctx.fillText(word.trim(), loc.x, textY);
            });
        }
    });
}

function drawCharacter(ctx) {
    // Character shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(game.character.x, game.character.y + 25, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Character sprite with bounce animation
    const bounce = game.character.moving ? Math.sin(Date.now() / 100) * 3 : 0;
    
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Character glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#DA251D';
    ctx.fillText('🚶', game.character.x, game.character.y + bounce);
    ctx.shadowBlur = 0;
    
    // Name label
    ctx.font = 'bold 14px VT323';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#DA251D';
    ctx.lineWidth = 3;
    const nameY = game.character.y - 35 + bounce;
    ctx.strokeText('Nguyễn Ái Quốc', game.character.x, nameY);
    ctx.fillText('Nguyễn Ái Quốc', game.character.x, nameY);
}

function drawCompass(ctx) {
    const cx = 920;
    const cy = 80;
    const radius = 50;
    
    // Compass circle
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    gradient.addColorStop(0, '#ffeaa7');
    gradient.addColorStop(1, '#fdcb6e');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2d3436';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Cardinal directions
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 18px VT323';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.fillText('N', cx, cy - radius + 15);
    ctx.fillText('S', cx, cy + radius - 15);
    ctx.fillText('E', cx + radius - 15, cy);
    ctx.fillText('W', cx - radius + 15, cy);
    
    // Compass needle (pointing north)
    ctx.save();
    ctx.translate(cx, cy);
    
    // North pointer (red)
    ctx.beginPath();
    ctx.moveTo(0, -radius + 20);
    ctx.lineTo(-5, 0);
    ctx.lineTo(5, 0);
    ctx.closePath();
    ctx.fillStyle = '#DA251D';
    ctx.fill();
    
    // South pointer (white)
    ctx.beginPath();
    ctx.moveTo(0, radius - 20);
    ctx.lineTo(-5, 0);
    ctx.lineTo(5, 0);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
    
    ctx.restore();
}

// ==========================================
// VICTORY SCREEN
// ==========================================

function showVictoryScreen() {
    game.endTime = Date.now();
    const playTime = Math.floor((game.endTime - game.startTime) / 1000);

    // Check speedrun achievement
    if (playTime < SPEEDRUN_TIME_LIMIT) {
        unlockAchievement('speedrun');
    }
    
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('victory-screen').classList.add('active');
    
    document.getElementById('final-points').textContent = game.totalPoints;
    document.getElementById('final-achievements').textContent = `${game.achievementsCount}/10`;
    document.getElementById('final-time').textContent = formatTime(playTime);
    
    // Create flying Vietnam flags
    createVietnamFlags();
}

function createVietnamFlags() {
    const flagsContainer = document.getElementById('victory-flags');
    flagsContainer.innerHTML = ''; // Clear any existing flags
    
    const flagCount = 20; // Number of flags
    
    for (let i = 0; i < flagCount; i++) {
        const flag = document.createElement('div');
        flag.className = 'vietnam-flag';
        flag.textContent = '🇻🇳';
        
        // Random position
        const randomX = Math.random() * 100; // 0-100%
        const randomY = Math.random() * 100; // 0-100%
        flag.style.left = `${randomX}%`;
        flag.style.top = `${randomY}%`;
        
        // Random size
        const randomSize = 2 + Math.random() * 2.5; // 2-4.5rem
        flag.style.fontSize = `${randomSize}rem`;
        
        // Random animation delay
        const randomDelay = Math.random() * 3; // 0-3s
        flag.style.animationDelay = `${randomDelay}s`;
        
        // Random animation duration
        const randomDuration = 3 + Math.random() * 2; // 3-5s
        flag.style.animationDuration = `${randomDuration}s`;
        
        // Random opacity
        const randomOpacity = 0.6 + Math.random() * 0.4; // 0.6-1.0
        flag.style.opacity = randomOpacity;
        
        flagsContainer.appendChild(flag);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function restartGame() {
    location.reload();
}

function shareResults() {
    const text = `🎮 Tôi đã hoàn thành hành trình Nguyễn Ái Quốc!\n💡 ${game.totalPoints} điểm tri thức\n🏆 ${game.achievementsCount}/10 thành tựu`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Journey to Revolution',
            text: text
        });
    } else {
        alert(text + '\n\nChúc mừng bạn!');
    }
}

// ==========================================
// SOUND SYSTEM
// ==========================================

const sounds = {
    unlock: null,
    achievement: null,
    walk: null,
    bgMusic: null
};

function initSounds() {
    // Create single audio context for reuse
    if (!game.audioContext) {
        game.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Create audio contexts
    sounds.bgMusic = new Audio();
    sounds.bgMusic.loop = true;
    sounds.bgMusic.volume = 0.3;

    // You can add your own audio files here
    // sounds.bgMusic.src = 'assets/audio/background.mp3';
}

function playSound(type) {
    if (!game.soundEnabled) return;

    // Reuse audio context
    if (!game.audioContext) {
        game.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const audioContext = game.audioContext;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different sounds for different events
    if (type === 'unlock') {
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.3;
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'achievement') {
        oscillator.frequency.value = 1200;
        gainNode.gain.value = 0.3;
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'correct') {
        oscillator.frequency.value = 1000;
        gainNode.gain.value = 0.2;
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.15);
    }
}

function toggleBackgroundMusic() {
    if (sounds.bgMusic && sounds.bgMusic.src) {
        if (sounds.bgMusic.paused) {
            sounds.bgMusic.play();
        } else {
            sounds.bgMusic.pause();
        }
    }
}

// ==========================================
// CONSOLE ART
// ==========================================

console.log('%c🎮 JOURNEY TO REVOLUTION', 'font-size: 24px; font-weight: bold; color: #DA251D;');
console.log('%cInteractive Historical Game', 'font-size: 14px; color: #FFCD00;');
console.log('%c"Đảng ta là đạo đức, là văn minh."', 'font-size: 16px; font-style: italic; color: #d4af37;');
console.log('%cGame ready! Click START to begin.', 'font-size: 12px; color: #666;');
