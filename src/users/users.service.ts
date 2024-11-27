import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Brandon',
      email: 'brandon@gmail.com',
      role: 'INTERN',
    },

    {
      id: 1,
      name: 'ddebugger',
      email: 'debugger@gmail.com',
      role: 'ENGINEER',
    },

    {
      id: 3,
      name: 'Larry',
      email: 'larry@gmail.com',
      role: 'INTERN',
    },

    {
      id: 4,
      name: 'Teneng',
      email: 'teneng@gmail.com',
      role: 'ADMIN',
    },

    {
      id: 5,
      name: 'Trevor',
      email: 'trevor@gmail.com',
      role: 'ENGINEER',
    },
  ];

  // find all method
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);

      // chechking if the user role exist
      if (rolesArray.length === 0) {
        throw new NotFoundException('User Role Not Found');
      } else {
        return rolesArray;
      }
    }
    return this.users;
  }

  // find one method
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    // http error exceptions
    if (!user) throw new NotFoundException('User is not found');
    return user;
  }

  // create user method
  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  // update user method
  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  // delete one method
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
