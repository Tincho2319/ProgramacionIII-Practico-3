const fs = require('fs').promises;
const path = require('path');

const getServicios = async (req, res) => {
  try {
    const pathArchivo = path.join(__dirname, '../data/servicios.json');
    const data = await fs.readFile(pathArchivo, 'utf8');
    const servicios = JSON.parse(data);

    return res.status(200).json(servicios);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: 'No se pudieron obtener los servicios' });
  }
}

const getServiciosById = async (req, res) => {
  try {
    const pathArchivo = path.join(__dirname, '../data/servicios.json');
    const data = await fs.readFile(pathArchivo, 'utf8');
    const servicios = JSON.parse(data);

    const { id } = req.params;
    const servicioId = servicios.find((s) => s.id === parseInt(id));

    if (!servicioId) {
      return res.status(404).json({ msg: `No existe el servicio con id ${id}` });
    }

    return res.status(200).json(servicioId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: `No se pudo obtener el detalle del servicio del id n° ${id}`
    });
  }
}

module.exports = { getServicios, getServiciosById };