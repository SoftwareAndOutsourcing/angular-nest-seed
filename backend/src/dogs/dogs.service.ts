import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './models/dog.model';

@Injectable()
export class DogsService {
  constructor(
    @InjectModel(Dog)
    private userModel: typeof Dog,
  ) { }

  create(createDogDto: CreateDogDto): Promise<Dog> {
    return this.userModel.create(createDogDto);
  }

  findAll(): Promise<Dog[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<Dog> {
    return this.userModel.findOne({
      where: {
        id
      },
    });
  }

  update(id: number, updateDogDto: UpdateDogDto): Promise<[number, Dog[]]> {
    return this.userModel.update(updateDogDto, {
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<void> {
    const dog = await this.findOne(id);
    await dog.destroy();
  }
}
