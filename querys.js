/*
	Se agrega la colección tiendas a la DB local
*/
db.tiendas.insertMany([
  {
    _id: ObjectId("622e85da222456000d35df87"),
    categoria: {
      nombre: "Abarrotes y Cocina",
      subcategorias: [
        {
          nombre: "Abarrotes",
        },
      ],
    },
    direccion: {
      colonia: "Cuautlixco",
      numeroExterior: "8",
      entidadFederativa: "Morelos",
      municipio: "CUAUTLA",
      calle: "Las Tazas",
      codigoPostal: "62749",
    },
    nombrePropietario: "MARTIN VIEYRA GODINA",
    nombreTienda: "Abarrotes angel",
    fechaHoraAlta: ISODate("2022-04-10T18:01:30.000Z"),
  },
  {
    _id: ObjectId("622e86ee222456000d35df95"),
    categoria: {
      nombre: "Aluminio y Herrería",
      subcategorias: [
        {
          nombre: "Aluminiero(a)",
        },
      ],
    },
    direccion: {
      colonia: "Reserva Territorial los Sauces",
      numeroExterior: "32",
      entidadFederativa: "Nayarit",
      municipio: "TEPIC",
      calle: "Francisco Márquez",
      codigoPostal: "63197",
    },
    nombrePropietario: "JOSE MANUEL PLATA LAVANDERA",
    nombreTienda: "Man",
    fechaHoraAlta: ISODate("2022-03-13T18:06:06.000Z"),
  },
  {
    _id: ObjectId("622e874e82481b000d4fa796"),
    categoria: {
      nombre: "Servicios profesionales",
      subcategorias: [
        {
          nombre: "Maestro(a)",
        },
        {
          nombre: "Profesor(a)",
        },
      ],
    },
    direccion: {
      colonia: "Villa Granada",
      numeroExterior: "130",
      entidadFederativa: "Puebla",
      municipio: "Tehuacán",
      calle: "Calle 6 Poniente",
      codigoPostal: "75700",
    },
    nombrePropietario: "ISRAEL JUAREZ GARCIA",
    nombreTienda: "Toño Marín Maestro",
    fechaHoraAlta: ISODate("2022-04-13T18:07:42.000"),
    entregasDomicilio: false,
  },
  {
    _id: ObjectId("622e87ab82481b000d4fa79b"),
    categoria: {
      nombre: "Abarrotes y Cocina",
      subcategorias: [
        {
          nombre: "Bocadillos",
        },
      ],
    },
    descripcionTienda: "Botanitas",
    direccion: {
      calle: "Rubén Jaramillo",
      numeroExterior: "286",
      colonia: "9na. Seccion (Barrio Santa Cruz )",
      codigoPostal: "70030",
      municipio: "JUCHITÁN DE ZARAGOZA",
      entidadFederativa: "Oaxaca",
    },
    nombrePropietario: "VIRGINIA LUIS MONTERO",
    nombreTienda: "Botanitas Susi",
    fechaHoraAlta: ISODate("2022-04-05T18:09:15.000Z"),
    entregasDomicilio: false,
  },
  {
    _id: ObjectId("622e8da282481b000d4fa7d4"),
    categoria: {
      nombre: "Abarrotes y Cocina",
      subcategorias: [
        {
          nombre: "Frutas",
        },
      ],
    },
    descripcionTienda: "mangos enchilados y pepinos locos",
    direccion: {
      colonia: "San Pedro",
      numeroExterior: "75",
      entidadFederativa: "Ciudad de México",
      municipio: "IZTAPALAPA",
      calle: "Allende",
      codigoPostal: "09000",
    },
    nombrePropietario: "MARIA DOLORES BUSTAMANTE MUÑIZ",
    nombreTienda: "Mango enchilados",
    fechaHoraAlta: ISODate("2022-04-11T18:34:42.000Z"),
    entregasDomicilio: false,
  },
  {
    _id: ObjectId("624b8ee3318361698eb65c62"),
    categoria: {
      nombre: "Abarrotes y Cocina",
      subcategorias: [
        {
          nombre: "Abarrotes",
        },
        {
          nombre: "Bebidas",
        },
        {
          nombre: "Comida",
        },
      ],
    },
    descripcionTienda: "Barrotes y recargas",
    direccion: {
      colonia: "Centro",
      numeroExterior: "4",
      entidadFederativa: "Chiapas",
      municipio: "SUCHIATE",
      calle: "Central Calle Oriente",
      codigoPostal: "30840",
    },
    nombrePropietario: "GLENDY YESENY REYES RIVERA",
    nombreTienda: "Abarrotes yesi",
    fechaHoraAlta: ISODate("2022-03-13T19:10:04.000Z"),
    entregasDomicilio: false,
  },
  {
    _id: ObjectId("622fa681d29bb6000e03ecba"),
    categoria: {
      nombre: "Aluminio y Herrería",
      subcategorias: [
        {
          nombre: "Cristal",
        },
      ],
    },
    descripcionTienda: "vidrieria",
    direccion: {
      colonia: "Insurgentes",
      numeroExterior: "SN",
      entidadFederativa: "Hidalgo",
      municipio: "TULANCINGO DE BRAVO",
      calle: "Avenida 21 de Marzo",
      codigoPostal: "43600",
    },
    nombrePropietario: "ALEJANDRO FRANCISCO MONROY DURAN",
    nombreTienda: "ALUMONSA",
    fechaHoraAlta: ISODate("2022-03-14T14:33:05.000Z"),
    entregasDomicilio: false,
  },
]);

/*
	1.-Devolver el numero de registros con la categoria Abarotes y Cocina, así mismo  cuantos pertenecen a la categoria Aluminio y Herrería
*/
db.tiendas.aggregate([
  {
    $match: {
      $or: [
        { "categoria.nombre": "Abarrotes y Cocina" },
        { "categoria.nombre": "Aluminio y Herrería" },
      ],
    },
  },
  { $group: { _id: "$categoria.nombre", total: { $sum: 1 } } },
]);

/*
	2.-Devolver cuantas tiendas tienen mas de una sub categoria.
*/
db.tiendas.find({ $where: "this.categoria.subcategorias.length > 1" }).count();

/*
	3.-Tiendas creadas después del 04/04/2022.
*/
db.tiendas
  .find({ fechaHoraAlta: { $gte: new ISODate("2022-04-04") } })
  .pretty();
db.tiendas.find({ fechaHoraAlta: { $gte: new ISODate("2022-04-04") } }).count();
