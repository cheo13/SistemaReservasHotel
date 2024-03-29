import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async updatePartial(id: number, partialUpdateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    return this.prisma.user.update({ where: { id }, data: partialUpdateUserDto });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.prisma.user.delete({ where: { id } });
  }
}
