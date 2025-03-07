const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("🔵 Un usuario se ha conectado.");

    socket.on("mensaje", (data) => {
        const mensajeFormateado = `[${data.nombre}][${data.fecha}]: ${data.mensaje}`;
        console.log(mensajeFormateado);
        io.emit("mensaje", mensajeFormateado);
    });

    socket.on("disconnect", () => {
        console.log("🔴 Un usuario se ha desconectado.");
    });
});

server.listen(3000, () => {
    console.log("✅ Servidor de chat activo en el puerto 3000");
});
