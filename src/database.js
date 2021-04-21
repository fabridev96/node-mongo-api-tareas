import mongoose from 'mongoose';
import config from './config';

(async () => {

    try {
        
        const db = await mongoose.connect(config.mongodbURL, {
    
            useUnifiedTopology: true,
            useNewUrlParser: true
    
        });
    
        console.log('Bases de datos conectada a:', db.connection.name);

    } catch (error) {

        console.log(error);
        
    }


})();