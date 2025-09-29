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
const GITHUB_REPO = "https://github.com/Grahovacc/ReferendumAlert";
const DOCS_LINK = `${GITHUB_REPO}#readme`;

type Feature = { icon: React.ComponentType<any>; title: string; desc: string };
const features: Feature[] = [
  {
    icon: Bell,
    title: "Real-time vote alerts",
    desc: "Instant Telegram notifications when Aye/Nay/Abstain lands.",
  },
  {
    icon: Users,
    title: "Group-ready",
    desc: "Add the bot to DAO/group chats so everyone stays in sync.",
  },
  {
    icon: Clock3,
    title: "Minute-level checks",
    desc: "Polls every minute for Polkadot & Kusama OpenGov.",
  },
  {
    icon: BarChart3,
    title: "Useful context",
    desc: "Conviction, voting power (DOT/KSM), short address, and links.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable infra",
    desc: "Cloudflare Workers + KV for fast, de-duplicated alerts.",
  },
  {
    icon: Globe2,
    title: "OpenGov-native",
    desc: "Watch any referendum by ID (Treasury and more).",
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
          <Bell size={16} /> Referendum Alert — Polkadot & Kusama
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.h1}
        >
          Never miss a referendum vote again
        </motion.h1>
        <p className={styles.sub}>
          Real-time Telegram alerts for OpenGov referenda. See votes as they
          land — conviction, voting power, addresses, and links included.
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
        <p className={styles.note}>Works with Polkadot OpenGov and Kusama.</p>
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
            Set it once and let alerts do the rest. Built for core contributors,
            treasury curators, and DAO ops.
          </p>
          <ol className={styles.steps}>
            <li>
              <span>1</span>
              <div>
                <b>Start the bot</b>
                <p>
                  Open Telegram and tap <b>Start</b>.
                </p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <b>Watch a referendum</b>
                <p>
                  Send <code>/watch &lt;id&gt;</code> (e.g., <code>1759</code>).
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <b>Share to groups</b>
                <p>Add the bot to your DAO/group and use the same commands.</p>
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
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCta}
            >
              View on GitHub <ExternalLink size={16} />
            </a>
            <span className={styles.smallNote}>
              No signup • Ready in minutes
            </span>
          </div>
        </div>
        <div className={styles.rightCol}>
          <CopyableCommands />
          <div className={styles.howCards}>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.howCard}
            >
              <CheckCircle2 size={16} /> Open source
              <ExternalLink size={14} />
            </a>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Clean alerts
            </div>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Optimized for governance use
            </div>
            <div className={styles.howCard}>
              <CheckCircle2 size={16} /> Supports Polkadot & Kusama
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
        <summary>Does it work only for Polkadot Treasury?</summary>
        <p>
          It’s optimized for Treasury referenda, but you can watch other OpenGov
          tracks by ID — including on Kusama.
        </p>
      </details>
      <details>
        <summary>What information do alerts include?</summary>
        <p>
          Aye/Nay/Abstain, conviction, voter short address, voting power
          (DOT/KSM), and a link to explorers (e.g., Polkassembly/Subscan).
        </p>
      </details>
      <details>
        <summary>Can I add it to a Telegram group?</summary>
        <p>
          Yes. Add the bot with permission to post messages, then use the same
          commands in the group.
        </p>
      </details>
      <details>
        <summary>Is the code open source?</summary>
        <p>
          Yes — find the repository here:{" "}
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
            {GITHUB_REPO}
          </a>
          .
        </p>
      </details>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © {new Date().getFullYear()} Referendum Alert — Built for Polkadot
        OpenGov
      </div>
      <div className={styles.footerLinks}>
        <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
          Start using Bot
        </a>
        <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={DOCS_LINK} target="_blank" rel="noopener noreferrer">
          Docs
        </a>
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
