import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const sqliteProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'database.sqlite',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // Not for production
      });

      return dataSource.initialize();
    },
  },
];

@Module({ providers: [...sqliteProviders], exports: [...sqliteProviders] })
export class SqliteModule {}
