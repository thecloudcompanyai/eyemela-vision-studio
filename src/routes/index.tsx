import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import frames from "@/assets/frames.jpg";
import frameSquare from "@/assets/frame-square-black.jpg";
import frameWayfarer from "@/assets/frame-wayfarer-black.jpg";
import frameFlatTop from "@/assets/frame-flattop-gold.jpg";
import { EyewearHero } from "@/components/eyewear-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eyemela — Stylish Eyewear, Free Eye Test & In-Store Trial" },
      { name: "description", content: "Take a free eye test online, then visit the Eyemela store to try frames on and get a clear picture. Book on WhatsApp." },
      { property: "og:title", content: "Eyemela — Stylish Eyewear, Free Eye Test & In-Store Trial" },
      { property: "og:description", content: "Free eye test, trendy frames, and a store you can actually walk into. Visit Eyemela." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "919060190538";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// Fill in the real shop details below — anything left blank stays hidden on the page.
const STORE = {
  name: "Eyemela",
  address: "",
  hours: "",
};
const directions = STORE.address
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${STORE.name} ${STORE.address}`)}`
  : wa("Hi Eyemela! Please share your store address and directions.");

type Product = {
  name: string;
  color: string;
  price: number;
  mrp: number;
  pos?: string;
  img?: string;
};

const products: Product[] = [
  { name: "Bold Square", color: "Glossy Black", price: 1500, mrp: 4000, img: frameSquare },
  { name: "Classic Wayfarer", color: "Matte Black", price: 1500, mrp: 4000, img: frameWayfarer },
  { name: "Flat-Top Gold Bar", color: "Black with Gold Bar", price: 1500, mrp: 4000, img: frameFlatTop },
  { name: "Classic Round", color: "Matte Black", price: 999, mrp: 1999, pos: "0% 0%" },
  { name: "Gold Aviator", color: "Gold Metal", price: 1499, mrp: 2999, pos: "100% 0%" },
  { name: "Cat-Eye Luxe", color: "Tortoise", price: 1299, mrp: 2499, pos: "0% 100%" },
  { name: "Clear Square", color: "Transparent", price: 899, mrp: 1799, pos: "100% 100%" },
];

const rows = [
  { size: 64, letters: "E" },
  { size: 48, letters: "F P" },
  { size: 36, letters: "T O Z" },
  { size: 26, letters: "L P E D" },
  { size: 19, letters: "P E C F D" },
  { size: 14, letters: "E D F C Z P" },
  { size: 10, letters: "F E L O P Z D" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            Eye<span className="text-primary">mela</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#products" className="hover:text-primary">Frames</a>
            <a href="#eye-test" className="hover:text-primary">Free Eye Test</a>
            <a href="#store" className="font-semibold hover:text-primary">Visit Store</a>
          </nav>
          <a href={wa("Hi Eyemela! I want to know more.")} target="_blank" rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            WhatsApp
          </a>
        </div>
      </header>

      <EyewearHero />

      {/* Features strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center text-sm md:grid-cols-4">
          {["Free Eye Test", "Try Frames In Store", "7-Day Easy Returns", "1 Year Warranty"].map((t) => (
            <div key={t} className="font-semibold">✦ {t}</div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Bestsellers</p>
            <h2 className="mt-2 font-display text-4xl font-bold">Frames you'll love</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Every frame comes with free anti-glare lenses — and you can try them all on at our store.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden bg-muted">
                {p.img ? (
                  <img src={p.img} alt={`${p.name} sunglasses`} loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                ) : (
                  <div className="h-full w-full transition duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${frames})`, backgroundSize: "200% 200%", backgroundPosition: p.pos }} />
                )}
                <span className="absolute left-3 top-3 rounded-full bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground">
                  {Math.round((1 - p.price / p.mrp) * 100)}% OFF
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.color}</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold">₹{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{p.mrp}</span>
                </div>
                <a href={wa(`Hi Eyemela! I want to order: ${p.name} (${p.color}) - ₹${p.price}`)} target="_blank" rel="noreferrer"
                  className="mt-4 block rounded-full bg-foreground py-2.5 text-center text-sm font-semibold text-background">
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EyeTest />

      {/* Store */}
      <section id="store" className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-[2rem] bg-foreground p-10 text-background md:p-14">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-70">Not an online-only shop</p>
          <h2 className="mt-2 font-display text-4xl font-bold">Visit our store to get clear picture</h2>
          <p className="mt-3 max-w-xl opacity-75">
            A screen can't tell you how a frame sits on your face. Walk in, try them on, get your free
            eye test done in person and leave seeing clearly.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div><p className="text-xs uppercase opacity-60">Owner</p><p className="font-semibold">Abdus Sattar</p></div>
            <a href="tel:+919060190538"><p className="text-xs uppercase opacity-60">Phone</p><p className="font-semibold">+91 90601 90538</p></a>
            <a href="mailto:abdusnew@gmail.com"><p className="text-xs uppercase opacity-60">Email</p><p className="font-semibold">abdusnew@gmail.com</p></a>
          </div>
          {STORE.address && (
            <div className="mt-6 rounded-2xl border border-background/20 p-5">
              <p className="text-xs uppercase opacity-60">Store</p>
              <p className="font-semibold">{STORE.address}</p>
              {STORE.hours && <p className="mt-1 text-sm opacity-75">{STORE.hours}</p>}
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={directions} target="_blank" rel="noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Get Directions
            </a>
            <a href={wa("Hi Eyemela! I want to visit your store. Please share the address and timings.")} target="_blank" rel="noreferrer"
              className="inline-block rounded-full border-2 border-background/30 px-6 py-3 font-semibold text-background">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Eyemela.in — All rights reserved.
      </footer>

      <a href={wa("Hi Eyemela!")} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-2xl">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
      </a>
    </div>
  );
}

function EyeTest() {
  const [step, setStep] = useState<"intro" | "test" | "done">("intro");
  const [row, setRow] = useState(0);
  const [lastSeen, setLastSeen] = useState(-1);

  const answer = (seen: boolean) => {
    if (seen) {
      setLastSeen(row);
      if (row === rows.length - 1) setStep("done");
      else setRow(row + 1);
    } else setStep("done");
  };
  const reset = () => { setStep("intro"); setRow(0); setLastSeen(-1); };
  const score = lastSeen + 1;
  const result =
    score >= 6 ? { t: "Great vision!", d: "Your eyes look healthy. A yearly checkup is still recommended — drop by our store." }
    : score >= 4 ? { t: "Mild difficulty", d: "You may need a mild prescription. Visit our store for a free professional eye test." }
    : { t: "Get your eyes checked", d: "You had trouble with smaller letters. Please visit our store for a free eye test soon." };

  return (
    <section id="eye-test" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">100% Free</p>
          <h2 className="mt-2 font-display text-4xl font-bold">Free online eye test</h2>
          <p className="mt-4 text-muted-foreground">
            A quick 1-minute vision check. Sit about 1 metre from your screen, cover one eye and tell us
            if you can read each line. Then book a free professional test with us on WhatsApp.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>✓ Takes under a minute</li>
            <li>✓ No signup needed</li>
            <li>✓ Free eye checkup at our store</li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">This screening is not a medical diagnosis.</p>
        </div>

        <div className="rounded-[2rem] bg-card p-8 shadow-xl">
          {step === "intro" && (
            <div className="py-8 text-center">
              <div className="font-display text-7xl font-bold">E</div>
              <p className="mt-4 text-muted-foreground">Ready? Cover one eye and keep 1 metre away.</p>
              <button onClick={() => setStep("test")} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
                Start Eye Test
              </button>
            </div>
          )}
          {step === "test" && (
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Line {row + 1} of {rows.length}</p>
              <div className="flex h-40 items-center justify-center">
                <span className="font-mono font-bold tracking-[0.3em]" style={{ fontSize: rows[row]!.size }}>
                  {rows[row]!.letters}
                </span>
              </div>
              <p className="mb-4 font-semibold">Can you read these letters clearly?</p>
              <div className="flex justify-center gap-3">
                <button onClick={() => answer(true)} className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground">Yes</button>
                <button onClick={() => answer(false)} className="rounded-full border-2 border-foreground px-6 py-2.5 font-semibold">No / Blurry</button>
              </div>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary transition-all" style={{ width: `${(row / rows.length) * 100}%` }} />
              </div>
            </div>
          )}
          {step === "done" && (
            <div className="py-4 text-center">
              <p className="text-sm text-muted-foreground">You read {score} of {rows.length} lines</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-primary">{result.t}</h3>
              <p className="mt-3 text-muted-foreground">{result.d}</p>
              <p className="mt-5 rounded-2xl bg-secondary px-5 py-4 font-display text-xl font-bold text-secondary-foreground">
                Visit our store to get clear picture.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={wa(`Hi Eyemela! I took the online eye test and read ${score}/${rows.length} lines. I want to book a FREE eye test.`)}
                  target="_blank" rel="noreferrer"
                  className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-primary-foreground">
                  Book Free Eye Test on WhatsApp
                </a>
                <a href="#store" className="rounded-full border-2 border-foreground px-6 py-3 font-semibold">
                  Visit Our Store
                </a>
                <button onClick={reset} className="text-sm underline">Retake test</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
