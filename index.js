const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nusaeduberkah!2020';

//Cara mmebuat create token dgn proses syncronous
// const token = jwt.sign({
//         data: {
//             kelas: 'nusaeduonline'
//         }
//     },
//     JWT_SECRET, { expiresIn: '5m' }); //expirenya 1 menit


// console.log(token);

//cara membuat create token dengan proses asyncronous
// jwt.sign({
//         data: { kelas: 'nusaeduonline' }
//     },
//     JWT_SECRET, { expiresIn: '5m' },
//     (err, token) => {
//         console.log(token);
//     });

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoibnVzYWVkdW9ubGluZSJ9LCJpYXQiOjE1OTYwNDU2NjF9.SjDV8h8oXuPlCO1X-PEoUs82HXukKMnspNgs8oAvFWM';

//verifikasi token cara 1
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);
// });

//verifikasi token cara 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch (error) {
    console.log(error.message);
}