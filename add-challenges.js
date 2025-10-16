// Quick script to add challenge keys to locations
// Run this in browser console after loading script.js

const challengeMapping = {
    1: 'quiz_1',
    2: 'timeline_1',
    3: 'dice_1',
    4: 'quiz_2',
    5: 'timeline_2',
    6: 'dice_2',
    7: 'quiz_3',
    8: 'timeline_3',
    9: 'dice_3',
    10: 'quiz_4'
};

// Add challenges to locations
LOCATIONS.forEach(loc => {
    if (challengeMapping[loc.id]) {
        loc.challenge = challengeMapping[loc.id];
    }
});

console.log('✅ Challenges added!');
console.log(LOCATIONS);
