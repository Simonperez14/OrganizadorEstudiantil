import mongoose from "mongoose";


// Función asíncrona para conectar a la base de datos MongoDB
export async function connectMongo() {
    try {
        const mongo_uri = process.env.MONGO_URI;

        // Se intenta conectar usando Mongoose con opciones recomendadas
        await mongoose.connect(mongo_uri, {
            serverSelectionTimeoutMS: 10000,
            dbName: 'organizadorEstudiantil',
        });

        // Si la conexión es exitosa, imprime mensaje en consola
        console.log("Conectado a MongoDB correctamente");
    } catch (err) {
        // Si hay error al conectar, imprime el error en consola
        console.error("Error al conectar a MongoDB:", err.message);

        // Termina la ejecución de la aplicación ya que no puede continuar sin DB
        process.exit(1);
    }
}