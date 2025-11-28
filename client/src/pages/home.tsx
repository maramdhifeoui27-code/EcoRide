import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/cyberpunk_electric_scooter_dark_mode.png";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
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
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tighter leading-none text-white mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
                ECORIDE
              </h1>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 relative z-20">
                EcoRide-TN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 glow-text">
                  Tunisia’s First AI Scooter Sharing
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide uppercase">
                Fast. Green. Smart. AI-driven mobility in Tunis.
              </p>

              <div className="flex items-center justify-center gap-8 pt-8 text-sm tracking-widest text-gray-500 uppercase">
                <div>Launched: 2025</div>
                <div>•</div>
                <div>Region: Tunisia</div>
                <div>•</div>
                <div>Founded: 2025</div>
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

        {/* Origin Story */}
        <section id="origin" className="py-24 border-t border-white/5 relative">
           <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-8">Origin Story</h2>
            
            <div className="space-y-16">
              <motion.div {...fadeIn} className="relative pl-8 border-l border-primary/30">
                <h3 className="text-3xl font-heading font-bold text-white mb-4">The Genesis</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  EcoRide-TN was conceived by three Tunisian university students — a software engineer, a business student, and a data analyst — who noticed rising urban congestion in Tunis and a lack of eco-friendly mobility options. Inspired by AI technology, they envisioned scooters that know where they are needed most.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="relative pl-8 border-l border-primary/30">
                <h3 className="text-3xl font-heading font-bold text-white mb-4">The Beginning</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  In the heart of Tunis, the team realized there were no local scooter-sharing services. International models existed but were unsuitable for Tunisian streets, local regulations, and user habits. The solution: build a data-driven, AI-powered scooter-sharing service, tailored for the city.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section id="journey" className="py-24 bg-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12 text-center">The Journey</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Early Obstacles",
                  desc: "Introducing a completely new product meant the market didn’t exist yet. Regulators had limited experience with scooter-sharing. Users were skeptical, and operational logistics (charging, parking, maintenance) were untested."
                },
                {
                  title: "The Pilot",
                  desc: "The team deployed a small fleet of scooters in Lac 2, Centre Ville, Ennasr, Manar University, and Sidi Bou Saïd, using AI to predict daily demand. GPS-enabled scooters sent real-time data to refine placement algorithms, while user feedback was collected via a simple mobile app."
                },
                {
                  title: "Scaling Smartly",
                  desc: "With AI-powered analytics, scooters were repositioned daily. Partnerships with universities and local businesses helped increase adoption. Social campaigns highlighted eco-friendliness, convenience, and smart urban mobility."
                }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-black/50 border border-white/10 p-8 hover:border-primary/50 transition-colors group"
                >
                  <div className="text-4xl font-heading font-bold text-white/10 group-hover:text-primary/20 mb-6 transition-colors">0{i+1}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Platform */}
        <section id="platform" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-8">The Platform</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Product Description</h3>
                <p className="text-gray-400 mb-6">EcoRide-TN is an AI-driven scooter-sharing platform for Tunis:</p>
                <ul className="space-y-4">
                  {[
                    { title: "AI Placement", desc: "Predicts high-demand zones daily using weather, events, foot traffic, and university schedules." },
                    { title: "Mobile App", desc: "Users locate and unlock scooters via smartphone." },
                    { title: "Eco-Friendly Mobility", desc: "Zero-emission electric scooters." },
                    { title: "Secure & Efficient", desc: "GPS tracking, battery monitoring, maintenance alerts." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-gray-400"><strong className="text-white">{item.title}:</strong> {item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded border border-white/10">
                  <h3 className="text-xl font-bold text-primary mb-2">Mission</h3>
                  <p className="text-gray-300">Provide fast, eco-friendly, AI-optimized mobility for students, tourists, and young professionals in Tunis.</p>
                </div>
                <div className="bg-white/5 p-8 rounded border border-white/10">
                  <h3 className="text-xl font-bold text-primary mb-2">Vision</h3>
                  <p className="text-gray-300">Become Tunisia’s leading smart mobility platform, transforming urban transport while reducing congestion and carbon emissions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SWOT Analysis */}
        <section id="swot" className="py-24 bg-white/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12 text-center">SWOT Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Strengths */}
              <motion.div {...fadeIn} className="bg-black/50 border border-emerald-500/20 p-8 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
                 <h3 className="text-xl font-heading font-bold text-emerald-500 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full" /> STRENGTHS
                 </h3>
                 <ul className="space-y-3 text-gray-400">
                   {[
                     "First AI-driven scooter-sharing service in Tunisia",
                     "Strong demand from students and young professionals",
                     "Eco-friendly and low-cost mobility option",
                     "Real-time data → optimized scooter placement",
                     "Easy-to-use mobile app with GPS tracking"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-emerald-500 mt-1">✓</span> {item}
                     </li>
                   ))}
                 </ul>
              </motion.div>

              {/* Weaknesses */}
              <motion.div {...fadeIn} className="bg-black/50 border border-red-500/20 p-8 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full pointer-events-none" />
                 <h3 className="text-xl font-heading font-bold text-red-500 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 bg-red-500 rounded-full" /> WEAKNESSES
                 </h3>
                 <ul className="space-y-3 text-gray-400">
                   {[
                     "High upfront cost for scooters and batteries",
                     "New product → users need education",
                     "Limited charging infrastructure",
                     "AI accuracy depends on continuous data"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-red-500 mt-1">•</span> {item}
                     </li>
                   ))}
                 </ul>
              </motion.div>

              {/* Opportunities */}
              <motion.div {...fadeIn} className="bg-black/50 border border-blue-500/20 p-8 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />
                 <h3 className="text-xl font-heading font-bold text-blue-500 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 bg-blue-500 rounded-full" /> OPPORTUNITIES
                 </h3>
                 <ul className="space-y-3 text-gray-400">
                   {[
                     "Expand to Sousse, Monastir, Sfax",
                     "Partnerships with universities, malls, coworking spaces",
                     "Tourism sector → high seasonal demand",
                     "Government interest in green mobility projects"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-blue-500 mt-1">↗</span> {item}
                     </li>
                   ))}
                 </ul>
              </motion.div>

              {/* Threats */}
              <motion.div {...fadeIn} className="bg-black/50 border border-amber-500/20 p-8 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />
                 <h3 className="text-xl font-heading font-bold text-amber-500 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 bg-amber-500 rounded-full" /> THREATS
                 </h3>
                 <ul className="space-y-3 text-gray-400">
                   {[
                     "Vandalism, theft, and poor parking habits",
                     "Potential new competitors (Bolt, Lime)",
                     "Changes in municipal regulations",
                     "Economic instability affecting consumer spending"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-amber-500 mt-1">!</span> {item}
                     </li>
                   ))}
                 </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PESTEL Analysis */}
        <section id="pestel" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-12 text-center">PESTEL Analysis</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "POLITICAL", items: ["Government initiatives promoting green mobility", "Municipality involvement needed for parking rules", "Potential restrictions on micro-mobility"] },
                { title: "ECONOMIC", items: ["Affordable pricing attracts students", "Inflation and scooter import costs can increase expenses", "Rising fuel prices push people toward electric mobility"] },
                { title: "SOCIAL", items: ["Young population open to new tech", "Urban lifestyle → demand for fast transportation", "Need for safety education (helmets, riding zones)"] },
                { title: "TECHNOLOGICAL", items: ["AI placement algorithms improve efficiency", "Sensors, GPS, IoT for real-time monitoring", "Mobile payments and digital wallets increase accessibility"] },
                { title: "ENVIRONMENTAL", items: ["Zero emissions support national sustainability goals", "Battery recycling and energy sourcing must be managed", "Reduces traffic congestion and noise pollution"] },
                { title: "LEGAL", items: ["Need permits for public-space usage", "Insurance, liability, and rider age restrictions", "Compliance with data privacy and GPS tracking laws"] }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 p-6 border border-white/5 hover:border-primary/30 transition-colors rounded"
                >
                  <h3 className="text-lg font-heading font-bold text-white mb-4 border-b border-white/10 pb-2">{card.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {card.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section id="kpis" className="py-24 bg-white/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12 text-center">Key Performance Indicators</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  cat: "Operational KPIs",
                  items: ["Scooter Utilization Rate", "AI Prediction Accuracy", "Maintenance Downtime", "Battery Efficiency"]
                },
                {
                  cat: "User & Growth KPIs",
                  items: ["Daily Active Riders (DAR)", "Monthly Active Users (MAU)", "User Retention Rate", "Ride Completion Rate"]
                },
                {
                  cat: "Financial KPIs",
                  items: ["Revenue per Scooter", "Cost per Ride", "Gross Margin per Fleet", "Customer Acquisition Cost"]
                },
                {
                  cat: "Environmental KPIs",
                  items: ["CO₂ Emissions Saved", "Car Trips Replaced", "Energy Consumption", "Noise Pollution Reduced"]
                }
              ].map((group, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-primary font-bold uppercase text-sm tracking-wider border-b border-primary/20 pb-2">{group.cat}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-gray-300 text-sm bg-black/30 p-3 border border-white/5 rounded">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-12">Strategy & Execution Roadmap</h2>
            
            <div className="space-y-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-white/10 md:before:left-1/2">
              {[
                {
                  step: "Step 1",
                  time: "Months 1–3",
                  title: "Concept Validation",
                  items: ["Develop small fleet and AI prototype", "Test scooter placement predictions in key zones", "Collect initial usage data"]
                },
                {
                  step: "Step 2",
                  time: "Months 4–6",
                  title: "Pilot Launch",
                  items: ["Deploy fleet in high-demand zones", "Refine AI placement and routing", "Collect user feedback and usage metrics"]
                },
                {
                  step: "Step 3",
                  time: "Months 7–12",
                  title: "Full Launch",
                  items: ["Expand fleet size and zone coverage", "Launch marketing campaigns targeting students, tourists", "Track KPIs: utilization, rides per scooter, AI accuracy"]
                },
                {
                  step: "Step 4",
                  time: "Months 13–24",
                  title: "Growth & Optimization",
                  items: ["Expand city-wide or to other Tunisian cities", "Introduce loyalty programs, seasonal promotions", "Continuous AI improvement and operational efficiency"]
                }
              ].map((phase, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10 mt-6" />
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white/5 border border-white/10 p-6 hover:border-primary/50 transition-colors rounded-lg relative group">
                      <div className="absolute top-4 right-4 text-xs font-bold text-primary/50 uppercase tracking-wider group-hover:text-primary">{phase.step}</div>
                      <div className="text-sm text-accent mb-2">{phase.time}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li key={j} className="text-gray-400 text-sm flex gap-2">
                            <span className="text-primary">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section id="challenges" className="py-24 bg-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12 text-center">Obstacles & Solutions</h2>
            
            <div className="grid gap-6">
              {[
                { title: "Regulatory Challenge", desc: "Scooter-sharing was new; the team worked with Tunis city officials to define safe parking zones, speed limits, and operational permits." },
                { title: "Operational Challenge", desc: "Fleet maintenance, battery charging, and scooter redistribution required logistics optimization — solved with predictive AI scheduling." },
                { title: "Adoption Challenge", desc: "Users were unfamiliar; partnerships with universities and social campaigns built trust." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 items-start p-6 border-b border-white/10 last:border-0">
                  <h3 className="text-xl font-bold text-white md:w-1/3">{item.title}</h3>
                  <p className="text-gray-400 md:w-2/3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics & Lessons */}
        <section id="ethics" className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-6">Ethical & Safety Measures</h2>
                <ul className="space-y-4">
                  {["Speed limits and geo-fencing in high-traffic areas", "Mobile alerts for safe riding", "Education campaigns for new users"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-6">Lessons Learned</h2>
                <ul className="space-y-4">
                  {["AI improves operational efficiency and utilization", "Proactive regulatory engagement builds trust", "Ethical design ensures adoption and sustainability", "Continuous data collection and AI refinement are critical"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-24 text-center">
              <blockquote className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight max-w-3xl mx-auto">
                "We didn’t just deploy scooters. We designed a smarter, greener city experience."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Timeline Footer */}
        <section id="timeline" className="py-20 bg-gradient-to-t from-primary/10 to-black border-t border-white/5">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-8">Project Timeline</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
               {[
                 { k: "Founded", v: "2025" },
                 { k: "Pilot Launch", v: "2025" },
                 { k: "Region", v: "Tunis (Expanding 2026)" },
                 { k: "Coverage", v: "Lac 2, Centre Ville, Ennasr..." }
               ].map((item, i) => (
                 <div key={i}>
                   <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">{item.k}</div>
                   <div className="text-white font-bold">{item.v}</div>
                 </div>
               ))}
             </div>
           </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
