import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({ data: createRoomDto });
  }

  async findAll() {
    return this.prisma.room.findMany();
  }

  async findOne(id: number) {
    const room = await this.prisma.room.findUnique({ where: { id } });
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const room = await this.findOne(id);
    return this.prisma.room.update({ where: { id }, data: updateRoomDto });
  }

  async updatePartial(id: number, partialUpdateRoomDto: UpdateRoomDto) {
    const room = await this.findOne(id);
    return this.prisma.room.update({ where: { id }, data: partialUpdateRoomDto });
  }

  async remove(id: number) {
    const room = await this.findOne(id);
    return this.prisma.room.delete({ where: { id } });
  }
}
