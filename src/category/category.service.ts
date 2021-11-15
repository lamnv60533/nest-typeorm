import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { In, Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
  async findOne(category: Category): Promise<Category> {
    return await this.categoryRepository.findOne(category);
  }
  async findByIds(ids: number[]): Promise<Category[]> {
    const cateIds = ids.map(
      (id) => Object.assign({}, new Category(), id) as Category,
    );
    return await this.categoryRepository.find({
      where: {
        id: In(ids),
      },
    });
  }
  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
  }

  async update(category: Category): Promise<UpdateResult> {
    return await this.categoryRepository.update(category.id, category);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.categoryRepository.delete(id);
  }
}
