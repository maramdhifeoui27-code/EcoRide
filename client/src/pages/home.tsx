import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tighter leading-none text-white mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
                ECORIDE
              </h1>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 relative z-20">
                EcoRide-TN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 glow-text">
                  AI-Powered Scooter Sharing in Tunisia
                </span>
              </h1>
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

        {/* 1. Company Background */}
        <section id="background" className="py-20 relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="grid md:grid-cols-1 gap-8 items-start max-w-4xl mx-auto">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">1. Company Background</h2>
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                  <p>
                    EcoRide-TN is a fictional startup created by a group of students in Tunisia. The company’s mission is to provide efficient, eco-friendly mobility for students, youth, and tourists in Tunis. Inspired by the success of scooter-sharing services in Europe and the capabilities of artificial intelligence (AI), EcoRide-TN envisions smart scooter placement, predicting where scooters will be most needed each day based on weather, local events, foot traffic, and tourist activity.
                  </p>
                  <p>
                    As a student project, EcoRide-TN allows learners to explore how AI can optimize urban transportation, even in a market where scooter-sharing does not yet exist.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Strategic Challenge */}
        <section id="challenge" className="py-20 bg-white/5 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="mb-12">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">2. Strategic Challenge / Management Question</h2>
              <p className="text-lg text-white font-bold mb-4">
                The central strategic question facing EcoRide-TN is:
              </p>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-white border-l-4 border-primary pl-6 italic">
                “How can we use AI to place scooters smartly in a market where this product does not exist yet?”
              </h3>
              
              <p className="text-lg text-white font-bold mb-4">Key challenges include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg pl-4">
                <li>Lack of awareness among potential users about scooter-sharing.</li>
                <li>Urban regulations and infrastructure constraints in Tunis.</li>
                <li>Operational challenges such as maintenance, recharging, and theft prevention.</li>
                <li>Demand uncertainty, since no historical data exists in Tunisia for scooter-sharing.</li>
              </ul>
              <p className="mt-6 text-gray-400 text-lg">
                The case requires students to think strategically about market entry, technology adoption, and operational planning in a novel environment.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Environmental Analysis */}
        <section id="analysis" className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">3. Environmental Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* PESTEL */}
              <div className="space-y-6">
                <h4 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4">PESTEL Analysis</h4>
                <div className="space-y-4 text-gray-400">
                  <p><strong className="text-primary">Political:</strong> Tunisia is generally supportive of green mobility, but regulations for scooter use and urban road safety must be considered.</p>
                  <p><strong className="text-primary">Economic:</strong> Affordable mobility solutions are in demand among students and young professionals.</p>
                  <p><strong className="text-primary">Social:</strong> Increasing awareness of eco-friendly transportation; acceptance depends on safety and convenience.</p>
                  <p><strong className="text-primary">Technological:</strong> AI and data analytics are feasible tools to optimize scooter placement and monitor operations.</p>
                  <p><strong className="text-primary">Environmental:</strong> Promotes sustainable urban transport, reduces congestion and pollution.</p>
                  <p><strong className="text-primary">Legal:</strong> Compliance with traffic laws, licensing, and safety regulations is mandatory.</p>
                </div>
              </div>

              {/* SWOT */}
              <div className="space-y-6">
                <h4 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4">SWOT Analysis</h4>
                <div className="space-y-4 text-gray-400">
                  <p><strong className="text-emerald-500">Strengths:</strong> Innovative use of AI, eco-friendly mobility, student-driven project with learning value.</p>
                  <p><strong className="text-red-500">Weaknesses:</strong> Lack of historical demand data, limited resources for pilot deployment.</p>
                  <p><strong className="text-blue-500">Opportunities:</strong> Growing urban population, potential partnerships with universities and tourist areas.</p>
                  <p><strong className="text-amber-500">Threats:</strong> Resistance to adoption, potential vandalism or theft, regulatory changes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Strategy Formulation */}
        <section id="strategy" className="py-20 bg-gradient-to-b from-black to-emerald-950/10 relative">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">4. Strategy Formulation</h2>
            <p className="text-lg text-gray-400 mb-8">
              EcoRide-TN’s strategy focuses on AI-driven optimization to maximize scooter utilization:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black/50 border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Goals:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Introduce the first AI-powered scooter-sharing service in Tunisia.</li>
                  <li>Optimize placement daily to meet demand efficiently.</li>
                  <li>Promote sustainable, eco-friendly urban mobility.</li>
                </ul>
              </div>
              
              <div className="bg-black/50 border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">AI Implementation Scenarios:</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><strong className="text-primary">Weekdays:</strong> High demand near universities and business districts.</li>
                  <li><strong className="text-primary">Weekends:</strong> Tourist zones and recreational areas.</li>
                  <li><strong className="text-primary">Rainy days:</strong> Lower demand; focus on sheltered or indoor locations.</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500 italic">
                  The AI uses multiple inputs (weather, events, foot traffic) to predict daily demand and suggest optimal scooter distribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Implementation */}
        <section id="implementation" className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">5. Implementation</h2>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Pilot Deployment Plan in Tunis:</h3>
            
            <div className="space-y-6 border-l-2 border-primary/20 pl-6 ml-2">
              <div>
                <h4 className="text-lg font-bold text-primary">Data Collection:</h4>
                <p className="text-gray-400">Gather location, foot traffic, and event data.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">AI Model Setup:</h4>
                <p className="text-gray-400">Train the model on simulated data for student analysis.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Daily Placement Simulation:</h4>
                <p className="text-gray-400">Use AI outputs to place scooters in predicted high-demand zones (Lac 2, Centre Ville, Ennasr, Manar University, Sidi Bou Saïd).</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Maintenance and Recharging:</h4>
                <p className="text-gray-400">Plan routine maintenance based on predicted usage.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Monitoring & Feedback:</h4>
                <p className="text-gray-400">Track AI accuracy using simulated utilization metrics.</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded text-primary">
              <strong>Example:</strong> A map heatmap showing zones of predicted high demand can illustrate the concept.
            </div>
          </div>
        </section>

        {/* 6. Evaluation */}
        <section id="evaluation" className="py-20 bg-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">6. Evaluation & Performance Metrics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Performance Indicators (KPIs):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Scooter utilization rate (rides per scooter per day).</li>
                  <li>AI prediction accuracy (correlation between predicted and actual demand).</li>
                  <li>Customer satisfaction (simulated survey or feedback).</li>
                  <li>Operational efficiency (maintenance and repositioning costs).</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Adjustment Strategies:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Modify AI placement algorithm based on pilot results.</li>
                  <li>Focus on zones with lower utilization to improve adoption.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Teaching Notes */}
        <section id="teaching" className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">7. Teaching Notes</h2>
            
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Discussion Questions:</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    What challenges exist when introducing an innovative mobility service in a new market?
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    How can AI improve operational efficiency for urban transportation?
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    What environmental, social, and regulatory factors must be considered in Tunisia?
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    How would you evaluate the success of the AI placement strategy?
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Suggested Answers / Guidance:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Encourage students to consider market adoption barriers, urban infrastructure, and cultural factors.</li>
                  <li>Discuss how AI can optimize resources, predict demand, and support decision-making.</li>
                  <li>Analyze KPIs critically, and explore how student simulations can illustrate AI effectiveness.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Conclusion */}
        <section id="conclusion" className="py-20 bg-gradient-to-t from-primary/10 to-black border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">8. Conclusion</h2>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              EcoRide-TN is a student-designed case study demonstrating how AI can enable smarter, greener urban transportation. By integrating AI into operational decision-making, students can explore the challenges and opportunities of launching innovative services in new markets.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
