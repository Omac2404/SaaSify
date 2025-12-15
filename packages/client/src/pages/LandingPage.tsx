import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />

            <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-12 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors">
                <p>&copy; {new Date().getFullYear()} SaaSify. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
