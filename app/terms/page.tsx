'use client';

import { FileText, Shield, AlertCircle, RefreshCw, Home, Scale, Users, Gavel } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';

export default function TermsOfService() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const termsData = [
        {
            icon: <FileText className="w-6 h-6 text-blue-400" />,
            title: "Acceptance of Terms",
            content: "By accessing or using our service, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.",
            gradient: "from-blue-400/10 to-blue-500/5"
        },
        {
            icon: <Shield className="w-6 h-6 text-green-400" />,
            title: "Use of the Service",
            content: "Our service is provided \"as is\" and \"as available\" without any warranties, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.",
            gradient: "from-green-400/10 to-green-500/5"
        },
        {
            icon: <Users className="w-6 h-6 text-purple-400" />,
            title: "User Responsibilities",
            content: "You are responsible for your use of our service and for any content you provide. You agree not to use the service for any unlawful purposes or in any way that could damage our service or reputation.",
            gradient: "from-purple-400/10 to-purple-500/5"
        },
        {
            icon: <Scale className="w-6 h-6 text-amber-400" />,
            title: "Intellectual Property",
            content: "All content, features, and functionality of our service are owned by us and are protected by copyright, trademark, and other intellectual property laws.",
            gradient: "from-amber-400/10 to-amber-500/5"
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-red-400" />,
            title: "Limitation of Liability",
            content: "In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
            gradient: "from-red-400/10 to-red-500/5"
        },
        {
            icon: <Gavel className="w-6 h-6 text-indigo-400" />,
            title: "Governing Law",
            content: "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.",
            gradient: "from-indigo-400/10 to-indigo-500/5"
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-teal-400" />,
            title: "Changes to Terms",
            content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.",
            gradient: "from-teal-400/10 to-teal-500/5"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-950 dark:via-black dark:to-orange-950/10">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-32 left-20 h-72 w-72 bg-orange-400 rounded-full opacity-5 blur-3xl" />
                <div className="absolute bottom-32 right-20 h-56 w-56 bg-red-400 rounded-full opacity-5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl" />
            </div>

            <motion.div 
                className="relative max-w-6xl mx-auto px-6 py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.header 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <div className="mb-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-200/20 dark:border-orange-500/20 text-orange-500 dark:text-orange-400 text-sm font-medium mb-6"
                        >
                            <Gavel className="w-4 h-4" />
                            <span>Legal Agreement</span>
                        </motion.div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                        <span className="font-bold text-red-400">
                            Aeon
                            <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
                        </span>{' '}
                        <span className="block bg-gradient-to-r from-gray-800 via-gray-900 to-orange-500 dark:from-gray-200 dark:via-gray-100 dark:to-orange-400 text-transparent bg-clip-text">
                            Terms of Service
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Please read these terms carefully before using our service. Your use of our service constitutes acceptance of these terms.
                    </p>
                </motion.header>

                {/* Terms Sections */}
                <motion.div 
                    className="grid gap-8 mb-16"
                    variants={containerVariants}
                >
                    {termsData.map((term, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Card className={`overflow-hidden border-0 bg-gradient-to-br ${term.gradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}>
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6">
                                        <motion.div 
                                            className="flex-shrink-0 p-3 rounded-full bg-white/60 dark:bg-black/40 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        >
                                            {term.icon}
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                                {term.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                                {term.content}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Information */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <Card className="h-full backdrop-blur-sm bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/30 dark:border-blue-500/20 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-blue-500/10">
                                        <Scale className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        Fair Use Policy
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our service is designed for reasonable personal and commercial use. We reserve the right to limit access if usage becomes excessive or harmful to our service quality.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="h-full backdrop-blur-sm bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/30 dark:border-green-500/20 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-green-500/10">
                                        <Users className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        Community Guidelines
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We encourage a respectful and collaborative community. Any misuse, spam, or harmful behavior may result in restrictions or termination of access.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.section 
                    className="text-center"
                    variants={itemVariants}
                >
                    <Card className="backdrop-blur-sm bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200/30 dark:border-orange-500/20 shadow-xl">
                        <CardContent className="p-12">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                    Questions about our Terms?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                    If you have any questions about these Terms of Service, please contact us. We&apos;re here to help clarify any concerns you may have.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                    <Link href="/">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                                                <Home className="w-5 h-5 mr-2" />
                                                Return to Home
                                            </Button>
                                        </motion.div>
                                    </Link>
                                    <Link href="/privacy">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button variant="outline" className="border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/20">
                                                <Shield className="w-5 h-5 mr-2" />
                                                View Privacy Policy
                                            </Button>
                                        </motion.div>
                                    </Link>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.section>
            </motion.div>
        </div>
    );
}
