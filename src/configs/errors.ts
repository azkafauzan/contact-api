class Errors extends Error {
  public statusCode: number
  public status: string
  public constructor(message: string, statusCode: number, status: string) {
    super()
    this.message = message
    this.statusCode = statusCode
    this.status = status
  }
}

export default Errors
