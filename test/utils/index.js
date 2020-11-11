import database from '../../db/models'
import randomstring from 'randomstring'

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const createFakeAnswers = async ({ productId, languageId, number = 1 }) => {
  const answers = []
  for (let index = 0; index < number; index++) {
    answers.push(database.Answer.create({
      title: randomstring.generate(50),
      description: randomstring.generate(200),
      uuid: getRandomInt(1, 1000),
      ProductId: productId,
      LanguageId: languageId
    }))
  }
  return Promise.all(answers)
}

export const createProduct = () =>
  database.Product.create({ name: 'YouTube', code: 'youtube', communityId: 1 })

export const createLanguage = () =>
  database.Language.create({ code: 'fr' })

export const isValidDate = (d) => d instanceof Date && !isNaN(d)