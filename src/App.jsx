import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, MapPin, Briefcase, X, Plus, CreditCard, Phone, 
  DollarSign, ShieldCheck, Car, ShoppingBag, Grid, ChevronRight, 
  Home, GraduationCap, Wrench, Calendar, Key, Users, 
  Heart, Map, Moon, Sun, ArrowRight, Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from './translations';
import { getMockData } from './dataGenerators';

const CATEGORIES = [
  { id: 'freelance', icon: Briefcase },
  { id: 'cars', icon: Car },
  { id: 'houses', icon: Home },
  { id: 'products', icon: ShoppingBag },
  { id: 'courses', icon: GraduationCap },
  { id: 'services', icon: Wrench },
  { id: 'events', icon: Calendar },
  { id: 'rentals', icon: Key },
  { id: 'community', icon: Users },
  { id: 'pets', icon: Heart },
  { id: 'lands', icon: Map }
];

const App = () => {
  const [lang, setLang] = useState('uz');
  const [isDark, setIsDark] = useState(false);
  const [activeView, setActiveView] = useState('freelance');
  const [data, setData] = useState(getMockData(lang));
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', title: '', price: '', image: '', description: '', cardNumber: '', expiry: '', cvv: ''
  });

  const t = (key) => translations[lang][key] || key;

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    setData(getMockData(lang));
  }, [lang]);

  const currentList = useMemo(() => {
    const list = data[activeView] || [];
    return list.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeView, data, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const activeList = data[activeView] || [];
    const newItem = {
      id: Date.now(),
      type: activeView,
      name: formData.title,
      owner: `${formData.firstName} ${formData.lastName}`,
      title: formData.title,
      price: parseInt(formData.price) || 0,
      phone: formData.phone,
      category: t('tabs')[activeView],
      image: formData.image || activeList[Math.floor(Math.random() * Math.min(10, activeList.length))]?.image || "https://picsum.photos/400/300",
      rating: "5.0",
      description: formData.description || t('formTitle')
    };

    setData({ ...data, [activeView]: [newItem, ...activeList] });
    setShowAddForm(false);
    setFormData({ firstName: '', lastName: '', phone: '', title: '', price: '', image: '', description: '', cardNumber: '', expiry: '', cvv: '' });
  };

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 30 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 25 } },
    exit: { opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 font-sans selection:bg-indigo-500/30 transition-colors duration-500">
      
      {/* 1. Ultra-clean Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-zinc-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-3 gap-4 min-h-[5rem]">
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => { setActiveView('freelance'); window.scrollTo({top:0, behavior:'smooth'}); }} className="flex items-center gap-2.5 cursor-pointer">
              <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-xl flex items-center justify-center">
                <Grid size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight">{t('appTitle')}</span>
            </motion.div>

            {/* Desktop Categories (Only for very large screens) */}
            <div className="hidden 2xl:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[50%]">
              {CATEGORIES.map((item) => {
                const isActive = activeView === item.id;
                return (
                  <button 
                    key={item.id} onClick={() => { setActiveView(item.id); setSearchQuery(''); window.scrollTo({top:0, behavior:'smooth'}); }}
                    className={`relative flex items-center shrink-0 gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-black dark:text-white' : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800/50'}`}
                  >
                    {isActive && <motion.div layoutId="nav-bubble" className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 rounded-full" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
                    <span className="relative z-10">{t('tabs')[item.id]}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <div className="hidden md:flex bg-slate-100 dark:bg-zinc-900 p-1 rounded-full items-center border border-slate-200/50 dark:border-zinc-800/50">
                 {['uz','ru','en'].map(l => (
                   <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 text-xs font-semibold rounded-full uppercase transition-all duration-300 ${lang === l ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white' : 'text-slate-500 dark:text-zinc-500'}`}>{l}</button>
                 ))}
              </div>
              
              <button onClick={() => setIsDark(!isDark)} className="p-2 sm:p-2.5 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
              </button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setShowAddForm(true)}
                className="hidden sm:flex bg-black dark:bg-white text-white dark:text-black px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Plus size={18} strokeWidth={2.5} /> <span>{t('postAd')}</span>
              </motion.button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="2xl:hidden p-2 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors order-first md:order-none mr-2 md:mr-0">
                {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* New Mobile Side-Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm 2xl:hidden"
              />
              
              {/* Drawer */}
              <motion.div 
                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} 
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm 2xl:hidden bg-white dark:bg-[#09090B] shadow-2xl flex flex-col border-r border-slate-100 dark:border-zinc-800"
              >
                {/* Profile Header */}
                <div className="p-6 pt-10 flex items-center gap-4 bg-slate-50 dark:bg-zinc-900/50">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/20">
                    I
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-bold text-slate-900 dark:text-white truncate">Ismoil Luqmonov</span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">Premium Account</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="ml-auto p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1 px-3">
                    {CATEGORIES.map((item) => {
                      const isActive = activeView === item.id;
                      const Icon = item.icon;
                      return (
                        <button 
                          key={item.id} 
                          onClick={() => { setActiveView(item.id); setSearchQuery(''); setIsMenuOpen(false); window.scrollTo({top:0, behavior:'smooth'}); }}
                          className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${isActive ? 'bg-black dark:bg-white text-white dark:text-black font-bold shadow-lg shadow-black/10 dark:shadow-white/5 scale-[1.02]' : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 font-medium'}`}
                        >
                          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-white dark:text-black' : 'text-slate-400 dark:text-zinc-500'} />
                          <span className="text-[15px]">{t('tabs')[item.id]}</span>
                          {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 px-6 space-y-6">
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{t('language')}</p>
                      <div className="flex bg-slate-100 dark:bg-zinc-900 p-1 rounded-2xl items-center border border-slate-200/50 dark:border-zinc-800/50">
                        {['uz','ru','en'].map(l => (
                          <button key={l} onClick={() => setLang(l)} className={`flex-1 py-2.5 text-xs font-bold rounded-xl uppercase transition-all duration-300 ${lang === l ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white' : 'text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-200'}`}>{l}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pb-10 border-t border-slate-100 dark:border-zinc-800 bg-white dark:bg-[#09090B]">
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setShowAddForm(true); setIsMenuOpen(false); }} 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 transition-all"
                  >
                    <Plus size={20} strokeWidth={2.5} /> {t('postAd')}
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Sleek Search Area */}
      <div className="pt-28 sm:pt-36 pb-8 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {lang === 'uz' ? 'Hammasi bir joyda' : lang === 'ru' ? 'Все в одном' : 'All in one'}
          </h1>
          <div className="relative group mx-auto w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" size={20} strokeWidth={2.5} />
            <input 
              type="text" placeholder={`${lang === 'uz' ? 'Qidiruv...' : lang === 'ru' ? 'Поиск...' : 'Search...'}`}
              className="w-full bg-white dark:bg-zinc-900/50 border-2 border-slate-100 dark:border-zinc-800 rounded-3xl py-4 sm:py-6 pl-14 pr-6 focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white dark:text-white font-medium text-base sm:text-xl shadow-sm outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-500"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </div>

      {/* 3. Premium Grid with Staggered Cascading Animation */}
      <main className="max-w-7xl mx-auto px-4 pb-24 min-h-[50vh]">
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 flex items-center gap-2">
             {React.createElement(CATEGORIES.find(i=>i.id===activeView)?.icon || Briefcase, { size: 20 })}
             {t('tabs')[activeView]} 
             <span className="text-sm font-medium text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">{currentList.length}</span>
           </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeView + searchQuery} // re-trigger waterfall on view change or search
            variants={containerVariants} initial="hidden" animate="show" exit="exit" 
            className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {currentList.length > 0 ? currentList.map(item => (
              <motion.div 
                variants={itemVariants} key={item.id} onClick={() => setSelectedItem(item)}
                className="group flex flex-col bg-white dark:bg-zinc-900/40 rounded-[2.5rem] border border-slate-200/60 dark:border-zinc-800/60 overflow-hidden cursor-pointer hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  <img src={item.image} className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out bg-white dark:bg-zinc-800/50" alt="" loading="lazy"/>
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-zinc-100 line-clamp-1 mb-1">{item.name}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2 h-10">{item.title}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {item.price > 0 ? `$${item.price.toLocaleString()}` : (lang==='uz'?'Bepul':lang==='ru'?'Бесплатно':'Free')}
                      {activeView === 'freelance' && <span className="text-xs text-slate-400 font-medium font-normal ml-0.5">{t('perHour')}</span>}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )) : (
              <motion.div variants={itemVariants} className="col-span-full py-20 text-center text-slate-500 dark:text-zinc-500">
                 Kechirasiz, ma'lumot topilmadi.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Elegant Minimalist Modals */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></motion.div>
            <motion.div variants={modalVariants} initial="hidden" animate="show" exit="exit" className="relative w-full max-w-4xl bg-white dark:bg-[#09090B] rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto border border-slate-200 dark:border-zinc-800">
              <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-slate-900 dark:text-white p-2.5 rounded-full hover:bg-white dark:hover:bg-zinc-800 transition"><X size={20} strokeWidth={2.5}/></button>
              
              <div className="w-full md:w-2/5 min-h-[300px] md:min-h-full relative bg-white dark:bg-zinc-800/50">
                 <img src={selectedItem.image} className="absolute inset-0 w-full h-full object-contain p-8" alt="" />
              </div>

              <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col">
                 <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200/50 dark:border-zinc-700 w-max">{selectedItem.category}</div>
                 <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2 tracking-tight">{selectedItem.name}</h2>
                 <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed mb-8">{selectedItem.description || selectedItem.title}. Barcha ma'lumotlar ro'yxatdan o'tkazilgan va tasdiqlangan.</p>
                 
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80">
                      <p className="text-xs text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider mb-1">{t('price')}</p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">${selectedItem.price.toLocaleString()}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80">
                      <p className="text-xs text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider mb-1">{t('location')}</p>
                      <p className="text-lg font-semibold flex items-center gap-1.5 text-slate-900 dark:text-white"><MapPin size={18} className="text-slate-400"/> Tashkent</p>
                    </div>
                 </div>

                 <div className="mt-auto pt-6 border-t border-slate-100 dark:border-zinc-800/80">
                    <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-3">{t('seller')}</p>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{selectedItem.owner}</h4>
                      <a href={`tel:${selectedItem.phone}`} className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity">
                        <Phone size={18} strokeWidth={2.5}/> {selectedItem.phone}
                      </a>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddForm && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setShowAddForm(false)}></motion.div>
            <motion.div variants={modalVariants} initial="hidden" animate="show" exit="exit" className="relative w-full max-w-2xl bg-white dark:bg-[#09090B] border border-slate-200 dark:border-zinc-800 rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-10 my-auto">
              <button onClick={() => setShowAddForm(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition bg-slate-100 dark:bg-zinc-800 p-2 rounded-full"><X size={20} strokeWidth={2.5}/></button>
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">{t('postAd')}</h2>
                <p className="text-slate-500 dark:text-zinc-400">{t('formTitle')}</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('personalInfo')}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">{t('firstName')}</label><input required className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} /></div>
                    <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">{t('lastName')}</label><input required className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} /></div>
                  </div>
                  <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">{t('phone')}</label><input required className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('adDetails')}</h4>
                  <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">{t('itemName')}</label><input required className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} /></div>
                  <div className="grid grid-cols-2 gap-4">
                     <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">{t('price')} ($)</label>
                       <div className="relative mt-1"><DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} strokeWidth={2.5}/><input required type="number" className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 pl-10 pr-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} /></div>
                     </div>
                     <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">Rasm Manzili (URL)</label><input type="url" placeholder="https://" className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} /></div>
                  </div>
                  <div><label className="text-xs font-bold ml-1 text-slate-500 dark:text-zinc-400">Ta'rif (Textarea)</label><textarea required rows={3} className="w-full mt-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl py-3 px-4 font-medium resize-none focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} /></div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity">
                    {t('submitBtn')}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="bg-white dark:bg-[#09090B] py-12 border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black dark:bg-white p-1.5 rounded-lg"><Grid size={16} strokeWidth={2.5} className="text-white dark:text-black" /></div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{t('appTitle')}</span>
            </div>
            <p className="text-slate-500 dark:text-zinc-400 max-w-sm text-sm font-medium">{t('footerDesc')}</p>
          </div>
        </div>
      </footer>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }`}</style>
    </div>
  );
};

export default App;
