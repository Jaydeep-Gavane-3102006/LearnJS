import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FileText, Shield, Info, Lock, Globe } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: <Info size={20} />,
      title: "Acceptance of Terms",
      content: "By accessing and using JS Master, you agree to be bound by these Terms and Conditions. Our platform is designed for educational purposes, and by using it, you acknowledge that you have read, understood, and agree to these terms in their entirety."
    },
    {
      icon: <Shield size={20} />,
      title: "Educational Content",
      content: "All content provided on JS Master is for educational and informational purposes only. While we strive for 100% accuracy, we do not guarantee the completeness or reliability of any code, tutorial, or resource. Users are responsible for their own learning progress and the application of code in their projects."
    },
    {
      icon: <Lock size={20} />,
      title: "Intellectual Property",
      content: "The content, including but not limited to lessons, projects, quiz questions, and the source code of this platform, is the property of JS Master. You are granted a limited, non-exclusive license to use these resources for personal, non-commercial educational purposes. Redistribution or commercial use of our content without express permission is strictly prohibited."
    },
    {
      icon: <Globe size={20} />,
      title: "User Conduct",
      content: "Users are expected to use the platform in a respectful and constructive manner. Any attempt to disrupt the service, scrape data, or use the platform for malicious purposes will result in a permanent ban. We maintain a dark-mode only, focused learning environment for everyone."
    },
    {
      icon: <Lock size={20} />,
      title: "Data Privacy",
      content: "We value your privacy. JS Master currently uses local storage to track your progress and does not require user accounts. We do not sell or share any user data. Any third-party resources linked on our platform are subject to their own respective privacy policies."
    }
  ];

  return (
    <Layout>
      <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6"
          >
            <FileText size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Terms & <span className="text-yellow-500">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Last Updated: March 16, 2026. Please read these terms carefully.
          </motion.p>
        </header>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 p-8 rounded-[2rem] hover:border-gray-600 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-700 rounded-2xl text-yellow-500 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{section.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-3xl text-center"
        >
          <p className="text-gray-400">
            By continuing to use JS Master, you agree to our policies. Thank you for being part of our community.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
