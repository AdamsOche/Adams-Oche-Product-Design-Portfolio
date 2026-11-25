"use client";
// Power Pay screens presentation. Images live in /public/case-studies/power-pay/. The nav sticks at top:64px to sit under the site header.
// Usage:  <PowerPayScreens prototypeUrl="https://your-public-prototype-link" />
import { useRef } from "react";
import s from "./PowerPayScreens.module.css";

const CHAPTERS = [
 {
  "title": "Get in",
  "intro": "Four screens, no friction",
  "screens": [
   {
    "id": "welcome",
    "title": "Welcome",
    "text": "Opens on the one promise. The ring is the same gauge that shows up when a purchase loads, so the first screen already shows what the app does."
   },
   {
    "id": "signup",
    "title": "Sign up",
    "text": "Three fields and Google. The password rule is shown before you type, not after you get it wrong. A new account starts with the empty states."
   },
   {
    "id": "login",
    "title": "Log in",
    "text": "One field takes email or phone. Logging in loads an account that already has purchases."
   },
   {
    "id": "forgot",
    "title": "Forgot password",
    "text": "Asks for one thing, then confirms where the link went and how long it works."
   }
  ]
 },
 {
  "title": "Link your meter",
  "intro": "Scan the QR, or type the number and see the owner name before you commit",
  "screens": [
   {
    "id": "link",
    "title": "Scan meter",
    "text": "Scanning the QR on the meter is the whole setup. The viewfinder stays still until you tap Scan, so it never looks busy when nothing is happening."
   },
   {
    "id": "linkcam",
    "title": "Camera off",
    "text": "If camera access is refused, the screen says so and sends you to typing the number, instead of leaving a black box."
   },
   {
    "id": "enter",
    "title": "Enter meter number",
    "text": "For meters you cannot scan. The owner name comes back before you link, in green when it matches. Try 0301 0983 7612 3361. Any other 16 digits fail."
   },
   {
    "id": "enterbad",
    "title": "Number not found",
    "text": "When the number does not match a meter, it says so in red and offers the QR scan, so nobody gets stuck."
   },
   {
    "id": "linkfound",
    "title": "Meter found",
    "text": "Shows what was found before linking, so a wrong meter gets caught here and not after paying. Only the area is shown, not the full address."
   }
  ]
 },
 {
  "title": "Buy and load",
  "intro": "From amount to units on the meter, with the failure cases designed too",
  "screens": [
   {
    "id": "homenew",
    "title": "Home, new account",
    "text": "What a brand-new user sees: nothing on the meter, one clear next step, no made-up numbers."
   },
   {
    "id": "home",
    "title": "Home",
    "text": "Units left, with days remaining at your usual use. Buying lives in the floating button because it is the action people come for. Units and kWh are the same thing: 1 unit = 1 kWh."
   },
   {
    "id": "buy",
    "title": "Buy power",
    "text": "Pick an amount and see what it gets you before anything else. If the meter looks offline, the warning shows here, before any money moves. The provider follows the meter."
   },
   {
    "id": "paymethod",
    "title": "Pay with",
    "text": "Saved cards and bank transfer. Only the last four digits are ever shown."
   },
   {
    "id": "confirm",
    "title": "Confirm",
    "text": "One sheet with the total. The button carries the amount. Change opens the payment methods."
   },
   {
    "id": "pin",
    "title": "PIN",
    "text": "Money moves only after a PIN or fingerprint. Try 1234. Anything else shows the error and counts the tries left."
   },
   {
    "id": "transfer",
    "title": "Bank transfer",
    "text": "For people who pay from their bank app. One-time account, exact amount, and the screen can be closed while it waits. Sample account."
   },
   {
    "id": "loading",
    "title": "Loading to your meter",
    "text": "The centrepiece. You watch the units move into the meter in four plain steps, and you can leave. Go to home and the progress follows you, with a notice when it finishes."
   },
   {
    "id": "success",
    "title": "Loaded",
    "text": "Says what changed on the meter first, then shows the receipt."
   },
   {
    "id": "failed",
    "title": "Meter did not answer",
    "text": "Your money is safe comes first. A manual token stays available for when the meter cannot be reached."
   },
   {
    "id": "receipt",
    "title": "Receipt",
    "text": "Every purchase opens to a receipt with the reference, payment method and token. A failed one says where the money went."
   }
  ]
 },
 {
  "title": "Know your use",
  "intro": "Usage and history, with empty states for a new account and full states after purchases",
  "screens": [
   {
    "id": "usage",
    "title": "Usage",
    "text": "Daily units for the month, what you bought, and an appliance split that says it is an estimate."
   },
   {
    "id": "usagenew",
    "title": "Usage, new account",
    "text": "No chart until there is data to draw, and it says why."
   },
   {
    "id": "history",
    "title": "History",
    "text": "Grouped by month, filterable, and every row opens its receipt."
   },
   {
    "id": "historynew",
    "title": "History, new account",
    "text": "An empty list with a way forward."
   }
  ]
 },
 {
  "title": "Look after it",
  "intro": "Several meters, low-power alerts, help and profile",
  "screens": [
   {
    "id": "meters",
    "title": "Meters",
    "text": "Each meter shows whether it can be reached right now. Offline ones are flagged before you buy. Picking one from Buy power takes you straight back."
   },
   {
    "id": "alerts",
    "title": "Low-balance alert",
    "text": "Choose when to be warned, in units and in days. The Home gauge moves its alert mark to match."
   },
   {
    "id": "help",
    "title": "Help and support",
    "text": "Starts with the question people ask when they are stressed: I paid and nothing loaded."
   },
   {
    "id": "profile",
    "title": "Profile",
    "text": "Short and flat. Settings you can actually change, and nothing that goes nowhere."
   }
  ]
 }
] as const;

export default function PowerPayScreens({ prototypeUrl }: { prototypeUrl?: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const img = useRef<HTMLImageElement>(null);
  let n = 0;
  const open = (id: string) => {
    if (img.current) img.current.src = `/case-studies/power-pay/${id}-full.png`;
    dlg.current?.showModal();
  };
  return (
    <div className={s.page}>
      <nav className={s.nav} aria-label="Flows"><div>
        {CHAPTERS.map((c, i) => <a key={c.title} href={`#pp-c${i}`}>{c.title}</a>)}
        {prototypeUrl && <a href={prototypeUrl} target="_blank" rel="noreferrer">Try the prototype</a>}
      </div></nav>
      {CHAPTERS.map((c, i) => (
        <section key={c.title} id={`pp-c${i}`}>
          <header><h2>{c.title}</h2><p>{c.intro}</p></header>
          <div className={s.grid}>
            {c.screens.map((sc) => { n += 1; return (
              <figure key={sc.id}>
                <button className={s.ph} onClick={() => open(sc.id)} aria-label={`Enlarge ${sc.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/case-studies/power-pay/${sc.id}.webp`} alt={`${sc.title} screen`} loading="lazy" width={300} height={632} />
                </button>
                <figcaption><b>{n}</b><div><h3>{sc.title}</h3><p>{sc.text}</p></div></figcaption>
              </figure>
            ); })}
          </div>
        </section>
      ))}
      <dialog ref={dlg} onClick={() => dlg.current?.close()}><div>{/* eslint-disable-next-line @next/next/no-img-element */}<img ref={img} alt="" /></div></dialog>
    </div>
  );
}
