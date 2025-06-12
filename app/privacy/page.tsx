'use client';

import { Shield, Info, RefreshCw, Home, Eye, Lock, Cookie } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';

export default function PrivacyPolicy() {
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

    const sections = [
        {
            icon: <Shield className="w-6 h-6 text-red-400" />,
            title: "No Data Collection",
            content: "We want to inform you that we do not collect any personal information from our users. Our service is designed to respect your privacy, and we do not track, store, or process any personal data.",
            gradient: "from-red-400/10 to-red-500/5"
        },
        {
            icon: <Eye className="w-6 h-6 text-orange-400" />,
            title: "Use of Our Service",
            content: "You can use our service without providing any personal information. We do not use cookies, analytics, or any other tracking technologies.",
            gradient: "from-orange-400/10 to-orange-500/5"
        },
        {
            icon: <Lock className="w-6 h-6 text-red-500" />,
            title: "Data Security",
            content: "Since we don't collect data, there's no personal information that could be compromised. Your interactions with our service remain completely private.",
            gradient: "from-red-500/10 to-red-600/5"
        },
        {
            icon: <Cookie className="w-6 h-6 text-amber-500" />,
            title: "Cookies & Tracking",
            content: "We do not use cookies for tracking purposes. Any essential cookies used are solely for basic functionality and do not contain personal information.",
            gradient: "from-amber-400/10 to-amber-500/5"
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-green-500" />,
            title: "Changes to This Policy",
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
            gradient: "from-green-400/10 to-green-500/5"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/30 dark:from-gray-950 dark:via-black dark:to-red-950/10">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 h-64 w-64 bg-red-400 rounded-full opacity-5 blur-3xl" />
                <div className="absolute bottom-20 left-20 h-48 w-48 bg-orange-400 rounded-full opacity-5 blur-3xl" />
            </div>

            <motion.div 
                className="relative max-w-5xl mx-auto px-6 py-20"
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-200/20 dark:border-red-500/20 text-red-500 dark:text-red-400 text-sm font-medium mb-6"
                        >
                            <Shield className="w-4 h-4" />
                            <span>Privacy Protected</span>
                        </motion.div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                        <span className="font-bold text-red-400">
                            Aeon
                            <span className="text-gray-800 dark:text-[#E7E9EC]">-Ui</span>
                        </span>{' '}
                        <span className="block bg-gradient-to-r from-gray-800 via-gray-900 to-red-500 dark:from-gray-200 dark:via-gray-100 dark:to-red-400 text-transparent bg-clip-text">
                            Privacy Policy
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your privacy is our priority. We believe in transparency and protecting your personal information.
                    </p>
                </motion.header>

                {/* Privacy Sections */}
                <motion.div 
                    className="grid gap-8 mb-16"
                    variants={containerVariants}
                >
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Card className={`overflow-hidden border-0 bg-gradient-to-br ${section.gradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}>
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6">
                                        <motion.div 
                                            className="flex-shrink-0 p-3 rounded-full bg-white/60 dark:bg-black/40 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        >
                                            {section.icon}
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                                {section.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.section 
                    className="text-center"
                    variants={itemVariants}
                >
                    <Card className="backdrop-blur-sm bg-gradient-to-r from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200/30 dark:border-red-500/20 shadow-xl">
                        <CardContent className="p-12">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                    Questions about our Privacy Policy?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                    We&apos;re committed to transparency. If you have any questions about how we handle your privacy, feel free to reach out.
                                </p>
                                <Link href="/">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg">
                                            <Home className="w-5 h-5 mr-2" />
                                            Return to Home
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.section>
            </motion.div>
        </div>
    );
}
