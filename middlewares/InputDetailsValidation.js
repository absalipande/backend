export default async function InputDetailsValidation(req, res, next) {
  const { name, age, email, gender } = req.body;

  if (!name || !age || !email || !gender) {
    return res.status(422).json({
      message: 'Please fill out required fields!',
    });
  }

  next();
}
