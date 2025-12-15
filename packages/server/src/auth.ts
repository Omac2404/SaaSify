import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUser, ILoginPayload } from '@saas/auth-types';

export const authRouter = Router();

// In-memory user store
const USERS: IUser[] = [
    {
        id: '1',
        username: 'admin',
        email: 'admin@saas.com'
    }
];

// Hardcoded hash for password 'password123'
// Generated with: await bcrypt.hash('password123', 10)
const HARDCODED_HASH = '$2b$10$EpW./y/W.y/W.y/W.y/W.y/W.y/W.y/W.y/W.y/W.y/W.y/W.y/W.'; // This is a dummy, I will generate a real one in the code below or use a simple logic for now since I can't await top level easily in this snippet pattern without IIFE, but actually I can just do it in the login route if I want to simulate it properly.
// Better approach: Let's actually hash it on startup or just compare against a known hash.
// For the sake of the demo, I'll allow 'admin' / 'password123'.

// Let's generate a real hash for 'password123' to be safe and correct.
const SALT_ROUNDS = 10;
let validUserHash = '';

(async () => {
    validUserHash = await bcrypt.hash('password123', SALT_ROUNDS);
})();

// Simple session store (User ID -> Boolean)
const sessions: Record<string, boolean> = {};

authRouter.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body as ILoginPayload;

    const user = USERS.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // In a real app we compare against stored hash.
    // For this specific requirement, we must use bcrypt.
    const match = await bcrypt.compare(password, validUserHash);

    if (match) {
        // Create session
        const sessionId = Math.random().toString(36).substring(7);
        sessions[sessionId] = true; // Store session

        // Return cookie
        res.cookie('auth_token', sessionId, { httpOnly: true, sameSite: 'lax' });

        return res.json({ success: true, user });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

authRouter.get('/status', (req: Request, res: Response) => {
    const token = req.cookies['auth_token'];

    if (token && sessions[token]) {
        // For simplicity returning the admin user if session valid
        return res.json({ isAuthenticated: true, user: USERS[0] });
    }

    return res.json({ isAuthenticated: false });
});

authRouter.post('/logout', (req: Request, res: Response) => {
    const token = req.cookies['auth_token'];
    if (token) {
        delete sessions[token];
    }
    res.clearCookie('auth_token');
    res.json({ success: true });
});
