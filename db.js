const db = require('mongoose');
db.Promise = global.Promise;


const connect = async (dbUrl, dbName) => {
  try {
    await db.connect(`${dbUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: dbName,
    })
    console.info('[db] conectada con exito')
  } catch (error) {
    console.error('[db] Error de coneccion', error)
  }
}

module.exports = connect;