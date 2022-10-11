export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {  //
        //cnxStr: 'mongodb://test:test@localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4/ecommerce?authSource=ecommerce',
        //cnxStr: 'mongodb://test:test@localhost:27017/?directConnection=true&authMechanism=DEFAULT&authSource=ecommerce',


        cnxStr:'mongodb://test:test@localhost:27017/ecommerce?directConnection=true&authMechanism=DEFAULT&authSource=ecommerce&connectTimeoutMS=2000',
        
        //cnxStr: 'mongodb://root:mongopass@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4/ecommerce?authSource=admin',
        options: {
            useNewUrlParser: true,
            user: "test",
            pass: "test",
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {

    },
    MODO_PERSISTENCIA: 'mongodb'
}
//mongodb://localhost:27017/ecommerce