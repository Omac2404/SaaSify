import Sidebar from '../components/Sidebar';

const Billing = () => {
    const invoices = [
        { id: 'INV-001', date: 'Oct 01, 2023', amount: '$29.00', status: 'Paid' },
        { id: 'INV-002', date: 'Sep 01, 2023', amount: '$29.00', status: 'Paid' },
        { id: 'INV-003', date: 'Aug 01, 2023', amount: '$29.00', status: 'Paid' },
    ];

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 overflow-hidden text-slate-900 dark:text-slate-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                <h1 className="text-3xl font-bold mb-8 dark:text-white">Billing & Plans</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Current Plan */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-lg font-bold mb-1 dark:text-white">Current Plan</h2>
                                <p className="text-gray-500 dark:text-gray-400">You are on the <span className="font-semibold text-blue-600">Pro Plan</span></p>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Active</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 mb-2">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">18 days remaining in this billing cycle</p>
                        <button className="px-4 py-2 bg-white border border-gray-300 dark:bg-slate-700 dark:border-slate-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                            Change Plan
                        </button>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
                        <h2 className="text-lg font-bold mb-4 dark:text-white">Payment Method</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center mr-3 text-white text-xs font-bold">VISA</div>
                            <div>
                                <div className="font-medium dark:text-white">•••• 4242</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Expires 12/25</div>
                            </div>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:underline">Update Payment Method</button>
                    </div>
                </div>

                {/* Invoices */}
                <h2 className="text-xl font-bold mb-4 dark:text-white">Invoice History</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-slate-700/50">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Invoice ID</th>
                                <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Date</th>
                                <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Amount</th>
                                <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300">Status</th>
                                <th className="px-6 py-4 font-semibold text-sm text-gray-600 dark:text-gray-300 text-right">Download</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                            {invoices.map((inv) => (
                                <tr key={inv.id}>
                                    <td className="px-6 py-4 font-medium dark:text-white">{inv.id}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{inv.date}</td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-gray-200">{inv.amount}</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full dark:bg-green-900/30 dark:text-green-400">{inv.status}</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors">PDF</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Billing;
