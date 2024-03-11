// Cara mendapatkan data body
const requestListener = (request, response) => {
    // array kosong untuk menampung data
    let body = [];
 
    request.on('data', (chunk) => {
        // isi array body dengan chunk (potongan data)
        body.push(chunk);
    });
 
    request.on('end', () => {
        // mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya
        body = Buffer.concat(body).toString();
    });
};