interface Error {
  status: number;
  message: string;
  error: Error;
}

interface Success {
  status: number;
  data: Object;
}

export {
  Error,
  Success
}
