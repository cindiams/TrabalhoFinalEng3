import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Contributor')
export class ContributorDTO {
  @Field()
  id: string

  @FilterableField()
  name: string;

  @FilterableField()
  cpf: string;
}