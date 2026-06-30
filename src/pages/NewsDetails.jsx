import { HiArrowLongLeft } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GrCheckmark } from "react-icons/gr";
import GetInTouch from "../ui/GetInTouch";
import { useNavigate } from "react-router-dom";
import { useNewsDetails } from "../hooks/useNewsDetails";


export default function NewsDetails() {
  const navigate = useNavigate();
  const { data = {}, error, isLoading } = useNewsDetails();

  if (isLoading) return <p className="text-center flex justify-center items-center text-3xl text-gray-500">Please wait while the contents load...</p>
  if (error) return <p className="text-center text-2xl text-red-600 mt-20">Error occured while loading article: {error.message}</p>
  console.log(data);

  return (
    <main className="min-h-screen bg-slate-50 w-full max-w-[100vw] overflow-x-hidden">
      <header className="container mx-auto text-center max-w-3xl py-12 min-w-full">
        <div className=" bg-white/90 p-8 backdrop-blur-sm">
          <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700 mb-4">Business</span>
          <h1 className="text-3xl px-6 text-center sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">Wearable Safety Tech: Protecting Workers While Delivering Real ROI</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8 flex flex-col gap-6 bg-white p-6 shadow-xs shadow-slate-200/50 border border-slate-200">
          <button
            onClick={() => navigate("/news")}
            className="inline-flex items-center gap-2 text-slate-700 transition-colors duration-200 hover:text-slate-900"
          >
            <HiArrowLongLeft size={22} />
            <span className="font-semibold">Back to Blog</span>
          </button>

          <div className="grid gap-4 sm:grid-cols-2 text-slate-500">
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3">
              <CiCalendar size={20} className="text-slate-400" />
              <p className="text-sm font-medium">June 12, 2025</p>
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3">
              <CiUser size={20} className="text-slate-400" />
              <p className="text-sm font-medium">Wrlds Technologies</p>
            </div>
          </div>
        </div>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <p className="text-lg sm:text-xl">Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.</p>
          <p>Every worker deserves to go home safe at the end of their shift. That fundamental principle drives the evolution of workplace safety technology, where protecting people has always been the primary goal. What's remarkable about today's wearable safety technology is how it achieves this mission while also delivering tangible business benefits.</p>
          <p>The numbers are striking: 2.2 workplace injuries occur per 100 workers annually, the average cost per medically consulted injury is $43,000, and early adopters of wearable safety technology report a 58% reduction in injuries. These figures show why investment in worker safety is also a sound business decision.</p>
        </div>

        <div className="divide-y divide-slate-200 bg-white p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.15)] mt-10 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">The Human Cost Behind the Numbers</h2>
            <p className="text-slate-700">Behind every workplace injury statistic is a person: someone's parent, partner, or child. The data tells a sobering story about workplace safety in America. When we can prevent injuries before they happen, we're not just protecting company assets. We're preserving families and communities.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Real Results from Wearable Safety Technology</h2>
            <p className="text-slate-700">The effectiveness of wearable safety technology becomes clear when we examine documented case studies and vendor-reported results. These implementations show real workers in demanding environments using technology that helps them stay safe while doing their jobs effectively.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Documented Industry Results</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <span>Companies report significant reductions in workplace injuries with consistent wearable device usage.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <span>Improved awareness and real-time alerts help teams act faster to reduce hazards and near misses.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">When Safety and Business Align</h2>
            <p className="text-slate-700">Effective safety technology creates a virtuous cycle where prioritizing people leads to positive business outcomes. When injuries decrease, so do workers' compensation claims, replacement worker costs, and operational disruptions.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <span>Fewer back injuries mean workers maintain mobility and quality of life, while companies reduce comp claims and medical costs.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <span>Better ergonomic awareness reduces fatigue and chronic pain, leading to higher productivity and retention.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Growing Market for Worker-Centered Safety</h2>
            <p className="text-slate-700">The market for wearable safety technology is expanding rapidly, reflecting a cultural shift toward prioritizing worker safety and wellbeing. Technology serves as an enabler rather than a replacement for human judgment and care.</p>
            <p className="text-slate-700">Industry analysts project steady growth in the wearable safety market. Starting from $1.6 billion in 2023, the sector is expected to reach $2.1 billion in 2024, $2.7 billion in 2025, $3.3 billion in 2026, $3.8 billion in 2027, and $4.2 billion by 2028. This expansion reflects increasing organizational commitment to worker safety and the proven value of wearable safety solutions.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">How WRLDS Supports Your Safety Mission</h2>
            <p className="text-slate-700">We understand that every organization's safety challenges are unique. That's why we've built a flexible platform that can adapt to your specific needs while maintaining our core focus on worker protection.</p>
            <div className="rounded-3xl bg-slate-50 p-4">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Our Collaborative Approach</h3>
              <div className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <span>Flexible integration that works with your existing safety programs and doesn't disrupt worker routines.</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Start the Conversation</h2>
            <p className="text-slate-700">We'd love to learn about your safety goals and specific challenges. Whether you're looking to reduce particular types of injuries, improve safety culture, or explore how technology can support your existing programs, we're here to listen and collaborate.</p>
            <p className="text-slate-700">Bring your organization's injury and loss data, and we'll work together to calculate potential benefits using your actual numbers. We can help you explore how wearable technology might fit into your comprehensive safety strategy. No hard sell, no one-size-fits-all solutions: just an honest conversation about protecting the people who make your organization successful.</p>
            <blockquote className="rounded-3xl border-l-4 border-emerald-400 bg-emerald-50 p-5 text-slate-700 italic shadow-sm">
              "Great safety partnerships start with shared values: putting workers first, building trust through transparency, and believing that everyone deserves to work in an environment where they can thrive safely."
            </blockquote>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Sources and Reference</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <GrCheckmark size={14} />
                </span>
                <p>National Safety Council, Work Injury Costs, Injury Facts, 2024 edition. Available at: injuryfacts.nsc.org</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch component */}
      <>
        <GetInTouch />
      </>
    </main>
  )
};




