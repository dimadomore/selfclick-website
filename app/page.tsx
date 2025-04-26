import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="services" className="container mx-auto py-16">
          {/* Services Section Placeholder */}
          <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 rounded-xl border bg-card shadow-sm"
              >
                {/* Replace with lucide-react icon */}
                <div className="mb-4 text-primary">[Icon]</div>
                <h3 className="text-lg font-semibold mb-2">
                  Service Title {i + 1}
                </h3>
                <p className="text-muted-foreground text-center">
                  Service description goes here. Brief, clear, and
                  value-focused.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="faq" className="container mx-auto py-16">
          {/* FAQ Section Placeholder */}
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            {/* Replace with shadcn/ui Accordion */}
            <div className="mb-4">[Accordion Q1]</div>
            <div className="mb-4">[Accordion Q2]</div>
            <div className="mb-4">[Accordion Q3]</div>
          </div>
        </section>
        <section
          id="cta"
          className="container mx-auto py-16 flex flex-col items-center"
        >
          {/* CTA Section Placeholder */}
          <h2 className="text-3xl font-bold mb-4 text-center">
            Still not sure?
          </h2>
          <p className="mb-8 text-muted-foreground text-center max-w-xl">
            Contact us or book a call to see how we can help you achieve your
            goals.
          </p>
          <button className="text-2xl px-12 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:bg-primary/90 transition">
            Book
          </button>
        </section>
      </main>
      <footer className="w-full border-t py-8 mt-16 bg-background/80">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-lg">YourCompany</span>
          <nav className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
