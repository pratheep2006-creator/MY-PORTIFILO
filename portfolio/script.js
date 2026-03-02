// ========== HAMBURGER MENU TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ========== CONTACT FORM HANDLER ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message (in real implementation, send to server)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        
        // Reset form after 2 seconds
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ========== DOWNLOAD RESUME FUNCTION ==========
function downloadResume() {
    // Create a link to the resume file
    const resumeLink = document.createElement('a');
    resumeLink.href = 'RESUME.pdf';
    resumeLink.download = 'P_Pratheep_Resume.pdf';
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
}

// ========== SCROLL TO TOP ON PAGE LOAD ==========
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ========== KEYBOARD ACCESSIBILITY ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

// ========== AI CHATBOT KNOWLEDGE BASE ==========
const chatbotKnowledge = {
    personal: {
        patterns: ['personal', 'who are you', 'name', 'contact', 'phone', 'email', 'address', 'details', 'family', 'sibling', 'sister'],
        response: `<strong>Personal Information</strong><br><br><strong>Full Name:</strong> Pratheep P<br><strong>Father's Name:</strong> Palanivel N<br><strong>Mother's Name:</strong> Kalaiselvi P<br><strong>Gender:</strong> Male<br><strong>Address:</strong> 60f, NallivalasarThottam, MakkalPudhur, V.Vellalapalayam (PO), Anthiur (TK), Erode (DT) - 638315<br><br><strong>Family:</strong><br>👧 <strong>Elder Sister:</strong> P. Dhivya<br>   • Completed: B.Sc Mathematics<br>   • Currently: Pursuing M.Sc Mathematics<br>   • College: Sri Krishna Arts and Science College<br><br><strong>Contact:</strong><br><strong>Email:</strong> pratheep@email.com<br><strong>Phone:</strong> +91 98765 43210<br><br><strong>Connect with me:</strong><br>GitHub: github.com/pratheep<br>LinkedIn: linkedin.com/in/pratheep`
    },
    about: {
        patterns: ['about', 'tell me about', 'introduce yourself', 'about me', 'objective', 'career objective', 'who are you'],
        response: `<strong>About P. Pratheep</strong><br><br><strong>Career Objective:</strong><br>A highly motivated Computer Science graduate seeking an opportunity to work in a challenging environment where I can utilize my programming skills and logical thinking. I look forward to gaining hands-on experience and growing professionally while contributing to innovative projects.<br><br>I'm a passionate developer with strong foundations in web development, databases, and problem-solving. Driven by curiosity and commitment to excellence, I strive to build innovative solutions that make meaningful impact.`
    },
    skills: {
        patterns: ['skills', 'expertise', 'programming', 'what can you do', 'tools', 'technologies', 'languages', 'proficient'],
        response: `<strong>Technical Skills & Expertise</strong><br><br><strong>Programming Languages:</strong><br>• C (Basic Level)<br>• Java and Python (Intermediate Level)<br>• JavaScript (Advanced)<br><br><strong>Web Technologies:</strong><br>• HTML & CSS (Strong Level)<br>• React.js, REST APIs<br><br><strong>Databases & Tools:</strong><br>• MySQL, SQLite, Firebase<br>• Git, GitHub, VS Code<br><br><strong>Specializations:</strong><br>• Frontend Development (HTML, CSS, JavaScript)<br>• Python Programming<br>• Cybersecurity & Ethical Hacking<br><br><strong>Core Competencies:</strong> Web Development, Data Structures, Problem-Solving, API Development, Responsive Design, Machine Learning`
    },
    projects: {
        patterns: ['projects', 'portfolio', 'work', 'built', 'created', 'case study', 'facial recognition'],
        response: `<strong>Major Projects</strong><br><br><strong>1. Facial Recognition Attendance System (2025)</strong><br><strong>Description:</strong> Created for marking attendance for students and speeding up the attendance process. More efficient compared to manual attendance.<br><br><strong>Objectives:</strong><br>• Eliminate manual attendance process inefficiencies<br>• Real-time face detection and recognition<br>• Automated student attendance marking<br>• Time-efficient attendance documentation<br><br><strong>Built with:</strong> Java, OpenCV, Machine Learning<br>• MySQL database for student and attendance records<br>• User authentication system<br>• Efficient data storage and retrieval<br><br><strong>2. Bus Reservation System</strong><br><strong>Built with:</strong> Python/Java & MySQL<br>• Real-time seat availability management<br>• Payment gateway integration<br>• Ticket generation system<br>• User account management with advanced search filters<br><br>Both projects include robust database connectivity for persistent data storage!`
    },
    education: {
        patterns: ['education', 'college', 'university', 'degree', 'course', 'studying', 'school', 'qualification'],
        response: `<strong>Educational Background</strong><br><br><strong>1. B.E. Computer Science Engineering</strong><br>M.Kumarasamy College of Engineering, Karur<br>Duration: 2024-2028 | CGPA: 83%<br><br><strong>2. Diploma in Computer Engineering</strong><br>Sakthi Polytechnic College, Erode<br>Duration: 2022-2025 | CGPA: 60%<br><br><strong>3. SSLC (Secondary School Leaving Certificate)</strong><br>Adharsh Vidhyalaya Matric Hr.Sec.School, Erode<br>Completed: 2022<br><br>Strong academic foundation with focus on programming, databases, and web technologies!`
    },
    certificates: {
        patterns: ['certificates', 'certification', 'achievements', 'awards', 'credentials', 'internship'],
        response: `<strong>Certifications & Internships</strong><br><br><strong>Online Certifications:</strong><br><br>1. <strong>NPTEL - Introduction to Internet of Things</strong><br>   Duration: 12 weeks<br>   Certification: Elite Batch Certification<br>   Score: 71%<br><br>2. <strong>Simplilearn - Ethical Hacking (Basic Level)</strong><br>   Duration: 8 weeks<br>   Certification: Course Completion Certificate<br>   Score: 80%<br><br>3. <strong>Photoshop AI Features</strong> - Advanced Image Editing & AI Tools<br><br>4. <strong>AWS Cloud Computing</strong> - Cloud Infrastructure & Services<br><br>5. <strong>Data Entry Professional</strong> - Data Management & Database Skills<br><br>6. <strong>C Programming</strong> - Core Programming Fundamentals<br><br>Demonstrates commitment to continuous learning and skill development!`
    },
    goals: {
        patterns: ['goals', 'future', 'ambitions', 'dreams', 'next', 'plans', 'aim'],
        response: `<strong>Career Goals & Aspirations</strong><br><br>• Become a highly skilled <strong>Full Stack Developer & AI Engineer</strong><br>• Build scalable, elegant solutions to complex real-world problems<br>• Work on innovative tech projects with meaningful societal impact<br>• Master advanced web technologies, AI/ML, and cloud computing<br>• Contribute to open-source projects and tech community<br>• Create products that improve user experience and solve critical business problems`
    },
    contact: {
        patterns: ['contact', 'reach', 'get in touch', 'connect', 'linkedin', 'github', 'whatsapp'],
        response: `<strong>Get in Touch</strong><br><br><strong>📧 Email:</strong> pratheep@email.com<br><strong>📱 Phone:</strong> +91 98765 43210<br><strong>🐙 GitHub:</strong> github.com/pratheep<br><strong>🔗 LinkedIn:</strong> linkedin.com/in/pratheep<br><strong>💬 WhatsApp:</strong> Available<br><br>I'm always open to discussing opportunities, collaborations, tech discussions, and networking!`
    },
    interests: {
        patterns: ['interests', 'passion', 'hobbies', 'like', 'enjoy', 'enthusiast', 'hobby', 'favorite'],
        response: `<strong>Areas of Interest & Hobbies</strong><br><br><strong>Technical Interests:</strong><br>🚀 Frontend Development (HTML, CSS, JavaScript)<br>🐍 Python Programming<br>🔒 Cybersecurity & Ethical Hacking<br>🤖 AI & Machine Learning<br>☁️ Cloud Computing (AWS)<br><br><strong>Hobbies & Pastimes:</strong><br>🎮 Solving Sudoku<br>♟️ Playing Chess<br>🏸 Badminton<br>🏏 Cricket<br><br>Well-rounded interests combining technical pursuits with sports and recreational activities!`
    },
    softskills: {
        patterns: ['soft skills', 'communication', 'leadership', 'teamwork', 'problem solving', 'adaptability', 'motivation'],
        response: `<strong>Soft Skills & Personal Qualities</strong><br><br>A motivated professional with the following strengths:<br><br>💬 <strong>Communication:</strong> Good verbal and written communication skills<br>👥 <strong>Leadership:</strong> Capable of leading teams and making decisions<br>🧠 <strong>Problem-Solving:</strong> Creative and analytical thinking<br>⚡ <strong>Decision Making:</strong> Ability to make effective decisions under pressure<br>⏰ <strong>Time Management:</strong> Strong organizational and time management skills<br>🎯 <strong>Adaptability:</strong> Quick learner with ability to adapt to new environments and teams<br>🤝 <strong>Team Collaboration:</strong> Excellent interpersonal and team bonding abilities<br>📈 <strong>Growth Mindset:</strong> Motivated to learn quickly and contribute effectively<br><br>Perfectly combines technical expertise with strong interpersonal skills!`
    },
    experience: {
        patterns: ['experience', 'internship', 'work', 'job', 'freelance', 'opportunities', 'practice', 'background'],
        response: `<strong>Experience & Opportunities</strong><br><br>Currently focused on building <strong>hands-on experience</strong> through multiple real-world projects including facial recognition attendance systems and reservation platforms.<br><br><strong>Completed Internships & Training:</strong><br>• NPTEL - Introduction to Internet of Things (12 weeks)<br>• Simplilearn - Basic Ethical Hacking (8 weeks)<br><br><strong>Actively Seeking:</strong><br>✓ Internships in Full Stack Development<br>✓ Freelance projects and web development work<br>✓ Remote roles in software development<br>✓ Cybersecurity & Ethical Hacking opportunities<br>✓ Open-source contributions<br>✓ Collaborative tech projects<br><br>Ready to apply technical expertise, adaptability, and enthusiasm to meaningful projects!`
    },
    learning: {
        patterns: ['learning', 'studying', 'learning now', 'currently', 'recent', 'new skills', 'upskilling'],
        response: `<strong>Currently Learning</strong><br><br>• Advanced JavaScript & Modern React.js<br>• Backend Development & API Design<br>• Database Design & Optimization<br>• System Design Concepts<br>• 3D Modelling & visualization<br>• Machine Learning Fundamentals<br>• Cloud Deployment (AWS)<br><br>Committed to staying current with rapidly evolving technology trends and best practices!`
    }
};

function findResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    for (const [key, data] of Object.entries(chatbotKnowledge)) {
        for (const pattern of data.patterns) {
            if (message.includes(pattern)) {
                return data.response;
            }
        }
    }
    
    return 'That\'s a great question! Feel free to explore my portfolio to learn more about my work, or ask me about specific topics like skills, projects, or how to contact me! 😊';
}

// ========== CHATBOT INITIALIZATION ==========
console.log('Script loaded - setting up chatbot');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - initializing chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const profileBadge = document.querySelector('.profile-badge');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');

    console.log('Chatbot elements:', { chatbotToggle, chatbotWindow, chatbotInput, profileBadge });

    // Exit if chatbot elements not found
    if (!chatbotWindow || !chatbotInput) {
        console.error('Chatbot core elements not found in DOM');
        return;
    }
    
    console.log('Chatbot starting setup...');

    // Function to open chatbot
    function openChatbot() {
        console.log('Opening chatbot');
        chatbotWindow.classList.add('active');
        if (chatbotToggle) {
            chatbotToggle.classList.add('active');
        }
        chatbotInput.focus();
    }

    // Function to close chatbot
    function closeChatbot() {
        console.log('Closing chatbot');
        chatbotWindow.classList.remove('active');
        if (chatbotToggle) {
            chatbotToggle.classList.remove('active');
        }
    }

    // Toggle chatbot via button
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            console.log('Chat button clicked');
            if (chatbotWindow.classList.contains('active')) {
                closeChatbot();
            } else {
                openChatbot();
            }
        });
    }

    // Toggle chatbot via profile badge
    if (profileBadge) {
        profileBadge.style.cursor = 'pointer';
        profileBadge.addEventListener('click', () => {
            console.log('Profile badge clicked');
            openChatbot();
        });
    }
    
    console.log('Chatbot button setup done');

    // Close chatbot window
    if (chatbotClose) {
        chatbotClose.addEventListener('click', closeChatbot);
    }

    // Add message to chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
        if (isUser) {
            messageDiv.innerHTML = `<p>${text}</p>`;
        } else {
            messageDiv.innerHTML = `<div class="bot-avatar">🤖</div><div class="message-content"><p>${text}</p></div>`;
        }
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Send message handler
    function sendMessage() {
        const userText = chatbotInput.value.trim();
        if (userText === '') return;
        
        // Add user message
        addMessage(userText, true);
        chatbotInput.value = '';
        chatbotInput.focus();
        
        // Get and add bot response
        setTimeout(() => {
            const response = findResponse(userText);
            addMessage(response, false);
        }, 300);
    }

    // Refresh button
    const refreshBtn = document.getElementById('chatbotRefresh');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            chatbotMessages.innerHTML = `<div class="chat-message bot-message">
                <div class="bot-avatar">🤖</div>
                <div class="message-content">
                    <p><strong>Hi there! 👋</strong></p>
                    <p>I'm an AI assistant powered by intelligent conversation. I know everything about P. Pratheep - from skills and projects to education and goals. Ask me anything!</p>
                </div>
            </div>`;
        });
    }

    // Send button click handler
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }

    // Enter key handler
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    console.log('Chatbot initialized successfully!');
});

