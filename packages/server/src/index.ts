import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRouter } from './auth';

const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:5173', // Vite default port
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('SaaS Dashboard API');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
