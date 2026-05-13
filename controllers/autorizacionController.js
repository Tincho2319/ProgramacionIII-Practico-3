const fs = require('fs');
const path = require('path');

const login = (req, res) => {
    const { email, password } = req.body;

    const usuarios = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, '../data/usuarios.json'),
            'utf-8'
        )
    );

    const usuarioValido = usuarios.find(
        u => u.email === email && u.password === password
    );

    if (usuarioValido) {
        return res.status(200).json({
            msg: 'Correcto',
            usuario: usuarioValido.nombre
        });
    }

    return res.status(401).json({
        msg: 'Incorrecto'
    });
};

module.exports = {
    login
};