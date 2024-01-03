const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('***CONEXION CORRECTA***');
    } catch (err) {
        console.error('***ERROR DE CONEXION***', err);
    }
};

// Alternativamente, puedes manejar el evento 'open' de esta manera:
mongoose.connection.on('open', () => {
    console.log('***CONEXION CORRECTA***');
});

module.exports = dbConnect;
