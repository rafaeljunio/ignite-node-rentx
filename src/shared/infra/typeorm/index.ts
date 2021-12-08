import { Connection, createConnection, getConnectionOptions } from 'typeorm';

/* interface IOptions {
  host: string;
}

console.log("Arquivo DATABASE")

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options
  });
}); */

// getConnectionOptions();

// createConnection();

export default async (host = 'database'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
    }),
  );
};
