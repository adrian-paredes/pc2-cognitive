conn = new Mongo();
db = conn.getDB("DockerP2");

db.estudiantes.insert(
  [
   {codigo: 77530974, nombre: 'Cristiano Ronaldo', correo: 'siuu@manchester.com', edad: 17}
 ]);
