/*Se declaran las variables fs(File System) y path(Ruta) para simular el logueo de un usuario que se creo en ..data/usuarios.json*/ 
const fs = require('fs');
const path = require('path');

const login = (req, res) => {
    const { email, password } = req.body;
    
    const usuariosPath = path.join(__dirname, '../data/usuarios.json');
    // Leemos el archivo JSON
    const usuarios = JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));

    // Buscamos si existe el usuario y coincide la contraseña
    const usuarioValido = usuarios.find(u => u.email === email && u.password === password);

    if (usuarioValido) {
        return res.status(200).json({ 
            msg: "Correcto", 
            usuario: usuarioValido.nombre 
        });
    } else {
        return res.status(401).json({ 
            msg: "Incorrecto" 
        });
    }
};

module.exports = { login };
