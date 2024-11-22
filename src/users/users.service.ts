/* eslint-disable */
// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.Id = createUserDto.Id;
    user.Username = createUserDto.Username;
    user.FirstName = createUserDto.FirstName;
    user.LastName = createUserDto.LastName;
    user.Email = createUserDto.Email;
    user.StripeCustomerId = createUserDto.StripeCustomerId
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(Id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { Id } });
  }

  async update(Id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update({ Id }, updateUserDto);
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}