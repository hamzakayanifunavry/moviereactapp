interface Error {
  name: string;
  message: string;
  stack?: string;
}
const onError = (error: Error) => {
  console.log('Error check ===>', error);
};
export {onError};
