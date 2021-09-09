import Cors from 'cors'
import withMiddleware from './middleware'

const cors = Cors({ methods: ['GET', 'POST'] })

const withCors = withMiddleware(cors)

export default withCors
