"use client";

import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Add the destination email directly if not using a key yet, 
        // but Web3Forms typically requires an access_key.
        // I'll add a note for the user to get their key.
        formData.append("access_key", "e921e969-253d-4b1c-87c5-63e583799134");
        formData.append("subject", `New Message from ${formData.get("name")}`);
        formData.append("from_name", "Portfolio Contact Form");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully! I will get back to you soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                toast.error("Error: Please set your Web3Forms Access Key in the code.");
                console.error("Web3Forms Error:", data);
            }
        } catch (error) {
            toast.error("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-12 lg:pb-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                {/* Left Side: Info */}
                <FadeIn delay={0.2} direction="right" className="lg:col-span-5 space-y-8 lg:space-y-10">
                    <div className="space-y-6">
                        <div className="inline-block bg-[#FF6B00] text-white px-6 py-2 rounded-full font-semibold text-xs lg:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                            Contact Me
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tighter uppercase leading-none">
                            Let&apos;s Work <br />
                            <span className="text-[#FF6B00]">Together</span>
                        </h2>
                        <p className="text-white/60 text-base lg:text-lg font-medium max-w-md">
                            I&apos;m currently available for freelance work and full-time opportunities. Have a project in mind? Let&apos;s talk.
                        </p>
                    </div>

                    <div className="space-y-5 lg:space-y-6">
                        {/* Contact Items */}
                        {[
                            { icon: Mail, label: "Email", value: "uxui.shahriar@gmail.com" },
                            { icon: Phone, label: "Phone", value: "+880 1303120432" },
                            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 lg:gap-6 group">
                                <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#FF6B00]/50 transition-colors shrink-0">
                                    <item.icon className="w-5 lg:w-6 h-5 lg:h-6 text-[#FF6B00]" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-[10px] lg:text-sm font-semibold uppercase tracking-widest">{item.label}</p>
                                    <p className="text-white text-base lg:text-xl font-semibold tracking-tight break-all lg:break-normal">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 lg:pt-6 space-y-3 lg:space-y-4">
                        <p className="text-white/40 text-[10px] lg:text-sm font-semibold uppercase tracking-widest">Follow Me</p>
                        <div className="flex gap-3 lg:gap-4">
                            {[
                                {
                                    name: "LinkedIn",
                                    url: "https://www.linkedin.com/in/shahriar-alom-bhuiyan-036079225/",
                                    svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z" />
                                },
                                {
                                    name: "Behance",
                                    url: "https://www.behance.net/rabbikhan66",
                                    label: "Be"
                                }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 lg:w-12 h-11 lg:h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all group"
                                    aria-label={social.name}
                                >
                                    {social.svg ? (
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                                        >
                                            {social.svg}
                                        </svg>
                                    ) : (
                                        <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform tracking-tight">
                                            {social.label}
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Right Side: Form */}
                <FadeIn delay={0.4} direction="left" className="lg:col-span-7">
                    <div className="bg-white/[0.02] backdrop-blur-3xl p-6 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                        {/* Subtle Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] -z-10" />

                        <form className="space-y-5 lg:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                                <div className="space-y-2">
                                    <label className="text-white/80 text-[10px] lg:text-xs font-semibold uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Write your name"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 lg:px-6 py-3.5 lg:py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors text-sm lg:text-base"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/80 text-[10px] lg:text-xs font-semibold uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="Write your email"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 lg:px-6 py-3.5 lg:py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors text-sm lg:text-base"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/80 text-[10px] lg:text-xs font-semibold uppercase tracking-widest ml-1">Subject</label>
                                <input
                                    required
                                    name="subject_display"
                                    type="text"
                                    placeholder="Type your subject"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 lg:px-6 py-3.5 lg:py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors text-sm lg:text-base"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/80 text-[10px] lg:text-xs font-semibold uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="Write your message here..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 lg:px-6 py-3.5 lg:py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors resize-none text-sm lg:text-base"
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-semibold uppercase tracking-widest py-3.5 lg:py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(255,107,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed text-xs lg:text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 className="w-4 lg:w-5 h-4 lg:h-5 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 lg:w-5 h-4 lg:h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
