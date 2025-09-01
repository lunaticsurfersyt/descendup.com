// Global state
let currentPage = 'home';
let isDarkMode = false;
let subscriberCount = 150321;

// Mock data
const contentData = [
    {
        id: 1,
        title: 'My Journey into Content Creation',
        type: 'Blog',
        views: 1200,
        likes: 345,
        potentialViews: 1800,
        publishedDate: 'Aug 15, 2025',
        status: 'Published',
        imageUrl: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Journey'
    },
    {
        id: 2,
        title: 'Top 5 AI Tools That Changed My Workflow',
        type: 'Video',
        views: 5800,
        likes: 1100,
        potentialViews: 8000,
        publishedDate: 'Aug 10, 2025',
        status: 'Published',
        imageUrl: 'https://placehold.co/600x400/EC4899/FFFFFF?text=AI+Tools'
    },
    {
        id: 3,
        title: 'Understanding SEO for Creators in 2025',
        type: 'Video',
        views: 3400,
        likes: 780,
        potentialViews: 4500,
        publishedDate: 'Jul 28, 2025',
        status: 'Published',
        imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=SEO'
    },
    {
        id: 4,
        title: 'The Art of Storytelling (Draft)',
        type: 'Blog',
        views: 0,
        likes: 0,
        potentialViews: 2500,
        publishedDate: 'Sep 05, 2025',
        status: 'Draft',
        imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Draft'
    }
];

const languages = {
    DescendUp: ['DescendUp', 'डिसेंडअप', 'டிசென்ட்அப்', 'డిసెండప్', 'ಡಿಸೆಂಡಪ್', 'ডিসেন্ডআপ', 'ഡിസെൻഡ്അപ്പ്'],
    Home: ['Home', 'घर', 'இல்லம்', 'ఇల్లు', 'ಮನೆ', 'হোম', 'വീട്'],
    'AI Studio': ['AI Studio', 'एआई स्टूडियो', 'AI ஸ்டுடியோ', 'AI స్టూడియో', 'AI ಸ್ಟಡಿಯೋ', 'AI স্টডিও', 'AI സ്റ്റുഡിയോ'],
    Blogs: ['Blogs', 'ब्लॉग', 'வலைப்பதிவுகள்', 'బ్లాగులు', 'ಬ್ಲಾಗ್ಗಳು', 'ব্লগ', 'ബ്ലോഗുകൾ'],
    'Our Services': ['Our Services', 'हमारी सेवाएँ', 'எங்கள் சேவைகள்', 'మా సేవలు', 'ನಮ್ಮ ಸೇವೆಗಳು', 'আমাদের সেবাসমূহ', 'ഞങ്ങളുടെ സേവനങ്ങൾ'],
    Profile: ['Profile', 'प्रोफ़ाइल', 'சுயவிவரம்', 'ప్రొఫైల్', 'ಪ್ರೊಫೈಲ್', 'প্রোফাইল', 'പ്രൊഫൈൽ']
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    startAnimations();
    populateContentTable();
    showPage('home');
    
    // Show sidebar on desktop by default
    if (window.innerWidth >= 1024) {
        document.getElementById('sidebar').classList.add('open');
    }
});

// Event listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            showPage(page);
            if (window.innerWidth < 1024) {
                closeSidebar();
            }
        });
    });

    // Page navigation buttons
    document.querySelectorAll('[data-page]').forEach(btn => {
        if (!btn.classList.contains('nav-item')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = btn.dataset.page;
                showPage(page);
            });
        }
    });

    // Sidebar controls
    document.getElementById('menuBtn').addEventListener('click', openSidebar);
    document.getElementById('closeSidebar').addEventListener('click', closeSidebar);

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Plan toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuBtn = document.getElementById('menuBtn');
        
        if (window.innerWidth < 1024 && 
            sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeSidebar();
        }
    });
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavItem && activeNavItem.classList.contains('nav-item')) {
        activeNavItem.classList.add('active');
    }

    // Update page title
    const pageTitles = {
        'home': 'Home',
        'studio': 'AI Studio',
        'blogs': 'Blogs',
        'services': 'Our Services',
        'profile': 'Profile'
    };

    const pageTitle = pageTitles[pageId] || 'Page';
    document.getElementById('pageTitle').textContent = pageTitle;
    currentPage = pageId;
    
    // Start page title animation
    startPageTitleAnimation(pageTitle);
}

// Sidebar controls
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 1024) {
        sidebar.classList.remove('open');
    }
}

// Theme toggle
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// Animations
function startAnimations() {
    // Header text animation
    let headerIndex = 0;
    const headerElement = document.getElementById('headerText');
    
    // Start animation immediately
    animateHeaderText();
    
    function animateHeaderText() {
        headerElement.style.opacity = '0';
        setTimeout(() => {
            headerIndex = (headerIndex + 1) % languages.DescendUp.length;
            headerElement.textContent = languages.DescendUp[headerIndex];
            headerElement.style.opacity = '1';
        }, 500);
    }
    
    setInterval(animateHeaderText, 2500);

    // Subscriber count animation
    setInterval(() => {
        subscriberCount += Math.floor(Math.random() * 5) + 1;
        document.getElementById('subscriberCount').textContent = subscriberCount.toLocaleString();
    }, 2000);
}

// Page title animation
function startPageTitleAnimation(initialTitle) {
    const pageTitle = document.getElementById('pageTitle');
    const titles = languages[initialTitle] || [initialTitle];
    let titleIndex = 0;
    
    function animatePageTitle() {
        pageTitle.style.opacity = '0';
        setTimeout(() => {
            titleIndex = (titleIndex + 1) % titles.length;
            pageTitle.textContent = titles[titleIndex];
            pageTitle.style.opacity = '1';
        }, 500);
    }
    
    setInterval(animatePageTitle, 2500);
}

// Content table population
function populateContentTable() {
    const tbody = document.getElementById('contentTableBody');
    if (!tbody) return;

    tbody.innerHTML = contentData.map(content => `
        <tr>
            <td>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <img src="${content.imageUrl}" alt="" style="width: 112px; height: 64px; border-radius: 6px; object-fit: cover;" 
                         onerror="this.src='https://placehold.co/112x64/E2E8F0/4A5568?text=Img'">
                    <span style="font-weight: 600;">${content.title}</span>
                </div>
            </td>
            <td>
                <span style="padding: 4px 8px; font-size: 12px; font-weight: 500; border-radius: 12px; 
                             background: ${content.status === 'Published' ? '#dcfce7; color: #166534' : '#fef3c7; color: #92400e'};">
                    ${content.status}
                </span>
            </td>
            <td>${content.publishedDate}</td>
            <td>${formatNumber(content.views)}</td>
            <td>${generateSEOPreview(content)}</td>
        </tr>
    `).join('');
}

// Helper functions
function formatNumber(num) {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
}

function generateSEOPreview(content) {
    if (content.status !== 'Published' || content.potentialViews <= content.views || content.views === 0) {
        return '<span style="color: #6b7280; font-size: 12px;">Optimized</span>';
    }

    const percentage = ((content.potentialViews - content.views) / content.views) * 100;
    const currentWidth = (content.views / content.potentialViews) * 100;

    return `
        <div>
            <div style="width: 100%; background: #e5e7eb; border-radius: 9999px; height: 8px; position: relative; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%); height: 8px; width: ${currentWidth}%;"></div>
            </div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">
                <span style="font-weight: 600; color: #16a34a;">+${percentage.toFixed(0)}%</span> potential growth
            </div>
        </div>
    `;
}

// Handle responsive behavior
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth >= 1024) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';