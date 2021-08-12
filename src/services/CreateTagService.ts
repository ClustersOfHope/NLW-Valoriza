import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error("Nome da TAG incorreto !")
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    if (tagAlreadyExists) {
      throw new Error("TAG já existe !")
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag;
  }

}

export { CreateTagService }