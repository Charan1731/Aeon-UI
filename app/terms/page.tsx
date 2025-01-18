import { FileText, Shield, AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-6 ">
            <header className="text-center mt-10 pb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
                    <span className="font-bold text-red-400">
                        UÍ
                        <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
                    </span>{' '}
                    Terms of Service
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Please read these terms carefully before using our service
                </p>
            </header>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <FileText className="w-6 h-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Acceptance of Terms
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    By accessing or using our service, you agree to be bound by these
                    Terms of Service. If you disagree with any part of the terms, you may
                    not access the service.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Use of the Service
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our service is provided &quot;as is&quot; and &quot;as available&quot; without any
                    warranties, either express or implied. We do not warrant that the
                    service will be uninterrupted, secure, or error-free.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Limitation of Liability
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    In no event shall we be liable for any indirect, incidental, special,
                    consequential or punitive damages, including without limitation, loss
                    of profits, data, use, goodwill, or other intangible losses.
                </p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <RefreshCw className="w-6 h-6 text-green-500" />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Changes to Terms
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If
                    a revision is material, we will provide at least 30 days&apos; notice prior
                    to any new terms taking effect.
                </p>
            </section>

            <section className="text-center">
                <Link href="/">
                    <Button variant="outline">
                        <Home className="w-4 h-4 mr-2" />
                        Return to Home
                    </Button>
                </Link>
            </section>
        </div>
    );
}
