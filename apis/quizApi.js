const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');

router.get('/quizzes', function (req, res) {
    Quiz.find({}, 'title desc').exec(function (err, quizzes) {
        if (err) res.status(500).send(err);
        else res.send(quizzes);
    });
})

router.get('/quiz/:id', function (req, res) {
    Quiz.findById(req.params.id).exec(function (err, quiz) {
        if (err) res.status(500).send(err);
        else res.send(quiz);
    })
})

router.post('/quiz', function (req, res) {
    const q = req.body.quiz;
    Quiz.create({
        title: q.title,
        desc: q.desc,
        questions: [],
        results: []
    }).then(function (err, quiz) {
        if (err) res.status(500).send(err);
        else res.send(quiz);
    })
});

module.exports = router;


// router.get('/entertodb', function (req, res) {
//     Quiz.create({
//         title: "Personality Quiz",
//         desc: "Wanna know how awesome you are? Wanna know what is your main personality type? Start this quiz to see what kind of a person you are.",
//         questions: [{
//             text: "You see Louie alone in the office, what would you do?",
//             answers: [{
//                 text: "go in and pet him of course",
//                 score: 1
//             },
//             {
//                 text: "I would call somebody and tell them he needs company",
//                 score: 2
//             },
//             {
//                 text: "I would try and teach Louie to open doors by himself",
//                 score: 3
//             },
//             {
//                 text: "let him be",
//                 score: 4
//             }]
//         },
//         {
//             text: "A close friend told you they are having a hard time, how would you act?",
//             answers: [{
//                 text: "try to listen and help as much as I can, put a debugger if needed",
//                 score: 1
//             },
//             {
//                 text: "I would try to avoid starting a deep conversation about it",
//                 score: 2
//             },
//             {
//                 text: "I would try to find out why they're feeling like this in the first place",
//                 score: 3
//             },
//             {
//                 text: "they are always complaining...",
//                 score: 4
//             }]
//         },
//         {
//             text: "You're at a friend's party and you encountered the creator of JavaScript. he's approaching you. you would probably -",
//             answers: [{
//                 text: "smile and ask him how's life (don't)",
//                 score: 1
//             },
//             {
//                 text: "say hi and disappear",
//                 score: 2
//             },
//             {
//                 text: "start a conversation about a super-annoying bug you have on your app",
//                 score: 3
//             },
//             {
//                 text: "who's that guy? what's JavaScript?",
//                 score: 4
//             }]
//         },
//         {
//             text: "You see a homeless person in the street and you've got some leftovers from lunch, would you-",
//             answers: [{
//                 text: "give him some food and sit with him to cheer him up",
//                 score: 1
//             },
//             {
//                 text: "I have a bus to catch, he'll be fine",
//                 score: 2
//             },
//             {
//                 text: "I would give him the food and share with him some ideas of how he can start and change his situation",
//                 score: 3
//             },
//             {
//                 text: "why is he sitting on the floor? it's kind of dirty in here",
//                 score: 4
//             }]
//         },
//         {
//             text: "You're having a bad coding day and your mom's asking you how is it going. you would probably say something like-",
//             answers: [{
//                 text: "today wasn't great, but tomorrow will be better (as long as we're not going to be working on Spacebook again)",
//                 score: 1
//             },
//             {
//                 text: "talk to you later mom",
//                 score: 2
//             },
//             {
//                 text: "it was fine, nothing special",
//                 score: 3
//             },
//             {
//                 text: "I have no idea mom",
//                 score: 4
//             }]
//         },
//         {
//             text: "Ofri lost a Kahoot game and had to bring a cake, but she couldn't. what would you do?",
//             answers: [{
//                 text: "bring a cake instead",
//                 score: 1
//             },
//             {
//                 text: "she'll have to bring two cakes next week",
//                 score: 2
//             },
//             {
//                 text: "no worries, Wednesday is happy-hour time anyway",
//                 score: 3
//             },
//             {
//                 text: "I don't like cakes anyway",
//                 score: 4
//             }]
//         },
//         {
//             text: "Jona was offered a job abroad, how do you REACT?",
//             answers: [{
//                 text: "throw him a party and invite his favorite DJ's",
//                 score: 1
//             },
//             {
//                 text: "don't goooooo!!!!!!!!!!!!!!!!",
//                 score: 2
//             },
//             {
//                 text: "react??? I prefer mobx...",
//                 score: 3
//             },
//             {
//                 text: "super awesome, see you next week",
//                 score: 4
//             }]
//         },
//         {
//             text: "You're on a Hackathon and there's only one slice of pizza left. would you eat it?",
//             answers: [{
//                 text: "one slice is a lot, we can share it",
//                 score: 1
//             },
//             {
//                 text: "Joey doesn't share food",
//                 score: 2
//             },
//             {
//                 text: "sneak it when no one notices",
//                 score: 3
//             },
//             {
//                 text: "I've had enough pizza since the bootcamp started",
//                 score: 4
//             }]
//         },
//         {
//             text: "It's cinnamon time and Hadas leaves the class, you:",
//             answers: [{
//                 text: "console.log('PARTY!!!')",
//                 score: 1
//             },
//             {
//                 text: "cinnamon time is basketball time",
//                 score: 2
//             },
//             {
//                 text: "yalla, let's code",
//                 score: 3
//             },
//             {
//                 text: "sim",
//                 score: 4
//             }]
//         },
//         {
//             text: "A classmate is running late and Hadas is asking where they are, would you help them? (asking for a friend..)",
//             answers: [{
//                 text: "it's the train's fault",
//                 score: 1
//             },
//             {
//                 text: "not sim at all",
//                 score: 2
//             },
//             {
//                 text: "cannot read property of undefined",
//                 score: 3
//             },
//             {
//                 text: "nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV.",
//                 score: 4
//             }]
//         }],
//         results: [{
//             score: 1,
//             title: "Sanguine (Optimistic, active and social)",
//             desc: "You tend to be lively, optimistic and carefree. You love adventure and have a high risk tolerance. Typically, you are very poor at tolerating boredom and will seek variety and entertainment. You are very creative and may become a great artist. In addition, you are a fantastic entertainer and will naturally do well if you choose a career in the entertainment industry."
//         },
//         {
//             score: 2,
//             title: "Choleric (short-tempered, fast and irritable)",
//             desc: "You are probably a goal-oriented person. You are very savvy, analytical, and logical. You dislike small talk and enjoy deep and meaningful conversations. You would rather be alone than in company of shallow, superficial people. Ideally, you want to spend time with people who have similar professional interests."
//         },
//         {
//             score: 3,
//             title: "Melancholic (analytical, wise and quiet)",
//             desc: "You love traditions. You love your family and friends and do not look for novelty and adventure. In fact, you avoid it at all costs. You are very unlikely to marry a foreigner or leave your homeland for another country. You are very social and seek to contribute to the community. Being extremely orderly and accurate, you are a fantastic people manager."
//         },
//         {
//             score: 4,
//             title: "Phlegmatic (relaxed and peacfull)",
//             desc: "You are usually a people person. You seek interpersonal harmony and close relationships. You are a loyal partner and a loving parent. You preserve your relationships with old friends, distant family members, and neighbors. You tend to avoid conflicts and always try to mediate between others to restore peace and harmony. You are very much into charity and helping others."
//         }]
//     }).then(function (result, err) {
//         if (err) res.status(500).send(err);
//         else res.send(result)
//     })
// }) 

