import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";

const NAV_ITEMS = [
  { label: "Features", href: "#services" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto mt-2 rounded-2xl bg-background/80 border dark:border-neutral-800 shadow-lg flex items-center justify-between px-6 py-4">
      <a
        href="#"
        className="text-3xl font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        aria-label="Selfclick homepage"
      >
        Selfclick.ai
      </a>
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base font-medium text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild size="sm" className="font-semibold">
          <a href="#cta">Book</a>
        </Button>
        <ThemeSwitch className="ml-2" />
      </div>
    </header>
  );
}
