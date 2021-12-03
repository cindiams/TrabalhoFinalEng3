import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ContributorDTO } from './dto/contibutor.dto';
import { CreateContributorInput } from './dto/create-contributor.input';
import { UpdateContributorInput } from './dto/update-contributor.input';
import { Contributor } from './entities/contributor.entity';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Contributor])],
      resolvers: [
        { 
          DTOClass: ContributorDTO, 
          EntityClass: Contributor,
          CreateDTOClass: CreateContributorInput,
          UpdateDTOClass: UpdateContributorInput,
          enableTotalCount: true,
        }
      ],
    }),
  ],
  providers: [],
})
export class ContributorsModule {}
