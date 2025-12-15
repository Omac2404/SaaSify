import Sidebar from '../components/Sidebar';
import { DollarSign, Users, TrendingUp, Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const stats = [
        { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Active Users', value: '+2,350', change: '+180.1%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Sales', value: '+12,234', change: '+19%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Active Now', value: '+573', change: '+201', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    const chartData = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 },
    ];

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden text-slate-900 dark:text-slate-100 transition-colors">
            {/* Sidebar Desktop */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Mobile Header */}
                <header className="bg-white dark:bg-slate-800 shadow-sm md:hidden flex items-center justify-between p-4">
                    <div className="font-bold text-xl text-blue-600">SaaSify</div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu size={24} className="dark:text-white" />
                    </button>
                </header>

                {/* Mobile Sidebar Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
                        <div className="relative bg-slate-900 h-full w-64 p-4 text-white">
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold text-xl">SaaSify</span>
                                <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
                            </div>
                            {/* Mobile Nav Links */}
                            <div className="space-y-4">
                                <div className="block py-2">Dashboard</div>
                                <div className="block py-2">Users</div>
                                <div className="block py-2 text-red-400">Logout</div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="p-8">
                    <h1 className="text-3xl font-bold dark:text-white mb-8">Dashboard</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
                                        <stat.icon size={20} />
                                    </div>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="text-2xl font-bold dark:text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart & List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Revenue Chart */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-[400px] flex flex-col">
                            <h3 className="text-lg font-bold dark:text-white mb-4">Revenue Overview</h3>
                            <div className="flex-1 w-full min-h-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                                        <XAxis dataKey="name" stroke="#9CA3AF" />
                                        <YAxis stroke="#9CA3AF" />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        />
                                        <Bar dataKey="uv" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Recent Activity List */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-[400px] flex flex-col">
                            <h3 className="text-lg font-bold dark:text-white mb-4">Recent Activity</h3>
                            {/* OVERFLOW FIX: Added overflow-y-auto to allow scrolling if list is long, or adjust list size */}
                            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-slate-600">
                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <div key={i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                                            U{i}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium dark:text-white truncate">User {i} signed up</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
