const fs = require('fs/promises')
const path = require('path')

const obtenerEquipo = async (req, res) => {
  try {
    const ruta = path.join(__dirname, '../data/equipo.json')

    const data = await fs.readFile(ruta, 'utf-8')

    const equipo = JSON.parse(data)

    return res.status(200).json(equipo)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      msg: 'Error al obtener equipo'
    })
  }
}

module.exports = {
  obtenerEquipo
}