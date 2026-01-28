import { NavigationSidebar } from "../components/navigation-sidebar"
import { Footer } from "../components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="stars" />

      <NavigationSidebar />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 fade-in">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-12 tracking-[0.3em]">
          <span className="text-[#84d1f0]">ABOUT</span> ME
        </h1>

        <div className="glow-box border border-[#84d1f0]/50 p-8 md:p-12 max-w-2xl w-full mx-4">
          <div className="space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              Hello, I'm Dee. I'm interested in quantitative research. My favourite areas
              to explore include equity research, options trading, and consumer behaviour.
              In my free time, I enjoy(?) relaxing(?) with some continental philosophy.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about studying data to help me solve all types of problems.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
