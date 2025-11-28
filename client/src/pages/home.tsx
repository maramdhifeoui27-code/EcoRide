import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Shield, Globe, MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/cyberpunk_electric_scooter_dark_mode.png";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-40 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.1),transparent_50%)]" />
          </div>

          <div className="container relative z-10 px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary tracking-[0.2em] text-xs font-bold uppercase mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Case Study 2025
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tighter leading-none text-white mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
                ECORIDE
              </h1>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 relative z-20">
                AI-POWERED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 glow-text">
                  URBAN MOBILITY
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Revolutionizing Tunisian transport infrastructure through predictive intelligence and sustainable eco-scooters.
              </p>

              <div className="flex items-center justify-center gap-6 pt-8">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-heading font-bold text-primary">0%</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Emissions</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-heading font-bold text-accent">AI</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Optimized</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-heading font-bold text-white">24/7</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Access</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </section>

        {/* Background / History Section */}
        <section id="background" className="py-32 relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">01. Company Background</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                  INNOVATION FROM <br/>
                  <span className="text-white/50">THE GROUND UP</span>
                </h3>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p className="border-l-2 border-primary/50 pl-6">
                    EcoRide-TN is a fictional startup created by a group of students in Tunisia. The company’s mission is to provide efficient, eco-friendly mobility for students, youth, and tourists in Tunis.
                  </p>
                  <p>
                    Inspired by the success of scooter-sharing services in Europe and the capabilities of artificial intelligence (AI), EcoRide-TN envisions smart scooter placement, predicting where scooters will be most needed each day based on weather, local events, foot traffic, and tourist activity.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Location", value: "Tunis, TN" },
                      { label: "Industry", value: "Mobility" },
                      { label: "Tech Stack", value: "AI / IoT" },
                      { label: "Status", value: "Pilot" }
                    ].map((item) => (
                      <div key={item.label} className="p-4 bg-black/50 rounded-lg border border-white/5">
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{item.label}</div>
                        <div className="text-lg font-heading font-bold text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="py-32 bg-white/5 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">02. Strategic Challenge</h2>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-8">
                "How can we use AI to place scooters smartly in a market where this product does not exist yet?"
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Awareness", desc: "Lack of familiarity with sharing economy models." },
                { title: "Regulation", desc: "Navigating urban laws and safety compliance." },
                { title: "Operations", desc: "Managing maintenance, charging, and theft." },
                { title: "Data Void", desc: "No historical usage data for training models." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full bg-black border border-white/10 p-8 hover:border-primary/50 transition-colors duration-300">
                    <div className="text-4xl font-heading font-bold text-white/10 group-hover:text-primary/20 mb-4 transition-colors">0{i+1}</div>
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">{card.title}</h4>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Section */}
        <section id="product" className="py-32 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">03. Environmental Analysis</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold">
                  MARKET <span className="text-primary">INTELLIGENCE</span>
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-12 bg-primary rounded-full" />
                <div className="h-2 w-2 bg-white/20 rounded-full" />
                <div className="h-2 w-2 bg-white/20 rounded-full" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* PESTEL */}
              <div className="space-y-8">
                <h4 className="text-xl font-bold border-b border-white/10 pb-4">PESTEL FACTORS</h4>
                <div className="grid gap-4">
                  {[
                    { k: "Political", v: "Green mobility support vs. regulations" },
                    { k: "Economic", v: "High demand for affordable transport" },
                    { k: "Social", v: "Eco-awareness rising among youth" },
                    { k: "Tech", v: "AI & IoT infrastructure available" },
                    { k: "Legal", v: "Strict traffic & licensing laws" }
                  ].map((item) => (
                    <div key={item.k} className="flex items-center justify-between p-4 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors">
                      <span className="font-heading font-bold text-accent">{item.k}</span>
                      <span className="text-sm text-right text-gray-400">{item.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SWOT */}
              <div className="space-y-8">
                <h4 className="text-xl font-bold border-b border-white/10 pb-4">SWOT MATRIX</h4>
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/20 rounded">
                    <div className="text-emerald-500 font-bold mb-2">STRENGTHS</div>
                    <p className="text-xs text-gray-400">AI Innovation, Eco-friendly, Student-driven agility</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 rounded">
                    <div className="text-red-500 font-bold mb-2">WEAKNESSES</div>
                    <p className="text-xs text-gray-400">No historical data, Limited pilot resources</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded">
                    <div className="text-blue-500 font-bold mb-2">OPPORTUNITIES</div>
                    <p className="text-xs text-gray-400">Urban growth, University partnerships</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/20 rounded">
                    <div className="text-amber-500 font-bold mb-2">THREATS</div>
                    <p className="text-xs text-gray-400">Vandalism, Regulatory shifts, Adoption resistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section id="strategy" className="py-32 bg-gradient-to-b from-black to-emerald-950/10 relative">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">04. AI Strategy</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                PREDICTIVE <span className="text-accent">OPTIMIZATION</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Using multiple data inputs to predict daily demand and suggest optimal scooter distribution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  day: "WEEKDAYS", 
                  focus: "Commuter Zones",
                  loc: "Universities, Business Districts",
                  icon: Users 
                },
                { 
                  day: "WEEKENDS", 
                  focus: "Leisure Zones",
                  loc: "Sidi Bou Saïd, La Marsa",
                  icon: Globe 
                },
                { 
                  day: "RAINY DAYS", 
                  focus: "Sheltered Zones",
                  loc: "Malls, Transport Hubs",
                  icon: Shield 
                }
              ].map((strat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative bg-black border border-white/10 p-10 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <strat.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{strat.day}</h4>
                    <div className="w-12 h-1 bg-accent mb-4" />
                    <p className="text-lg font-bold text-white mb-2">{strat.focus}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{strat.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation / Footer CTA */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-9xl font-heading font-bold text-white/5 mb-8">ECORIDE</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
               {[
                 { l: "Utilization Rate", v: "KPI 01" },
                 { l: "AI Accuracy", v: "KPI 02" },
                 { l: "Customer Sat", v: "KPI 03" },
                 { l: "Efficiency", v: "KPI 04" },
               ].map((kpi) => (
                 <div key={kpi.l} className="border border-white/10 p-4">
                   <div className="text-primary font-heading font-bold text-xl mb-1">{kpi.v}</div>
                   <div className="text-xs text-gray-500 uppercase tracking-wider">{kpi.l}</div>
                 </div>
               ))}
            </div>
            
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold tracking-widest uppercase px-8 py-6 text-lg rounded-none border border-primary shadow-[0_0_20px_rgba(0,255,148,0.4)] hover:shadow-[0_0_40px_rgba(0,255,148,0.6)] transition-all">
              View Full Report
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
