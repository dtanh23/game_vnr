# 📚 HƯỚNG DẪN NGÂN HÀNG CÂU HỎI - QUESTION BANK GUIDE

## 📖 **TỔNG QUAN**

File `questions.js` chứa **ngân hàng câu hỏi** phục vụ cho **TẤT CẢ CHALLENGES** trong game.

### **Cấu trúc:**
```
QUESTION_BANK
├── QUIZ CHALLENGES (3 pools)
│   ├── quiz_ra_di_tim_duong_cuu_nuoc: [5 câu]
│   ├── quiz_hoat_dong_tai_phap: [5 câu]
│   └── quiz_duong_kach_menh: [5 câu]
├── TIMELINE CHALLENGES (3 pools)
│   ├── timeline_versailles_tours_thanhnien: [3 sets]
│   ├── timeline_ba_to_chuc_cong_san: [3 sets]
│   └── timeline_hoat_dong_cua_nguoi: [3 sets]
├── MAP CHALLENGES (3 maps) ✨ NEW!
│   ├── map_asia_1920s: 5 questions
│   ├── map_china_1927: 5 questions
│   └── map_china_1930: 5 questions
└── LEGACY CARDS FINALE (1 set) ✨ NEW!
    └── legacy_cards_finale: 3 categories + 10 cards
```

**Tổng cộng:**
- **Quiz:** 15 câu (3 challenges × 5 câu)
- **Timeline:** 9 sets (3 challenges × 3 sets)
- **Map:** 15 questions (3 maps × 5 questions)
- **Legacy Cards:** 10 cards + 3 categories
- **TỔNG:** 49 items + metadata structures

---

## 🎮 **CƠ CHẾ HOẠT ĐỘNG**

### **1. Quiz Challenge:**
- Random chọn **1 trong 5 câu** mỗi lần
- Shuffle thứ tự A/B/C/D
- Hint system giúp người chơi

### **2. Timeline Challenge:**
- Random chọn **1 trong 3 sets** mỗi lần
- Shuffle thứ tự sự kiện ban đầu
- Người chơi sắp xếp lại theo thời gian

### **3. Map Challenge:** ✨ NEW!
- 5 câu hỏi tuần tự (không random)
- Click vào địa điểm đúng trên bản đồ
- Cần 4/5 đúng để pass
- 3 loại maps khác nhau:
  - World map (châu lục)
  - China regional map (thành phố TQ)
  - South China + Vietnam (local)

### **4. Legacy Cards Challenge:** ✨ NEW!
- 10 cards được shuffle random
- Drag & drop vào 3 categories
- Cần 8/10 đúng để pass

---

## 📝 **ĐỊNH DẠNG CÂU HỎI**

### **1. QUIZ Challenge Format:**
```javascript
{
    question: 'Câu hỏi ở đây?',
    options: [
        { text: 'Đáp án đúng', correct: true },
        { text: 'Đáp án sai 1', correct: false },
        { text: 'Đáp án sai 2', correct: false },
        { text: 'Đáp án sai 3', correct: false }
    ],
    hint: 'Gợi ý cho người chơi (tốn 20 điểm)'
}
```
**Quy tắc:**
- Luôn có **4 options** (1 đúng, 3 sai)
- **Chỉ có 1 đáp án đúng** (correct: true)
- **Hint** là bắt buộc (giúp người chơi khi mắc kẹt)

---

### **2. TIMELINE Challenge Format:**
```javascript
{
    events: [
        { id: 1, text: 'Sự kiện A', year: 1920, correctOrder: 0 },
        { id: 2, text: 'Sự kiện B', year: 1925, correctOrder: 1 },
        { id: 3, text: 'Sự kiện C', year: 1930, correctOrder: 2 }
    ]
}
```
**Quy tắc:**
- Luôn có **3 events** cần sắp xếp
- `correctOrder` bắt đầu từ 0 (0 = sớm nhất, 2 = muộn nhất)
- `year` (và optional `month`) để người chơi tham khảo

---

### **3. MAP Challenge Format:** ✨ NEW!
```javascript
{
    mapTitle: '🗺️ HÀNH TRÌNH CỦA BÁC (1911-1924)',
    mapType: 'world', // or 'china', 'south_china'
    requiredCorrect: 4, // Need 4/5 correct
    locations: [
        { id: 'vietnam', name: '🇻🇳 Việt Nam', x: 75, y: 65 },
        { id: 'france', name: '🇫🇷 Pháp', x: 30, y: 25 },
        // ... more locations
    ],
    questions: [
        {
            id: 1,
            question: 'Bác Hồ ra đi tìm đường cứu nước từ đâu năm 1911?',
            correctLocation: 'vietnam',
            points: 20
        },
        // ... 4 more questions
    ]
}
```
**Quy tắc:**
- **5 locations** trên map (pins có thể click)
- **5 questions** tuần tự
- **x, y** là % position trên map (0-100%)
- **requiredCorrect**: Usually 4 (need 4/5 đúng)
- **correctLocation** phải match với `id` của location

---

### **4. LEGACY CARDS Challenge Format:** ✨ NEW!
```javascript
{
    categories: [
        {
            id: 'tu_tuong',
            icon: '📚',
            name: 'Tư tưởng & Truyền thông',
            description: 'Các tác phẩm và hoạt động tuyên truyền'
        },
        // ... 2 more categories
    ],
    cards: [
        {
            id: 1,
            year: 1919,
            title: 'Bản yêu sách Versailles',
            description: 'Yêu cầu quyền tự do cho nhân dân An Nam',
            category: 'tu_tuong'
        },
        // ... 9 more cards
    ]
}
```
**Quy tắc:**
- **3 categories** cố định
- **10 cards** phân bố trong 3 categories
- **category** của card phải match với `id` của category
- Cards thường phân bố: 3-4-3 hoặc 3-3-4

---

## 🎯 **NỘI DUNG CÁC CHALLENGE**

### **QUIZ CHALLENGES**

#### **Challenge 1: quiz_ra_di_tim_duong_cuu_nuoc**
📍 **Location 1 - Paris 1917**

**5 câu hỏi:**
1. Nguyễn Tất Thành rời Việt Nam năm nào?
2. Bến Nhà Rồng thuộc thành phố nào?
3. Khi ra đi, Người bao nhiêu tuổi?
4. Tàu Người đi tên gì?
5. Mục đích ra đi là gì?

---

#### **Challenge 2: quiz_hoat_dong_tai_phap**
📍 **Location 2 - Versailles 1919**

**5 câu hỏi:**
1. Người ở Pháp từ năm nào đến năm nào?
2. Bản yêu sách có bao nhiêu điểm?
3. Gửi đến hội nghị nào?
4. Hội nghị Versailles diễn ra năm nào?
5. Yêu sách đòi quyền gì?

---

#### **Challenge 3: quiz_duong_kach_menh**
📍 **Location 7 - Quảng Châu 1927**

**5 câu hỏi:**
1. "Đường Kách mệnh" xuất bản năm nào?
2. Viết bằng ngôn ngữ nào?
3. Là tập hợp bài giảng ở đâu?
4. Nội dung chính là gì?
5. Ý nghĩa của cuốn sách?

---

### **TIMELINE CHALLENGES**

#### **Challenge 1: timeline_versailles_tours_thanhnien**
📍 **Location 3 - Tours 1920**

**3 sets, mỗi set 3 sự kiện:**

**Set 1:**
- Gửi bản yêu sách Versailles (1919)
- Đại hội Tours (1920)
- Thành lập Hội Thanh niên (1925)

**Set 2:**
- Hoạt động tại Pháp (1917)
- Đại hội Tours (1920)
- Báo Le Paria (1921)

**Set 3:**
- Bản yêu sách (1919)
- Đại hội Tours (1920)
- Người Cộng sản đầu tiên (1920)

---

#### **Challenge 2: timeline_ba_to_chuc_cong_san**
📍 **Location 6 - Quảng Châu 1925**

**3 sets về ba tổ chức cộng sản:**

**Set 1:**
- Đông Dương CS Đảng (6/1929)
- An Nam CS Đảng (8/1929)
- Đông Dương CS Liên đoàn (late 1929)

**Set 2:**
- Hội Thanh niên (1925)
- Đông Dương CS Đảng (1929)
- Hợp nhất (1930)

**Set 3:**
- "Đường Kách mệnh" (1927)
- Ba tổ chức ra đời (1929)
- Hội nghị hợp nhất (1930)

---

#### **Challenge 3: timeline_hoat_dong_cua_nguoi**
📍 **Location 9 - Hương Cảng 1929**

**3 sets về hoạt động của Người:**

**Set 1:**
- Ra đi (1911)
- Đại hội Tours (1920)
- Đảng ra đời (1930)

**Set 2:**
- Học tập tại Nga (1923)
- Thành lập Hội Thanh niên (1925)
- "Đường Kách mệnh" (1927)

**Set 3:**
- Hoạt động tại Pháp (1917)
- Tours (1920)
- Quảng Châu (1924)

---

### **MAP CHALLENGES** ✨ NEW!

#### **Challenge 1: map_asia_1920s**
📍 **Location 4 - Nga 1923-1924**
🗺️ **Map Type:** World Map

**5 locations:**
- 🇻🇳 Việt Nam (75%, 65%)
- 🇫🇷 Pháp (30%, 25%)
- 🇷🇺 Nga (55%, 15%)
- 🇨🇳 Trung Quốc (70%, 35%)
- 🇺🇸 Mỹ (10%, 30%)

**5 questions:**
1. Bác Hồ ra đi tìm đường cứu nước từ đâu năm 1911?
   → **Việt Nam**
2. Đại hội Tours 1920 diễn ra ở quốc gia nào?
   → **Pháp**
3. Bác Hồ đến học tập tại đây năm 1923-1924?
   → **Nga**
4. Hội Thanh niên được thành lập ở đâu năm 1925?
   → **Trung Quốc**
5. Bác Hồ viết "Bản án chế độ thực dân Pháp" khi sống ở đâu?
   → **Pháp**

**Pass condition:** 4/5 correct

---

#### **Challenge 2: map_china_1927**
📍 **Location 8 - Quảng Châu 1927**
🗺️ **Map Type:** China Regional Map

**5 locations:**
- 📍 Quảng Châu (35%, 70%)
- 📍 Thượng Hải (55%, 45%)
- 📍 Vũ Hán (45%, 50%)
- 📍 Bắc Kinh (50%, 25%)
- 📍 Hương Cảng (35%, 80%)

**5 questions:**
1. Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?
   → **Quảng Châu**
2. "Đường Kách mệnh" được viết và xuất bản tại đâu?
   → **Quảng Châu**
3. Thành phố cảng lớn nhất Trung Quốc, Bác từng hoạt động?
   → **Thượng Hải**
4. Lớp huấn luyện cán bộ cách mạng được mở ở đâu?
   → **Quảng Châu**
5. Thủ đô Trung Quốc, nơi có nhiều phong trào cách mạng?
   → **Bắc Kinh**

**Pass condition:** 4/5 correct

---

#### **Challenge 3: map_china_1930**
📍 **Location 10 - Hương Cảng 1930**
🗺️ **Map Type:** South China + Vietnam

**5 locations:**
- 📍 Hương Cảng (50%, 70%)
- 📍 Quảng Châu (40%, 50%)
- 📍 Hải Phòng (25%, 65%)
- 📍 Hà Nội (20%, 60%)
- 📍 Sài Gòn (30%, 85%)

**5 questions:**
1. Đảng Cộng sản Việt Nam ra đời ở đâu ngày 3/2/1930?
   → **Hương Cảng**
2. Hội nghị hợp nhất ba tổ chức CS diễn ra tại đâu?
   → **Hương Cảng**
3. Thành phố cảng quan trọng của miền Bắc Việt Nam?
   → **Hải Phòng**
4. Trung tâm phong trào cách mạng miền Nam năm 1930?
   → **Sài Gòn**
5. Lớp huấn luyện cán bộ trước đó được tổ chức ở đâu?
   → **Quảng Châu**

**Pass condition:** 4/5 correct

---

### **LEGACY CARDS CHALLENGE** ✨ NEW!

#### **Finale Challenge: legacy_cards_finale**
📍 **Location 11 - Ý nghĩa lịch sử**

**3 Categories:**

##### **1. 📚 Tư tưởng & Truyền thông** (3 cards)
- 1919: Bản yêu sách Versailles
- 1921: Báo Le Paria
- 1927: "Đường Kách mệnh"

##### **2. 🏛️ Tổ chức** (4 cards)
- 1925: Hội Việt Nam Cách mạng Thanh niên
- 1929: Ba tổ chức Cộng sản
- 1930: Hội nghị hợp nhất
- 1930: Đảng Cộng sản Việt Nam

##### **3. 🌍 Hoạt động Quốc tế** (3 cards)
- 1911: Ra đi tìm đường cứu nước
- 1917: Hoạt động tại Pháp
- 1920: Đại hội Tours

**Pass condition:** 8/10 correct (forgiving!)

---

## ➕ **CÁCH THÊM CÂU HỎI MỚI**

### **Thêm Quiz Question:**

**Bước 1:** Mở `questions.js`, tìm pool cần thêm
```javascript
quiz_ra_di_tim_duong_cuu_nuoc: [
    // ... existing questions
    {
        question: 'Câu hỏi mới?',
        options: [
            { text: 'Đáp án đúng', correct: true },
            { text: 'Đáp án sai 1', correct: false },
            { text: 'Đáp án sai 2', correct: false },
            { text: 'Đáp án sai 3', correct: false }
        ],
        hint: 'Gợi ý hữu ích'
    }
]
```

**Bước 2:** Save và test

---

### **Thêm Timeline Set:**

**Bước 1:** Mở `questions.js`, tìm pool cần thêm
```javascript
timeline_versailles_tours_thanhnien: [
    // ... existing sets
    {
        events: [
            { id: 1, text: 'Sự kiện A', year: 1920, correctOrder: 0 },
            { id: 2, text: 'Sự kiện B', year: 1925, correctOrder: 1 },
            { id: 3, text: 'Sự kiện C', year: 1930, correctOrder: 2 }
        ]
    }
]
```

**Bước 2:** Đảm bảo `correctOrder` đúng (0 = sớm nhất)

---

### **Thêm Map Question:**

**Chú ý:** Map challenges có cấu trúc khác, cần thêm cả location và question!

**Bước 1:** Thêm location pin (nếu chưa có)
```javascript
locations: [
    { id: 'new_location', name: '📍 Địa điểm mới', x: 50, y: 50 },
    // ... existing locations
]
```

**Bước 2:** Thêm question
```javascript
questions: [
    // ... existing questions
    {
        id: 6,
        question: 'Câu hỏi địa lý mới?',
        correctLocation: 'new_location',
        points: 20
    }
]
```

**Bước 3:** Cân nhắc tăng `requiredCorrect` nếu có > 5 questions

---

### **Thêm Legacy Card:**

**Bước 1:** Thêm category (nếu cần mới)
```javascript
categories: [
    {
        id: 'new_category',
        icon: '🎯',
        name: 'Category mới',
        description: 'Mô tả category'
    },
    // ... existing categories
]
```

**Bước 2:** Thêm card
```javascript
cards: [
    // ... existing cards
    {
        id: 11,
        year: 1930,
        title: 'Di sản mới',
        description: 'Mô tả ngắn gọn',
        category: 'new_category' // Phải match category id
    }
]
```

---

## 🔧 **SỬA ĐỔI CÂU HỎI CŨ**

### **Quiz/Timeline:**
1. Tìm câu hỏi trong array
2. Sửa `question`, `text`, hoặc `options`
3. Save và test

### **Map:**
1. Tìm question trong `questions` array
2. Sửa `question` hoặc `correctLocation`
3. **Nếu sửa location ID**, nhớ update `locations` array
4. Test trên map để đảm bảo pin đúng vị trí

### **Legacy Cards:**
1. Tìm card trong `cards` array
2. Sửa `title`, `description`, hoặc `category`
3. **Nếu đổi category**, đảm bảo category ID tồn tại
4. Test drag & drop

---

## 🗑️ **XÓA CÂU HỎI**

### **Quiz/Timeline:**
Xóa object {} trong array:

```javascript
// Before
[
    { question: 'Câu 1', ... },
    { question: 'Câu 2 - DELETE THIS', ... }, // ← Xóa
    { question: 'Câu 3', ... }
]

// After
[
    { question: 'Câu 1', ... },
    { question: 'Câu 3', ... }
]
```

### **Map:**
- **Xóa question:** Xóa object trong `questions`
- **Xóa location:** Xóa trong `locations` + xóa questions dùng location đó

### **Legacy Cards:**
- **Xóa card:** Xóa object trong `cards`
- **Xóa category:** Xóa trong `categories` + reassign cards sang category khác

---

## ⚠️ **LƯU Ý QUAN TRỌNG**

### **✅ NÊN:**

#### **Quiz:**
- Mỗi pool có **ít nhất 3-5 câu** cho đa dạng
- Hint phải hữu ích, không quá rõ ràng
- Đáp án sai phải hợp lý (không vô lý)

#### **Timeline:**
- Mỗi pool có **ít nhất 3 sets** cho random
- Events phải rõ ràng về thời gian
- Không chọn events quá gần nhau về năm (khó phân biệt)

#### **Map:**
- Pins phải **spread out** trên map (không chồng chéo)
- `x, y` % phải phù hợp với map background
- Questions phải liên quan đến địa lý
- Test click area (không quá nhỏ, không quá lớn)

#### **Legacy Cards:**
- 3 categories phải **mutually exclusive**
- Mỗi card chỉ thuộc **1 category**
- Phân bố cards: 3-4-3 hoặc tương đương (balanced)
- Description ngắn gọn (< 150 chars)

### **❌ KHÔNG NÊN:**

#### **Common:**
- Để array rỗng `[]` → Lỗi!
- Quên dấu phẩy giữa objects
- Câu hỏi quá dài (> 150 chars)
- Đáp án quá dài (> 100 chars)

#### **Map Specific:**
- Pins ở góc màn hình (khó click)
- `x, y` < 0 hoặc > 100 (out of bounds)
- 2 pins có position giống nhau
- Question không liên quan đến location

#### **Legacy Cards Specific:**
- Card có thể belong to 2 categories
- Category ID không match
- Quá nhiều cards trong 1 category (> 5)

---

## 📊 **THỐNG KÊ HIỆN TẠI**

### **Quiz Challenges:**
| Pool | Số câu | Location | Pass Points |
|------|--------|----------|-------------|
| **Ra đi tìm đường cứu nước** | 5 | 1 | 100 |
| **Hoạt động tại Pháp** | 5 | 2 | 100 |
| **Đường Kách mệnh** | 5 | 7 | 100 |
| **TỔNG QUIZ** | **15** | 3 locations | 300 |

### **Timeline Challenges:**
| Pool | Số sets | Location | Pass Points |
|------|---------|----------|-------------|
| **Versailles-Tours-Thanh niên** | 3 | 3 | 150 |
| **Ba tổ chức cộng sản** | 3 | 6 | 150 |
| **Hoạt động của Người** | 3 | 9 | 200 |
| **TỔNG TIMELINE** | **9 sets** | 3 locations | 500 |

### **Map Challenges:** ✨ NEW!
| Map | Type | Pins | Questions | Location | Points |
|-----|------|------|-----------|----------|--------|
| **Asia 1920s** | World | 5 | 5 | 4 | 150 |
| **China 1927** | Regional | 5 | 5 | 8 | 100 |
| **China 1930** | Local | 5 | 5 | 10 | 200 |
| **TỔNG MAP** | 3 maps | **15** | **15** | 3 locations | 450 |

### **Legacy Cards:** ✨ NEW!
| Challenge | Categories | Cards | Location | Points |
|-----------|------------|-------|----------|--------|
| **Finale** | 3 | 10 | 11 | 150 |

---

**GRAND TOTAL:**
- **Quiz:** 15 questions
- **Timeline:** 9 sets (27 events)
- **Map:** 15 questions (on 3 maps)
- **Legacy Cards:** 10 cards + 3 categories
- **TỔNG ITEMS:** 49 questions/sets/cards
- **MAX POINTS:** 1300

---

## 🔗 **FILES LIÊN QUAN**

### **1. questions.js** (This file)
- Quiz pools: Lines 10-70
- Timeline pools: Lines 80-200
- Map pools: Lines 210-380
- Legacy Cards: Lines 390-470

### **2. script.js** (Game engine)
- CHALLENGES config: Lines 7-43
- Quiz logic: Lines 420-480
- Timeline logic: Lines 510-620
- Map logic: Lines 630-765
- Legacy Cards logic: Lines 770-900

### **3. index.html** (UI)
- Quiz container: Lines 130-145
- Timeline container: Lines 150-165
- Map container: Lines 170-185
- Legacy container: Lines 190-210

### **4. styles.css** (Styling)
- Quiz styles: Lines 550-650
- Timeline styles: Lines 660-750
- Map styles: Lines 610-740
- Legacy styles: Lines 750-920

---

## 💡 **TIPS FOR CONTENT CREATORS**

### **Writing Quiz Questions:**
1. **Clear and concise:** One concept per question
2. **Historically accurate:** Verify dates and facts
3. **Appropriate difficulty:** Match location context
4. **Good distractors:** Wrong answers should be plausible
5. **Helpful hints:** Guide without giving away

### **Creating Timeline Sets:**
1. **Logical grouping:** Related events
2. **Clear differences:** Easy to distinguish by year
3. **Educational value:** Teach progression/causation
4. **Variety:** Mix different types of events

### **Designing Map Challenges:**
1. **Visual clarity:** Pins easy to see and click
2. **Geographic logic:** Questions about location
3. **Balanced difficulty:** Mix easy and hard
4. **Cultural sensitivity:** Respect historical context
5. **Testing:** Verify click hitboxes work

### **Building Legacy Cards:**
1. **Meaningful categories:** Distinct themes
2. **Balanced distribution:** ~3-4 cards each
3. **Clear descriptions:** Easy to categorize
4. **Historical significance:** Important legacies only
5. **Forgiveness:** 8/10 threshold allows learning

---

## 🎯 **BEST PRACTICES**

### **Before Adding Content:**
1. ✅ Research historical accuracy
2. ✅ Check existing questions for duplicates
3. ✅ Plan difficulty level
4. ✅ Write clear, concise text
5. ✅ Prepare hint/description

### **After Adding Content:**
1. ✅ Validate JSON syntax
2. ✅ Test in game (play through)
3. ✅ Check random selection works
4. ✅ Verify points/scoring
5. ✅ Get feedback from testers

### **Maintenance:**
1. 📅 Review questions quarterly
2. 🔄 Update based on player feedback
3. 📝 Document any changes
4. 🧪 Regression test after updates
5. 📊 Track question analytics (if available)

---

## 🚀 **QUICK REFERENCE**

### **File Locations:**
```bash
questions.js          # Edit this file
script.js             # Don't edit (game logic)
index.html            # Don't edit (UI structure)
styles.css            # Don't edit (styling)
```

### **Common Tasks:**

**Add Quiz Question:**
```javascript
// In quiz pool array
{
    question: '...',
    options: [
        { text: '...', correct: true },
        { text: '...', correct: false },
        { text: '...', correct: false },
        { text: '...', correct: false }
    ],
    hint: '...'
}
```

**Add Timeline Set:**
```javascript
// In timeline pool array
{
    events: [
        { id: 1, text: '...', year: XXXX, correctOrder: 0 },
        { id: 2, text: '...', year: YYYY, correctOrder: 1 },
        { id: 3, text: '...', year: ZZZZ, correctOrder: 2 }
    ]
}
```

**Add Map Question:**
```javascript
// In map.questions array
{
    id: X,
    question: '...',
    correctLocation: 'location_id',
    points: 20
}
```

**Add Legacy Card:**
```javascript
// In legacy_cards_finale.cards array
{
    id: X,
    year: XXXX,
    title: '...',
    description: '...',
    category: 'category_id'
}
```

---

## 📧 **SUPPORT**

**Questions? Issues?**
- Check this guide first
- Test in game
- Review examples in questions.js
- Ask dev team if stuck

**Contributing:**
- Follow format strictly
- Test thoroughly
- Document changes
- Submit for review

---

## 📝 **CHANGELOG**

**Version 4.0 (Current):**
- ✅ Added Map Challenge system (3 maps, 15 questions)
- ✅ Added Legacy Cards finale (10 cards, 3 categories)
- ❌ Removed Dice Challenge (replaced by Map)
- ❌ Removed Story Builder (replaced by Legacy Cards)
- ✅ Updated maxPoints: 1250 → 1300
- ✅ Improved documentation

**Version 3.0:**
- Added Question Bank system
- Added Dice Challenge
- Added Story Builder finale
- Random selection + shuffle

**Version 2.0:**
- Added Timeline Challenge
- Improved Quiz format
- Added Hint system

**Version 1.0:**
- Initial Quiz Challenge
- Basic question format

---

**💡 Remember:** Content is king! Good questions = Great gameplay!

**📚 Happy content creating!** 🎓✨

---

**Version:** 4.0  
**Last Updated:** December 2024  
**Maintained by:** Content Team
