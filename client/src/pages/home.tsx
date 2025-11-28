import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Brain, Leaf, MapPin, Clock, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/electric_scooter_in_sidi_bou_said_tunisia.png";
import aiImage from "@assets/generated_images/ai_data_visualization_heatmap_of_tunis.png";
import studentsImage from "@assets/generated_images/students_riding_scooters_in_tunis.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary rounded-full font-medium">
                🇹🇳 Now Live in Tunis
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-foreground">
                Smart Mobility <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">
                  Powered by AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                EcoRide-TN optimizes scooter placement daily based on weather, events, and demand. The smartest way to move around Tunis.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full text-lg h-12 px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-primary hover:bg-primary/90">
                  Download App
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8 border-2">
                  Learn More
                </Button>
              </div>
              
              <div className="pt-8 flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Available in Lac 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Centre Ville</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Ennasr</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img 
                  src={heroImage} 
                  alt="EcoRide Scooter in Sidi Bou Said" 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating UI Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Nearest Scooter</p>
                    <p className="text-lg font-bold text-foreground">2 min walk • 85% Battery</p>
                  </div>
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 text-primary font-bold bg-primary/10">Why EcoRide?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Moving Tunis Smarter</h2>
              <p className="text-muted-foreground text-lg">
                We don't just drop scooters randomly. We use data to make sure a ride is always there when you need it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Placement",
                  desc: "Our algorithms analyze weather, events, and traffic to predict demand and place scooters exactly where you need them."
                },
                {
                  icon: Leaf,
                  title: "100% Eco-Friendly",
                  desc: "Zero emissions. Reduce your carbon footprint while navigating the beautiful streets of Tunis."
                },
                {
                  icon: Smartphone,
                  title: "Seamless App",
                  desc: "Locate, unlock, and pay in seconds. Real-time tracking and secure payments tailored for students and tourists."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tech Section */}
        <section id="ai-tech" className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn} className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-muted">
                  <img 
                    src={aiImage} 
                    alt="AI Heatmap Visualization" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>
              
              <motion.div {...fadeIn} className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                    Predictive Intelligence
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Unlike traditional rental services, EcoRide-TN adapts to the city's rhythm.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Weekdays", desc: "High availability near Universities (Manar, Dauphine) and Business Districts (Lac 1 & 2)." },
                    { title: "Weekends", desc: "Optimized for leisure spots like Sidi Bou Saïd, La Marsa, and Carthage." },
                    { title: "Weather Adaptive", desc: "Smart repositioning during rain to sheltered zones and indoor hubs." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Start Riding in Minutes</h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                No keys, no hassle. Just download the app and go.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Locate", desc: "Find the nearest scooter on the app map." },
                { icon: Smartphone, title: "Unlock", desc: "Scan the QR code to start your ride instantly." },
                { icon: ShieldCheck, title: "Ride Safely", desc: "Wear a helmet, follow traffic rules, and park responsibly." }
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed px-6">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="impact" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-accent text-accent-foreground">Student Friendly</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-heading">
                  Built for Students & Tourists
                </h2>
                <p className="text-lg text-muted-foreground">
                  EcoRide-TN was born as a student project to solve real mobility challenges. We offer special rates for students and pass holders for tourists visiting Tunis.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">50%</div>
                    <div className="text-sm text-muted-foreground">Less CO2 Emissions</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Monitoring</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform rotate-3" />
                <img 
                  src={studentsImage} 
                  alt="Students using EcoRide" 
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 container mx-auto px-4">
          <div className="bg-secondary rounded-3xl p-10 md:p-16 text-center overflow-hidden relative">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary-foreground">
                Ready to Ride the Future?
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                Join thousands of users in Tunis making smarter, greener choices every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90">
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary/20 bg-white hover:bg-white/90 text-secondary-foreground">
                  Download for Android
                </Button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
              <div className="absolute left-[-10%] bottom-[-20%] w-[600px] h-[600px] rounded-full bg-accent blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
