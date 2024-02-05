import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ReservationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservationDto: CreateReservationDto) {
    return this.prisma.reservation.create({ data: createReservationDto });
  }

  async findAll() {
    return this.prisma.reservation.findMany();
  }

  async findOne(id: number) {
    const reservation = await this.prisma.reservation.findUnique({ where: { id } });
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    return reservation;
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.findOne(id);
    return this.prisma.reservation.update({ where: { id }, data: updateReservationDto });
  }

  async updatePartial(id: number, partialUpdateReservationDto: UpdateReservationDto) {
    const reservation = await this.findOne(id);
    return this.prisma.reservation.update({ where: { id }, data: partialUpdateReservationDto });
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.prisma.reservation.delete({ where: { id } });
  }
}
