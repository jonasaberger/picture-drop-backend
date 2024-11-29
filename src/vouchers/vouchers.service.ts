/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Vouchers } from './entities/voucher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Vouchers) private voucherRepository: Repository<Vouchers>,
  ) {}

  async findAll() : Promise<Vouchers[]> {
    return await this.voucherRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
