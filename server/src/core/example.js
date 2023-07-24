/*
                        table_name, object_like_prisma
  const usuario = new API("usuario", {
    nombre: "string",
    email: "string",
    password: "string",
    avatar: "string",
  });
                                      | Here only add []
                                      |
                                      v
  app.use("/usuario", upload.single("avatar[]"), getImageString("avatar"), usuario.router);
*/
