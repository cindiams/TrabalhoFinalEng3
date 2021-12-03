import { Field, InputType} from '@nestjs/graphql';

@InputType()
export class CreateContributorInput {
  @Field()
  name: string;

  @Field()
  cpf: string;
}
