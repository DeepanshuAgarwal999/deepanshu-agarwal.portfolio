'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  { question: 'What are your technical skills?', answer: 'I specialize in React, Next.js, TypeScript, Node.js, and cloud technologies like AWS. I also have experience with databases (PostgreSQL, MongoDB), Docker, and modern CI/CD practices.' },
  { question: 'What projects have you worked on?', answer: 'I\'ve worked on various projects including e-commerce platforms, AI-powered dashboards, social media applications, and SaaS products. Check out my Projects section for detailed case studies!' },
  { question: 'Are you available for work?', answer: 'Yes! I\'m currently available for freelance projects and full-time opportunities. Feel free to reach out through the contact form or email me directly.' },
  { question: 'What is your experience level?', answer: 'I have 5+ years of professional experience in full-stack development, working with startups and established companies. I\'ve led teams and delivered 50+ successful projects.' },
  { question: 'How can I contact you?', answer: 'You can reach me through the contact form on this website, or email me at hello@portfolio.com. I typically respond within 24 hours!' },
  { question: 'What is your rate?', answer: 'My rates vary depending on project scope and requirements. Let\'s discuss your specific needs, and I\'ll provide a custom quote. Contact me for a detailed proposal!' }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi! 👋 I\'m an AI assistant. Ask me anything about Deepanshu\'s experience, skills, or projects!',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    for (const qa of predefinedQuestions) {
      const keywords = qa.question.toLowerCase().split(' ');
      if (keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return qa.answer;
      }
    }
    
    return 'That\'s a great question! For more specific information, please check the relevant sections on the website or contact me directly through the contact form.';
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findAnswer(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center glow-blue group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)]"
          >
            <div className="glass-card h-full flex flex-col overflow-hidden card-shadow">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-white/80">Ask me anything!</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-slate-800 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <span className="text-xs opacity-60 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-800 p-3 rounded-2xl">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length <= 1 && (
                <div className="p-4 border-t border-white/10">
                  <p className="text-xs text-text-muted mb-2">Quick questions:</p>
                  <div className="space-y-2">
                    {predefinedQuestions.slice(0, 3).map((qa, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(qa.question)}
                        className="w-full text-left p-2 text-xs bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-text-gray"
                      >
                        {qa.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm text-white placeholder-text-muted"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}