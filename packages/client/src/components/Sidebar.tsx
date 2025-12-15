import { LayoutDashboard, Users, CreditCard, Settings, LogOut, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(path) ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`;

    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen flex flex-col hidden md:flex">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    SaaSify
                </Link>
                <button onClick={toggleTheme} className="text-slate-400 hover:text-white transition-colors">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <Link to="/dashboard" className={linkClass('/dashboard')}>
                    <LayoutDashboard size={20} />
                    <span className="font-medium">Dashboard</span>
                </Link>
                <Link to="/users" className={linkClass('/users')}>
                    <Users size={20} />
                    <span className="font-medium">Users</span>
                </Link>
                <Link to="/billing" className={linkClass('/billing')}>
                    <CreditCard size={20} />
                    <span className="font-medium">Billing</span>
                </Link>
                <Link to="/settings" className={linkClass('/settings')}>
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-2 w-full text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
