import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Printer, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-serif">
      <Navbar />

      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-[210mm] mx-auto bg-white shadow-lg border border-slate-200 min-h-[297mm] p-12 md:p-16 relative">
          {/* Document Header */}
          <div className="flex justify-between items-start mb-12 border-b pb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2 font-heading">EcoRide-TN</h1>
              <p className="text-xl text-slate-600">AI-Powered Scooter Sharing in Tunisia</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Case Study Document</span>
              </div>
              <span>November 2025</span>
            </div>
          </div>

          {/* Document Controls (Floating) */}
          <div className="absolute top-8 right-8 md:hidden">
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-justify leading-relaxed space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">1. Company Background</h2>
              <p>
                EcoRide-TN is a fictional startup created by a group of students in Tunisia. The company’s mission is to provide efficient, eco-friendly mobility for students, youth, and tourists in Tunis. Inspired by the success of scooter-sharing services in Europe and the capabilities of artificial intelligence (AI), EcoRide-TN envisions smart scooter placement, predicting where scooters will be most needed each day based on weather, local events, foot traffic, and tourist activity.
              </p>
              <p>
                As a student project, EcoRide-TN allows learners to explore how AI can optimize urban transportation, even in a market where scooter-sharing does not yet exist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">2. Strategic Challenge / Management Question</h2>
              <p className="font-medium italic bg-slate-50 p-4 border rounded-md">
                “How can we use AI to place scooters smartly in a market where this product does not exist yet?”
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Key challenges include:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Lack of awareness among potential users about scooter-sharing.</li>
                <li>Urban regulations and infrastructure constraints in Tunis.</li>
                <li>Operational challenges such as maintenance, recharging, and theft prevention.</li>
                <li>Demand uncertainty, since no historical data exists in Tunisia for scooter-sharing.</li>
              </ul>
              <p className="mt-4">
                The case requires students to think strategically about market entry, technology adoption, and operational planning in a novel environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">3. Environmental Analysis</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">PESTEL Analysis</h3>
                  <ul className="space-y-3">
                    <li><strong className="text-slate-900">Political:</strong> Tunisia is generally supportive of green mobility, but regulations for scooter use and urban road safety must be considered.</li>
                    <li><strong className="text-slate-900">Economic:</strong> Affordable mobility solutions are in demand among students and young professionals.</li>
                    <li><strong className="text-slate-900">Social:</strong> Increasing awareness of eco-friendly transportation; acceptance depends on safety and convenience.</li>
                    <li><strong className="text-slate-900">Technological:</strong> AI and data analytics are feasible tools to optimize scooter placement and monitor operations.</li>
                    <li><strong className="text-slate-900">Environmental:</strong> Promotes sustainable urban transport, reduces congestion and pollution.</li>
                    <li><strong className="text-slate-900">Legal:</strong> Compliance with traffic laws, licensing, and safety regulations is mandatory.</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border">
                  <h3 className="text-lg font-bold text-primary mb-2">SWOT Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700">Strengths</h4>
                      <p className="text-sm">Innovative use of AI, eco-friendly mobility, student-driven project with learning value.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700">Weaknesses</h4>
                      <p className="text-sm">Lack of historical demand data, limited resources for pilot deployment.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">Opportunities</h4>
                      <p className="text-sm">Growing urban population, potential partnerships with universities and tourist areas.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-700">Threats</h4>
                      <p className="text-sm">Resistance to adoption, potential vandalism or theft, regulatory changes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">4. Strategy Formulation</h2>
              <p>EcoRide-TN’s strategy focuses on AI-driven optimization to maximize scooter utilization:</p>
              
              <div className="my-6">
                <h3 className="text-lg font-semibold mb-2">Goals:</h3>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-700">
                  <li>Introduce the first AI-powered scooter-sharing service in Tunisia.</li>
                  <li>Optimize placement daily to meet demand efficiently.</li>
                  <li>Promote sustainable, eco-friendly urban mobility.</li>
                </ul>
              </div>

              <div className="my-6">
                <h3 className="text-lg font-semibold mb-2">AI Implementation Scenarios:</h3>
                <ul className="space-y-2 pl-4">
                  <li><span className="font-medium text-primary">Weekdays:</span> High demand near universities and business districts.</li>
                  <li><span className="font-medium text-primary">Weekends:</span> Tourist zones and recreational areas.</li>
                  <li><span className="font-medium text-primary">Rainy days:</span> Lower demand; focus on sheltered or indoor locations.</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600 italic">
                  The AI uses multiple inputs (weather, events, foot traffic) to predict daily demand and suggest optimal scooter distribution.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">5. Implementation</h2>
              <h3 className="text-lg font-semibold mb-2">Pilot Deployment Plan in Tunis:</h3>
              <div className="space-y-4 pl-4 border-l-2 border-slate-200 ml-2">
                <div>
                  <h4 className="font-bold text-slate-900">Data Collection</h4>
                  <p>Gather location, foot traffic, and event data.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">AI Model Setup</h4>
                  <p>Train the model on simulated data for student analysis.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Daily Placement Simulation</h4>
                  <p>Use AI outputs to place scooters in predicted high-demand zones (Lac 2, Centre Ville, Ennasr, Manar University, Sidi Bou Saïd).</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Maintenance and Recharging</h4>
                  <p>Plan routine maintenance based on predicted usage.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Monitoring & Feedback</h4>
                  <p>Track AI accuracy using simulated utilization metrics.</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-md text-sm">
                <strong>Example:</strong> A map heatmap showing zones of predicted high demand can illustrate the concept.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">6. Evaluation & Performance Metrics</h2>
              <h3 className="text-lg font-semibold mb-2">Key Performance Indicators (KPIs):</h3>
              <ul className="list-disc list-inside space-y-2 pl-4 mb-6">
                <li>Scooter utilization rate (rides per scooter per day).</li>
                <li>AI prediction accuracy (correlation between predicted and actual demand).</li>
                <li>Customer satisfaction (simulated survey or feedback).</li>
                <li>Operational efficiency (maintenance and repositioning costs).</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">Adjustment Strategies:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Modify AI placement algorithm based on pilot results.</li>
                <li>Focus on zones with lower utilization to improve adoption.</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section className="bg-slate-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">7. Teaching Notes</h2>
              
              <div className="grid gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">Discussion Questions:</h3>
                  <ul className="list-decimal list-inside space-y-2 text-slate-700">
                    <li>What challenges exist when introducing an innovative mobility service in a new market?</li>
                    <li>How can AI improve operational efficiency for urban transportation?</li>
                    <li>What environmental, social, and regulatory factors must be considered in Tunisia?</li>
                    <li>How would you evaluate the success of the AI placement strategy?</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-primary mb-2">Suggested Answers / Guidance:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Encourage students to consider market adoption barriers, urban infrastructure, and cultural factors.</li>
                    <li>• Discuss how AI can optimize resources, predict demand, and support decision-making.</li>
                    <li>• Analyze KPIs critically, and explore how student simulations can illustrate AI effectiveness.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-primary pl-4 mb-4">8. Conclusion</h2>
              <p>
                EcoRide-TN is a student-designed case study demonstrating how AI can enable smarter, greener urban transportation. By integrating AI into operational decision-making, students can explore the challenges and opportunities of launching innovative services in new markets.
              </p>
            </section>

          </div>

          {/* Document Footer */}
          <div className="mt-16 pt-8 border-t text-center text-slate-400 text-sm">
            <p>Student Project Case Study • EcoRide-TN • 2025</p>
          </div>
        </div>

        {/* Fixed Print Action */}
        <div className="fixed bottom-8 right-8 hidden md:block">
          <Button size="lg" className="rounded-full shadow-xl" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" />
            Print Case Study
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
