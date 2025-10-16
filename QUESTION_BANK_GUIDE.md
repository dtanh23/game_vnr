# 📚 HƯỚNG DẪN NGÂN HÀNG CÂU HỎI

## 📖 **TỔNG QUAN**

File `questions.js` chứa **ngân hàng câu hỏi** phục vụ cho **TẤT CẢ CHALLENGES** trong game.

### **Cấu trúc:**
```
QUESTION_BANK
├── QUIZ CHALLENGES (4 pools)
│   ├── quiz_ra_di_tim_duong_cuu_nuoc: [5 câu]
│   ├── quiz_hoat_dong_tai_phap: [5 câu]
│   ├── quiz_duong_kach_menh: [5 câu]
│   └── quiz_dang_ra_doi: [5 câu]
├── TIMELINE CHALLENGES (3 pools)
│   ├── timeline_versailles_tours_thanhnien: [3 sets]
│   ├── timeline_ba_to_chuc_cong_san: [3 sets]
│   └── timeline_hoat_dong_cua_nguoi: [3 sets]
└── DICE CHALLENGES (3 pools)
    ├── tours_1920 (easy/medium/hard): [5+5+5 = 15 câu]
    ├── duong_kach_menh_1927 (easy/medium/hard): [5+5+5 = 15 câu]
    └── dang_ra_doi_1930 (easy/medium/hard): [5+5+5 = 15 câu]
```

**Tổng cộng:**
- **Quiz:** 20 câu (4 challenges × 5 câu)
- **Timeline:** 9 sets (3 challenges × 3 sets)
- **Dice:** 45 câu (3 challenges × 15 câu)
- **TỔNG:** 74 items

---

## 🎲 **CƠ CHẾ HOẠT ĐỘNG**

### **1. Tung xúc xắc → Độ khó:**
- **Tung 1-2** → Easy questions
- **Tung 3-4** → Medium questions  
- **Tung 5-6** → Hard questions

### **2. Random selection:**
Mỗi lần tung xúc xắc, game sẽ **random chọn 1 trong 5 câu** của mỗi độ khó.

**Ví dụ:**
- Lần 1: Tung 5 → Hard → Câu hỏi số 3
- Lần 2: Tung 5 → Hard → Câu hỏi số 1 (khác lần 1!)
- Lần 3: Tung 2 → Easy → Câu hỏi số 5

### **3. Shuffle đáp án:**
Thứ tự A/B/C/D được xáo trộn mỗi lần để tránh pattern.

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

### **3. DICE Challenge Format:**
```javascript
// Đã có sẵn, không thay đổi
easy: [
    {
        question: 'Câu hỏi dễ?',
        options: [
            { text: 'Đáp án đúng', correct: true },
            { text: 'Đáp án sai 1', correct: false },
            { text: 'Đáp án sai 2', correct: false }
        ]
    }
]
```
**Quy tắc:**
- **Easy:** 3 options (1 đúng, 2 sai)
- **Medium/Hard:** 4 options (1 đúng, 3 sai)
- **Chỉ có 1 đáp án đúng** (correct: true)

---

## 🎯 **NỘI DUNG CÁC CHALLENGE**

### **Challenge 1: tours_1920**
📍 **Chủ đề:** Đại hội Tours 1920 - Gia nhập Quốc tế Cộng sản

**Easy (5 câu):**
1. Đại hội Tours ở nước nào?
2. Tháng mấy năm 1920?
3. Nguyễn Ái Quốc đã làm gì?
4. Trở thành gì sau Đại hội?
5. Tours ở miền nào Pháp?

**Medium (5 câu):**
1. Quốc tế III là gì?
2. Đại hội thành lập tổ chức nào?
3. Người đọc tài liệu gì của Lenin?
4. Người là thành viên đảng nào?
5. Quốc tế CS thành lập năm nao?

**Hard (5 câu):**
1. Bao nhiêu điều kiện của Lênin?
2. Tỷ lệ phiếu tán thành?
3. Tên tổ chức Người thành lập?
4. Ai sáng lập Comintern?
5. Bút danh Người dùng sau Tours?

---

### **Challenge 2: duong_kach_menh_1927**
📍 **Chủ đề:** Đường Kách mệnh 1927 - Huấn luyện cán bộ

**Easy (5 câu):**
1. Xuất bản năm nào?
2. Tập hợp bài giảng ở đâu?
3. Quảng Châu thuộc nước nào?
4. Quảng Châu còn gọi là gì?
5. Người đến Quảng Châu năm nào?

**Medium (5 câu):**
1. Viết bằng ngôn ngữ nào?
2. Mở bao nhiêu khóa huấn luyện?
3. Tổ chức gì thành lập 1925?
4. Tạp chí tên gì?
5. Bút danh khi viết?

**Hard (5 câu):**
1. Tên đầy đủ lớp huấn luyện?
2. Bao nhiêu bài giảng?
3. Con đường cách mạng theo ai?
4. Bao nhiêu hội viên năm 1927?
5. Học viên tiêu biểu là ai?

---

### **Challenge 3: dang_ra_doi_1930**
📍 **Chủ đề:** Đảng Cộng sản Việt Nam ra đời 1930

**Easy (5 câu):**
1. Ra đời ngày nào?
2. 2025 là kỷ niệm bao nhiêu năm?
3. Thành lập tháng mấy?
4. Ai chủ trì Hội nghị?
5. Thế kỷ nào?

**Medium (5 câu):**
1. Thành lập ở đâu?
2. Địa điểm cụ thể?
3. Tên ban đầu?
4. Tháng 10/1930 đổi tên?
5. Hội nghị kéo dài bao lâu?

**Hard (5 câu):**
1. Hợp nhất 3 tổ chức nào?
2. Mục tiêu Cương lĩnh đầu tiên?
3. Tổng Bí thư đầu tiên?
4. Tại sao phải hợp nhất?
5. Văn kiện nào được thông qua?

---

## ➕ **CÁCH THÊM CÂU HỎI MỚI**

### **Bước 1: Mở file `questions.js`**

### **Bước 2: Chọn challenge + difficulty**
Ví dụ: Thêm câu Easy cho Challenge 1

### **Bước 3: Thêm object mới vào array**
```javascript
tours_1920: {
    easy: [
        // ... câu hỏi cũ ...
        {
            question: 'Câu hỏi mới của bạn?',
            options: [
                { text: 'Đáp án đúng', correct: true },
                { text: 'Đáp án sai 1', correct: false },
                { text: 'Đáp án sai 2', correct: false }
            ]
        }
    ]
}
```

### **Bước 4: Save và test**
Refresh game để test câu hỏi mới!

---

## 🔧 **SỬA ĐỔI CÂU HỎI CŨ**

### **Tìm câu hỏi:**
1. Mở `questions.js`
2. Tìm theo challenge (tours_1920, duong_kach_menh_1927, dang_ra_doi_1930)
3. Tìm theo difficulty (easy, medium, hard)
4. Tìm câu hỏi trong array

### **Sửa nội dung:**
```javascript
{
    question: 'Câu hỏi CŨ cần sửa?', // ← Sửa ở đây
    options: [
        { text: 'Đáp án đúng MỚI', correct: true }, // ← Hoặc ở đây
        { text: 'Đáp án sai', correct: false }
    ]
}
```

---

## 🗑️ **XÓA CÂU HỎI**

Chỉ cần xóa object {} trong array:

**Trước:**
```javascript
easy: [
    { question: 'Câu 1?', ... },
    { question: 'Câu 2 - XÓA CÂU NÀY', ... }, // ← Xóa
    { question: 'Câu 3?', ... }
]
```

**Sau:**
```javascript
easy: [
    { question: 'Câu 1?', ... },
    { question: 'Câu 3?', ... }
]
```

---

## ⚠️ **LƯU Ý QUAN TRỌNG**

### **✅ NÊN:**
- Mỗi difficulty nên có **ít nhất 3-5 câu** để đa dạng
- Câu Easy: đơn giản, phổ thông
- Câu Medium: cần tư duy, kiến thức sâu hơn
- Câu Hard: chi tiết, kiến thức chuyên sâu
- Đáp án sai phải hợp lý (không quá vô lý)

### **❌ KHÔNG NÊN:**
- Để array rỗng `easy: []` → Lỗi!
- Quên dấu phẩy giữa các object
- Có 2 đáp án đúng trong 1 câu
- Câu hỏi quá dài (> 150 ký tự)
- Đáp án quá dài (> 80 ký tự)

---

## 📊 **THỐNG KÊ HIỆN TẠI**

### **Quiz Challenges:**
| Challenge | Số câu hỏi | Locations |
|-----------|------------|-----------|
| **Ra đi tìm đường cứu nước** | 5 | Location 1 |
| **Hoạt động tại Pháp** | 5 | Location 2 |
| **Đường Kách mệnh** | 5 | Location 7 |
| **Đảng ra đời** | 5 | Location 10 |
| **TỔNG QUIZ** | **20** | 4 challenges |

### **Timeline Challenges:**
| Challenge | Số sets | Locations |
|-----------|---------|-----------|
| **Versailles-Tours-Thanh niên** | 3 | Location 2 |
| **Ba tổ chức cộng sản** | 3 | Location 5 |
| **Hoạt động của Người** | 3 | Location 8 |
| **TỔNG TIMELINE** | **9** | 3 challenges |

### **Dice Challenges:**
| Challenge | Easy | Medium | Hard | Tổng | Locations |
|-----------|------|--------|------|------|-----------|
| **Tours 1920** | 5 | 5 | 5 | **15** | Location 3 |
| **Đường Kách mệnh** | 5 | 5 | 5 | **15** | Location 6 |
| **Đảng ra đời** | 5 | 5 | 5 | **15** | Location 9 |
| **TỔNG DICE** | **15** | **15** | **15** | **45** | 3 challenges |

---

**TỔNG CẢ 3 LOẠI:** 74 items (20 quiz + 9 timeline sets + 45 dice)

---

## 🎯 **KẾT QUẢ**

### **Trước (Version cũ):**
- ❌ **Quiz:** 4 câu cố định → Chơi lại thấy y chang
- ❌ **Timeline:** 3 sets cố định → Nhớ thứ tự
- ❌ **Dice:** 9 câu cố định → Đoán được pattern
- ❌ Thiếu đa dạng, dễ nhàm chán

### **Sau (Version mới):**
- ✅ **Quiz:** 20 câu (5 câu/challenge) → Mỗi lần khác nhau
- ✅ **Timeline:** 9 sets (3 sets/challenge) → Random thứ tự
- ✅ **Dice:** 45 câu (15 câu/challenge) → Phong phú
- ✅ **Shuffle đáp án:** A/B/C/D random mỗi lần
- ✅ **Random selection:** Không bao giờ thấy 2 lần giống nhau
- ✅ **Dễ quản lý:** Tách file riêng, dễ thêm/sửa/xóa
- ✅ **Scalable:** Dễ mở rộng thêm challenges mới
- ✅ **Clean code:** Tách data khỏi logic

---

## 🔗 **FILES LIÊN QUAN**

1. **questions.js** - Ngân hàng câu hỏi (file này) - 74 items
2. **script.js** - Logic game:
   - Dòng 7-43: CHALLENGES configs (questionPool keys)
   - Dòng 417-457: Quiz logic (showQuizChallenge, checkQuizAnswer)
   - Dòng 500-619: Timeline logic (showTimelineChallenge, checkTimelineOrder)
   - Dòng 627-746: Dice logic (showDiceChallenge, rollDice, checkDiceAnswer)
3. **index.html** - Load questions.js trước script.js (dòng 245)

---

**💡 TIP:** Nên tạo backup file `questions.js` trước khi chỉnh sửa nhiều!

**📧 Có thắc mắc?** Tham khảo code trong `script.js` function `showDiceQuestion()`
