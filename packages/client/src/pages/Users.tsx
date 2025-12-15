import Sidebar from '../components/Sidebar';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Users = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const users = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', lastActive: '1 day ago' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive', lastActive: '2 weeks ago' },
        { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active', lastActive: '5 mins ago' },
        { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'Viewer', status: 'Pending', lastActive: 'N/A' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            case 'Inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-400';
            case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden text-slate-900 dark:text-slate-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                <header className="md:hidden flex justify-between mb-8 items-center">
                    <span className="font-bold text-xl text-blue-600">SaaSify</span>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu size={24} className="dark:text-white" />
                    </button>
                </header>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="absolute right-0 top-0 h-full w-64 bg-slate-900 p-4 text-white shadow-xl">
                            <div className="flex justify-end mb-4">
                                <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
                            </div>
                            <div className="space-y-4">
                                <div className="block py-2">Dashboard</div>
                                <div className="block py-2 font-bold text-blue-400">Users</div>
                                <div className="block py-2">Billing</div>
                                <div className="block py-2">Settings</div>
                                <div className="block py-2 text-red-400">Logout</div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold dark:text-white">Users</h1>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add User
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-slate-700/50 border-b border-gray-100 dark:border-slate-700">
                                    <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300">Name</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300">Role</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300">Status</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300">Last Active</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-300 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-medium dark:text-white">{user.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.role}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{user.lastActive}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm mr-3">Edit</button>
                                            <button className="text-red-500 hover:text-red-600 font-medium text-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Users;
