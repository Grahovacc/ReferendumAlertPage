import { motion } from "framer-motion";
import {
  Bell,
  ShieldCheck,
  Users,
  Clock3,
  BarChart3,
  Globe2,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

import styles from "./App.module.scss";

const BOT_LINK = "https://t.me/ref_alert_bot";

type Feature = { icon: React.ComponentType<any>; title: string; desc: string };
const features: Feature[] = [
  {
    icon: Bell,
    title: "Real-time vote alerts",
    desc: "Instant Telegram pings when Aye/Nay/Abstain lands.",
  },
  {
    icon: Users,
    title: "Group-ready",
    desc: "Add the bot to DAO groups to keep everyone synced.",
  },
  {
    icon: Clock3,
    title: "Every minute checks",
    desc: "Minute-level refresh for Polkadot & Kusama.",
  },
  {
    icon: BarChart3,
    title: "Useful context",
    desc: "Conviction, power in DOT/KSM, voter short address, links.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable infra",
    desc: "Cloudflare Workers + KV: fast, de-duped alerts.",
  },
  {
    icon: Globe2,
    title: "OpenGov native",
    desc: "Watch any referendum by ID (Treasury & more).",
  },
];

const commands = [
  { cmd: "/watch <id>", desc: "Start watching a referendum" },
  { cmd: "/unwatch <id>", desc: "Stop watching a referendum" },
  { cmd: "/list", desc: "Show what this chat is watching" },
  { cmd: "/clear", desc: "Unsubscribe from all" },
  { cmd: "/id", desc: "Show this chat ID" },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.badge}>
          <Bell size={16} /> Referendum Alert for Polkadot Treasury
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.h1}
        >
          Never miss a vote that moves funding
        </motion.h1>
        <p className={styles.sub}>
          Real-time Telegram alerts for Polkadot Treasury referenda. See votes
          as they land — with conviction, power, and links.
        </p>
        <div className={styles.ctaRow}>
          <a
            href={BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <FaTelegramPlane size={18} /> Start in Telegram
          </a>

          <a href="#how" className={styles.secondaryCta}>
            See how it works <ChevronRight size={16} />
          </a>
        </div>
        <p className={styles.note}>
          Works with Polkadot OpenGov. Supports Kusama too.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className={styles.featureCard}
          >
            <f.icon className={styles.featureIcon} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CopyableCommands() {
  const text = commands.map((c) => `${c.cmd} — ${c.desc}`).join("\n");
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Commands copied!");
    } catch {}
  };
  return (
    <div className={styles.cmdBlock}>
      <div className={styles.cmdHead}>
        <h4>Bot commands</h4>
        <button onClick={onCopy}>
          <Copy size={14} /> Copy
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className={styles.how}>
      <div className={styles.howGrid}>
        <div>
          <h2>Simple, fast, and made for governance</h2>
          <p>
            Set it once and let alerts do the rest. Designed for core
            contributors, treasury curators, and DAO ops.
          </p>
          <ol className={styles.steps}>
            <li>
              <span>1</span>
              <div>
                <b>Start the bot</b>
                <p>Open Telegram and tap Start.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <b>Watch a referendum</b>
                <p>
                  Send <code>/watch &lt;id&gt;</code> (e.g. 1759).
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <b>Share to groups</b>
                <p>Add the bot to your DAO/group.</p>
              </div>
            </li>
          </ol>
          <div className={styles.howCtas}>
            <a
              href={BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Try the bot <ExternalLink size={16} />
            </a>

            <span className={styles.smallNote}>
              No signup • Ready in minutes
            </span>
          </div>
        </div>
        <div className={styles.rightCol}>
          <CopyableCommands />
          <div className={styles.howCards}>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Clean alerts — no duplicates (KV).
            </div>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Open source — link your GitHub repo.
            </div>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Treasury-ready — Grants & OpenGov.
            </div>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Multi-network — Polkadot & Kusama.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className={styles.faq}>
      <h2>FAQ</h2>
      <details>
        <summary>Does it work for Polkadot Treasury only?</summary>
        <p>
          It’s optimized for Treasury referenda, but you can watch other OpenGov
          tracks by ID (including Kusama).
        </p>
      </details>
      <details>
        <summary>What information do alerts include?</summary>
        <p>
          Aye/Nay/Abstain, conviction, voter short address, voting power
          (DOT/KSM), and a link to Polkassembly/Subscan.
        </p>
      </details>
      <details>
        <summary>Can I add it to a Telegram group?</summary>
        <p>
          Yes. Add the bot with permission to post messages and run the same
          commands in the group.
        </p>
      </details>
      <details>
        <summary>Is the code open source?</summary>
        <p>
          Yes. Link your GitHub repo for transparency in Treasury proposals.
        </p>
      </details>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © {new Date().getFullYear()} ProposalAlert — Built for Polkadot OpenGov
      </div>
      <div className={styles.footerLinks}>
        <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
          Start in Telegram
        </a>
        <a href="#">GitHub</a>
        <a href="#">Docs</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className={styles.wrap}>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
