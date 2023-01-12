import { createServer } from "cors-anywhere"

const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080

createServer().listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
