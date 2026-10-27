import { Award, BookOpen, HeartHandshake, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const missions = [
  { icon: Award, title: "Quality Selection", text: "Carefully selected titles, from timeless classics to new voices worth discovering." },
  { icon: HeartHandshake, title: "Exceptional Service", text: "A friendly, simple experience from browsing to finding your next favorite read." },
  { icon: Sparkles, title: "Set Up to Inspire", text: "We believe the right book can spark curiosity and open up a whole new world." },
];

export default function About() {
  function submitContact(event) {
    event.preventDefault();
    alert("Thank you for your message! This demo form is not connected to a server yet.");
    event.currentTarget.reset();
  }
  return (
    <>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage:"url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=85')"}}/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b141f]/80 to-[#241b2b]/55"/>
        <Navbar/>
        <div className="relative mx-auto flex min-h-[260px] max-w-6xl items-center justify-center px-5 pb-6 pt-24 text-center text-white sm:min-h-[310px]">
          <div className="max-w-xl"><p className="text-[9px] font-bold uppercase tracking-[.3em] text-pink-300">Get to know us</p><h1 className="mt-2 text-3xl font-bold sm:text-4xl">About Bookshop</h1><p className="mx-auto mt-3 max-w-lg text-[11px] leading-6 text-white/75 sm:text-xs">Your destination for stories, knowledge, and inspiration. We make finding your next favorite book a little easier.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <SectionTitle title="Our Mission" center description="To connect readers with books that inspire, educate, and stay with them long after the last page."/>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {missions.map(({icon:Icon,title,text})=><article key={title} className="rounded-md border border-gray-100 bg-white p-5 shadow-sm"><span className="grid h-8 w-8 place-items-center rounded-md bg-blush text-rose"><Icon size={15}/></span><h3 className="mt-4 text-xs font-bold text-ink">{title}</h3><p className="mt-2 text-[10px] leading-5 text-muted">{text}</p><a href="#contact" className="mt-3 inline-block text-[9px] font-semibold text-rose hover:underline">Read more →</a></article>)}
        </div>
      </section>

      <section className="bg-[#f8f5f8] py-9 sm:py-11">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[.85fr_1.15fr] md:items-center">
          <div><p className="text-[9px] font-bold uppercase tracking-[.25em] text-rose">We'd love to hear from you</p><h2 className="mt-2 text-2xl font-bold leading-tight text-ink sm:text-3xl">Have a Questions?<br/>Get in Touch</h2><p className="mt-3 text-[11px] leading-5 text-muted">Have a book recommendation, question, or just want to say hello? Send us a message.</p><div className="mt-5 space-y-3 text-[10px] text-ink"><div className="flex items-center gap-2"><span className="rounded bg-white p-2 text-rose"><Mail size={13}/></span> hello@bookshop.com</div><div className="flex items-center gap-2"><span className="rounded bg-white p-2 text-rose"><Phone size={13}/></span> +1 (555) 123-4567</div><div className="flex items-center gap-2"><span className="rounded bg-white p-2 text-rose"><MapPin size={13}/></span> 24 Reading Lane, Booktown</div></div></div>
          <form onSubmit={submitContact} className="rounded-md bg-plum p-5 text-white shadow-soft sm:p-6"><h3 className="text-sm font-semibold">Send us a message</h3><p className="mt-1 text-[9px] text-white/55">We usually reply within one business day.</p><div className="mt-4 grid gap-3 sm:grid-cols-2"><label className="text-[9px] text-white/70">Full Name<input required name="name" placeholder="Your name" className="mt-1.5 w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/35 focus:border-pink-300"/></label><label className="text-[9px] text-white/70">Email Address<input required type="email" name="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/35 focus:border-pink-300"/></label><label className="text-[9px] text-white/70 sm:col-span-2">Subject<input required name="subject" placeholder="How can we help?" className="mt-1.5 w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/35 focus:border-pink-300"/></label><label className="text-[9px] text-white/70 sm:col-span-2">Your Message<textarea required name="message" rows="3" placeholder="Write your message..." className="mt-1.5 w-full resize-y rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-white/35 focus:border-pink-300"/></label></div><button className="mt-4 rounded-sm bg-rose px-5 py-2.5 text-[10px] font-bold hover:bg-pink-700">Send Message</button></form>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 sm:grid-cols-4">
        {["Carefully Curated Books","Customer First","Discover Something New","A Community of Readers"].map((title)=><div key={title} className="flex gap-2"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush text-rose"><BookOpen size={12}/></span><div><h3 className="text-[9px] font-bold text-ink">{title}</h3><p className="mt-1 text-[8px] leading-4 text-muted">Thoughtful service for every reader.</p></div></div>)}
      </section>
      <Footer/>
    </>
  );
}
