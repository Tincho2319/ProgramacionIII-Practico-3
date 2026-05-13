const fs = require('fs/promises');
const path = require('path');

const getPerfilById = async (req, res) => {
    try {
        const ruta = path.join(__dirname, '../data/usuarios.json');
        const data = await fs.readFile(ruta, 'utf-8');
        const usuarios = JSON.parse(data);

        const { id } = req.params;
        const usuarioEncontrado = usuarios.find(u => u.id === parseInt(id));

        if (!usuarioEncontrado) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        res.status(200).json(usuarioEncontrado);
    } catch (error) {
        console.log("Error en el back de perfil: ", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

module.exports = { getPerfilById };