// ===========================================
// NGÂN HÀNG CÂU HỎI CHO TẤT CẢ CHALLENGES
// ===========================================

const QUESTION_BANK = {
    // ===========================================
    // QUIZ CHALLENGES - Multiple Choice Questions
    // ===========================================
    
    quiz_ra_di_tim_duong_cuu_nuoc: [
        {
            question: 'Ngày 5/6/1911, Nguyễn Tất Thành xuất phát từ đâu để tìm đường cứu nước?',
            options: [
                { text: 'Bến Nhà Rồng, Sài Gòn', correct: true },
                { text: 'Cảng Hải Phòng', correct: false },
                { text: 'Đà Nẵng', correct: false },
                { text: 'Vũng Tàu', correct: false }
            ],
            hint: 'Địa điểm này nay là một bảo tàng nổi tiếng ở TP.HCM'
        },
        {
            question: 'Nguyễn Tất Thành lên con tàu nào để ra đi tìm đường cứu nước?',
            options: [
                { text: 'Tàu Amiral Latouche-Tréville', correct: true },
                { text: 'Tàu Đô đốc Charner', correct: false },
                { text: 'Tàu Thống đốc Montcalm', correct: false },
                { text: 'Tàu Đô đốc Duperré', correct: false }
            ],
            hint: 'Tên tàu mang tên một đô đốc hải quân Pháp'
        },
        {
            question: 'Khi lên đường, Nguyễn Tất Thành bao nhiêu tuổi?',
            options: [
                { text: '21 tuổi', correct: true },
                { text: '19 tuổi', correct: false },
                { text: '23 tuổi', correct: false },
                { text: '25 tuổi', correct: false }
            ],
            hint: 'Sinh năm 1890, ra đi năm 1911'
        },
        {
            question: 'Người đi tìm đường cứu nước với vai trò gì trên tàu?',
            options: [
                { text: 'Phụ bếp (Boy de cuisine)', correct: true },
                { text: 'Thủy thủ', correct: false },
                { text: 'Hành khách', correct: false },
                { text: 'Người giúp việc', correct: false }
            ],
            hint: 'Công việc trong bếp tàu'
        },
        {
            question: 'Người rời Tổ quốc trong bao nhiêu năm trước khi trở về?',
            options: [
                { text: '30 năm (1911-1941)', correct: true },
                { text: '25 năm', correct: false },
                { text: '35 năm', correct: false },
                { text: '20 năm', correct: false }
            ],
            hint: 'Trở về năm 1941 khi thành lập Việt Minh'
        }
    ],

    quiz_hoat_dong_tai_phap: [
        {
            question: 'Năm 1921-1923, Nguyễn Ái Quốc sáng lập tờ báo nào?',
            options: [
                { text: 'Le Paria (Người cùng khổ)', correct: true },
                { text: 'L\'Humanité', correct: false },
                { text: 'Le Monde', correct: false },
                { text: 'La Voix', correct: false }
            ],
            hint: 'Tên báo có nghĩa là "Người cùng khổ"'
        },
        {
            question: 'Tờ báo Le Paria được viết bằng ngôn ngữ nào?',
            options: [
                { text: 'Tiếng Pháp', correct: true },
                { text: 'Tiếng Việt', correct: false },
                { text: 'Tiếng Anh', correct: false },
                { text: 'Tiếng Trung', correct: false }
            ],
            hint: 'Ngôn ngữ của nước Pháp'
        },
        {
            question: 'Năm 1920, Người tham gia Đảng nào tại Pháp?',
            options: [
                { text: 'Đảng Xã hội Pháp', correct: true },
                { text: 'Đảng Cộng sản Pháp', correct: false },
                { text: 'Đảng Lao động Pháp', correct: false },
                { text: 'Đảng Cách mạng Pháp', correct: false }
            ],
            hint: 'Đảng này sau đó sẽ tách thành ĐCSPN'
        },
        {
            question: 'Tác phẩm "Bản án chế độ thực dân Pháp" được viết năm nào?',
            options: [
                { text: '1925', correct: true },
                { text: '1920', correct: false },
                { text: '1923', correct: false },
                { text: '1927', correct: false }
            ],
            hint: 'Cùng năm thành lập Hội Thanh niên'
        },
        {
            question: 'Người hoạt động tại Pháp trong khoảng thời gian nào?',
            options: [
                { text: '1917-1923', correct: true },
                { text: '1911-1917', correct: false },
                { text: '1923-1930', correct: false },
                { text: '1915-1920', correct: false }
            ],
            hint: 'Từ sau WWI đến trước khi sang Nga'
        }
    ],

    quiz_duong_kach_menh: [
        {
            question: 'Cuốn sách "Đường Kách mệnh" được xuất bản năm nào?',
            options: [
                { text: '1927', correct: true },
                { text: '1925', correct: false },
                { text: '1926', correct: false },
                { text: '1928', correct: false }
            ],
            hint: 'Sau khi thành lập Hội Việt Nam Cách mạng Thanh niên 2 năm'
        },
        {
            question: '"Đường Kách mệnh" gồm bao nhiêu bài?',
            options: [
                { text: '8 bài', correct: true },
                { text: '5 bài', correct: false },
                { text: '10 bài', correct: false },
                { text: '12 bài', correct: false }
            ],
            hint: 'Từ "Cách mạng" đến "Tổ chức"'
        },
        {
            question: 'Nội dung chính của "Đường Kách mệnh" là gì?',
            options: [
                { text: 'Con đường giải phóng dân tộc theo CNXH', correct: true },
                { text: 'Lịch sử phong trào công nhân', correct: false },
                { text: 'Chiến lược quân sự', correct: false },
                { text: 'Kinh tế chính trị học', correct: false }
            ],
            hint: 'Chỉ rõ con đường cách mạng của VN'
        },
        {
            question: 'Nguyễn Ái Quốc viết "Đường Kách mệnh" khi ở vai trò gì?',
            options: [
                { text: 'Giáo viên lớp huấn luyện cán bộ', correct: true },
                { text: 'Ủy viên Quốc tế Cộng sản', correct: false },
                { text: 'Chủ tịch Hội Thanh niên', correct: false },
                { text: 'Tổng Bí thư Đảng', correct: false }
            ],
            hint: 'Đang dạy học cho cán bộ trẻ'
        }
    ],

    quiz_dang_ra_doi: [
        {
            question: 'Đảng Cộng sản Việt Nam được thành lập tại đâu?',
            options: [
                { text: 'Cửu Long, Hương Cảng (Hong Kong)', correct: true },
                { text: 'Paris, Pháp', correct: false },
                { text: 'Quảng Châu, Trung Quốc', correct: false },
                { text: 'Hà Nội, Việt Nam', correct: false }
            ],
            hint: 'Tại một đặc khu hành chính của Trung Quốc'
        },
        {
            question: 'Đảng ra đời vào ngày nào?',
            options: [
                { text: '3/2/1930', correct: true },
                { text: '19/5/1890', correct: false },
                { text: '2/9/1945', correct: false },
                { text: '30/4/1975', correct: false }
            ],
            hint: 'Tháng 2 năm 1930'
        },
        {
            question: 'Có bao nhiêu tổ chức cộng sản được hợp nhất?',
            options: [
                { text: '3 tổ chức', correct: true },
                { text: '2 tổ chức', correct: false },
                { text: '4 tổ chức', correct: false },
                { text: '5 tổ chức', correct: false }
            ],
            hint: 'Đông Dương + An Nam + Liên đoàn'
        },
        {
            question: 'Ai chủ trì Hội nghị thành lập Đảng?',
            options: [
                { text: 'Nguyễn Ái Quốc', correct: true },
                { text: 'Trần Phú', correct: false },
                { text: 'Lê Hồng Phong', correct: false },
                { text: 'Tôn Đức Thắng', correct: false }
            ],
            hint: 'Người sáng lập Hội Thanh niên'
        },
        {
            question: 'Tháng 10/1930, Đảng đổi tên thành gì?',
            options: [
                { text: 'Đảng Cộng sản Đông Dương', correct: true },
                { text: 'Đảng Lao động Việt Nam', correct: false },
                { text: 'Đảng Nhân dân Cách mạng', correct: false },
                { text: 'Đảng Cộng sản Việt Nam', correct: false }
            ],
            hint: 'Theo chỉ thị của Quốc tế CS'
        }
    ],

    // ===========================================
    // TIMELINE CHALLENGES - Chronological Events
    // ===========================================
    
    timeline_versailles_tours_thanhnien: [
        {
            events: [
                { id: 1, text: 'Đại hội Tours - Gia nhập Quốc tế CS', year: 1920, correctOrder: 1 },
                { id: 2, text: 'Gửi Bản yêu sách Versailles', year: 1919, correctOrder: 0 },
                { id: 3, text: 'Sáng lập Hội VN Cách mạng Thanh niên', year: 1925, correctOrder: 2 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Xuất bản "Đường Kách mệnh"', year: 1927, correctOrder: 2 },
                { id: 2, text: 'Sáng lập báo Le Paria', year: 1921, correctOrder: 0 },
                { id: 3, text: 'Thành lập Hội Thanh niên', year: 1925, correctOrder: 1 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Ra đi tìm đường cứu nước', year: 1911, correctOrder: 0 },
                { id: 2, text: 'Tham dự Hội nghị Versailles', year: 1919, correctOrder: 1 },
                { id: 3, text: 'Sang Liên Xô học tập', year: 1923, correctOrder: 2 }
            ]
        }
    ],

    timeline_ba_to_chuc_cong_san: [
        {
            events: [
                { id: 1, text: 'Đông Dương Cộng sản Liên đoàn', year: 1929, month: 12, correctOrder: 2 },
                { id: 2, text: 'Đông Dương Cộng sản Đảng', year: 1929, month: 6, correctOrder: 0 },
                { id: 3, text: 'An Nam Cộng sản Đảng', year: 1929, month: 8, correctOrder: 1 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Hội nghị hợp nhất 3 tổ chức', year: 1930, month: 2, correctOrder: 2 },
                { id: 2, text: 'An Nam Cộng sản Đảng ra đời', year: 1929, month: 8, correctOrder: 1 },
                { id: 3, text: 'Đông Dương CS Đảng thành lập', year: 1929, month: 6, correctOrder: 0 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Đảng đổi tên thành ĐCS Đông Dương', year: 1930, month: 10, correctOrder: 2 },
                { id: 2, text: 'Đảng Cộng sản Việt Nam ra đời', year: 1930, month: 2, correctOrder: 1 },
                { id: 3, text: 'Hội Thanh niên phân hóa', year: 1929, correctOrder: 0 }
            ]
        }
    ],

    timeline_hoat_dong_cua_nguoi: [
        {
            events: [
                { id: 1, text: 'Hoạt động tại Pháp', year: 1917, correctOrder: 0 },
                { id: 2, text: 'Xuất bản "Đường Kách mệnh"', year: 1927, correctOrder: 2 },
                { id: 3, text: 'Sáng lập báo Le Paria', year: 1921, correctOrder: 1 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Thành lập Hội Thanh niên', year: 1925, correctOrder: 1 },
                { id: 2, text: 'Gia nhập Quốc tế CS', year: 1920, correctOrder: 0 },
                { id: 3, text: 'Chủ trì Hội nghị hợp nhất', year: 1930, correctOrder: 2 }
            ]
        },
        {
            events: [
                { id: 1, text: 'Học tại Đại học Phương Đông', year: 1923, correctOrder: 0 },
                { id: 2, text: 'Mở lớp huấn luyện ở Quảng Châu', year: 1925, correctOrder: 1 },
                { id: 3, text: 'Chủ trì thành lập Đảng CSVN', year: 1930, correctOrder: 2 }
            ]
        }
    ],

    // ===========================================
    // LEGACY CARDS CHALLENGE - Final Recap
    // ===========================================
    
    legacy_cards_finale: {
        categories: [
            { id: 'thought', name: 'Tư tưởng & Truyền thông', icon: '📚', description: 'Tác phẩm, bài viết, tuyên truyền' },
            { id: 'organization', name: 'Tổ chức', icon: '🏛️', description: 'Thành lập, xây dựng tổ chức cách mạng' },
            { id: 'international', name: 'Hoạt động Quốc tế', icon: '🌍', description: 'Học tập, làm việc tại nước ngoài' }
        ],
        cards: [
            {
                id: 1,
                year: 1911,
                title: 'Ra đi tìm đường cứu nước',
                description: 'Rời Tổ quốc, lên tàu từ Bến Nhà Rồng đi tìm đường giải phóng dân tộc',
                category: 'international'
            },
            {
                id: 2,
                year: 1917,
                title: 'Hoạt động tại Pháp',
                description: 'Tham gia phong trào công nhân, tổ chức chính trị tiến bộ tại Paris',
                category: 'international'
            },
            {
                id: 3,
                year: 1919,
                title: 'Bản yêu sách Versailles',
                description: 'Gửi bản yêu sách 8 điểm đến Hội nghị, đòi quyền dân tộc tự quyết',
                category: 'thought'
            },
            {
                id: 4,
                year: 1920,
                title: 'Đại hội Tours - Quốc tế CS',
                description: 'Gia nhập Quốc tế Cộng sản, trở thành người CS Việt Nam đầu tiên',
                category: 'international'
            },
            {
                id: 5,
                year: 1921,
                title: 'Báo Le Paria',
                description: 'Sáng lập báo "Người cùng khổ", lên án chế độ thực dân',
                category: 'thought'
            },
            {
                id: 6,
                year: 1925,
                title: 'Hội Việt Nam Cách mạng Thanh niên',
                description: 'Thành lập tổ chức cách mạng đầu tiên của Việt Nam tại Quảng Châu',
                category: 'organization'
            },
            {
                id: 7,
                year: 1927,
                title: '"Đường Kách mệnh"',
                description: 'Xuất bản tác phẩm chỉ rõ con đường cách mạng vô sản',
                category: 'thought'
            },
            {
                id: 8,
                year: 1929,
                title: 'Ba tổ chức Cộng sản',
                description: 'Đông Dương CS Đảng, An Nam CS Đảng, ĐD CS Liên đoàn ra đời',
                category: 'organization'
            },
            {
                id: 9,
                year: 1930,
                title: 'Hội nghị hợp nhất',
                description: 'Chủ trì hợp nhất ba tổ chức thành Đảng thống nhất',
                category: 'organization'
            },
            {
                id: 10,
                year: 1930,
                month: 2,
                title: 'Đảng Cộng sản Việt Nam',
                description: 'Đảng chính thức ra đời ngày 3/2/1930 tại Hương Cảng',
                category: 'organization'
            }
        ]
    },

    // ===========================================
    // MAP CHALLENGES - Interactive Geography Quiz
    // ===========================================
    
    // Map Challenge 1: Hành trình đến Nga (1923-1924)
    map_asia_1920s: {
        mapTitle: '🗺️ HÀNH TRÌNH CỦA BÁC (1911-1924)',
        mapType: 'world',
        requiredCorrect: 4, // Need 4/5 correct
        locations: [
            { id: 'vietnam', name: '🇻🇳 Việt Nam', x: 75, y: 65 },
            { id: 'france', name: '🇫🇷 Pháp', x: 30, y: 25 },
            { id: 'russia', name: '🇷🇺 Nga (Liên Xô)', x: 55, y: 15 },
            { id: 'china', name: '🇨🇳 Trung Quốc', x: 70, y: 35 },
            { id: 'usa', name: '🇺🇸 Mỹ', x: 10, y: 30 }
        ],
        questions: [
            {
                id: 1,
                question: 'Bác Hồ ra đi tìm đường cứu nước từ đâu năm 1911?',
                correctLocation: 'vietnam',
                points: 20
            },
            {
                id: 2,
                question: 'Đại hội Tours 1920 diễn ra ở quốc gia nào?',
                correctLocation: 'france',
                points: 20
            },
            {
                id: 3,
                question: 'Bác Hồ đến học tập tại đây năm 1923-1924?',
                correctLocation: 'russia',
                points: 20
            },
            {
                id: 4,
                question: 'Hội Thanh niên được thành lập ở đâu năm 1925?',
                correctLocation: 'china',
                points: 20
            },
            {
                id: 5,
                question: 'Bác Hồ viết "Bản án chế độ thực dân Pháp" khi sống ở đâu?',
                correctLocation: 'france',
                points: 20
            }
        ]
    },
    
    // Map Challenge 2: Trung Quốc 1927
    map_china_1927: {
        mapTitle: '🗺️ HOẠT ĐỘNG TẠI TRUNG QUỐC (1925-1927)',
        mapType: 'china',
        requiredCorrect: 4,
        locations: [
            { id: 'guangzhou', name: '📍 Quảng Châu', x: 35, y: 70 },
            { id: 'shanghai', name: '📍 Thượng Hải', x: 55, y: 45 },
            { id: 'wuhan', name: '📍 Vũ Hán', x: 45, y: 50 },
            { id: 'beijing', name: '📍 Bắc Kinh', x: 50, y: 25 },
            { id: 'hongkong', name: '📍 Hương Cảng', x: 35, y: 80 }
        ],
        questions: [
            {
                id: 1,
                question: 'Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?',
                correctLocation: 'guangzhou',
                points: 20
            },
            {
                id: 2,
                question: '"Đường Kách mệnh" được viết và xuất bản tại đâu?',
                correctLocation: 'guangzhou',
                points: 20
            },
            {
                id: 3,
                question: 'Thành phố cảng lớn nhất Trung Quốc, Bác từng hoạt động?',
                correctLocation: 'shanghai',
                points: 20
            },
            {
                id: 4,
                question: 'Lớp huấn luyện cán bộ cách mạng được mở ở đâu?',
                correctLocation: 'guangzhou',
                points: 20
            },
            {
                id: 5,
                question: 'Thủ đô Trung Quốc, nơi có nhiều phong trào cách mạng?',
                correctLocation: 'beijing',
                points: 20
            }
        ]
    },
    
    // Map Challenge 3: Hội nghị hợp nhất 1930
    map_china_1930: {
        mapTitle: '🗺️ SỰ RA ĐỜI CỦA ĐẢNG (1929-1930)',
        mapType: 'south_china',
        requiredCorrect: 4,
        locations: [
            { id: 'hongkong', name: '📍 Hương Cảng', x: 50, y: 70 },
            { id: 'guangzhou', name: '📍 Quảng Châu', x: 40, y: 50 },
            { id: 'haiphong', name: '📍 Hải Phòng', x: 25, y: 65 },
            { id: 'hanoi', name: '📍 Hà Nội', x: 20, y: 60 },
            { id: 'saigon', name: '📍 Sài Gòn', x: 30, y: 85 }
        ],
        questions: [
            {
                id: 1,
                question: 'Đảng Cộng sản Việt Nam ra đời ở đâu ngày 3/2/1930?',
                correctLocation: 'hongkong',
                points: 20
            },
            {
                id: 2,
                question: 'Hội nghị hợp nhất ba tổ chức CS diễn ra tại đâu?',
                correctLocation: 'hongkong',
                points: 20
            },
            {
                id: 3,
                question: 'Thành phố cảng quan trọng của miền Bắc Việt Nam?',
                correctLocation: 'haiphong',
                points: 20
            },
            {
                id: 4,
                question: 'Trung tâm phong trào cách mạng miền Nam năm 1930?',
                correctLocation: 'saigon',
                points: 20
            },
            {
                id: 5,
                question: 'Lớp huấn luyện cán bộ trước đó được tổ chức ở đâu?',
                correctLocation: 'guangzhou',
                points: 20
            }
        ]
    },
    
    // ===========================================
    // [DEPRECATED] DICE CHALLENGES - Will be removed
    // ===========================================
    // Challenge 1: Tours 1920 - Gia nhập Quốc tế Cộng sản
    tours_1920: {
        easy: [
            {
                question: 'Năm 1920, Đại hội Tours diễn ra ở nước nào?',
                options: [
                    { text: 'Pháp', correct: true },
                    { text: 'Nga', correct: false },
                    { text: 'Đức', correct: false }
                ]
            },
            {
                question: 'Nguyễn Ái Quốc tham dự Đại hội Tours vào tháng mấy năm 1920?',
                options: [
                    { text: 'Tháng 12/1920', correct: true },
                    { text: 'Tháng 10/1920', correct: false },
                    { text: 'Tháng 8/1920', correct: false }
                ]
            },
            {
                question: 'Tại Đại hội Tours, Nguyễn Ái Quốc đã làm gì?',
                options: [
                    { text: 'Bỏ phiếu tán thành gia nhập Quốc tế Cộng sản', correct: true },
                    { text: 'Phát biểu về tình hình Việt Nam', correct: false },
                    { text: 'Gặp gỡ Lenin', correct: false }
                ]
            },
            {
                question: 'Sau Đại hội Tours, Người trở thành gì?',
                options: [
                    { text: 'Người Cộng sản Việt Nam đầu tiên', correct: true },
                    { text: 'Đại biểu của Việt Nam tại Pháp', correct: false },
                    { text: 'Lãnh đạo Đảng Xã hội Pháp', correct: false }
                ]
            },
            {
                question: 'Thành phố Tours nằm ở miền nào của Pháp?',
                options: [
                    { text: 'Miền Trung Pháp', correct: true },
                    { text: 'Miền Bắc Pháp', correct: false },
                    { text: 'Miền Nam Pháp', correct: false }
                ]
            }
        ],
        medium: [
            {
                question: 'Quốc tế III còn gọi là gì?',
                options: [
                    { text: 'Quốc tế Cộng sản (Comintern)', correct: true },
                    { text: 'Quốc tế Xã hội', correct: false },
                    { text: 'Liên minh Quốc tế', correct: false },
                    { text: 'Hội nghị Quốc tế', correct: false }
                ]
            },
            {
                question: 'Đại hội Tours thành lập tổ chức nào ở Pháp?',
                options: [
                    { text: 'Đảng Cộng sản Pháp', correct: true },
                    { text: 'Đảng Xã hội Pháp', correct: false },
                    { text: 'Đảng Lao động Pháp', correct: false },
                    { text: 'Mặt trận nhân dân Pháp', correct: false }
                ]
            },
            {
                question: 'Nguyễn Ái Quốc đọc tài liệu nào của Lenin trước Đại hội Tours?',
                options: [
                    { text: 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa', correct: true },
                    { text: 'Chủ nghĩa đế quốc là giai đoạn cao nhất của CNTB', correct: false },
                    { text: 'Nhà nước và cách mạng', correct: false },
                    { text: 'Làm gì?', correct: false }
                ]
            },
            {
                question: 'Tại Đại hội Tours, Nguyễn Ái Quốc là thành viên của đảng nào?',
                options: [
                    { text: 'Đảng Xã hội Pháp', correct: true },
                    { text: 'Đảng Cộng sản Pháp', correct: false },
                    { text: 'Hội Việt Nam yêu nước', correct: false },
                    { text: 'Hội Liên hiệp các dân tộc thuộc địa', correct: false }
                ]
            },
            {
                question: 'Quốc tế Cộng sản được thành lập năm nào?',
                options: [
                    { text: '1919', correct: true },
                    { text: '1917', correct: false },
                    { text: '1920', correct: false },
                    { text: '1918', correct: false }
                ]
            }
        ],
        hard: [
            {
                question: 'Nguyễn Ái Quốc gia nhập Quốc tế Cộng sản theo điều kiện số mấy của Lênin?',
                options: [
                    { text: '21 điều kiện', correct: true },
                    { text: '15 điều kiện', correct: false },
                    { text: '10 điều kiện', correct: false },
                    { text: '25 điều kiện', correct: false }
                ]
            },
            {
                question: 'Tại Đại hội Tours, tỷ lệ phiếu tán thành gia nhập Quốc tế III là bao nhiêu?',
                options: [
                    { text: 'Đa số (khoảng 70%)', correct: true },
                    { text: 'Tuyệt đối (trên 90%)', correct: false },
                    { text: 'Thiểu số (dưới 50%)', correct: false },
                    { text: 'Nhất trí 100%', correct: false }
                ]
            },
            {
                question: 'Tên đầy đủ của tổ chức Nguyễn Ái Quốc thành lập sau Đại hội là gì?',
                options: [
                    { text: 'Hội Liên hiệp các dân tộc thuộc địa', correct: true },
                    { text: 'Hội người Việt Nam yêu nước', correct: false },
                    { text: 'Đông Dương Cộng sản Đảng', correct: false },
                    { text: 'Hội Việt Nam cách mạng thanh niên', correct: false }
                ]
            },
            {
                question: 'Ai là người sáng lập Quốc tế Cộng sản (Comintern)?',
                options: [
                    { text: 'V.I. Lênin', correct: true },
                    { text: 'Stalin', correct: false },
                    { text: 'Karl Marx', correct: false },
                    { text: 'Friedrich Engels', correct: false }
                ]
            },
            {
                question: 'Sau Đại hội Tours, bút danh nào Nguyễn Ái Quốc thường dùng khi viết báo?',
                options: [
                    { text: 'Nguyễn O Phap', correct: true },
                    { text: 'Nguyễn Sinh Cung', correct: false },
                    { text: 'Tống Văn Sơ', correct: false },
                    { text: 'Lý Thụy', correct: false }
                ]
            }
        ]
    },

    // Challenge 2: Đường Kách mệnh 1927 - Huấn luyện cán bộ
    duong_kach_menh_1927: {
        easy: [
            {
                question: 'Cuốn "Đường Kách mệnh" xuất bản năm nào?',
                options: [
                    { text: '1927', correct: true },
                    { text: '1925', correct: false },
                    { text: '1930', correct: false }
                ]
            },
            {
                question: '"Đường Kách mệnh" là tập hợp bài giảng ở đâu?',
                options: [
                    { text: 'Lớp huấn luyện ở Quảng Châu', correct: true },
                    { text: 'Lớp huấn luyện ở Hồng Kông', correct: false },
                    { text: 'Lớp huấn luyện ở Matxcơva', correct: false }
                ]
            },
            {
                question: 'Quảng Châu thuộc nước nào?',
                options: [
                    { text: 'Trung Quốc', correct: true },
                    { text: 'Nga', correct: false },
                    { text: 'Pháp', correct: false }
                ]
            },
            {
                question: 'Thành phố Quảng Châu còn gọi là gì?',
                options: [
                    { text: 'Canton', correct: true },
                    { text: 'Shanghai', correct: false },
                    { text: 'Beijing', correct: false }
                ]
            },
            {
                question: 'Nguyễn Ái Quốc đến Quảng Châu năm nào?',
                options: [
                    { text: '1924', correct: true },
                    { text: '1925', correct: false },
                    { text: '1923', correct: false }
                ]
            }
        ],
        medium: [
            {
                question: '"Đường Kách mệnh" được viết bằng ngôn ngữ nào?',
                options: [
                    { text: 'Tiếng Việt (chữ Quốc ngữ)', correct: true },
                    { text: 'Tiếng Pháp', correct: false },
                    { text: 'Tiếng Trung', correct: false },
                    { text: 'Tiếng Nga', correct: false }
                ]
            },
            {
                question: 'Lớp huấn luyện của Người mở ở Quảng Châu có bao nhiêu khóa?',
                options: [
                    { text: 'Nhiều khóa (1925-1927)', correct: true },
                    { text: 'Chỉ có 1 khóa', correct: false },
                    { text: '2 khóa', correct: false },
                    { text: '3 khóa', correct: false }
                ]
            },
            {
                question: 'Tổ chức nào Nguyễn Ái Quốc thành lập tại Quảng Châu năm 1925?',
                options: [
                    { text: 'Hội Việt Nam Cách mạng Thanh niên', correct: true },
                    { text: 'Đông Dương Cộng sản Đảng', correct: false },
                    { text: 'An Nam Cộng sản Đảng', correct: false },
                    { text: 'Việt Nam Quốc dân Đảng', correct: false }
                ]
            },
            {
                question: 'Tạp chí do Hội Việt Nam Cách mạng Thanh niên phát hành tên là gì?',
                options: [
                    { text: 'Thanh niên', correct: true },
                    { text: 'Cách mạng', correct: false },
                    { text: 'Việt Nam', correct: false },
                    { text: 'Giải phóng', correct: false }
                ]
            },
            {
                question: 'Nguyễn Ái Quốc dùng bút danh nào khi viết "Đường Kách mệnh"?',
                options: [
                    { text: 'Nguyễn Ái Quốc', correct: true },
                    { text: 'Hồ Chí Minh', correct: false },
                    { text: 'Tống Văn Sơ', correct: false },
                    { text: 'Lý Thụy', correct: false }
                ]
            }
        ],
        hard: [
            {
                question: 'Lớp huấn luyện cán bộ mà Người mở ở Quảng Châu có tên gọi đầy đủ là gì?',
                options: [
                    { text: 'Lớp huấn luyện chính trị', correct: true },
                    { text: 'Lớp cách mạng Việt Nam', correct: false },
                    { text: 'Trường Hoàng Phố', correct: false },
                    { text: 'Lớp đào tạo quốc tế', correct: false }
                ]
            },
            {
                question: '"Đường Kách mệnh" đề cập đến mấy nội dung chính?',
                options: [
                    { text: '8 bài giảng (từ cách mạng đến tổ chức)', correct: true },
                    { text: '5 bài giảng', correct: false },
                    { text: '10 bài giảng', correct: false },
                    { text: '12 bài giảng', correct: false }
                ]
            },
            {
                question: 'Trong "Đường Kách mệnh", Người nhấn mạnh cách mạng Việt Nam theo con đường nào?',
                options: [
                    { text: 'Vô sản lãnh đạo, nông dân làm nòng cốt', correct: true },
                    { text: 'Tư sản dân tộc lãnh đạo', correct: false },
                    { text: 'Tiểu tư sản trí thức lãnh đạo', correct: false },
                    { text: 'Liên minh đa giai cấp', correct: false }
                ]
            },
            {
                question: 'Hội Việt Nam Cách mạng Thanh niên có bao nhiêu hội viên vào năm 1927?',
                options: [
                    { text: 'Khoảng 1000 hội viên', correct: true },
                    { text: 'Khoảng 500 hội viên', correct: false },
                    { text: 'Khoảng 2000 hội viên', correct: false },
                    { text: 'Khoảng 200 hội viên', correct: false }
                ]
            },
            {
                question: 'Ai là học viên tiêu biểu của lớp huấn luyện Quảng Châu?',
                options: [
                    { text: 'Lê Hồng Phong, Phạm Văn Đồng, Võ Nguyên Giáp', correct: true },
                    { text: 'Trường Chinh, Hoàng Quốc Việt, Lê Duẩn', correct: false },
                    { text: 'Phạm Hùng, Lê Đức Thọ, Nguyễn Duy Trinh', correct: false },
                    { text: 'Trần Phú, Hà Huy Tập, Nguyễn Văn Cừ', correct: false }
                ]
            }
        ]
    },

    // Challenge 3: Đảng ra đời 1930 - Sự kiện vĩ đại
    dang_ra_doi_1930: {
        easy: [
            {
                question: 'Đảng Cộng sản Việt Nam ra đời ngày nào?',
                options: [
                    { text: '3/2/1930', correct: true },
                    { text: '2/9/1945', correct: false },
                    { text: '19/5/1890', correct: false }
                ]
            },
            {
                question: 'Năm 2025 là kỷ niệm bao nhiêu năm ngày thành lập Đảng?',
                options: [
                    { text: '95 năm', correct: true },
                    { text: '90 năm', correct: false },
                    { text: '100 năm', correct: false }
                ]
            },
            {
                question: 'Đảng Cộng sản Việt Nam được thành lập vào tháng mấy?',
                options: [
                    { text: 'Tháng 2', correct: true },
                    { text: 'Tháng 1', correct: false },
                    { text: 'Tháng 3', correct: false }
                ]
            },
            {
                question: 'Ai là người trực tiếp chủ trì Hội nghị thành lập Đảng?',
                options: [
                    { text: 'Nguyễn Ái Quốc', correct: true },
                    { text: 'Trần Phú', correct: false },
                    { text: 'Lê Hồng Phong', correct: false }
                ]
            },
            {
                question: 'Đảng Cộng sản Việt Nam thành lập vào thế kỷ nào?',
                options: [
                    { text: 'Thế kỷ 20', correct: true },
                    { text: 'Thế kỷ 19', correct: false },
                    { text: 'Thế kỷ 21', correct: false }
                ]
            }
        ],
        medium: [
            {
                question: 'Đảng được thành lập tại đâu?',
                options: [
                    { text: 'Hương Cảng (Hồng Kông)', correct: true },
                    { text: 'Quảng Châu', correct: false },
                    { text: 'Sài Gòn', correct: false },
                    { text: 'Hà Nội', correct: false }
                ]
            },
            {
                question: 'Địa điểm cụ thể Hội nghị thành lập Đảng diễn ra ở đâu?',
                options: [
                    { text: 'Sân vận động bóng đá Hương Cảng', correct: true },
                    { text: 'Nhà thờ Hương Cảng', correct: false },
                    { text: 'Khách sạn Hương Cảng', correct: false },
                    { text: 'Công viên Hương Cảng', correct: false }
                ]
            },
            {
                question: 'Tên ban đầu của Đảng là gì?',
                options: [
                    { text: 'Đảng Cộng sản Việt Nam', correct: true },
                    { text: 'Đảng Cộng sản Đông Dương', correct: false },
                    { text: 'Đảng Lao động Việt Nam', correct: false },
                    { text: 'Đảng Dân chủ Việt Nam', correct: false }
                ]
            },
            {
                question: 'Tháng 10/1930, Đảng đổi tên thành gì?',
                options: [
                    { text: 'Đảng Cộng sản Đông Dương', correct: true },
                    { text: 'Đảng Lao động Việt Nam', correct: false },
                    { text: 'Đảng Cách mạng Việt Nam', correct: false },
                    { text: 'Đảng Cộng sản Việt Nam', correct: false }
                ]
            },
            {
                question: 'Hội nghị thành lập Đảng kéo dài bao lâu?',
                options: [
                    { text: 'Vài ngày (3-7/2/1930)', correct: true },
                    { text: '1 ngày', correct: false },
                    { text: '1 tuần', correct: false },
                    { text: '2 tuần', correct: false }
                ]
            }
        ],
        hard: [
            {
                question: 'Ba tổ chức nào được hợp nhất thành Đảng Cộng sản Việt Nam?',
                options: [
                    { text: 'Đông Dương CS Đảng, An Nam CS Đảng, ĐD CS Liên đoàn', correct: true },
                    { text: 'Việt Minh, Thanh niên, Phụ nữ', correct: false },
                    { text: 'Công đoàn, Nông hội, Học sinh', correct: false },
                    { text: 'Bắc Kỳ, Trung Kỳ, Nam Kỳ', correct: false }
                ]
            },
            {
                question: 'Cương lĩnh chính trị đầu tiên của Đảng đề ra mục tiêu gì?',
                options: [
                    { text: 'Đánh đổ đế quốc Pháp và phong kiến, lập nền dân chủ cộng hòa', correct: true },
                    { text: 'Xây dựng chủ nghĩa xã hội', correct: false },
                    { text: 'Thống nhất đất nước', correct: false },
                    { text: 'Công nghiệp hóa, hiện đại hóa', correct: false }
                ]
            },
            {
                question: 'Ai là Tổng Bí thư đầu tiên của Đảng (1931)?',
                options: [
                    { text: 'Trần Phú', correct: true },
                    { text: 'Nguyễn Ái Quốc', correct: false },
                    { text: 'Lê Hồng Phong', correct: false },
                    { text: 'Hà Huy Tập', correct: false }
                ]
            },
            {
                question: 'Tại sao phải hợp nhất 3 tổ chức Cộng sản năm 1930?',
                options: [
                    { text: 'Tránh phân tán lực lượng, cần một đảng thống nhất lãnh đạo', correct: true },
                    { text: 'Theo chỉ thị của Quốc tế Cộng sản', correct: false },
                    { text: 'Áp lực từ Pháp buộc phải hợp nhất', correct: false },
                    { text: 'Số lượng thành viên quá ít', correct: false }
                ]
            },
            {
                question: 'Văn kiện nào được thông qua tại Hội nghị thành lập Đảng?',
                options: [
                    { text: 'Chính cương vắn tắt, Sách lược vắn tắt, Điều lệ', correct: true },
                    { text: 'Tuyên ngôn độc lập', correct: false },
                    { text: 'Hiến pháp Đảng', correct: false },
                    { text: 'Nghị quyết đại hội I', correct: false }
                ]
            }
        ]
    }
};
