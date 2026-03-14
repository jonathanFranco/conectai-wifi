import { Loader } from "@/components/sections/loader"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Benefits } from "@/components/sections/benefits"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"

export default function HomePage() {
  return (
    <>
      {/* Loader */}
      <Loader />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Benefits Section */}
        <Benefits />
        
        {/* About Section */}
        <About />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <CTA />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  )
}
