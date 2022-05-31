// Oh you curious...
// This is not a real db,
// But let's imagine it is one :)
import data from "./data";

// Estoy utilizando un objeto llamado db para seguir simulando un ambiente llamando la base de datos.
const db = {};

db.getAll = async () => {
  const asArray = Object.values(data);
  return asArray;
};

db.getById = async (id) => {
  const entry = data[id];
  return entry;
};

// Modifique el tiempo del delay para simular el tiempo de espera
// Tardara entre 1 a 4 segundos

export default db;
