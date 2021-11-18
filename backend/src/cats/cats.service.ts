import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './models/cat.model';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private userModel: typeof Cat,
  ) {}
  
  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.userModel.create(createCatDto);
  }

  findAll(): Promise<Cat[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<Cat> {
    return this.userModel.findOne({
      where: {
        id
      },
    });
  }

  update(id: number, updateCatDto: UpdateCatDto): Promise<[number, Cat[]]> {
    return this.userModel.update(updateCatDto, {
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<void> {
    const cat = await this.findOne(id);
    await cat.destroy();
  }
}
