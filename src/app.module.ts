import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { ContributorsModule } from './modules/contributors/contributors.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,      
    }),
    TypeOrmModule.forRoot(),
    ContributorsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
