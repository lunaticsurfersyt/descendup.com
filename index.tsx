import React, { useState, useEffect } from 'react';

// Helper for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// SVG Icons
const HomeIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> );
const RssIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg> );
const ClapperboardIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" /><path d="m6.2 5.3 3.1 3.9" /><path d="m12.4 3.6 3.1 4" /><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg> );
const BriefcaseIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> );
const UserCircleIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg> );
const XIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> );
const MenuIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg> );
const UploadCloudIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg> );
const CheckCircleIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> );
const HeartIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>);
const MessageCircleIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const RepeatIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>);
const SendIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>);
const CheckIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>);
const SunIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>);
const MoonIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);

// --- Mock Data ---
const mockContentData = [
  {id: 1, title: 'My Journey into Content Creation', type: 'Blog', views: 1200, likes: 345, potentialViews: 1800, publishedDate: 'Aug 15, 2025', status: 'Published', imageUrl: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Journey'},
  {id: 2, title: 'Top 5 AI Tools That Changed My Workflow', type: 'Video', views: 5800, likes: 1100, potentialViews: 8000, publishedDate: 'Aug 10, 2025', status: 'Published', imageUrl: 'https://placehold.co/600x400/EC4899/FFFFFF?text=AI+Tools'},
  {id: 3, title: 'Understanding SEO for Creators in 2025', type: 'Video', views: 3400, likes: 780, potentialViews: 4500, publishedDate: 'Jul 28, 2025', status: 'Published', imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=SEO'},
  {id: 4, title: 'The Art of Storytelling (Draft)', type: 'Blog', views: 0, likes: 0, potentialViews: 2500, publishedDate: 'Sep 05, 2025', status: 'Draft', imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Draft'},
  {id: 5, title: 'Unboxing the new TechGadget Pro', type: 'Video', views: 15200, likes: 2300, potentialViews: 22000, publishedDate: 'Aug 20, 2025', status: 'Published', imageUrl: 'https://placehold.co/600x400/10B981/FFFFFF?text=Unboxing'},
];

// --- Main App Component ---
export default function App() {
  return <DashboardApp />;
}

// --- Dashboard Application ---
const DashboardApp = () => {
  const [activePage, setActivePage] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [headerText, setHeaderText] = useState('DescendUp');
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [animatedPageTitle, setAnimatedPageTitle] = useState(activePage);
  const [pageTitleOpacity, setPageTitleOpacity] = useState(1);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan);
    setIsStripeModalOpen(true);
  };

  const languages = {
    DescendUp: ['DescendUp', 'डिसेंडअप', 'டிசென்ட்அப்', 'డిసెండప్', 'ಡಿಸೆಂಡಪ್', 'ডিসেন্ডআপ', 'ഡിസെൻഡ്അപ്പ്'],
    Home: ['Home', 'घर', 'இல்லம்', 'ఇల్లు', 'ಮನೆ', 'হোম', 'വീട്'],
    'AI Studio': ['AI Studio', 'एआई स्टूडियो', 'AI ஸ்டுடியோ', 'AI స్టూడియో', 'AI ಸ್ಟಡಿಯೋ', 'AI স্টডিও', 'AI സ്റ്റുഡിയോ'],
    'Our Services': ['Our Services', 'हमारी सेवाएँ', 'எங்கள் சேவைகள்', 'మా సేవలు', 'ನಮ್ಮ ಸೇವೆಗಳು', 'আমাদের সেবাসমূহ', 'ഞങ്ങളുടെ സേവനങ്ങൾ'],
    Profile: ['Profile', 'प्रोफ़ाइल', 'சுயவிவரம்', 'ప్రొఫైల్', 'ಪ್ರೊಫೈಲ್', 'প্রোফাইল', 'പ്രൊഫൈൽ'],
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setHeaderOpacity(0);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % languages.DescendUp.length;
        setHeaderText(languages.DescendUp[currentIndex]);
        setHeaderOpacity(1);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedPageTitle(activePage);
    const titles = languages[activePage] || [activePage];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setPageTitleOpacity(0);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        setAnimatedPageTitle(titles[currentIndex]);
        setPageTitleOpacity(1);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [activePage]);

  const navigation = [
    { name: 'Home', icon: HomeIcon },
    { name: 'AI Studio', icon: ClapperboardIcon },
    { name: 'Our Services', icon: BriefcaseIcon },
    { name: 'Profile', icon: UserCircleIcon },
  ];
  
  const renderContent = () => {
    switch (activePage) {
      case 'Home': return <HomePage setActivePage={setActivePage} />;
      case 'AI Studio': return <AIStudioPage />;
      case 'Our Services': return <OurServicesPage onSubscribe={handleSubscribeClick} />;
      case 'Profile': return <ProfilePage />;
      default: return <PlaceholderPage title={activePage} />;
    }
  };

  return (
    <div className={cn("flex h-screen font-sans", theme)}>
      {isStripeModalOpen && <StripeModal plan={selectedPlan} onClose={() => setIsStripeModalOpen(false)} onPaymentSuccess={() => { /* Handle success logic */ }} />}
      <aside className={cn("text-white w-64 flex-shrink-0 flex-col transition-all duration-300 ease-in-out", "bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]", "fixed lg:relative lg:translate-x-0 h-full z-20 flex", "border-r-4 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)] dark:border-white dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]", isSidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between h-16 px-6 border-b border-red-500/30">
              <h1 className="text-xl font-bold text-white transition-opacity duration-500" style={{ opacity: headerOpacity }}>{headerText}</h1>
               <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 text-gray-300 hover:text-white"><XIcon className="h-6 w-6" /></button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {navigation.map((item) => (
                <a key={item.name} href="#" onClick={(e) => { e.preventDefault(); setActivePage(item.name); if (window.innerWidth < 1024) setIsSidebarOpen(false); }} className={cn('flex items-center px-4 py-2.5 text-sm font-medium transition-colors border-l-4', activePage === item.name ? 'bg-white/10 text-white border-red-500' : 'text-gray-300 hover:bg-white/10 hover:text-white border-transparent')}>
                  <item.icon className="mr-3 h-5 w-5" />{item.name}
                </a>
              ))}
            </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-900">
        <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-red-300 dark:border-red-500/50 lg:px-8">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"><MenuIcon className="h-6 w-6" /></button>
           <h2 className="text-lg font-semibold text-gray-800 dark:text-white transition-opacity duration-500" style={{ opacity: pageTitleOpacity }}>{animatedPageTitle}</h2>
           <div className="flex items-center space-x-4">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <img className="h-8 w-8 rounded-full object-cover" src="https://placehold.co/100x100/E2E8F0/4A5568?text=U" alt="User avatar" onError={(e) => e.target.src = 'https://placehold.co/100x100/E2E8F0/4A5568?text=U'}/>
           </div>
        </header>
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

// --- Dashboard Components ---

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
    );
};

const HomePage = ({ setActivePage }) => {
    const [subs, setSubs] = useState(150321);
    useEffect(() => {
        const interval = setInterval(() => {
            setSubs(prev => prev + Math.floor(Math.random() * 5) + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-full p-4 md:p-8 space-y-8">
            <div className="relative text-center p-8 md:p-12 rounded-2xl overflow-hidden bg-gradient-to-br from-[#BC13FE] to-[#7DF9FF] text-white shadow-2xl">
                 <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Grow Your Content. Earn More.</h1>
                    <h2 className="text-4xl md:text-5xl font-bold">We Handle the Rest.</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">We optimize your content with data-driven SEO, thumbnails, and insights—so you focus on creating.</p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <button onClick={() => setActivePage('AI Studio')} className="bg-gradient-to-r from-[#FF6700] to-[#FF0000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-transform hover:scale-105">Get Started Free</button>
                        <button onClick={() => setActivePage('Our Services')} className="bg-transparent border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-transform hover:scale-105">See How It Works</button>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg text-center">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">LIVE SUBSCRIBER COUNT</p>
                <p className="text-4xl font-bold text-gray-800 dark:text-white tracking-widest">{subs.toLocaleString()}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                <div className="bg-gradient-to-br from-[#00FF7F] to-[#00FFFF] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"><div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto text-2xl font-bold text-cyan-500">1</div><h3 className="mt-4 text-xl font-semibold">Connect Your Channel</h3><p className="mt-2 text-white/80">Securely link your YouTube account in seconds.</p></div>
                <div className="bg-gradient-to-br from-[#00FF7F] to-[#00FFFF] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"><div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto text-2xl font-bold text-cyan-500">2</div><h3 className="mt-4 text-xl font-semibold">We Optimize</h3><p className="mt-2 text-white/80">Get tailored SEO, thumbnails, and insights.</p></div>
                <div className="bg-gradient-to-br from-[#00FF7F] to-[#00FFFF] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"><div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mx-auto text-2xl font-bold text-cyan-500">3</div><h3 className="mt-4 text-xl font-semibold">You Grow</h3><p className="mt-2 text-white/80">Watch your revenue and engagement climb.</p></div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"><h3 className="text-2xl font-bold text-gray-800 dark:text-white">Creator X saw +32% RPM and +18% subscriber growth in just 3 months.</h3><p className="mt-2 text-gray-600 dark:text-gray-300">"Working with DescendUp was a game-changer for my channel!"</p></div>
            <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#FF00FF] via-[#FFC0CB] to-[#FFFF00] shadow-lg"><h2 className="text-3xl font-bold text-gray-800">Ready to focus on creating?</h2><p className="mt-2 max-w-2xl mx-auto text-gray-700">Let us grow your revenue while you do what you love.</p><div className="mt-6 flex flex-wrap items-center justify-center gap-4"><button onClick={() => setActivePage('Our Services')} className="bg-gradient-to-r from-[#FF6700] to-[#FF0000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-transform hover:scale-105">Sign Up Free</button><button className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-transform hover:scale-105">Book a Demo</button></div></div>
        </div>
    );
};

const SEOPreview = ({ current, potential }) => {
    if (potential <= current || current === 0) return <span className="text-gray-500 text-xs">Optimized</span>;
    const percentage = ((potential - current) / current) * 100;
    const currentWidth = (current / potential) * 100;
    return (
        <div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 relative overflow-hidden"><div className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] h-2 absolute top-0 left-0" style={{ width: `${currentWidth}%` }}></div></div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1"><span className="font-semibold text-green-600">+{percentage.toFixed(0)}%</span> potential growth</div>
        </div>
    );
};

const AIStudioPage = () => {
    const formatNumber = (num) => num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
    return (
        <div className="p-4 md:p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Channel content</h2>
                <button className="text-white py-2 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center bg-gradient-to-r from-[#7F00FF] to-[#00C6FF] shadow-lg"><UploadCloudIcon className="h-4 w-4 mr-2"/>Create</button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"><div className="overflow-x-auto"><table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-900"/></th>
                        <th scope="col" className="px-6 py-3">Video</th><th scope="col" className="px-6 py-3">Status</th><th scope="col" className="px-6 py-3">Date</th><th scope="col" className="px-6 py-3">Views</th><th scope="col" className="px-6 py-3 min-w-[200px]">SEO Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {mockContentData.map(content => (
                        <tr key={content.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
                            <td className="p-4"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-900"/></td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"><div className="flex items-center space-x-4"><img src={content.imageUrl} alt="" className="w-28 h-16 rounded-md object-cover" onError={(e) => e.target.src = 'https://placehold.co/112x64/E2E8F0/4A5568?text=Img'}/><span className="line-clamp-3 font-semibold">{content.title}</span></div></td>
                            <td className="px-6 py-4"><span className={cn("px-2 py-1 text-xs font-medium rounded-full", content.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300')}>{content.status}</span></td>
                            <td className="px-6 py-4">{content.publishedDate}</td><td className="px-6 py-4">{formatNumber(content.views)}</td>
                            <td className="px-6 py-4">{content.status === 'Published' ? <SEOPreview current={content.views} potential={content.potentialViews} /> : <span className="text-xs text-gray-400">Not published yet</span>}</td>
                        </tr>
                    ))}
                </tbody>
            </table></div></div>
        </div>
    );
};

const OurServicesPage = ({ onSubscribe }) => {
    const [planType, setPlanType] = useState('individual');
    const plans = [
        { name: 'Starter', price: 'Free', commission: '15% commission', features: ['Limited SEO reports', 'Standard analytics', 'Basic support'], buttonText: 'Current Plan', isCurrent: true, },
        { name: 'Pro', price: 'A$75/mo', commission: '+ 8% commission', features: ['Full optimization tools', 'Advanced SEO features', 'Priority support', 'AI content suggestions'], buttonText: 'Subscribe', isCurrent: false, },
        { name: 'Elite', price: 'A$150/mo', commission: '+ 5% commission', features: ['All Pro features', 'Dedicated account manager', 'Brand deal insights', 'Early access to new features'], buttonText: 'Subscribe', isCurrent: false, }
    ];

    return (
        <div className="w-full min-h-full bg-black text-white p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center">Choose your Premium plan</h1>
                <div className="mt-8 flex justify-center bg-gray-800 rounded-full p-1 w-fit mx-auto">
                    <button onClick={() => setPlanType('individual')} className={cn("px-6 py-2 rounded-full text-sm font-bold", planType === 'individual' ? 'bg-white text-black' : 'text-gray-400')}>Individual</button>
                    <button onClick={() => setPlanType('organization')} className={cn("px-6 py-2 rounded-full text-sm font-bold", planType === 'organization' ? 'bg-white text-black' : 'text-gray-400')}>Organization</button>
                </div>
                <div className="mt-10 space-y-6">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6">
                            <h2 className="font-bold text-xl">{plan.name}</h2>
                            <p className="text-gray-400">For {plan.name === 'Starter' ? 'creators getting started' : plan.name === 'Pro' ? 'creators ready to scale' : 'established creators and brands'}</p>
                            <div className="mt-4"><span className="text-3xl font-extrabold">{plan.price}</span> <span className="text-gray-400">{plan.commission}</span></div>
                            <ul className="mt-6 space-y-3 text-left">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center"><CheckIcon className="h-5 w-5 mr-3 text-red-500"/>{feature}</li>
                                ))}
                            </ul>
                            <button onClick={() => !plan.isCurrent && onSubscribe(plan)} disabled={plan.isCurrent} className={cn("w-full mt-6 font-bold py-3 rounded-full transition", plan.isCurrent ? "bg-gray-500 text-gray-300 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200")}>{plan.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlogsPage = () => {
    const posts = [
        { id: 1, author: 'Creator Insights', username: 'descendup_official', avatarUrl: 'https://placehold.co/48x48/EE0979/FFFFFF?text=D', content: "Welcome to the new creator space! We're excited to share tips, tricks, and success stories to help you grow. What's the first thing you want to learn about?", likes: 152, replies: 18, },
        { id: 2, author: 'Tech Creator Pro', username: 'techpro', avatarUrl: 'https://placehold.co/48x48/232526/FFFFFF?text=T', content: "Just used the AI Studio's SEO preview for my latest video. The potential growth metric is a game-changer for planning content. Seeing a potential +45% view increase is incredibly motivating. #CreatorTools #SEO", likes: 89, replies: 12, },
        { id: 3, author: 'Creator Insights', username: 'descendup_official', avatarUrl: 'https://placehold.co/48x48/EE0979/FFFFFF?text=D', content: "Quick Tip: Your thumbnail is your video's billboard. Make sure the text is readable on mobile and the visuals are compelling. A/B testing can reveal surprising results!", likes: 230, replies: 25, }
    ];
    return (
        <div className="bg-black min-h-full p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {posts.map((post, index) => (
                    <div key={post.id} className="text-white py-4"><div className="flex space-x-4">
                        <div className="flex flex-col items-center"><img src={post.avatarUrl} alt={post.author} className="h-12 w-12 rounded-full" onError={(e) => e.target.src = 'https://placehold.co/48x48/333/FFF?text=U'}/>{index < posts.length - 1 && <div className="w-0.5 h-full bg-gray-700 my-2"></div>}</div>
                        <div className="flex-1">
                            <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6A00] to-[#EE0979]">{post.author}</p>
                            <p className="text-gray-400 text-sm">@{post.username}</p><p className="mt-2 whitespace-pre-wrap">{post.content}</p>
                            <div className="mt-4 flex space-x-6 text-gray-500"><HeartIcon className="h-5 w-5 hover:text-red-500 cursor-pointer" /><MessageCircleIcon className="h-5 w-5 hover:text-white cursor-pointer" /><RepeatIcon className="h-5 w-5 hover:text-green-500 cursor-pointer" /><SendIcon className="h-5 w-5 hover:text-blue-500 cursor-pointer" /></div>
                            <div className="mt-3 text-sm text-gray-500"><span>{post.replies} replies</span><span className="mx-2">·</span><span>{post.likes} likes</span></div>
                        </div>
                    </div></div>
                ))}
            </div>
        </div>
    );
};

const ProfilePage = () => {
    return (
        <div className="bg-gray-800 min-h-full">
            <div className="max-w-4xl mx-auto">
                <div className="h-48 md:h-64 bg-gradient-to-r from-[#FF6A00] to-[#EE0979] rounded-b-2xl"></div>
                <div className="px-4 -mt-16">
                    <div className="flex items-end space-x-4">
                        <img src="https://placehold.co/160x160/232526/FFFFFF?text=P" alt="Profile" className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-gray-800"/>
                        <div><h1 className="text-2xl md:text-3xl font-bold text-white">Creator Pro</h1><p className="text-gray-400">150k Subscribers</p></div>
                    </div>
                    <hr className="my-6 border-gray-700"/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 space-y-6"><div className="bg-gray-900 p-4 rounded-xl text-white"><h3 className="font-bold text-lg">Intro</h3><p className="mt-2 text-sm text-gray-300">Tech creator with 150k subs, focused on gadgets and reviews.</p><ul className="mt-4 space-y-2 text-sm text-gray-400"><li className="flex items-center">Niche: Tech</li><li className="flex items-center">Location: India</li><li className="flex items-center">Joined: August 2025</li></ul></div></div>
                        <div className="md:col-span-2 space-y-6"><div className="bg-gray-900 p-4 rounded-xl text-white"><h3 className="font-bold text-lg">Activity Feed</h3><p className="mt-2 text-sm text-gray-400">Recent optimizations and suggestions will appear here.</p></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlaceholderPage = ({ title }) => {
    let gradientClass = 'from-gray-50 to-gray-100'; let textClass = 'text-gray-800';
    if (title === 'Home' || title === 'Profile') { gradientClass = 'from-[#00C9FF] to-[#92FE9D]'; textClass = 'text-white'; }
    return (
        <div className={`p-8 rounded-xl shadow-sm h-full flex flex-col items-center justify-center text-center bg-gradient-to-br ${gradientClass}`}>
            <h2 className={`text-3xl font-bold mb-2 ${textClass}`}>{title}</h2>
            <p className={`${textClass} opacity-80 max-w-md`}>This page is under construction. Check back soon for updates!</p>
        </div>
    );
};

const StripeModal = ({ plan, onClose, onPaymentSuccess }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    const handleClose = () => {
        if (isSuccess) {
            onPaymentSuccess(plan);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <XIcon className="h-6 w-6" />
                </button>
                {isSuccess ? (
                    <div className="p-8 text-center">
                        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
                        <p className="text-gray-600 mt-2">You have successfully subscribed to the {plan.name} plan.</p>
                        <button onClick={handleClose} className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">Get Started</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-800 text-center">Subscribe to {plan.name}</h2>
                            <p className="text-center text-gray-500 mt-2">Complete your payment details below.</p>
                            <div className="mt-8 space-y-4">
                                <div><label className="text-sm font-medium text-gray-700">Email</label><input type="email" required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" /></div>
                                <div><label className="text-sm font-medium text-gray-700">Card information</label><div className="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50"><input type="text" required className="w-full border-none p-0 focus:ring-0" placeholder="Card number" /><div className="flex mt-2 space-x-4"><input type="text" required className="w-1/2 border-none p-0 focus:ring-0" placeholder="MM / YY" /><input type="text" required className="w-1/2 border-none p-0 focus:ring-0" placeholder="CVC" /></div></div></div>
                                <div><label className="text-sm font-medium text-gray-700">Name on card</label><input type="text" required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full Name" /></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-8 py-4 rounded-b-xl">
                             <button type="submit" disabled={isProcessing} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-400 flex items-center justify-center">
                                {isProcessing ? (<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>) : (`Pay ${plan.price}`)}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

