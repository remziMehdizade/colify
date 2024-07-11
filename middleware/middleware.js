const hata = (err, req, res, next) => {
    console.log("Erros tapildi:  " + err);
    res.json({
      hata: err.message
    });
  };
  
  module.exports = hata;
  