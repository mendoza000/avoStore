import db from "../../../database/db.js";

const avoById = async (req, res) => {
  const { id } = req.query;
  const avo = await db.getById(id);

  res.status(200).json(avo);
};

export default avoById;
