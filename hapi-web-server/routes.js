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
        method: 'GET',
        path: '/location',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
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