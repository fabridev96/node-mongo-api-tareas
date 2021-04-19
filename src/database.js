import mongoose from 'mongoose';

(async () => {

    const db = await mongoose.connect('mongodb://localhost/tareasapi', {

        useUnifiedTopology: true,
        useNewUrlParser: true

    });
    console.log('Bases de datos conectada a:', db.connection.name);

})();




