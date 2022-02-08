// import { MongoClient } from 'mongodb';
// import { ICRUD } from './ICRUD';
// import mysql from './MySQL';
//
// export class MongoDB implements ICRUD {
//   private name: string = process.env.MONGO_DB_NAME;
//
//   private password: string = process.env.MONGO_DB_PASSWORD;
//
//   private host: string = process.env.MONGO_DB_HOST || 'localhost';
//
//   private user: string = process.env.MONGO_DB_USER || 'root';
//
//   private connection = null;
//
//   private connect = () => { //TODO create connection to MDB
//     if (!this.connection) {
//       this.connection = this.connection().then((res) => {
//         res.connect((err) => {
//           if (err) {
//             this.dropConnection();
//             throw err;
//           }
//           // console.log(res.state, 'connected');
//         });
//       });
//     }
//   };
//
//   //TODO create CRUD operations for MDB
//
//   private dropConnection = () => {
//     if (this.connection) {
//       this.connection.then((res) => {
//         res.end();
//         // console.log(res.state, 'connection dropped');
//       });
//       this.connection = null;
//     }
//   };
//
//   create(query: string): void {
//   }
//
//   delete(query: string): void {
//   }
//
//   read(query: string, params: object): JSON {
//     return undefined;
//   }
//
//   update(query: string): void {
//   }
//
// }
