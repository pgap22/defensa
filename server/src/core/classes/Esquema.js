import z from "zod";

class Scheme {
  constructor(validar) {
    this.validar = validar
  }

  validaciones(schemaObj) {
    schemaObj = this.validar
    const fields = {};

    for (const key in schemaObj) {
      if (schemaObj.hasOwnProperty(key)) {
        const type = schemaObj[key];
        if (type.includes("/")) {
          // If type has a slash, it can be either of the two specified types
          const [type1, type2] = type.split("/");
          fields[key] = z.union([z[type1](), z[type2]()]);
        } else {
          fields[key] = z[type]();
        }
      }
    }
    const crear = z.object(fields);
    const actualizar = z.object(fields).partial();

    return { crear, actualizar };
  }
}

export { Scheme };
