import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () => {
    const seo = pageMeta({
      title: pageTitle("Privacidade"),
      description: `Política de privacidade do ${SITE.name}.`,
      path: "/privacidade",
    });
    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "noindex,follow" }],
    };
  },
  component: PrivacidadePage,
});

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border/50 py-8 last:border-0">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacidadePage() {
  return (
    <WaveSection>
      <div className="mx-auto max-w-3xl px-page">
        <Reveal>
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: agosto de 2026 · {SITE.name}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <LegalSection title="1. Quem somos">
            <p>
              O {SITE.name} ({SITE.email}) é responsável pelo tratamento dos dados pessoais
              coletados por meio deste site e dos canais de contato listados aqui, incluindo
              WhatsApp, telefone e delivery online.
            </p>
          </LegalSection>

          <LegalSection title="2. Dados que podemos coletar">
            <p>
              Ao entrar em contato conosco ou realizar pedidos, podemos receber nome, telefone,
              endereço de entrega, histórico de pedidos e mensagens enviadas por WhatsApp ou
              formulários de contato.
            </p>
            <p>
              Este site pode registrar dados técnicos básicos de navegação (como tipo de dispositivo
              e páginas visitadas) para fins de segurança, desempenho e melhoria da experiência.
            </p>
          </LegalSection>

          <LegalSection title="3. Finalidade do uso">
            <p>
              Utilizamos os dados para processar pedidos, responder solicitações, confirmar
              reservas, prestar atendimento, cumprir obrigações legais e melhorar nossos serviços.
            </p>
          </LegalSection>

          <LegalSection title="4. Compartilhamento">
            <p>
              Não vendemos dados pessoais. Informações podem ser compartilhadas com prestadores
              essenciais ao funcionamento do negócio, como plataformas de delivery, meios de
              pagamento e ferramentas de comunicação, sempre dentro do necessário para a operação.
            </p>
          </LegalSection>

          <LegalSection title="5. Seus direitos">
            <p>
              Você pode solicitar acesso, correção ou exclusão de dados, bem como esclarecimentos
              sobre o tratamento, entrando em contato pelo e-mail{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                {SITE.email}
              </a>{" "}
              ou WhatsApp {SITE.phone}.
            </p>
          </LegalSection>

          <LegalSection title="6. Contato">
            <p>
              {SITE.name} · {SITE.address.full}
              <br />
              {SITE.email} · {SITE.phone}
            </p>
            <p>
              <Link to="/" className="text-primary hover:underline">
                Voltar ao início
              </Link>
            </p>
          </LegalSection>
        </Reveal>
      </div>
    </WaveSection>
  );
}
