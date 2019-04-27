export const throwError = (ctx, error) => {
  ctx.body = {
    message: 'Error has occured',
    error
  };
};