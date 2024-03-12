1. Simpan berkas server.js, kemudian tambahkan script berikut di package.json.

```
    "start:order": "SET PORT=4000 node order-service.js",
    "start:user": "SET PORT=5000 node user-service.js"
```

2. jalankan perintah berikut di terminal yang berbeda.

```
    npm run start
    npm run start:order
    npm run start:user
```