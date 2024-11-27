import { CreateUserDto } from './create_user.dto';
import { PartialType } from '@nestjs/mapped-types';

// extending the CreateUserDto to the UpdateUserDto
export class UpdateUserDto extends PartialType(CreateUserDto) {}
