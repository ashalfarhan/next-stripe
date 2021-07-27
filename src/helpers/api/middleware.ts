import { NextApiRequest, NextApiResponse } from "next";

type WithMiddleware = (
  _req: NextApiRequest,
  _res: NextApiResponse,
  _callback: (_res: any) => void,
) => void;

const withMiddleware = (middleware: WithMiddleware) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export default withMiddleware;
