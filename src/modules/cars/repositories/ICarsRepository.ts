import { ICreateCarDTO } from "../dtos/CreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";


interface ICarsRepository {

    create(data: ICreateCarDTO): Promise<void>
    findByLicensePlate(licence_plate: string): Promise<Car>
}

export { ICarsRepository }