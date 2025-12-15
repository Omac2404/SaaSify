import { Check } from 'lucide-react';

const PLANS = [
    {
        name: 'Starter', price: '$0', features: ['1 User', 'Basic Analytics', 'Community Support'],
        cta: 'Start Free', popular: false
    },
    {
        name: 'Pro', price: '$29', features: ['5 Users', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
        cta: 'Get Started', popular: true
    },
    {
        name: 'Enterprise', price: '$99', features: ['Unlimited Users', 'Custom Reporting', '24/7 Dedicated Support', 'SSO'],
        cta: 'Contact Sales', popular: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple Pricing</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Choose the plan that fits your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-blue-600 shadow-xl dark:shadow-blue-900/20' : 'border-gray-200 dark:border-slate-700 shadow-sm'} dark:bg-slate-800 flex flex-col transition-all`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">{plan.price}<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <Check size={18} className="text-green-500 mr-2" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
