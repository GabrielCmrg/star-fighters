import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './router';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
