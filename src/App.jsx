import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Spline full-width cover */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/no-S8HKPA9ln9-NN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Ethereal gradient glow overlay (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-950/30 to-slate-950/90" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-5xl px-6 md:px-10 w-full">
            <div className="backdrop-blur-sm/0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Luminous Intelligence
              </h1>
              <p className="mt-4 max-w-2xl text-blue-200/90 text-base sm:text-lg">
                A serene cluster of pure energy, constantly transforming into clear, logical structures. Calm, ethereal, and infinitely adaptable.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#explore"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-[0_0_25px_rgba(59,130,246,0.35)] transition"
                >
                  Explore the Concept
                </a>
                <a
                  href="/test"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 px-6 py-3 font-semibold border border-white/10 backdrop-blur-md transition"
                >
                  System Check
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="explore" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        {/* Subtle radial highlights */}
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_40%_at_50%_0%,rgba(80,120,255,0.20),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Clarity"
              text="Ideas crystallize into lucid, 3D structures that reveal connections at a glance."
            />
            <Card
              title="Serenity"
              text="A calm, warm glow creates focus and invites deeper thinking without distraction."
            />
            <Card
              title="Transformation"
              text="Energy flows into new forms instantly, illustrating logic and possibility."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 text-center text-blue-200/70">
          Crafted for an ethereal, science‑fiction aesthetic.
        </div>
      </footer>
    </div>
  )
}

function Card({ title, text }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(99,102,241,0.25),transparent_60%)]" />
      <h3 className="relative z-10 text-xl font-semibold text-white">{title}</h3>
      <p className="relative z-10 mt-2 text-blue-200/80 text-sm">{text}</p>
    </div>
  )
}

export default App
