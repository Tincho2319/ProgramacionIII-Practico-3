const fs = require('fs').promises;
const path = require('path');

/** Función para obtener el perfil de un usuario por su ID.
 * Lee el archivo JSON de usuarios, busca el usuario por su ID y devuelve sus datos (sin la contraseña).
 * Si no se encuentra el usuario, devuelve un mensaje de error.
 */
const obtenerPerfilPorId = async (req, res) => {
    try {
        const { id } = req.params; // Obtenemos el ID de la URL
        const pathArchivo = path.join(__dirname, '../data/usuarios.json');
        const data = await fs.readFile(pathArchivo, 'utf8');
        const usuarios = JSON.parse(data);

        // Buscamos al usuario comparando el ID (convertimos el ID a número)
        const usuarioEncontrado = usuarios.find(u => u.id === parseInt(id));

        if (!usuarioEncontrado) {
            return res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
        }

        // Devolvemos los datos (sin el password por seguridad)
        const { password, ...datosPublicos } = usuarioEncontrado;
        return res.status(200).json(datosPublicos);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error interno al buscar el perfil" });
    }
};

module.exports = { obtenerPerfilPorId };