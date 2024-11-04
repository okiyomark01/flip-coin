import express from 'express';
import predictionRoutes from './routes/prediction.routes';
import playerRoutes from './routes/player.routes';

const app = express();
app.use(express.json());

app.use('/api', predictionRoutes);
app.use('/api/player', playerRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
