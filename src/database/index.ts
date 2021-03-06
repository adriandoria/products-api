import {Connection, createConnection, getConnectionOptions} from 'typeorm'

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions() //Recebe as informações do ormconfig.json

  //Para verificar se o comando dado foi yarn dev ou yarn test
  return createConnection(
    Object.assign(defaultOptions, {
       /*
      * Verfica qual variável de ambiente está sendo ultilizada.
      * A aplicação usará o database de teste caso esteja sendo executada no ambiente de teste.
      */
      database: process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : defaultOptions.database
    })
  )
}