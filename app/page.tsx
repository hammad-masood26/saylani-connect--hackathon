'use client'

import Link from 'next/link'
import { Heart, Users, Shield, Calendar, HelpCircle, Activity, Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-saylani-green via-blue-500 to-purple-600">

      {/* ── HEADER ── */}
      <header className="glass border-b border-white/20 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <Heart className="h-8 w-8 text-white animate-float" />
              <h1 className="text-2xl font-bold text-white">Saylani Connect</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/user/login"
                className="nav-link text-white hover:text-saylani-green transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── HERO ── */}
        <div className="text-center animate-fade-in-up">
          {/* NEW: badge pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">Serving Humanity for 20+ Years</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{' '}
            <span style={{ color: '#6EE7B7', textShadow: '0 0 24px rgba(110,231,183,0.5)' }}>Saylani Connect</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            A comprehensive appointment and request system designed to connect communities
            with Saylani Welfare International Trust's services.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link href="/user/login">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 hover-glow">
                <Users className="h-5 w-5" />
                <span>Login</span>
              </button>
            </Link>
          </div>
        </div>

        {/* ── NEW: STATS BAND ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { val: '20+',  lbl: 'Years of Service'  },
            { val: '5M+',  lbl: 'Lives Impacted'    },
            { val: '300+', lbl: 'Active Programs'   },
            { val: '24/7', lbl: 'Support Available' },
          ].map((s) => (
            <div key={s.lbl} className="glass border border-white/20 rounded-2xl py-5 text-center">
              <p className="text-3xl font-bold text-white">{s.val}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1 font-medium">{s.lbl}</p>
            </div>
          ))}
        </div>

        {/* ── FEATURES ── */}
        <div className="grid md:grid-cols-3 gap-8 mt-4 stagger-children">
          <div className="card-hover text-center animate-scale-in">
            <div className="w-16 h-16 bg-saylani-green/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Calendar className="h-8 w-8 text-saylani-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
            <p className="text-gray-600">
              Schedule appointments with Saylani Welfare services easily and efficiently.
            </p>
          </div>

          <div className="card-hover text-center animate-scale-in">
            <div
              className="w-16 h-16 bg-saylani-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <HelpCircle className="h-8 w-8 text-saylani-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Request Help</h3>
            <p className="text-gray-600">
              Submit help requests for food, health, education, and other assistance.
            </p>
          </div>

          <div className="card-hover text-center animate-scale-in">
            <div
              className="w-16 h-16 bg-saylani-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Activity className="h-8 w-8 text-saylani-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor the status of your appointments and help requests in real-time.
            </p>
          </div>
        </div>

        {/* ── NEW: HOW IT WORKS ── */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Create Account',  desc: 'Sign up with your basic information securely.',             icon: Users    },
              { n: '02', title: 'Choose Service',  desc: 'Select the type of assistance or appointment you need.',    icon: Heart    },
              { n: '03', title: 'Submit Request',  desc: 'Fill in your details and submit your application.',         icon: CheckCircle },
              { n: '04', title: 'Track & Receive', desc: 'Follow your status and receive timely support.',            icon: Activity },
            ].map((step) => (
              <div key={step.n} className="glass border border-white/20 rounded-2xl p-6 text-center hover-glow transition-all duration-300">
                <p className="text-white/30 text-4xl font-bold mb-3">{step.n}</p>
                <step.icon className="h-7 w-7 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold text-base mb-2">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── NEW: WELFARE PROGRAMS ── */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="text-center mb-12">
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-3">Our Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Areas We Serve</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { ico: '🍽️', title: 'Food Programs',  desc: 'Daily meals & ration distribution across Pakistan' },
              { ico: '🏥', title: 'Health Care',    desc: 'Free medical camps, clinics & hospital support'   },
              { ico: '📚', title: 'Education',      desc: 'Scholarships, schools & free skill training'      },
              { ico: '🏠', title: 'Social Welfare', desc: 'Emergency relief, shelters & rehabilitation'      },
            ].map((p) => (
              <div key={p.title} className="glass border border-white/20 rounded-2xl p-6 text-center group hover-glow transition-all duration-300 cursor-default">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{p.ico}</div>
                <h4 className="text-white font-semibold text-base mb-2">{p.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div className="mt-24 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-white mb-6">About Saylani Welfare</h2>
          <p className="text-white/90 max-w-4xl mx-auto text-lg leading-relaxed">
            Saylani Welfare International Trust is a non-governmental organization that has been
            serving humanity for over 20 years. We provide assistance in various areas including
            food, health, education, and social welfare to those in need across Pakistan and beyond.
          </p>
        </div>

        {/* ── NEW: CTA BANNER ── */}
        <div
          className="mt-16 glass border border-white/20 rounded-3xl p-10 text-center animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Connect?</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join thousands of families who have already benefited from Saylani Welfare's
            programs through this platform.
          </p>
          <Link href="/user/login">
            <button className="btn-primary text-lg px-10 py-4 flex items-center gap-2 mx-auto hover-glow">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="glass border-t border-white/20 mt-20 animate-slide-in-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* NEW: footer top row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-white animate-float" />
              <span className="text-white font-bold text-lg">Saylani Connect</span>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((l) => (
                <a key={l} href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">{l}</a>
              ))}
              <Link href="/user/login" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Login</Link>
            </div>
          </div>
          <div className="text-center text-white/80">
            <p>&copy; 2025 Saylani Welfare International Trust. All rights reserved.</p>
            <p className="mt-2">Empowering communities through technology and compassion.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}