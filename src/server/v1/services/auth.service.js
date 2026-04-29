
import userRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const registerUser = async (user) => {

    //const { email } = user;
    const { email, username, role } = user;
    //buscamos el usuario por email y si ya existe podriamos lanzar un error
    const usuarioExiste = await userRepository.findByEmail(email);
    if (usuarioExiste) {
        const error = new Error("Ya existe un usuario con ese email");
        error.status = 409;
        throw error;
    };


    const existePorUsername = await userRepository.findByUsername(username);
    if (existePorUsername) {
        const error = new Error("Ya existe un usuario con ese nombre de usuario");
        error.status = 409;
        throw error;
    }


    const { password } = user;

    //encritamos el password con bcrypt
    //sobreescribir el password con el encriptado y eso se lo pasamos al create
    const hashedPassword = await bcrypt.hash(password, 10); //numero ideal es 12

    const plan = "plus"; 
    if (role == null) {
        role = "estudiante";
    }

    const userHash = { ...user, password: hashedPassword, plan, role };
    const usuarioCreado = await userRepository.create(userHash);
    
    return usuarioCreado;
}

//TODO agregar en la ruta un validador de password y emailuusername

export const loginUser = async (user) => {
    
    const { emailOUsername, password } = user;
    const usuarioDeBase = await userRepository.findByEmailOrUsername(emailOUsername);

    //los mensajes de error de login deben ser lo menos descriptivos para no avivar a los atacantes
    if (!usuarioDeBase) {
        const error = new Error("Credenciales incorrectas");
        error.status = 400;
        throw error;
    }

    //con el usuario de la base obtenemos su password 
    const { password: hashedPassword } = usuarioDeBase;

    //comparamos con bcrypt el password del usuario pasado por parametro
    //primero el password plano y segundo el hasheado
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    //si todo sale bien generamos el token
    if (!isPasswordValid) {
        const error = new Error("Credenciales incorrectas");
        error.status = 400;
        throw error;
    }

    // a partir de el usuario de la base agrega al token los datos que queremos compartir con el frontend
    const token = jwt.sign(
        //elegimos los datos a compartir 
        {
            userId: usuarioDeBase._id,
            username: usuarioDeBase.username,
            email: usuarioDeBase.email,
            role: usuarioDeBase.role,
            plan: usuarioDeBase.plan,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
    );
    return token;
}