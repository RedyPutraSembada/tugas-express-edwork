const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<div>
        <h1>Halaman Home</h1><br />
        <ul>
            <li><a href="http://localhost:3000/about">About</a></li>
            <li>Menu <a href="http://localhost:3000/menu/makanan">Makanan</a> / <a href="http://localhost:3000/menu/minuman">minuman</a></li>
        </ul>
    </div>`);
});

router.get('/about', (req, res) => {
    res.send(`<div>
        <h1>Halaman About</h1><br />
        <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li>Menu <a href="http://localhost:3000/menu/makanan">Makanan</a> / <a href="http://localhost:3000/menu/minuman">minuman</a></li>
        </ul>
    </div>`);
});

router.get('/menu/:kategori', (req, res) => {
    let data;
    if (req.params.kategori == 'makanan') {
        data = `<ul>
            <li>Mie Ayam</li>
            <li>Bakso</li>
            <li>Makaroni Mozarela</li>
            <li>Sempol</li>
            <li>Rujak</li>
        </ul>`;
    } else if (req.params.kategori == 'minuman') {
        data = `<ul>
            <li>Es Seduh</li>
            <li>Es Teh</li>
            <li>Juz Buah</li>
            <li>Air Mineral</li>
            <li>Es Buah</li>
        </ul>`;
    }
    res.send(`<div>
        <h1>Halaman Menu</h1><br />
        <ul>
        <li><a href="http://localhost:3000/">Home</a></li>
        <li><a href="http://localhost:3000/about">About</a></li>
            <li>Menu <a href="http://localhost:3000/menu/makanan">Makanan</a> / <a href="http://localhost:3000/menu/minuman">minuman</a></li>
        </ul>
        <h2>Menu</h2>
        ${data}
    </div>`);
});

module.exports = router;