import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

console.log("Arquivo DATABASE")

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options
  });
});

getConnectionOptions();

//createConnection();
