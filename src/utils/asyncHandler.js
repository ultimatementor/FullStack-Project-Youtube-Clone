// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const asyncHandler = async (req, res, next) => {
  return await Promise.resolve(asyncHandler(req, res, next)).catch((error) => {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  });
};
