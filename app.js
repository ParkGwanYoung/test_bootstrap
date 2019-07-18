const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/byeon', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b00.html'));
});
router.get('/byeon/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b01.html'));
});
router.get('/byeon/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b02.html'));
});
router.get('/byeon/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b03.html'));
});
router.get('/byeon/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b04.html'));
});
router.get('/byeon/05', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b05.html'));
});
router.get('/byeon/06', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b06.html'));
});
router.get('/byeon/07', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b07.html'));
});
router.get('/byeon/08', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b08.html'));
});
router.get('/byeon/09', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b09.html'));
});


router.get('/park', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p00.html'));
});
router.get('/park/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p01.html'));
});
router.get('/park/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p02.html'));
});

router.get('/park/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p03.html'));
});
router.get('/park/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p04.html'));
});
router.get('/park/05', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p05.html'));
});
router.get('/park/project00', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/project00.html'));
});
router.get('/park/07', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p07.html'));
});
router.get('/park/08', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p08.html'));
});
router.get('/park/09', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p09.html'));
});
router.get('/park/10', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p10_figure.html'));
});
router.get('/park/11', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p11_button.html'));
});
router.get('/park/12', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p12_collapse.html'));
});
router.get('/park/13', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p13_carousel.html'));
});
router.get('/park/14', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p14_dropdowns.html'));
});
router.get('/park/project01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/project01.html'));
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))