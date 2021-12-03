import { CreateContributorInput } from './create-contributor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContributorInput extends PartialType(CreateContributorInput) {
  @Field(() => String)
  id: string;
}
