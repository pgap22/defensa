import { prisma } from "../../db/prisma.js";

class Controller {
  constructor(validar, tabla) {
    this.validar = validar;
    this.tabla = tabla;
  }

  crear = async (req, res) => {
    try {
      const data = this.validar.crear.parse(req.body);
      
      const payload = await prisma[this.tabla].create({ data });

      return res.json({ ...payload });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };

  editar = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const data = this.validar.actualizar.parse(req.body);

      const payload = await prisma[this.tabla].update({ where: { id }, data });

      return res.json({ ...payload });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };

  leer = async (req, res) => {
    try {
      const data = await prisma[this.tabla].findMany();

      return res.json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };

  leerPorId = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const data = await prisma[this.tabla].findFirst({ where: { id } });

      return res.json({ ...data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };

  eliminarUno = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      await prisma[this.tabla].delete({ where: { id } });

      return res.json({ msg: "Se ha eliminado !" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}

export { Controller };
