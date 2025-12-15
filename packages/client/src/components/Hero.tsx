import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-white dark:bg-slate-900 pt-20 pb-32 overflow-hidden transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
                    Manage your business <br className="hidden md:block" />
                    <span className="text-blue-600 dark:text-blue-400">with confidence</span>
                </h1>
                <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                    A comprehensive dashboard to streamline your operations, track metrics, and grow your revenue. Minimalist, fast, and secure.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/login" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                        Get Started <ArrowRight size={20} />
                    </Link>
                    <a href="#features" className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-slate-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        Learn More
                    </a>
                </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-full h-full max-w-7xl">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
};

export default Hero;
