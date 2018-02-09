'use strict';

import { Error, Success } from '../models/responses'

const getAllUsers = (req, res) => {
  const returnData: Success = {
    status: 200,
    data: { message: "Return all users" }
  };
  return res.status(returnData.status).json(returnData);
};


const errorResponse = (res, message: string, error, status: number = 500) =>
  res.status(status).json(<Error>{ status, message, error });


export default {
  getAllUsers
};
