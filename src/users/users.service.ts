import { Injectable } from '@nestjs/common';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  // find one method
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  // create user method
  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  // update user method
  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
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
