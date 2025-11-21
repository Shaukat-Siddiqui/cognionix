// Chatbot Data Structure
const chatbotData = {
    categories: [
        {
            id: 'about',
            name: '📌 About Cognionix',
            icon: '🏢'
        },
        {
            id: 'services',
            name: '🛠️ Our Services',
            icon: '⚙️'
        },
        {
            id: 'fixibo',
            name: '🔧 FixiBo Platform',
            icon: '🚀'
        },
        {
            id: 'pricing',
            name: '💰 Pricing & Plans',
            icon: '💵'
        },
        {
            id: 'contact',
            name: '📞 Contact & Support',
            icon: '☎️'
        }
    ],
    questions: {
        about: [
            {
                id: 'about_company',
                question: 'What is Cognionix?',
                answer: 'Cognionix (formerly Aedesol Technologies) is an innovative IT and systems integration company established in 2018. We offer software solutions, electronic security, and smart automation technologies across multiple domains.'
            },
            {
                id: 'about_mission',
                question: 'What is Cognionix\'s mission?',
                answer: 'Our mission is to empower businesses and individuals with innovative technology solutions that enhance productivity, security, and quality of life through seamless integration of IoT, AI, and automation technologies.'
            },
            {
                id: 'about_location',
                question: 'Where is Cognionix located?',
                answer: 'Cognionix is located at:\n1st Floor, Samruddhi Vertex\nSurvey No. 105/1, Site No. 5\nMylasandra, Near Mylasandra Water Tank\nBegur Post, Bangalore – 560068\nKarnataka, India'
            },
            {
                id: 'about_team',
                question: 'Who are the founders?',
                answer: 'Cognionix was founded by:\n• Raghvendra Pratap Singh - Founder & CEO\n• Shaukat Siddiqui - Founder & CTO\nThey lead a team of experienced professionals specializing in technology strategy and systems integration.'
            }
        ],
        services: [
            {
                id: 'services_software',
                question: 'What software development services do you offer?',
                answer: 'We offer custom application design & development, enterprise software solutions, legacy system modernization, API development, quality assurance & testing, cloud migration, and technical support.'
            },
            {
                id: 'services_security',
                question: 'Tell me about your security solutions',
                answer: 'We provide IP video surveillance systems, CCTV installation & monitoring, intrusion alarm systems, access control systems, fire alarm detection, perimeter security, video analytics with AI integration, and 24/7 remote monitoring.'
            },
            {
                id: 'services_iot',
                question: 'What IoT solutions do you provide?',
                answer: 'Our IoT services include industrial IoT solutions, smart device development, sensor integration & deployment, IoT platform development, data analytics & insights, cloud connectivity, edge computing, and IoT security & encryption.'
            },
            {
                id: 'services_ai',
                question: 'Do you offer AI and Robotics solutions?',
                answer: 'Yes! We provide AI-driven automation, machine learning solutions, computer vision applications, natural language processing, robotic process automation, predictive analytics, chatbot development, and AI model training & deployment.'
            },
            {
                id: 'services_home',
                question: 'What home automation solutions do you offer?',
                answer: 'We provide smart lighting control, climate & HVAC automation, voice-activated controls, smart security integration, energy management systems, remote monitoring & control, entertainment system integration, and automated window treatments.'
            },
            {
                id: 'services_mobile',
                question: 'Do you develop mobile and web apps?',
                answer: 'Absolutely! We develop iOS & Android apps, cross-platform mobile applications, progressive web applications, e-commerce solutions, custom web applications, API development & integration, UI/UX design, and app maintenance & support.'
            }
        ],
        fixibo: [
            {
                id: 'fixibo_what',
                question: 'What is FixiBo?',
                answer: 'FixiBo is a revolutionary multi-brand service management platform that unifies service management across all your product brands and companies. It provides seamless experience for customers, companies, and service engineers with features like single sign-on, comprehensive dashboards, and mobile-first portals.'
            },
            {
                id: 'fixibo_benefits',
                question: 'What are the key benefits of FixiBo?',
                answer: 'FixiBo offers:\n• Single Sign-On for all brands\n• Unified customer dashboard\n• Comprehensive company analytics\n• Mobile-first engineer portal\n• Warranty management automation\n• Controlled quote workflows\n• Real-time reporting & analytics'
            },
            {
                id: 'fixibo_customers',
                question: 'How does FixiBo help customers?',
                answer: 'Customers get:\n• One login for all service needs\n• Access to all connected brands\n• Complete service history view\n• Transparent pricing\n• Easy service request submission\n• Real-time service status tracking'
            },
            {
                id: 'fixibo_companies',
                question: 'What does FixiBo offer to companies?',
                answer: 'Companies can:\n• Manage multiple product lines\n• Monitor all service operations\n• Control engineer quote approvals\n• Assign engineers intelligently\n• Track performance analytics\n• Manage warranties automatically\n• Generate detailed reports'
            },
            {
                id: 'fixibo_engineers',
                question: 'What features are available for engineers?',
                answer: 'Engineers get:\n• Mobile-first optimized interface\n• Intelligent quoting tools\n• Visit scheduling & route planning\n• Real-time service notifications\n• Service history access\n• Parts and labor estimation\n• Offline capabilities'
            },
            {
                id: 'fixibo_pricing',
                question: 'How is FixiBo priced?',
                answer: 'FixiBo offers flexible custom pricing based on:\n• Company size (number of brands & products)\n• User count (customers & engineers)\n• Required features & modules\nContact us for a customized quote tailored to your needs.'
            }
        ],
        pricing: [
            {
                id: 'pricing_plans',
                question: 'What pricing plans do you offer?',
                answer: 'We offer three main plans:\n• Basic: ₹75,000 (starting from) - Basic solutions with email support\n• Standard: ₹1,50,000 (starting from) - Comprehensive solutions with priority support\n• Premium: ₹3,00,000 (starting from) - Enterprise-grade with 24/7 support\n\nAll prices are starting points. Final pricing depends on project scope and requirements.'
            },
            {
                id: 'pricing_basic',
                question: 'What is included in the Basic plan?',
                answer: 'The Basic plan includes:\n• Basic IoT device integration\n• Basic electronic security setup\n• Single-page web application\n• Standard email support\n• 3 months warranty\n• Basic documentation'
            },
            {
                id: 'pricing_standard',
                question: 'What features are in the Standard plan?',
                answer: 'The Standard plan includes:\n• Comprehensive IoT solutions\n• Advanced security systems\n• Custom web and mobile apps\n• AI-powered analytics\n• Dedicated account manager\n• Priority 24/5 support\n• 6 months warranty\n• Complete documentation'
            },
            {
                id: 'pricing_premium',
                question: 'What\'s included in the Premium plan?',
                answer: 'The Premium plan includes:\n• End-to-end IoT & automation\n• AI & robotics solutions\n• Enterprise-grade applications\n• Advanced analytics dashboard\n• Dedicated account manager\n• Premium 24/7 support\n• 12 months warranty\n• Full training & documentation\n• Free system upgrades'
            },
            {
                id: 'pricing_payment',
                question: 'What payment methods do you accept?',
                answer: 'We accept:\n• Bank transfers\n• UPI payments\n• Credit/debit cards\n• Milestone-based payment plans (for larger projects)\n• Wire transfer (for international payments)\n• PayPal (for international clients)'
            },
            {
                id: 'pricing_upgrade',
                question: 'Can I upgrade my plan later?',
                answer: 'Absolutely! You can upgrade your plan at any time. We\'ll work with you to ensure a smooth transition and credit any applicable unused services.'
            }
        ],
        contact: [
            {
                id: 'contact_address',
                question: 'What is your office address?',
                answer: 'Cognionix\n1st Floor, Samruddhi Vertex\nSurvey No. 105/1, Site No. 5\nMylasandra, Near Mylasandra Water Tank\nBegur Post, Bangalore – 560068\nKarnataka, India'
            },
            {
                id: 'contact_phone',
                question: 'How can I contact you by phone?',
                answer: 'You can reach us at:\n📞 +91-8169443196\n📞 +91-9664695544'
            },
            {
                id: 'contact_email',
                question: 'What is your email address?',
                answer: 'You can email us at:\n📧 info@cognionix.com\n📧 support@cognionix.com'
            },
            {
                id: 'contact_hours',
                question: 'What are your business hours?',
                answer: 'Our business hours are:\n📅 Monday - Friday: 9:00 AM - 6:00 PM\n📅 Saturday: 9:00 AM - 2:00 PM\n📅 Sunday: Closed'
            },
            {
                id: 'contact_request',
                question: 'How do I request a demo or quote?',
                answer: 'You can request a demo or quote by:\n1. Visiting our Contact page\n2. Filling out the contact form\n3. Selecting your service of interest\n4. We\'ll get back to you within 24 hours'
            },
            {
                id: 'contact_support',
                question: 'Do you offer technical support?',
                answer: 'Yes! We offer different support tiers based on your plan:\n• Basic: Email support\n• Standard: Priority 24/5 support\n• Premium: Premium 24/7 support\n\nContact us to discuss your support needs.'
            }
        ]
    }
};

// Chatbot UI Manager
class Chatbot {
    constructor() {
        this.currentView = 'categories';
        this.currentCategory = null;
        this.answerHistory = [];
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.showAfterDelay();
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div id="chatbot-widget" class="chatbot-widget">
                <div class="chatbot-header">
                    <div class="chatbot-title">
                        <i class="bi bi-chat-dots-fill"></i>
                        <span>Cognionix Assistant</span>
                    </div>
                    <button class="chatbot-close" id="chatbot-close">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="chatbot-body" id="chatbot-body">
                    <!-- Content will be dynamically inserted -->
                </div>
                <div class="chatbot-footer">
                    <button class="chatbot-back" id="chatbot-back" style="display: none;">
                        <i class="bi bi-arrow-left"></i> Back
                    </button>
                </div>
            </div>
            <div id="chatbot-trigger" class="chatbot-trigger">
                <i class="bi bi-chat-dots-fill"></i>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        document.getElementById('chatbot-close').addEventListener('click', () => this.closeChatbot());
        document.getElementById('chatbot-trigger').addEventListener('click', () => this.openChatbot());
        document.getElementById('chatbot-back').addEventListener('click', () => this.goBack());
    }

    showAfterDelay() {
        setTimeout(() => {
            document.getElementById('chatbot-trigger').classList.add('show');
        }, 1500);
    }

    openChatbot() {
        document.getElementById('chatbot-widget').classList.add('active');
        document.getElementById('chatbot-trigger').classList.remove('show');
        if (this.currentView === 'categories') {
            this.showCategories();
        }
    }

    closeChatbot() {
        document.getElementById('chatbot-widget').classList.remove('active');
        document.getElementById('chatbot-trigger').classList.add('show');
    }

    showCategories() {
        this.currentView = 'categories';
        this.currentCategory = null;
        let html = '<div class="chatbot-content">';
        html += '<p class="chatbot-welcome">👋 Welcome! How can we help you today?</p>';
        html += '<div class="chatbot-options">';
        
        chatbotData.categories.forEach(cat => {
            html += `
                <button class="chatbot-option-btn" data-category="${cat.id}">
                    <span class="option-icon">${cat.icon}</span>
                    <span class="option-text">${cat.name}</span>
                </button>
            `;
        });
        
        html += '</div></div>';
        document.getElementById('chatbot-body').innerHTML = html;
        document.getElementById('chatbot-back').style.display = 'none';
        
        document.querySelectorAll('[data-category]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentCategory = e.currentTarget.dataset.category;
                this.showQuestions();
            });
        });
    }

    showQuestions() {
        this.currentView = 'questions';
        const questions = chatbotData.questions[this.currentCategory] || [];
        const categoryName = chatbotData.categories.find(c => c.id === this.currentCategory)?.name;
        
        let html = '<div class="chatbot-content">';
        html += `<p class="chatbot-subtitle">${categoryName}</p>`;
        html += '<div class="chatbot-options">';
        
        questions.forEach(q => {
            html += `
                <button class="chatbot-option-btn question-btn" data-question="${q.id}">
                    <i class="bi bi-question-circle"></i>
                    <span class="option-text">${q.question}</span>
                </button>
            `;
        });
        
        html += '</div></div>';
        document.getElementById('chatbot-body').innerHTML = html;
        document.getElementById('chatbot-back').style.display = 'flex';
        
        document.querySelectorAll('[data-question]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const questionId = e.currentTarget.dataset.question;
                this.showAnswer(questionId);
            });
        });
    }

    showAnswer(questionId) {
        this.currentView = 'answer';
        const questions = chatbotData.questions[this.currentCategory] || [];
        const selectedQ = questions.find(q => q.id === questionId);
        
        if (selectedQ) {
            let html = '<div class="chatbot-content">';
            html += '<div class="chatbot-answer">';
            html += `<p class="answer-question"><strong>Q: ${selectedQ.question}</strong></p>`;
            html += `<p class="answer-text">A: ${selectedQ.answer}</p>`;
            html += '</div>';
            html += '<div class="chatbot-actions">';
            html += '<button class="chatbot-option-btn helpful-btn" data-helpful="yes"><i class="bi bi-hand-thumbs-up"></i> Helpful</button>';
            html += '<button class="chatbot-option-btn helpful-btn" data-helpful="no"><i class="bi bi-hand-thumbs-down"></i> Not Helpful</button>';
            html += '</div>';
            html += '</div>';
            
            document.getElementById('chatbot-body').innerHTML = html;
            document.getElementById('chatbot-back').style.display = 'flex';
            
            document.querySelectorAll('[data-helpful]').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.showThankYou();
                });
            });
        }
    }

    showThankYou() {
        let html = '<div class="chatbot-content">';
        html += '<div class="chatbot-answer thank-you">';
        html += '<p class="answer-question">✅ Thank you for your feedback!</p>';
        html += '<p class="answer-text">If you have any other questions, feel free to ask or contact our support team.</p>';
        html += '<button class="chatbot-option-btn" id="new-question-btn"><i class="bi bi-question-circle"></i> Ask Another Question</button>';
        html += '</div></div>';
        
        document.getElementById('chatbot-body').innerHTML = html;
        
        document.getElementById('new-question-btn').addEventListener('click', () => {
            this.showCategories();
        });
    }

    goBack() {
        if (this.currentView === 'questions') {
            this.showCategories();
        } else if (this.currentView === 'answer') {
            this.showQuestions();
        }
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
