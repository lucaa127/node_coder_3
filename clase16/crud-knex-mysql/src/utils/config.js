
export const config = {
    db: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            user: 'x',
            password: 'x',
            database: 'test',
            options: {
                port: 63598
              }
        }
    }
}





// export const config = {
//    db: {
//     client: 'mssql',
//     connection: {
//         // no tcp:
//         server: 'LOCALHOST/SQLEXPRESS',
//         user: 'sa',
//         password: 'Lleave11',
//         database: 'test',
//         port: 1433,
//         options: { requestTimeout: 350000, encrypt: true },
//     },
//     pool: {
//         min: 0,
//         max: 15,
//      }
//     }
// }



// export const config = {
//    db: {
//     "user": 'sa',
//     "client": 'mssql',
//     "password": 'Lleave11',
//     "server": 'localhost',
//     "database": 'test',
//     "port": 1433, // make sure to change port
    
//     "dialectOptions": {
//         "instanceName": "SQLEXPRESS"
//     }
// }
// };


// export const config = {
//     db: {
//         client: 'mssql',
//         connection: {
//             host: '127.0.0.1/SQLEXPRESS',
//             user: 'sa',
//             password: 'Lleave11',
//             database: 'test',
//             options: {
//                 port: 1433,
//               },
//         }
//     }
// }
