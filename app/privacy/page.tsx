import { Shield, Info, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-6 ">
            <header className="text-center mt-10 pb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
                    <span className="font-bold text-red-400">
                        UÍ
                        <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
                    </span>{' '}
                    Privacy Policy
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Your privacy is important to us
                </p>
            </header>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-6 h-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        No Data Collection
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We want to inform you that we do not collect any personal information from our users. Our service is designed to respect your privacy, and we do not track, store, or process any personal data.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <Info className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Use of Our Service
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    You can use our service without providing any personal information. We do not use cookies, analytics, or any other tracking technologies.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <RefreshCw className="w-6 h-6 text-green-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Changes to This Policy
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
            </section>

            <section className="text-center">
                <Link href="/">
                    <Button variant="outline">
                        <Home className="w-5 h-5 mr-2" />
                        Return to Home
                    </Button>
                </Link>
            </section>
        </div>
    );
}
