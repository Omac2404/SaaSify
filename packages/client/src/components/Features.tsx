import { BarChart2, Shield, Zap, Globe, Smartphone, Layers } from 'lucide-react';

const FEATURE_LIST = [
    { icon: BarChart2, title: 'Advanced Analytics', desc: 'Track your growth with real-time charts and reports.' },
    { icon: Shield, title: 'Bank-Grade Security', desc: 'Your data is encrypted and protected 24/7.' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance globally.' },
    { icon: Globe, title: 'Global CDN', desc: 'Access your dashboard from anywhere with low latency.' },
    { icon: Smartphone, title: 'Mobile First', desc: 'Fully responsive design that works on any device.' },
    { icon: Layers, title: 'Seamless Integration', desc: 'Connects with your favorite tools seamlessly.' }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to manage your SaaS, right out of the box.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURE_LIST.map((feature, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
