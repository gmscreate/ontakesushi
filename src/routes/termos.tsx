import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/termos")({
  head: () => {
    const seo = pageMeta({
      title: pageTitle("Termos de Uso"),
      description: `Termos de uso do site ${SITE.name}.`,
      path: "/termos",
    });
    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "noindex,follow" }],
    };
  },
  component: TermosPage,
});

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border/50 py-8 last:border-0">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function TermosPage() {
  return (
    <WaveSection>
      <div className="mx-auto max-w-3xl px-page">
        <Reveal>
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">Termos de Uso</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: agosto de 2026 · {SITE.name}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <LegalSection title="1. Aceitação">
            <p>
              Ao acessar este site, você concorda com estes Termos de Uso. Se não concordar, por
              favor, não utilize nossos serviços digitais.
            </p>
          </LegalSection>

          <LegalSection title="2. Serviços">
            <p>
              O site apresenta informações sobre cardápio, horários, localização e canais de pedido
              do {SITE.name}. Preços, disponibilidade de itens e prazos de entrega podem variar e
              devem ser confirmados no momento do pedido.
            </p>
          </LegalSection>

          <LegalSection title="3. Pedidos e pagamentos">
            <p>
              Pedidos realizados por WhatsApp, telefone ou plataformas parceiras de delivery estão
              sujeitos à confirmação da casa. Formas de pagamento aceitas: {SITE.payment.summary}
            </p>
          </LegalSection>

          <LegalSection title="4. Propriedade intelectual">
            <p>
              Textos, imagens, logotipos e identidade visual exibidos neste site pertencem ao{" "}
              {SITE.name} ou a seus respectivos titulares, sendo proibida a reprodução não
              autorizada.
            </p>
          </LegalSection>

          <LegalSection title="5. Limitação de responsabilidade">
            <p>
              Empregamos esforços para manter as informações atualizadas, mas não garantimos
              ausência total de erros tipográficos ou desatualizações temporárias de cardápio e
              horários.
            </p>
          </LegalSection>

          <LegalSection title="6. Contato">
            <p>
              Dúvidas sobre estes termos:{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                {SITE.email}
              </a>{" "}
              · {SITE.phone}
            </p>
            <p>
              Consulte também a{" "}
              <Link to="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </LegalSection>
        </Reveal>
      </div>
    </WaveSection>
  );
}
