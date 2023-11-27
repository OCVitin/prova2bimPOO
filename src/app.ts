import express from 'express';
import usuarioRoutes from './routes/usuarioRoute';
import leilaoRoutes from './routes/leilaoRoute';
import lanceRoutes from './routes/lanceRoute';

const app   = express();
const port  = 3000;

app.use(express.json());

app.use('/', usuarioRoutes);
app.use('/', lanceRoutes);
app.use('/', leilaoRoutes);

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});