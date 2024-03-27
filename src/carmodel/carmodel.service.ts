import { Injectable, NotFoundException } from '@nestjs/common';//
import { InjectModel } from '@nestjs/sequelize';
import { Carmodel } from './carmodel.model';

@Injectable()
export class CarmodelService {
constructor(
    @InjectModel(Carmodel)
    private carmodelModel: typeof Carmodel,
    ) {}

    //create make injection
    async create(model: { make_id: number, model_name: string, offset_amount: number }): Promise<Carmodel> {
    return this.carmodelModel.create(model);
    }

    // //get all vehicles
    // async findAll(): Promise<Vehicle[]> {
    // return Vehicle.findAll();
    // }

    // //get vehicle by id
    // async findOne(vehicle_id: number): Promise<Vehicle> {
    //     return Vehicle.findOne({ where: { vehicle_id } });
    // }

    // //delete user
    // async delete(vehicle_id: number): Promise<Vehicle> {
    // const vehicle = await Vehicle.findOne({ where: { vehicle_id } });
    // await Vehicle.destroy({ where: { vehicle_id } });
    // return vehicle;
    // }

    // //update vehicle
    // async update(vehicle_id: number, model_id: number, make_id: number, user_id: number, trim: string, year: number, miles: number, image: string, fuel_type: string): Promise<Vehicle> {
    // const vehicle = await Vehicle.findOne({ where: { vehicle_id } });
    // if (!vehicle) throw new NotFoundException('Vehicle not found');
    // Object.assign(vehicle, { vehicle_id, model_id, make_id, user_id, trim, year, miles, image, fuel_type });
    // await vehicle.save();
    // return vehicle;
    // }
}
/*The Service is a provider that can be injected as a dependency into other providers (like resolvers), modules, etc. 
Services are used to encapsulate business logic and database interactions. They provide methods that the resolvers 
can call to perform actions like creating, reading, updating, or deleting data.*/