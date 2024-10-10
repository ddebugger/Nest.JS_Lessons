import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users?id
    */

  // GET /users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // PATCH /user/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  // GET /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
