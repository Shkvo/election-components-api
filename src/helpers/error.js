export const throwError = (ctx, error) => {
  ctx.body = {
    mesage: 'Error has occured',
    error
  }
};