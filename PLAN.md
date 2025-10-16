# 🎮 GAME DESIGN DOCUMENT: HÀNH TRÌNH NGUYỄN ÁI QUỐC

## 📋 Project Overview

**Title:** Hành Trình Nguyễn Ái Quốc (1911-1930)  
**Genre:** Educational Interactive History Game  
**Platform:** Web Browser (Desktop + Mobile)  
**Target Audience:** Students, educators, history enthusiasts (12+)  
**Playtime:** 15-30 minutes  
**Development Status:** ✅ Production Ready (v4.0)

---

## 🎯 Vision Statement

> **Biến hành trình lịch sử thành trải nghiệm game tương tác - Học qua chơi, nhớ qua trải nghiệm.**

Transform 19 years of Nguyễn Ái Quốc's revolutionary journey into an **engaging, interactive game** where players **actively participate** in historical events through diverse challenges.

---

## 🎨 Core Game Loop

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  🗺️ Navigate Map                                │
│         ↓                                       │
│  📍 Click Location                              │
│         ↓                                       │
│  🎯 Face Challenge                              │
│         ↓                                       │
│    ✅ Pass → Story + Points + Achievement      │
│    ❌ Fail → Retry                              │
│    ⏭️ Skip → Half Points                        │
│         ↓                                       │
│  📖 Read History                                │
│         ↓                                       │
│  🔄 Next Location                               │
│         ↓                                       │
│  🏆 Victory Screen (After Location 11)         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Core Loop Duration:** 1-3 minutes per location × 11 = 15-30 minutes total

---

## 🗺️ World Map System

### **Map Canvas**
- **Rendering:** HTML5 Canvas API
- **Size:** 1000×600px (16:10 aspect ratio)
- **Background:** Vintage world map texture
- **Parallax:** Subtle depth effect (optional)

### **11 Locations**
Distributed across **3 continents**:

#### **🌏 Châu Á (4 locations)**
- Location 0: Bến Nhà Rồng, Sài Gòn (1911)
- Location 4: Nga (1923-1924)
- Location 5-8: Quảng Châu, Trung Quốc (1924-1929)

#### **🌍 Châu Âu (3 locations)**
- Location 1: Paris (1917)
- Location 2: Versailles (1919)
- Location 3: Tours (1920)

#### **🏝️ Đông Nam Á (4 locations)**
- Location 9-10: Hương Cảng (1929-1930)
- Location 11: Ý nghĩa lịch sử (Meta-location)

### **Location States**
```css
🔒 Locked:    Gray, unclickable
🔓 Unlocked:  Yellow glow, pulsing animation
✅ Visited:   Green checkmark, no glow
📍 Current:   Red marker, character here
```

### **Character Sprite** 🚶
- **Sprite:** Walking person emoji/icon
- **Movement:** Linear interpolation between locations
- **Speed:** 2-3 seconds per journey
- **Animation:** Subtle walking cycle (optional)

---

## 🎯 Challenge System

### **4 Challenge Types**

#### **1️⃣ Quiz Challenge** (3 instances)
**Concept:** Traditional multiple-choice questions

**Mechanics:**
- 1 question per challenge
- 4 options (A, B, C, D)
- Random selection from pool (5 questions)
- Shuffle answer order

**Actions:**
- Click answer → Submit
- 💡 Hint button (-20 points) → Reveal helpful clue
- ⏭️ Skip button → Get 50% points

**Feedback:**
- ✅ Correct: Green highlight + success sound
- ❌ Wrong: Red highlight + disable button → Try again

**Scoring:**
- Pass: +100 points
- Skip: +50 points
- Hint: -20 points (from total)

**Locations:** 1 (Paris), 2 (Versailles), 7 (Đường Kách mệnh)

---

#### **2️⃣ Timeline Challenge** (3 instances)
**Concept:** Chronological sorting puzzle

**Mechanics:**
- 3 historical events (shuffled)
- Drag & drop to reorder
- Random selection from sets (3 sets per challenge)

**Actions:**
- Drag event card → Move up/down
- Drop → Swap positions
- "✅ XÁC NHẬN" button → Check order

**Feedback:**
- ✅ Correct order: All cards turn green + animation
- ❌ Wrong order: Highlight incorrect positions → Retry

**Scoring:**
- Pass: +150 points (higher for complexity)
- Skip: +75 points

**Visual:**
```
┌──────────────────────────────────┐
│  [1920] Đại hội Tours            │ ← Drag me
├──────────────────────────────────┤
│  [1919] Bản yêu sách Versailles  │
├──────────────────────────────────┤
│  [1925] Hội Thanh niên           │
└──────────────────────────────────┘
```

**Locations:** 3 (Tours), 6 (Quảng Châu), 9 (Hương Cảng)

---

#### **3️⃣ Map Challenge** (3 instances) ✨ **NEW!**
**Concept:** Interactive geography quiz

**Mechanics:**
- Visual map với pins (5 locations)
- 5 questions tuần tự
- Click vào pin đúng để trả lời
- Need 4/5 correct to pass

**Map Types:**
1. **World Map** (Asia, Europe, Americas)
2. **China Regional Map** (Major cities)
3. **South China + Vietnam Map** (Local focus)

**Actions:**
- Read question
- Click location pin on map
- See feedback (correct pin glows green, wrong pin glows red)
- Auto-advance to next question (2s delay)

**Feedback:**
- ✅ Correct: Pin glows green + "✅ Đúng rồi! +20 điểm"
- ❌ Wrong: Pin glows red + correct pin highlighted

**Scoring:**
- 4-5 correct: +150-200 points (varies by location)
- 3 or less: Fail → Reset and retry

**Visual:**
```
┌─────────────────────────────────────────┐
│  🗺️ HÀNH TRÌNH CỦA BÁC (1911-1924)     │
│  ❓ Bác Hồ ra đi từ đâu năm 1911?       │
├─────────────────────────────────────────┤
│        [World Map Background]            │
│   📍 Việt Nam    📍 Pháp                │
│   📍 Nga         📍 Trung Quốc          │
│   📍 Mỹ                                 │
│                                          │
│  Progress: Câu 1/5                      │
└─────────────────────────────────────────┘
```

**Locations:** 4 (Nga), 8 (Quảng Châu), 10 (Hương Cảng)

---

#### **4️⃣ Legacy Cards Challenge** (1 finale) ✨ **NEW!**
**Concept:** Categorization-based finale challenge

**Mechanics:**
- 10 legacy cards (shuffled)
- 3 category dropzones
- Drag & drop cards into correct categories
- Need 8/10 correct to pass

**3 Categories:**
1. **📚 Tư tưởng & Truyền thông** (3 cards)
   - Bản yêu sách Versailles (1919)
   - Báo Le Paria (1921)
   - Cuốn "Đường Kách mệnh" (1927)

2. **🏛️ Tổ chức** (4 cards)
   - Hội Việt Nam Cách mạng Thanh niên (1925)
   - Ba tổ chức Cộng sản (1929)
   - Hội nghị hợp nhất (1930)
   - Đảng Cộng sản Việt Nam (1930)

3. **🌍 Hoạt động Quốc tế** (3 cards)
   - Ra đi tìm đường cứu nước (1911)
   - Hoạt động tại Pháp (1917)
   - Đại hội Tours (1920)

**Actions:**
- Drag card from pool
- Drop into category zone
- "✅ KIỂM TRA PHÂN LOẠI" button

**Feedback:**
- 8-10 correct: "🎉 HOÀN HẢO! Bạn phân loại đúng X/10!"
- < 8 correct: "❌ Cần ít nhất 8 đúng! Thử lại."

**Scoring:**
- Pass: +150 points (finale bonus)
- Skip: +75 points

**Visual:**
```
┌──────────────────────────────────────────┐
│  🏆 DI SẢN BÁC HỒ!                       │
├──────────────────────────────────────────┤
│  Draggable Cards:                        │
│  [1919 Versailles] [1921 Le Paria] ...  │
├──────────────────────────────────────────┤
│  📚 Tư tưởng    🏛️ Tổ chức   🌍 Quốc tế │
│  [Drop here]    [Drop here]   [Drop here]│
│  ┌──────────┐   ┌──────────┐  ┌──────────┐│
│  │          │   │          │  │          ││
│  └──────────┘   └──────────┘  └──────────┘│
└──────────────────────────────────────────┘
```

**Location:** 11 (Ý nghĩa lịch sử - Finale)

---

## 📊 Progression & Scoring

### **Points System**

| Location | Challenge Type | Points | Skip Points |
|----------|---------------|--------|-------------|
| 0 | None | 0 | - |
| 1 | Quiz | 100 | 50 |
| 2 | Quiz | 100 | 50 |
| 3 | Timeline | 150 | 75 |
| 4 | Map | 150 | 75 |
| 5 | None | 50 | - |
| 6 | Timeline | 150 | 75 |
| 7 | Quiz | 100 | 50 |
| 8 | Map | 100 | 50 |
| 9 | Timeline | 200 | 100 |
| 10 | Map | 200 | 100 |
| 11 | Legacy Cards | 150 | 75 |
| **TOTAL** | **10 challenges** | **1300** | **650** |

### **Scoring Formula**
```javascript
finalScore = basePoints - hintPenalties
maxScore = 1300
percentage = (finalScore / maxScore) * 100

Grade:
  1200-1300 = 🏆 Xuất Sắc (Perfect/Near-perfect)
  1000-1199 = ⭐ Giỏi (Excellent)
  800-999   = 👍 Khá (Good)
  600-799   = 📖 Trung Bình (Average)
  < 600     = 📝 Cần Cố Gắng (Needs Improvement)
```

### **Progress Tracking**
- **Top Bar:** Real-time point counter
- **Progress Bar:** % completion (based on locations visited)
- **Side Panel:** Journey log + achievements

---

## 🏆 Achievement System

### **Achievement Structure**
```javascript
{
  id: 'achievement_id',
  name: 'Achievement Name',
  description: 'What this achievement means',
  icon: '🏆',
  unlockCondition: 'When it unlocks',
  points: 0, // Optional bonus points
  unlocked: false
}
```

### **10 Achievements**

#### **Story Achievements** (7)
1. **🎓 Bước Đầu Tiên**
   - Unlock: Complete Location 0
   - Description: "Khởi đầu hành trình từ Bến Nhà Rồng"

2. **📰 Tiếng Nói**
   - Unlock: Complete Location 2 (Versailles)
   - Description: "Gửi bản yêu sách đến Hội nghị Versailles"

3. **⭐ Cách Mạng**
   - Unlock: Complete Location 3 (Tours)
   - Description: "Gia nhập Quốc tế Cộng sản"

4. **📚 Nhà Giáo**
   - Unlock: Complete Location 5 (Quảng Châu)
   - Description: "Thành lập Hội Thanh niên, đào tạo cán bộ"

5. **✍️ Nhà Văn**
   - Unlock: Complete Location 7 (Đường Kách mệnh)
   - Description: "Xuất bản tác phẩm lý luận đầu tiên"

6. **🤝 Người Hợp Nhất**
   - Unlock: Complete Location 9 (Hương Cảng)
   - Description: "Hợp nhất ba tổ chức cộng sản"

7. **👑 Người Sáng Lập**
   - Unlock: Complete Location 10 (Đảng ra đời)
   - Description: "Thành lập Đảng Cộng sản Việt Nam"

#### **Performance Achievements** (3)
8. **🌏 Du Hành Gia**
   - Unlock: Visit locations in 3 continents
   - Description: "Đi qua Châu Á, Châu Âu, Đông Nam Á"

9. **⚡ Speedrun**
   - Unlock: Complete game in < 180 seconds (3 minutes)
   - Description: "Hoàn thành hành trình với tốc độ ánh sáng"

10. **🎯 Hoàn Hảo**
    - Unlock: Get 1300/1300 points
    - Description: "Đạt điểm tuyệt đối - Không skip, không sai"

---

## 📚 Question Bank System

### **Architecture**
```javascript
// questions.js
const QUESTION_BANK = {
  // Quiz pools
  quiz_ra_di_tim_duong_cuu_nuoc: [5 questions],
  quiz_hoat_dong_tai_phap: [5 questions],
  quiz_duong_kach_menh: [5 questions],
  
  // Timeline pools
  timeline_versailles_tours_thanhnien: [3 sets],
  timeline_ba_to_chuc_cong_san: [3 sets],
  timeline_hoat_dong_cua_nguoi: [3 sets],
  
  // Map pools
  map_asia_1920s: {
    mapTitle: 'Hành trình 1911-1924',
    locations: [5 pins],
    questions: [5 questions]
  },
  map_china_1927: { ... },
  map_china_1930: { ... },
  
  // Legacy Cards pool
  legacy_cards_finale: {
    categories: [3 categories],
    cards: [10 cards]
  }
}
```

### **Random Selection Logic**
```javascript
// For Quiz
function getRandomQuestion(poolKey) {
  const pool = QUESTION_BANK[poolKey];
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// For Timeline
function getRandomTimelineSet(poolKey) {
  const pool = QUESTION_BANK[poolKey];
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// For Map
function getMapData(poolKey) {
  return QUESTION_BANK[poolKey]; // Full map data
}

// Shuffle answers (Quiz only)
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
```

### **Content Stats**
- **Total Items:** 74+
- **Quiz Questions:** 20 (4 pools × 5)
- **Timeline Sets:** 9 (3 pools × 3)
- **Map Challenges:** 3 maps (15 questions total)
- **Legacy Cards:** 1 set (10 cards + 3 categories)

**Replayability:** High (random selection + shuffle = ~1000+ unique playthroughs)

---

## 🎨 UI/UX Design

### **Design Principles**
1. **Retro Gaming Aesthetic:** 8-bit/16-bit RPG vibes
2. **Clear Hierarchy:** Important info stands out
3. **Responsive:** Works on all screen sizes
4. **Accessible:** High contrast, readable fonts
5. **Delightful:** Smooth animations, satisfying sounds

### **Color Palette**
```css
--primary-red: #DA291C (Đỏ cờ VN)
--primary-yellow: #FFCD00 (Vàng cờ VN)
--gold: #FFC107 (Highlights, achievements)
--text-dark: #2C1810 (Main text)
--text-light: #F5F5F5 (On dark backgrounds)
--bg-cream: #FFF8E7 (Soft background)
--success-green: #28a745
--error-red: #dc3545
```

### **Typography**
```css
/* Headers / Pixel Style */
font-family: 'Press Start 2P', monospace;
/* Body / Readable */
font-family: 'VT323', monospace;
```

### **Screen Layouts**

#### **Home Screen**
```
┌───────────────────────────────────────┐
│  🎮 HÀNH TRÌNH NGUYỄN ÁI QUỐC        │
│     (1911-1930)                       │
│                                       │
│  [BẮT ĐẦU HÀNH TRÌNH] 🚀             │
│  [HƯỚNG DẪN]          📖             │
│  [THÔNG TIN]          ℹ️              │
└───────────────────────────────────────┘
```

#### **Game Screen**
```
┌─────────────────────────────────────────────────────┐
│ 🏠 Home  │  Điểm: 450/1300  │  🏆 5/10  │  ⏱️ 5:23 │ ← HUD
├─────────────────────────────────────────────────────┤
│                                                     │
│              [Canvas World Map]                     │
│                                                     │
│         📍 Location markers + Character 🚶          │
│                                                     │
├─────────────────────────────────────────────────────┤
│  Progress: ████████████░░░░░░░░ 60% (6/11)        │ ← Progress Bar
└─────────────────────────────────────────────────────┘
```

#### **Victory Screen**
```
┌─────────────────────────────────────────┐
│  🇻🇳 🇻🇳 🇻🇳 [Flying flags background] │
│                                         │
│         🎉 HOÀN THÀNH!                  │
│    Đảng Cộng sản Việt Nam ra đời       │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Tổng điểm tri thức:      1200     │ │
│  │ Thành tựu đạt được:      10/10    │ │
│  │ Thời gian hoàn thành:    12:34    │ │
│  └───────────────────────────────────┘ │
│                                         │
│  💬 "Nguyễn Ái Quốc... thắp sáng...   │
│      ...cách mạng Việt Nam..."         │
│                                         │
│  [CHƠI LẠI] 🔄  [CHIA SẺ] 📤          │
└─────────────────────────────────────────┘
```

### **Modal Designs**

#### **Story Modal**
```
┌──────────────────────────────────────────┐
│  [X] Close                               │
├──────────────────────────────────────────┤
│  📖 Bến Nhà Rồng, Sài Gòn               │
│     1911                                 │
├──────────────────────────────────────────┤
│  [Historical Image]                      │
├──────────────────────────────────────────┤
│  Ngày 5/6/1911, thanh niên...           │
│  ...ra đi tìm đường cứu nước.           │
│                                          │
│  💬 "Tôi muốn đi ra ngoài xem..."       │
├──────────────────────────────────────────┤
│  🏆 +0 Điểm  |  🎓 Achievement Unlocked! │
├──────────────────────────────────────────┤
│         [TIẾP TỤC] →                    │
└──────────────────────────────────────────┘
```

#### **Challenge Modal (Quiz Example)**
```
┌──────────────────────────────────────────┐
│  [X] Close                               │
├──────────────────────────────────────────┤
│  📝 QUIZ CHALLENGE                       │
│  Location 1: Paris 1917                  │
├──────────────────────────────────────────┤
│  ❓ Nguyễn Ái Quốc sống tại Pháp từ     │
│     năm nào đến năm nào?                 │
│                                          │
│  [ A) 1917-1923 ]  ← Click to answer    │
│  [ B) 1915-1920 ]                       │
│  [ C) 1920-1925 ]                       │
│  [ D) 1918-1922 ]                       │
│                                          │
│  Feedback: (empty initially)            │
├──────────────────────────────────────────┤
│  [💡 GỢI Ý] -20 điểm                    │
│  [⏭️ BỎ QUA] Nhận 50% điểm              │
└──────────────────────────────────────────┘
```

---

## 🎵 Audio Design

### **Sound Effects**
```javascript
const SOUNDS = {
  click: 'click.mp3',        // Button clicks
  correct: 'correct.mp3',    // Right answer
  wrong: 'wrong.mp3',        // Wrong answer (gentle)
  unlock: 'unlock.mp3',      // Location unlocked
  achievement: 'achievement.mp3', // Badge earned
  victory: 'victory.mp3'     // Game complete
}
```

### **Audio System**
- **Web Audio API** for playback
- **Toggle:** Mute button in settings
- **Volume:** Follows system volume
- **Fallback:** Game works without audio

### **Sound Timing**
- **Click:** Immediate (< 50ms)
- **Correct:** 200ms delay (after animation)
- **Achievement:** 500ms delay (after unlock)
- **Victory:** On screen appear

---

## 📱 Responsive Design

### **Breakpoints**
```css
/* Desktop */
@media (min-width: 1024px) {
  /* Full canvas, side panel visible */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Smaller canvas, collapsible side panel */
}

/* Mobile */
@media (max-width: 767px) {
  /* Vertical layout, touch-optimized */
  /* Larger tap targets (48×48px minimum) */
}
```

### **Touch Optimizations**
- **Tap targets:** Minimum 44×44px
- **Drag zones:** Larger drop zones
- **Swipe gestures:** Minimal use
- **Zoom:** Disabled (viewport meta tag)

### **Mobile-Specific**
- **Vertical layout:** Challenges take full width
- **Collapsible panels:** Hamburger menu
- **Smaller fonts:** But still readable
- **Simplified animations:** Better performance

---

## 🔧 Technical Implementation

### **Tech Stack**
```
Frontend:
├── HTML5 (Semantic, accessible)
├── CSS3 (Flexbox, Grid, Animations)
├── JavaScript ES6+ (Vanilla, no frameworks)
└── Canvas API (Map rendering)

Assets:
├── Images (11 historical photos, ~15MB)
├── Fonts (Press Start 2P, VT323)
└── Audio (6 sound effects, optional)

Storage:
└── LocalStorage (Optional save system)
```

### **File Structure**
```
📁 Project/
├── 📄 index.html (260 lines)
├── 📄 styles.css (1350 lines)
├── 📄 script.js (1700 lines)
├── 📄 questions.js (800 lines)
├── 📁 assets/
│   ├── 📁 images/ (1-11.jpg)
│   └── 📁 audio/ (optional)
└── 📁 docs/
    ├── README.md
    ├── PLAN.md (This file)
    ├── HUONG_DAN_CHOI_GAME.md
    └── QUESTION_BANK_GUIDE.md
```

### **Performance Targets**
- **Load Time:** < 3 seconds (first render)
- **FPS:** 60fps (smooth animations)
- **Canvas Rendering:** < 16ms per frame
- **Challenge Load:** < 100ms
- **Mobile Performance:** Smooth on mid-range devices

### **Browser Support**
- **Chrome/Edge:** Full support (✅ Recommended)
- **Firefox:** Full support (✅)
- **Safari:** Full support (✅ iOS + macOS)
- **IE:** Not supported (❌ Canvas API limitations)

---

## 🚀 Development Roadmap

### **Phase 1: Core Game** ✅ COMPLETE
- [x] Canvas world map
- [x] 11 locations with states
- [x] Character movement
- [x] Quiz challenge
- [x] Timeline challenge
- [x] Story modal system

### **Phase 2: Enhanced Challenges** ✅ COMPLETE
- [x] Question bank system (74 items)
- [x] Random selection logic
- [x] Answer shuffling
- [x] Map Challenge (3 instances)
- [x] Legacy Cards finale

### **Phase 3: Polish** ✅ COMPLETE
- [x] Achievement system (10 badges)
- [x] Victory screen with flags animation
- [x] Sound effects
- [x] Mobile responsive
- [x] Hint system

### **Phase 4: Documentation** ✅ COMPLETE
- [x] Player guide (HUONG_DAN_CHOI_GAME.md)
- [x] Content management guide (QUESTION_BANK_GUIDE.md)
- [x] Game design document (PLAN.md)
- [x] README.md

### **Phase 5: Future Enhancements** 🔮 BACKLOG
- [ ] Multiplayer mode
- [ ] Leaderboard
- [ ] Certificate download
- [ ] Performance grade (S/A/B/C/D)
- [ ] Additional languages
- [ ] PWA support

---

## 📊 Analytics & Metrics

### **Success Metrics**
```javascript
// Player Engagement
averagePlaytime: 15-30 minutes
completionRate: > 80%
replayRate: > 30%

// Educational Value
challengePassRate: 70-90%
achievementUnlockRate: 60-80%
perfectScoreRate: 10-20%

// Technical
loadTime: < 3s
errorRate: < 1%
mobileUsage: 40-60%
```

### **Key Events to Track**
- Game start
- Location completed
- Challenge passed/failed/skipped
- Achievement unlocked
- Game completed
- Share button clicked

---

## 🎯 Design Principles

### **Educational**
1. **Accurate:** Historical facts verified
2. **Engaging:** Learn through play
3. **Progressive:** Difficulty increases gradually
4. **Rewarding:** Achievements for milestones

### **User Experience**
1. **Intuitive:** No tutorial needed
2. **Forgiving:** Can retry challenges
3. **Responsive:** Works everywhere
4. **Delightful:** Smooth, satisfying

### **Technical**
1. **Performant:** 60fps target
2. **Accessible:** Keyboard + screen reader support
3. **Maintainable:** Clean, documented code
4. **Scalable:** Easy to add content

---

## 📝 Content Guidelines

### **Historical Accuracy**
- **Sources:** Official documents, verified archives
- **Dates:** Double-checked
- **Names:** Accurate transliteration
- **Context:** Appropriate for audience

### **Writing Style**
- **Clear:** Simple sentences
- **Concise:** 2-3 sentences per story
- **Engaging:** Active voice, vivid language
- **Respectful:** Appropriate tone for subject

### **Image Selection**
- **Quality:** High resolution (1200×800 minimum)
- **Relevance:** Directly related to content
- **Rights:** Public domain or licensed
- **Cropping:** Focus on key elements

---

## 🎉 Victory Celebration

### **Victory Screen Features**
1. **Flying Vietnam Flags** 🇻🇳
   - 20 flags animated across screen
   - Random positions, sizes, delays
   - Float + wave + sway animations
   - Não che content

2. **Stats Display**
   - Total points earned
   - Achievements unlocked (X/10)
   - Completion time
   - Performance grade (optional)

3. **Historical Quote**
   - Inspirational quote from Hồ Chí Minh
   - Changes based on performance (optional)

4. **Action Buttons**
   - "CHƠI LẠI" → Restart game
   - "CHIA SẺ" → Share results (social)
   - "TẢI XUỐNG BẰNG" → Certificate (future)

### **Celebration Sequence**
```
1. [0.0s] Victory screen fades in
2. [0.3s] Flags start flying
3. [0.5s] Title appears "🎉 HOÀN THÀNH!"
4. [0.8s] Stats count up (animated numbers)
5. [1.5s] Quote fades in
6. [2.0s] Buttons appear
7. [∞] Flags continue looping
```

---

## 🔮 Future Vision

### **Version 5.0 Ideas**
- **Extended Timeline:** 1930-1945 (WWII era)
- **Multiple Characters:** Play as different revolutionaries
- **Branching Paths:** Different routes to victory
- **Mini-Games:** Side challenges (e.g., decode secret messages)
- **Multiplayer:** Compete or cooperate online

### **Platform Expansion**
- **Mobile App:** Native iOS/Android
- **Desktop App:** Electron wrapper
- **VR Version:** Immersive historical experience
- **AR Mode:** Overlay history on real locations

### **Content Expansion**
- **More Challenges:** 20+ total
- **More Achievements:** 30+ badges
- **Hidden Secrets:** Easter eggs for history buffs
- **Bonus Levels:** Post-game content

---

## 📄 Licensing & Credits

### **Content**
- **Historical Material:** Public domain / Educational use
- **Images:** Bảo tàng Hồ Chí Minh + archives
- **Text:** Based on official histories

### **Code**
- **License:** Educational Use Only
- **Framework:** Vanilla JavaScript (no dependencies)
- **Fonts:** Google Fonts (Open Font License)

### **Credits**
```
Game Design:    Nhóm 3
Development:    Droid AI + Team
Content:        Historical Archives
Testing:        Beta Testers
Special Thanks: Educators & Historians
```

---

## 🎮 Start Coding!

```bash
# Clone/Download project
# Open index.html in browser
# Start playing!

# No build step required
# Pure vanilla JS = instant preview
```

**"Không có gì quý hơn độc lập tự do!"**  
*— Chủ tịch Hồ Chí Minh*

---

**Version:** 4.0 - Complete Edition  
**Status:** ✅ Production Ready  
**Last Updated:** December 2024  
**Next Review:** Q1 2025

---

*End of Game Design Document*
