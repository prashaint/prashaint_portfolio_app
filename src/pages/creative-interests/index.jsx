import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { PageTransition, MotionReveal } from '../../components/motion';
import Icon from '../../components/AppIcon';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const MUSIC_DATA = {
    headline: 'Flute & Music',
    tagline: 'Where breath becomes melody',
    description:
        "Music has been my soul's companion since childhood. I practice the Indian classical flute (bansuri) and explore both Hindustani ragas and folk tunes. Every note is a small meditation.",
    youtubeChannel: {
        name: 'Mishra Melodies',
        url: 'https://youtube.com/@mishramelodies?si=Bimt29Krz_qbX7ZZ',
        subscribers: '1K+',
        videos: '20+',
        description:
            'My personal YouTube channel where I share original flute covers, raga explorations, and practice sessions. A journey from beginner stumbles to soulful sounds.',
    },
    highlights: [
        { icon: 'Music', label: 'Instrument', value: 'Bansuri (Indian Flute)' },
        { icon: 'Star', label: 'Style', value: 'Hindustani Classical & Folk' },
        { icon: 'Clock', label: 'Practice', value: '1–2 hrs daily' },
        { icon: 'BookOpen', label: 'Learning', value: 'Self-taught + Online Gurukul' },
    ],
    ragas: ['Yaman', 'Bhairavi', 'Desh', 'Malkauns', 'Pahadi', 'Kafi'],
    playlists: [
        { title: 'Morning Ragas', mood: '🌅 Serene', count: '8 videos' },
        { title: 'Evening Renditions', mood: '🌙 Contemplative', count: '6 videos' },
        { title: 'Folk Melodies', mood: '🌿 Earthy', count: '5 videos' },
    ],
};

const ARTS_DATA = {
    headline: 'Visual Arts',
    tagline: 'Seeing the world through a creative lens',
    description:
        "Art is how I process the world outside of code. I sketch landscapes, experiment with pencil portraits, and occasionally dabble in digital illustration. My biggest muse is nature around Pune's forts and hills.",
    mediums: [
        { icon: 'Pencil', label: 'Pencil Sketching', level: 80, color: '#6c72f6' },
        { icon: 'Image', label: 'Digital Illustration', level: 60, color: '#f97316' },
        { icon: 'Camera', label: 'Photography', level: 75, color: '#10b981' },
        { icon: 'Layers', label: 'Watercolour', level: 45, color: '#06b6d4' },
    ],
    themes: [
        { emoji: '🏔️', title: 'Landscapes', desc: 'Forts, valleys & sunsets around Pune' },
        { emoji: '🧑‍🎨', title: 'Portraits', desc: 'Pencil studies of faces & expressions' },
        { emoji: '🌿', title: 'Nature Studies', desc: 'Leaves, flowers and macro details' },
        { emoji: '🏙️', title: 'Urban Sketching', desc: 'Street scenes and architecture' },
    ],
    gallery: [
        { color: 'from-violet-500 to-purple-700', label: 'Sinhagad Fort Sketch', medium: 'Pencil' },
        { color: 'from-orange-400 to-rose-600', label: 'Sunset Study', medium: 'Digital' },
        { color: 'from-emerald-400 to-teal-600', label: 'Monsoon Greens', medium: 'Watercolour' },
        { color: 'from-sky-400 to-blue-600', label: 'Valley Mist', medium: 'Photography' },
        { color: 'from-amber-400 to-yellow-600', label: 'Morning Light', medium: 'Digital' },
        { color: 'from-pink-400 to-fuchsia-600', label: 'Portrait Study', medium: 'Pencil' },
    ],
};

/* ─────────────────────────────────────────────
   MUSIC TAB CONTENT
───────────────────────────────────────────── */
const MusicTab = () => (
    <div className="space-y-16">
        {/* Hero banner */}
        <MotionReveal direction="up">
            <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #11998e 100%)',
                    minHeight: 320,
                }}
            >
                {/* animated music bars */}
                <div className="absolute inset-0 flex items-end justify-center gap-1 pb-6 opacity-20">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 bg-white rounded-full"
                            animate={{ height: [10, Math.random() * 80 + 20, 10] }}
                            transition={{ duration: 1.2 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
                        />
                    ))}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                    {/* Flute icon circle */}
                    <div className="flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <span className="text-6xl">🎶</span>
                    </div>
                    <div className="text-center md:text-left text-white">
                        <div className="text-sm font-semibold uppercase tracking-widest text-emerald-300 mb-2">Passion Project</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{MUSIC_DATA.headline}</h2>
                        <p className="text-white/60 italic text-lg mb-4">{MUSIC_DATA.tagline}</p>
                        <p className="text-white/80 leading-relaxed max-w-xl">{MUSIC_DATA.description}</p>
                    </div>
                </div>
            </div>
        </MotionReveal>

        {/* YouTube Channel Card */}
        <MotionReveal direction="up">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30"
                style={{ background: 'linear-gradient(135deg, rgba(255,0,0,0.08), rgba(0,0,0,0) 60%)' }}>
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-shrink-0 w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/40">
                        <Icon name="Youtube" size={40} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">{MUSIC_DATA.youtubeChannel.name}</h3>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-red-600 text-white font-medium">YouTube</span>
                        </div>
                        <p className="text-muted-foreground mb-4 max-w-2xl">{MUSIC_DATA.youtubeChannel.description}</p>
                        <div className="flex flex-wrap gap-6 mb-4">
                            {[
                                { label: 'Subscribers', value: MUSIC_DATA.youtubeChannel.subscribers, icon: 'Users' },
                                { label: 'Videos', value: MUSIC_DATA.youtubeChannel.videos, icon: 'Video' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-2">
                                    <Icon name={stat.icon} size={16} className="text-primary" />
                                    <span className="font-bold text-foreground">{stat.value}</span>
                                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href={MUSIC_DATA.youtubeChannel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/30"
                        >
                            <Icon name="Youtube" size={18} />
                            Visit Channel
                        </a>
                    </div>
                </div>
            </div>
        </MotionReveal>

        {/* Highlights grid */}
        <MotionReveal direction="up">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="Music" size={22} className="text-primary" /> My Musical Practice
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {MUSIC_DATA.highlights.map((h) => (
                    <div key={h.label}
                        className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Icon name={h.icon} size={20} className="text-primary" />
                        </div>
                        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">{h.label}</div>
                        <div className="text-sm font-bold text-foreground">{h.value}</div>
                    </div>
                ))}
            </div>
        </MotionReveal>

        {/* Ragas & Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionReveal direction="left">
                <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-2xl">🎵</span> Ragas I Explore
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {MUSIC_DATA.ragas.map((r) => (
                            <span key={r}
                                className="px-3 py-1.5 rounded-full text-sm font-medium"
                                style={{ background: 'linear-gradient(135deg, rgba(108,114,246,0.15), rgba(17,153,142,0.15))', border: '1px solid rgba(108,114,246,0.3)', color: 'var(--primary)' }}>
                                {r}
                            </span>
                        ))}
                    </div>
                </div>
            </MotionReveal>

            <MotionReveal direction="right">
                <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-2xl">▶️</span> My Playlists
                    </h4>
                    <div className="space-y-3">
                        {MUSIC_DATA.playlists.map((p) => (
                            <div key={p.title} className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors">
                                <div>
                                    <div className="text-sm font-semibold text-foreground">{p.title}</div>
                                    <div className="text-xs text-muted-foreground">{p.mood}</div>
                                </div>
                                <span className="text-xs text-muted-foreground">{p.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionReveal>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   ARTS TAB CONTENT
───────────────────────────────────────────── */
const ArtsTab = () => (
    <div className="space-y-16">
        {/* Hero banner */}
        <MotionReveal direction="up">
            <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1a0a00 0%, #4a1942 40%, #f97316 100%)',
                    minHeight: 320,
                }}
            >
                {/* Floating shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    {[
                        { size: 120, x: '10%', y: '20%', color: 'rgba(249,115,22,0.25)' },
                        { size: 80, x: '80%', y: '10%', color: 'rgba(167,139,250,0.25)' },
                        { size: 60, x: '60%', y: '70%', color: 'rgba(52,211,153,0.2)' },
                        { size: 100, x: '30%', y: '60%', color: 'rgba(251,191,36,0.15)' },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{ width: s.size, height: s.size, left: s.x, top: s.y, background: s.color, filter: 'blur(30px)' }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
                        />
                    ))}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                    <div className="flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <span className="text-6xl">🎨</span>
                    </div>
                    <div className="text-center md:text-left text-white">
                        <div className="text-sm font-semibold uppercase tracking-widest text-orange-300 mb-2">Creative Outlet</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{ARTS_DATA.headline}</h2>
                        <p className="text-white/60 italic text-lg mb-4">{ARTS_DATA.tagline}</p>
                        <p className="text-white/80 leading-relaxed max-w-xl">{ARTS_DATA.description}</p>
                    </div>
                </div>
            </div>
        </MotionReveal>

        {/* Mediums / skill bars */}
        <MotionReveal direction="up">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="Palette" size={22} className="text-primary" /> Mediums I Work With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ARTS_DATA.mediums.map((m) => (
                    <div key={m.label} className="bg-card border border-border rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: m.color + '22' }}>
                                <Icon name={m.icon} size={18} style={{ color: m.color }} />
                            </div>
                            <span className="font-semibold text-foreground">{m.label}</span>
                            <span className="ml-auto text-sm text-muted-foreground">{m.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <motion.div
                                className="h-2 rounded-full"
                                style={{ background: `linear-gradient(90deg, ${m.color}99, ${m.color})` }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${m.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </MotionReveal>

        {/* Themes grid */}
        <MotionReveal direction="up">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="Image" size={22} className="text-primary" /> Themes I Love
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ARTS_DATA.themes.map((t) => (
                    <div key={t.title}
                        className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                        <div className="text-4xl mb-3">{t.emoji}</div>
                        <div className="font-bold text-foreground text-sm mb-1">{t.title}</div>
                        <div className="text-xs text-muted-foreground">{t.desc}</div>
                    </div>
                ))}
            </div>
        </MotionReveal>

        {/* Gallery mosaic (placeholder colour blocks) */}
        <MotionReveal direction="up">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="Grid" size={22} className="text-primary" /> Gallery Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ARTS_DATA.gallery.map((g, i) => (
                    <motion.div
                        key={g.label}
                        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${g.color} group cursor-pointer`}
                        style={{ aspectRatio: i % 3 === 1 ? '1/1.3' : '1/1' }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* placeholder art */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl opacity-30">🖼️</span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <div className="text-white font-semibold text-sm">{g.label}</div>
                            <div className="text-white/70 text-xs">{g.medium}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
                🎨 More works shared on Instagram &nbsp;
                <a href="https://www.instagram.com/prashaint/?hl=en" target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium">@prashaint</a>
            </p>
        </MotionReveal>
    </div>
);

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const TABS = [
    { id: 'music', label: 'Music', icon: 'Music', emoji: '🎶', color: '#11998e' },
    { id: 'arts', label: 'Arts', icon: 'Palette', emoji: '🎨', color: '#f97316' },
];

const CreativeInterests = () => {
    const [activeTab, setActiveTab] = useState('music');

    return (
        <PageTransition>
            <div className="min-h-screen bg-background">
                <Helmet>
                    <title>Creative Interests - Prashaint Mishra | Music & Arts</title>
                    <meta name="description" content="Explore Prashaint Mishra's creative passions — Indian classical flute music on YouTube and visual arts including sketching, photography and digital illustration." />
                </Helmet>

                <Header />

                {/* ── Page Hero ── */}
                <section className="relative overflow-hidden py-16 md:py-24"
                    style={{ background: 'linear-gradient(135deg, var(--background) 0%, rgba(108,114,246,0.06) 50%, var(--background) 100%)' }}>
                    {/* decorative blobs */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10"
                        style={{ background: 'radial-gradient(circle, #6c72f6, transparent)' }} />
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10"
                        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <MotionReveal direction="up">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                                style={{ background: 'rgba(108,114,246,0.12)', border: '1px solid rgba(108,114,246,0.3)', color: 'var(--primary)' }}>
                                <Icon name="Sparkles" size={16} />
                                Beyond the Code
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                                Creative <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #6c72f6, #11998e)' }}>Interests</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Life is richer when you create — not just software, but music, art, and moments that matter.
                            </p>
                        </MotionReveal>
                    </div>
                </section>

                {/* ── Large Tab Switcher ── */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionReveal direction="up">
                        <div className="flex gap-4 mb-12 p-2 rounded-2xl bg-muted/40 border border-border max-w-md mx-auto">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className="relative flex-1 py-4 rounded-xl font-bold text-base transition-colors duration-200 focus:outline-none"
                                    style={{ color: activeTab === tab.id ? '#fff' : 'var(--muted-foreground)' }}
                                >
                                    {activeTab === tab.id && (
                                        <motion.span
                                            layoutId="tabPill"
                                            className="absolute inset-0 rounded-xl z-0"
                                            style={{ background: `linear-gradient(135deg, ${tab.color}cc, ${tab.color})` }}
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <span className="text-xl">{tab.emoji}</span>
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </MotionReveal>

                    {/* ── Tab Content ── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                            className="pb-20"
                        >
                            {activeTab === 'music' ? <MusicTab /> : <ArtsTab />}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Footer CTA ── */}
                <MotionReveal direction="up">
                    <section
                        className="py-16 text-center"
                        style={{ background: 'linear-gradient(135deg, rgba(108,114,246,0.08), rgba(249,115,22,0.08))' }}>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-3xl mb-4">🎵 🎨</div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Let's Talk Creativity!
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                Whether it's a musical collaboration, artistic feedback, or just a chat about Hindustani ragas — I'd love to connect.
                            </p>
                            <a href="/contact-form-page"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                                style={{ background: 'linear-gradient(135deg, #6c72f6, #11998e)' }}>
                                <Icon name="Mail" size={18} />
                                Get in Touch
                            </a>
                        </div>
                    </section>
                </MotionReveal>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default CreativeInterests;
