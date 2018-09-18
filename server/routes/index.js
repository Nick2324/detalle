var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
                        tituloEntrada: "Para mi persona especial",
                        descripcionEntrada: "Elije el tema que quieras revivir de nuestros ultimos momentos",
                        menu:[{nombre:"Nuestras rutas"},
                              {nombre:"Nuestros momentos"}, 
                              {nombre:"Nuestras canciones"},
                              {nombre:"Mis dedicatorias"},
                              {nombre:"Me inspiras..."}]
                      });
});

router.get('/mapa', function (req, res, next) {
  res.render('PruebaMapa');
});

module.exports = router;
