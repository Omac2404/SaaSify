import Sidebar from '../components/Sidebar';

import { Bell, Lock, User } from 'lucide-react';

const Settings = () => {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden text-slate-900 dark:text-slate-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                <h1 className="text-3xl font-bold mb-8 dark:text-white">Settings</h1>

                <div className="space-y-6 max-w-4xl">
                    {/* Profile Section */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <User className="text-blue-600 dark:text-blue-400" />
                            <h2 className="text-xl font-bold dark:text-white">Profile Settings</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
                                <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" defaultValue="admin@saasify.com" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </div>
                        <div className="mt-6 text-right">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Bell className="text-blue-600 dark:text-blue-400" />
                            <h2 className="text-xl font-bold dark:text-white">Notifications</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium dark:text-white">Email Alerts</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Receive daily summaries</div>
                                </div>
                                <div className="relative inline-block w-12 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer bg-green-500">
                                    <span className="translate-x-6 inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow ring-0"></span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium dark:text-white">Push Notifications</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Receive real-time alerts</div>
                                </div>
                                <div className="relative inline-block w-12 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer bg-gray-200 dark:bg-slate-600">
                                    <span className="translate-x-0 inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow ring-0"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="text-blue-600 dark:text-blue-400" />
                            <h2 className="text-xl font-bold dark:text-white">Security</h2>
                        </div>
                        <button className="text-blue-600 hover:underline">Change Password</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
