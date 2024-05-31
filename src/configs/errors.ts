class Errors extends Error {
  public statusCode: number
  public constructor(message: string, statusCode: number) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}

export default Errors
