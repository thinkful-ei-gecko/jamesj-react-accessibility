const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://noteful-server-jamesj.herokuapp.com'
    : 'http://localhost:8022'

console.log(URL)
export default {
  API_ENDPOINT: URL,
}