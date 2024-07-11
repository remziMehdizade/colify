const mongoose = require('mongoose');

const dbURI='mongodb://remzi2:12345678@127.0.0.1:27017'; 
/* 
mongoose.connect(dbURI,{auth:{authdb:"mydb2"}})
.then(() => console.log("Veritabanına bağlanıldı"))
.catch(hata => console.log("DB bağlantı hatası: " + hata));
 */
 mongoose.connect('mongodb://remzi:12345678@127.0.0.1:27017/mydb')
 .then(() => console.log("Veritabanına bağlanıldı"))
 .catch(hata => console.log("DB bağlantı hatası: " + hata));
