const { io } = require("socket.io-client");
const readline = require("readline");

// 🔥 CAMBIA '192.168.X.X' POR LA IP DEL SERVIDOR 🔥
const socket = io("http://192.168.0.13:3000");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("👤 Ingresa tu nombre: ", (nombre) => {
    console.log("✍ Escribe tu mensaje:");

    rl.on("line", (mensaje) => {
        const fecha = new Date().toLocaleString();
        socket.emit("mensaje", { nombre, fecha, mensaje });
    });
});

socket.on("mensaje", (data) => {
    console.log(data);
});
