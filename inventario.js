let arrayJuegos = [
  {nombre: "Salón de Fiestas", precio: 40000, foto: "foto3.jpg", descripcion: "Salon de fiestas Taurum, incluye freezer grande, horno pizzero, microondas, aire acondicionado frio calor, y ventilador. Se entrega limpio a las 14hs hasta las 4am. Al finalizar nos encargamos nosotros de la limpieza. La capacidad del salón es hasta 120 personas."},
  {nombre: "Dj, Sonido e Iluminación", precio: 30000, foto: "sonido.jpg", descripcion: "Dj en vivo mas sonido e iluminación en el salón, el servicio es de 7 horas. En nuestro salón"},
  {nombre: "Proyector y Pantalla", precio: 16000, foto: "pantalla.jpg", descripcion: "Proyector mas pantalla grande para la proyección de video. En nuestro salón"},
  {nombre: "Animador", precio: 22000, foto: "animador.jpg", descripcion: "El animador es como el locutor de la fiesta, el que le pone onda, no es animación para niños. El servicio es de 6 horas En nuestro salón"},
  {nombre: "Parlante chico mas luces", precio: 15000, foto: "parlante.jpg", descripcion: "Parlante chico con conección bluetooth, cable o pendrive. Cuenta con luz láser y 2 luces audiorítmicas. En nuestro salón"},
  {nombre: "Ornamentación", precio: 25000, foto: "foto7.jpg", descripcion: "La ornamentación es para nuestro salón, incluye colgado y armado de telas, cortinado, accesorios y algunos globos, puede agregar mas si desea."},
  {nombre: "Servicio de vestir", precio: 4000, foto: "foto8.jpg", descripcion: "El servicio de vestir mesas y sillas incluye solo el trabajo de armar 1 mesa con su mantel y cubremesas mas las 10 sillas con sus vestidos y moños, tambien servilleteros y centros de mesa, copas, etc si las encarga. En nuestro salón"},
  {nombre: "Panchera Grande", precio: 7000, foto: "panchera.jpg", descripcion: "Panchera grande, no incluye el gas, puede pedir con gas sumandole el precio de la carga de gas de la garrafa. Costo de envío dependiendo la zona."},
  {nombre: "Candelabro 15 velas", precio: 6000, foto: "candelabro.jpg", descripcion: "Candelabro para poner las 15 velas de los 15 años. Costo de envío dependiendo la zona."},
  {nombre: "Freezer Grande", precio: 8500, foto: "freezer.jpg", descripcion: "Freezer grande 460 litros 1,65mts x 0,70mt. Costo de envío dependiendo la zona."},
  {nombre: "Barra de Tragos", precio: 7000, foto: "barra.jpg", descripcion: "Barra de tragos con luces mas enchufes para licuadora y demas accesorios que necesite enchufar. Costo de envío dependiendo la zona."},
  {nombre: "Sillas Princesas", precio: 180, foto: "silla.jpg", descripcion: "Silla plastica negra estilo princesa. Costo de envío dependiendo la zona."},
  {nombre: "Vestido de Sillas", precio: 180, foto: "vestido.jpg", descripcion: "Vestido para silla princesa color blanco. Costo de envío dependiendo la zona."},
  {nombre: "Lazo de Silla", precio: 70, foto: "moños.jpg", descripcion: "Lazos para los moños de las sillas, colores a elección. Costo de envío dependiendo la zona."},
  {nombre: "Mesa Ovalada", precio: 1500, foto: "ovalada.jpg", descripcion: "Mesa ovalada, para 10 personas. Costo de envío dependiendo la zona."},
  {nombre: "Mesa Rectangular", precio: 1500, foto: "rectangular.jpg", descripcion: "Mesa rectangular, para 10 personas, medida aproximada 1.80 metros. Costo de envío dependiendo la zona."},
  {nombre: "Mantel Ovalado", precio: 1500, foto: "mantelred.jpg", descripcion: "Mantel ovalado color blanco. Costo de envío dependiendo la zona."},
  {nombre: "Mantel Rectangular", precio: 1500, foto: "mantrect.jpg", descripcion: "Mantel rectangular color blanco. Costo de envío dependiendo la zona."},
  {nombre: "Camino de Mesa", precio: 500, foto: "camino.jpg", descripcion: "Caminos de mesa de colores varios. Costo de envío dependiendo la zona."},
  {nombre: "Alfombra Roja", precio: 6000, foto: "alfombra.jpg", descripcion: "Alfombra roja de unos 10 metros de largo por 1.50 para entradas. Costo de envío dependiendo la zona."},
  {nombre: "Candy Bar Carrosa", precio: 7500, foto: "candy.jpg", descripcion: "Candy bar grande en forma de carrosa, mesa con marco de selfile atras y ruedas de carruaje mas caballo. Para poner la torta y/o mesa dulce. Costo de envío dependiendo la zona."},
  {nombre: "Cuchillo", precio: 25, foto: "cuchillo.jpg", descripcion: "Cuchillo. Costo de envío dependiendo la zona."},
  {nombre: "Tenedor", precio: 25, foto: "tenedor.jpg", descripcion: "Tenedor. Costo de envío dependiendo la zona."},
  {nombre: "Cuchara", precio: 25, foto: "cuchara.jpg", descripcion: "Cuchara. Costo de envío dependiendo la zona."},
  {nombre: "Cucharita", precio: 25, foto: "cucharita.jpg", descripcion: "Cucharita postre. Costo de envío dependiendo la zona."},
  {nombre: "Panera", precio: 130, foto: "panera.jpg", descripcion: "Panera plástica. Costo de envío dependiendo la zona."},
  {nombre: "Jarra de Vidrio", precio: 200, foto: "jarra.jpg", descripcion: "Jarra de vidrio de 1 litro aproximadamente. Costo de envío dependiendo la zona."},
  {nombre: "Bandeja de Moso", precio: 300, foto: "bandeja.jpg", descripcion: "Bandeja de moso plateada grande. Costo de envío dependiendo la zona."},
  {nombre: "Salero", precio: 120, foto: "salero.jpg", descripcion: "Salero. Costo de envío dependiendo la zona."},
  {nombre: "Servilletero", precio: 130, foto: "servilletero.jpg", descripcion: "Servilletero de metal. Costo de envío dependiendo la zona."},
  {nombre: "Ensaladera", precio: 200, foto: "ensaladera.jpg", descripcion: "Ensaladera de vidrio. Costo de envío dependiendo la zona."},
  {nombre: "Compotera", precio: 170, foto: "compotera.jpg", descripcion: "Compotera de vidrio. Costo de envío dependiendo la zona."},
  {nombre: "Hielera", precio: 220, foto: "hielera.jpg", descripcion: "Hilera de metal con pinza. Costo de envío dependiendo la zona."},
  {nombre: "Platito de Postre", precio: 120, foto: "platito.jpg", descripcion: "Plato chico de postre, de porcelana. Costo de envío dependiendo la zona."},
  {nombre: "Plato playo", precio: 160, foto: "plato.jpg", descripcion: "Plato playo principal de porcelana. Costo de envío dependiendo la zona."},
  {nombre: "Copa", precio: 100, foto: "copa.jpg", descripcion: "Copa de vidrio estilo copa de vino. Costo de envío dependiendo la zona."},
  {nombre: "Copa Champagne", precio: 100, foto: "champagne.jpg", descripcion: "Copa fina para champagne. Costo de envío dependiendo la zona."},
  {nombre: "Vaso Trago Largo", precio: 100, foto: "vaso.jpg", descripcion: "Vaso fino alto estilo trago largo. Costo de envío dependiendo la zona."},
  {nombre: "Taza con Platito", precio: 180, foto: "taza.jpg", descripcion: "Taza con platito de porcelana. Costo de envío dependiendo la zona."},
  {nombre: "Azucarera", precio: 160, foto: "azucarera.jpg", descripcion: "Azucarera de vidrio y metal. Costo de envío dependiendo la zona."},
  {nombre: "Luces Carmesí", precio: 2800, foto: "carmesi.jpg", descripcion: "Luces carmesí de 11 metros de largo con enchufe hembra en el final para agregar mas tiras de luces si necesita cubrir más espacio. Costo de envío dependiendo la zona."},
  {nombre: "Tela para ornamentar", precio: 2800, foto: "tela.jpg", descripcion: "Telas de diferentes colores para ornamentar de 10 metros x 1.50 metros. Costo de envío dependiendo la zona."},
  {nombre: "Disfraz Cabezón", precio: 5000, foto: "cabezon.jpg", descripcion: "Disfraz cabezón para adulto de Mickey, Barney, Sapo Pepe, o Pablo de Backyardigan. Costo de envío dependiendo la zona."},
  {nombre: "Toro Mecánico", precio: 42000, foto: "toroloco.jpg", descripcion: "Toro mecánico, necesita un lugar mínimo de 5x5. El alquiler es por 2hs. Hora extra: $20000"},
  {nombre: "Reloj Mecánico", precio: 42000, foto: "reloj.jpg", descripcion: "Reloj mecánico, es como una aguja de reloj que da vueltas y los niños tienen que saltarla, capacidad 4 niños a la ves, necesita un lugar mínimo de 5x5. El alquiler es por 2hs. Hora extra: $20000"},
  {nombre: "Ping Pong", precio: 7000, foto: "pingpong.jpg", descripcion: "Mesa de ping pong. El alquiler es por 3hs. Hora extra: $2000"},
  {nombre: "Inflable 3x3 de Princesas", precio: 10000, foto: "princesas.jpg", descripcion: "Inflable de princesas de 3x3. El alquiler es por 3hs. Hora extra: $3000"},
  {nombre: "Inflable 3x3 de Ben 10", precio: 10000, foto: "ben10.jpg", descripcion: "Inflable de Ben 10 de 3x3. El alquiler es por 3hs. Hora extra: $3000"},
  {nombre: "Inflable 3x4 Unisex", precio: 13000, foto: "3x4.jpg", descripcion: "Inflable unisex de 3x4. El alquiler es por 3hs. Hora extra: $3500"},
  {nombre: "Inflable 3x6 Salida de Tobogán", precio: 15000, foto: "tobogan.jpg", descripcion: "Inflable con salida de tobogán de 3x6. El alquiler es por 3hs. Hora extra: $4000"},
  {nombre: "Ring de Lucha", precio: 15000, foto: "ring.jpg", descripcion: "Ring de lucha de 5x5. El alquiler es por 3hs. Hora extra: $3000"},
  {nombre: "Plaza Blanda de 6", precio: 9000, foto: "plaza6.jpg", descripcion: "Plaza blanda de 6 nombres. El alquiler es por 3hs. Hora extra: $3000"},
  {nombre: "Plaza Blanda de 10", precio: 12000, foto: "plaza10.jpg", descripcion: "Plaza blanda de 10 nombres. El alquiler es por 3hs. Hora extra: $3000"},
  {nombre: "Plaza Blanda de 15", precio: 15000, foto: "plaza15.jpg", descripcion: "Plaza blanda de 15 nombres. El alquiler es por 3hs. Hora extra: $4000"},
  {nombre: "Metegol", precio: 8000, foto: "metegol.jpg", descripcion: "Mesa de metegol. El alquiler es por 3hs.  Hora extra: $2000"},
  {nombre: "Tejo", precio: 8000, foto: "tejo.jpg", descripcion: "Mesa de tejo, juegan de a 2. El alquiler es por 3hs. Hora extra: $2000"},
  {nombre: "Tri Tejo", precio: 10000, foto: "tritejo.jpg", descripcion: "Mesa de tejo para que  jueguen de a 3. El alquiler es por 3hs. Hora extra: $2000"},
  {nombre: "Penta Tejo", precio: 14000, foto: "pentatejo.jpg", descripcion: "Mesa de tejo, para que jueguen de a 5. El alquiler es por 3hs. Hora extra: $3000"}
]
