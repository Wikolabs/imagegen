export default function Home() {
  const color = "#ec4899";
  const colorLight = "#fdf2f8";
  const colorDark = "#be185d";

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* NAVBAR */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #fce7f3", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color }}>ImageGen</span>
          <div style={{ display: "flex", gap: 12 }}>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
              style={{ background: color, color: "#fff", padding: "8px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              Réserver une démo
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorLight} 0%, #fff 60%)`, padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "#fce7f3", color, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
            Génération d&apos;images IA
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, color: "#831843", lineHeight: 1.15, marginBottom: 24 }}>
            Votre identité visuelle.<br />
            <span style={{ color }}>À l&apos;infini. Automatiquement.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 40, lineHeight: 1.7 }}>
            Pipeline de génération d&apos;images IA brand-consistent — campagnes, réseaux sociaux, catalogues produits générés automatiquement.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
              style={{ background: color, color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              Réserver une démo
            </button>
            <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20ImageGen%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer"
              style={{ background: "#25d366", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {[
              { value: "<5s", label: "génération" },
              { value: "100%", label: "brand-safe" },
              { value: "Droits", label: "libres" },
              { value: "API", label: "ready" },
            ].map((m) => (
              <div key={m.label} style={{ background: "#fff", borderRadius: 12, padding: "20px 16px", boxShadow: "0 1px 4px rgba(236,72,153,0.1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color }}>{m.value}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, color: "#831843", textAlign: "center", marginBottom: 48 }}>
            Créez plus vite, sans compromettre la qualité
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "🎨",
                title: "Génération guidée par prompt",
                desc: "Décrivez en langage naturel le visuel voulu — style, composition, couleurs, ambiance — et obtenez une image broadcast-quality en secondes.",
              },
              {
                icon: "🏷️",
                title: "Brand consistency garantie",
                desc: "Vos guidelines visuelles (couleurs, logo, typographie, style) sont encodées une fois et appliquées automatiquement à chaque génération.",
              },
              {
                icon: "🏭",
                title: "Pipeline de production",
                desc: "Génération par lot, formats multiples (carré, story, banner), variations A/B, export direct vers votre DAM ou plateforme de publication.",
              },
            ].map((f) => (
              <div key={f.title} style={{ background: colorLight, borderRadius: 16, padding: 32, border: "1px solid #fce7f3" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#831843", marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: colorLight, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, color: "#831843", textAlign: "center", marginBottom: 48 }}>
            Comment ça marche ?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                step: "01",
                title: "Décrivez votre besoin",
                desc: "Prompt en langage naturel ou template sélectionnable. Précisez le format, la plateforme cible et le style de votre marque.",
              },
              {
                step: "02",
                title: "Génération IA multi-modèle",
                desc: "Les meilleurs modèles de génération (Flux, SDXL, DALL-E) sont orchestrés pour produire plusieurs variantes de haute qualité.",
              },
              {
                step: "03",
                title: "Export et intégration",
                desc: "Téléchargez en PNG/WebP, envoyez directement vers Figma, Canva, votre CMS ou via webhook vers vos workflows de publication.",
              },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "#fff", borderRadius: 16, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 900, color: "#fce7f3", minWidth: 56 }}>{s.step}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#831843", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: 15 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: color, padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Générez vos premiers visuels aujourd&apos;hui
          </h2>
          <p style={{ color: "#fce7f3", fontSize: 18, marginBottom: 36 }}>100 images offertes sur votre premier projet.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
              style={{ background: "#fff", color, padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              Réserver une démo
            </button>
            <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20ImageGen%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer"
              style={{ background: "#25d366", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#831843", color: "#f9a8d4", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>ImageGen</div>
          <p style={{ fontSize: 14, marginBottom: 4 }}>
            <a href="mailto:team@wikolabs.com" style={{ color: "#f9a8d4", textDecoration: "none" }}>team@wikolabs.com</a>
            {" · "}
            <a href="https://wikolabs.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f9a8d4", textDecoration: "none" }}>wikolabs.com</a>
          </p>
          <p style={{ color: "#f9a8d4", marginTop: 8, fontSize: 13, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:team@wikolabs.com" style={{ color: "#f9a8d4", textDecoration: "none" }}>team@wikolabs.com</a>
            <span>·</span>
            <a href="tel:+261386626100" style={{ color: "#f9a8d4", textDecoration: "none" }}>+261 38 66 261 00</a>
            <span>·</span>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer" style={{ color: "#f9a8d4", textDecoration: "none" }}>Prendre RDV</button>
          </p>
          <p style={{ fontSize: 13, color: "#ec4899" }}>© 2026 Wikolabs. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
