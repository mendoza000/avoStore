import db from "../../../database/db.js";

const allAvos = async (req, res) => {
  const data = await db.getAll();
  res.status(200).json({
    total: data.length,
    avos: data,
  });
};

export default allAvos;
