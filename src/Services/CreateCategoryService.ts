import { ICategoriesRepository } from "../Repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor (private categoriesRepository: ICategoriesRepository) {

    }
    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
        throw new Error("Category Already Exists!")
        }

        this.categoriesRepository.create({ name, description });
        }
};

export { CreateCategoryService };