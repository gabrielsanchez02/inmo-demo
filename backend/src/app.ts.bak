import express, { Application } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al backend de InmoDemo' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});