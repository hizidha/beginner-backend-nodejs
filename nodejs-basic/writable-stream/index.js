/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
*/

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');
const filePath2 = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(filePath, {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream(filePath2);

readableStream.on('data', (datas) => {
    try {
        writableStream.write(datas + '\n');
    } catch(error) {
        console.error('Error:', error);
    }
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('Done')
});