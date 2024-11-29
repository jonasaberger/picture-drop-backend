/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Voucher } from './entities/voucher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Voucher) private voucherRepository: Repository<Voucher>,
  ) {}

  async findAll() : Promise<Voucher[]> {
    return await this.voucherRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
