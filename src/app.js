const express = require('express');



/* //ROUTES
const userRouter = require('../router/userRouter');

 */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* app.use('/api/users', userRouter);
 */

app.get('/', (req, res) => {
    console.log(req.headers["user-agent"]);
    res.status(200).json({'mesaj':'hoşgeldiniz'}); 
});


app.listen(3000, () => {
    console.log("3000 portundan server ayaklandırıldı"); 
});


