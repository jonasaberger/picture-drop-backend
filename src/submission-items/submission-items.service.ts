/* eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionItem } from './entities/submission-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionItemsService {
  constructor(
    @InjectRepository(SubmissionItem) private voucherRepository: Repository<SubmissionItem>,
  ) {}

  findAll() {
    return this.voucherRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} submissionItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} submissionItem`;
  }
}
