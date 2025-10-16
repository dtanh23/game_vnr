# 📖 STORY BUILDER CHALLENGE - FINALE GUIDE

## 🎯 **TỔNG QUAN**

**Story Builder Challenge** là challenge đặc biệt dành cho **Location 10 - Ý nghĩa lịch sử**, thay thế Quiz thường để tạo trải nghiệm finale độc đáo và ý nghĩa.

---

## 🎮 **GAMEPLAY**

### **Mục tiêu:**
Sắp xếp **10 đoạn câu chuyện** theo đúng thứ tự thời gian (1911 → 1930) để hoàn thành hành trình của Bác Hồ.

### **Cơ chế:**
1. **10 đoạn văn** được xáo trộn ngẫu nhiên
2. **Kéo thả (Drag & Drop)** để sắp xếp thứ tự
3. **Năm hiển thị** ở góc mỗi đoạn để tham khảo
4. **Click "✅ KIỂM TRA THỨ TỰ"** để xác nhận
5. **Đúng 100%** → Hoàn thành hành trình!

---

## 📚 **10 ĐOẠN CÂU CHUYỆN**

### **Đoạn 1: Ra đi tìm đường cứu nước (1911)**
> "Ngày 5/6/1911, thanh niên Nguyễn Tất Thành 21 tuổi từ Bến Nhà Rồng lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước. Đây là bước ngoặt quan trọng trong cuộc đời Người."

### **Đoạn 2: Hoạt động tại Pháp (1917)**
> "Từ 1917-1923, Người sinh sống tại Pháp, tham gia phong trào công nhân và các tổ chức chính trị tiến bộ. Người viết báo, tuyên truyền lên án chế độ thực dân."

### **Đoạn 3: Bản yêu sách Versailles (1919)**
> "Tháng 6/1919, Nguyễn Ái Quốc gửi 'Bản yêu sách 8 điểm' đến Hội nghị Versailles, yêu cầu quyền tự do dân chủ cho nhân dân các nước thuộc địa."

### **Đoạn 4: Gia nhập Quốc tế Cộng sản (1920)**
> "Tháng 12/1920, tại Đại hội Tours (Pháp), Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản, trở thành người Cộng sản Việt Nam đầu tiên."

### **Đoạn 5: Sáng lập báo Le Paria (1921)**
> "Năm 1921-1923, Người sáng lập và viết cho tờ báo Le Paria (Người cùng khổ), lên án tội ác thực dân và kêu gọi đoàn kết nhân dân thuộc địa đấu tranh."

### **Đoạn 6: Thành lập Hội Thanh niên (1925)**
> "Tháng 6/1925, tại Quảng Châu (Trung Quốc), Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên - tổ chức cách mạng đầu tiên của Việt Nam."

### **Đoạn 7: Xuất bản "Đường Kách mệnh" (1927)**
> "Năm 1927, Người xuất bản cuốn 'Đường Kách mệnh' - tập hợp bài giảng tại lớp huấn luyện cán bộ, chỉ rõ con đường giải phóng dân tộc theo chủ nghĩa xã hội."

### **Đoạn 8: Ba tổ chức Cộng sản ra đời (1929)**
> "Năm 1929, phong trào 'vô sản hóa' nở rộ. Ba tổ chức cộng sản lần lượt ra đời: Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn."

### **Đoạn 9: Hội nghị hợp nhất (1930)**
> "Tháng 1-2/1930, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất ba tổ chức cộng sản tại Cửu Long, Hương Cảng, chuẩn bị cho sự ra đời của Đảng thống nhất."

### **Đoạn 10: Đảng Cộng sản Việt Nam ra đời (2/1930)**
> "Ngày 3/2/1930, Đảng Cộng sản Việt Nam chính thức ra đời tại Hương Cảng. Đây là bước ngoặt vĩ đại, mở ra kỷ nguyên mới cho cách mạng Việt Nam."

---

## 🎨 **UI/UX DESIGN**

### **Story Segment Card:**
```
┌─────────────────────────────────────────────────┐
│ [1911] │ Ra đi tìm đường cứu nước              │
│        │                                        │
│        │ Ngày 5/6/1911, thanh niên...          │
│        │ ...đường cứu nước.                    │
└─────────────────────────────────────────────────┘
   ↑           ↑                  ↑
 Year Badge   Title            Text Content
```

### **Features:**
- **Year Badge:** Vàng nổi bật ở góc trái
- **Title:** Đỏ, Press Start 2P font
- **Text:** VT323 font, dễ đọc
- **Hover Effect:** Lift up + border đỏ
- **Drag Effect:** Opacity 0.5 + rotate 2deg

---

## 💻 **TECHNICAL DETAILS**

### **Files Modified:**

#### **1. questions.js**
```javascript
story_builder_finale: [
    {
        id: 1,
        year: 1911,
        title: 'Ra đi tìm đường cứu nước',
        text: '...',
        correctOrder: 0
    },
    // ... 9 segments more
]
```

#### **2. script.js**
- **CHALLENGES:** Added `story_builder_finale: { type: 'story', ... }`
- **Location 10:** Changed from `quiz_4` → `story_builder_finale`
- **Points:** 100 → 150 (finale bonus!)
- **maxPoints:** 1250 → 1300
- **Functions:**
  - `showStoryChallenge()` - Display 10 shuffled segments
  - `checkStoryOrder()` - Validate order
  - Drag & Drop logic (reuse from Timeline)

#### **3. index.html**
- Added `<div id="story-challenge">` container
- Story segments area with drag & drop
- Check order button

#### **4. styles.css**
- ~110 lines Story Builder CSS
- Segment cards, year badges, title, text
- Hover, dragging, feedback animations
- Mobile responsive styles

---

## 🎯 **WHY STORY BUILDER?**

### **Ưu điểm so với Quiz thường:**
- ✅ **Tổng kết toàn bộ:** Review 10 locations cùng lúc
- ✅ **Narrative-driven:** Xây dựng câu chuyện có ý nghĩa
- ✅ **Educational:** Test hiểu biết tổng thể về timeline
- ✅ **Emotional impact:** Cảm giác hoàn thành hành trình
- ✅ **Unique finale:** Khác biệt so với 9 challenges trước
- ✅ **Replayability:** Thứ tự xáo trộn mỗi lần

### **Gameplay khác biệt:**
- **Quiz:** 1 câu hỏi → Chọn đáp án → Xong
- **Story Builder:** 10 đoạn → Sắp xếp → Review toàn bộ → Hoàn thành journey

---

## 📊 **SCORING**

| Aspect | Value |
|--------|-------|
| **Location Points** | 150 (cao nhất!) |
| **Skip Penalty** | 50% (75 điểm) |
| **Correct Order** | Required 100% |
| **Feedback Delay** | 2.5s (dài hơn để celebrate) |

---

## 🎮 **USER FLOW**

```
1. Click Location 10
   ↓
2. "📖 XÂY DỰNG CÂU CHUYỆN HOÀN CHỈNH!" modal
   ↓
3. 10 đoạn văn xáo trộn hiển thị
   ↓
4. Kéo thả để sắp xếp theo năm
   ↓
5. Click "✅ KIỂM TRA THỨ TỰ"
   ↓
6a. ✅ Đúng → "🎉 HOÀN HẢO! Hành trình hoàn thành!"
   ↓
   Unlock story + 150 điểm + Victory!
   
6b. ❌ Sai → "Thứ tự chưa đúng! Sắp xếp lại..."
   ↓
   Thử lại
```

---

## 🔥 **SUCCESS MESSAGE**

**When correct:**
> "🎉 HOÀN HẢO! Bạn đã xây dựng câu chuyện đúng thứ tự! Hành trình của Bác Hồ đã hoàn thành!"

**When incorrect:**
> "❌ Thứ tự chưa đúng! Hãy sắp xếp lại theo dòng thời gian 1911 → 1930. Chú ý năm ở góc mỗi đoạn!"

---

## 📱 **MOBILE SUPPORT**

- ✅ Touch drag & drop works
- ✅ Smaller fonts for mobile
- ✅ Adjusted padding & spacing
- ✅ Year badge smaller (0.8rem)
- ✅ Text readable on small screens

---

## 🎬 **VISUAL EFFECTS**

### **Animations:**
- **Segment Hover:** Lift up 2px + shadow increase
- **Dragging:** Opacity 0.5 + rotate 2deg
- **Success Feedback:** Scale pulse (1 → 1.05 → 1)

### **Colors:**
- **Year Badge:** Gold (#FFC107) background
- **Title:** Red (#DA291C)
- **Text:** Dark (#2C1810)
- **Border:** Dark (#2C1810) 3px solid

---

## 💡 **TIPS FOR PLAYERS**

1. **Nhìn năm trước:** Year badge ở góc trái
2. **Sắp xếp từ trên xuống:** 1911 → 1930
3. **Đọc nội dung:** Hiểu logic timeline
4. **Kéo thả dễ dàng:** Drag & drop mượt mà
5. **Thử nhiều lần:** Không bị phạt điểm khi sai

---

## 🏆 **ACHIEVEMENTS UNLOCKED**

Khi hoàn thành Story Builder:
- ✅ Location 10 visited
- ✅ +150 points (highest!)
- ✅ Achievement "Người học trò xuất sắc" (1000 points)
- ✅ **VICTORY SCREEN** appears!

---

## 🔗 **RELATED FILES**

- **questions.js:** Line 299-374 (story_builder_finale data)
- **script.js:** Line 757-874 (Story Builder logic)
- **index.html:** Line 203-216 (Story Challenge HTML)
- **styles.css:** Line 752-860 (Story Builder CSS)

---

## ✨ **FINALE EXPERIENCE**

Story Builder không chỉ là một challenge, mà là **trải nghiệm tổng kết** toàn bộ hành trình:

- 🗺️ **Review 10 locations** trong 1 challenge
- 📖 **Xây dựng narrative** hoàn chỉnh
- 🎓 **Test kiến thức tổng thể** về timeline
- 🏆 **Cảm giác hoàn thành** ý nghĩa
- 🎉 **Victory screen** xuất hiện ngay sau

**"Từ Bến Nhà Rồng 1911 đến Hương Cảng 1930 - Hành trình 19 năm tìm đường cứu nước đã hoàn thành!"** 🇻🇳✨
