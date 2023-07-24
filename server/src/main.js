import { getImageString } from "./middleware/getImageString.js";
import { toDateField } from "./middleware/toDateField.js";
import { API } from "./core/API.js";
import { app, upload } from "./index.js";
import { prisma } from "./db/prisma.js";

function main() {
  /** YOUR CODE HERE **/
  const mascota = new API("animal", {
    nombre: "string",
    raza: "string",
    genero: "string",
    peso: "string",
    imagen: "string",
    fecha_nacimiento: "date",
    estilo: "string",
  });

  app.post("/mascota/buscar", async (req, res) => {
    try {
      const { nombre } = req.body;

      const animal = await prisma.animal.findFirst({
        where: { nombre },
      });

      if (!animal)
        return res.status(404).json({ error: "no existe el animal" });

      return res.status(200).json(animal);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "hubo un error" });
    }
  });

  
  app.use(
    "/mascota",
    upload.single("imagen[]"),
    getImageString("imagen"),
    toDateField("fecha_nacimiento"),
    mascota.router
  );
}

export default main;
