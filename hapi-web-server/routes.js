const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        path:'/',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        path: '/about',
        method: 'GET',
        handler: (request, h) => {
            return 'About page';
        }
    },
    {
        path: '/about',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        // localhost:5000/location?name=John&location=id
        path: '/location',
        method: 'GET',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
        }
    },
    {
        // Untuk mendapatkan body/payload dari sebuah request
        path: '/user/login',
        method: 'POST',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    },
    {
        // Fungsi handler harus selalu mengembalikan sebuah nilai (return())
        // Parameter h tidak hanya berfungsi untuk menetapkan status kode respons
        path: '/user/login',
        method: 'GET',
        handler: (request, h) => {
            // Terdapat dua cara penulisan untuk lekaukan return
            // 1
            // const response = h.response('success');
            // response.type('text/plain');
            // response.header('Custom-Header', 'some-value');
            // return response;   

            // 2
            return h.response('success')
                    .type('text/plain')
                    .header('Custom-Header', 'some-value');
        }
    },
    {
        path: '/hello/{name?}',
        method: 'GET',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;
 
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
        }
    },
    {
        path: '/{any*}',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    },

];

module.exports = routes;