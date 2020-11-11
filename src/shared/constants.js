const BASE_URL = new URL('https://support.google.com')

const IS_DEV = process.env.NODE_ENV !== 'production'

const ANSWERS_PER_PAGE = 10

export { BASE_URL, IS_DEV, ANSWERS_PER_PAGE }
