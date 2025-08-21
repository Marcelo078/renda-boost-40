import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Gift, TrendingUp, Wallet } from "lucide-react";

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  amount: string;
  code?: string;
  url: string;
  buttonText: string;
  variant: "finance" | "finance-blue" | "finance-orange";
  icon: React.ReactNode;
}

const benefits: BenefitCard[] = [
  {
    id: "pagbank",
    title: "PagBank",
    description: "Abra sua conta com meu código e ganhe R$20 no primeiro pagamento com cartão ou antecipação salarial.",
    amount: "R$20",
    code: "HGEG8R",
    url: "https://pagbank.vc/indica-maquininhas-e21fe4587",
    buttonText: "Usar Código: HGEG8R",
    variant: "finance",
    icon: <Wallet className="h-6 w-6" />
  },
  {
    id: "picpay",
    title: "PicPay",
    description: "Resgate R$20 na sua conta. Basta abrir o app, acessar Shop → Cupons, inserir o código e aproveitar!",
    amount: "R$20",
    url: "https://picpay.onelink.me/kAIe/hrfzvmlc",
    buttonText: "Baixar App e Resgatar",
    variant: "finance-blue",
    icon: <Gift className="h-6 w-6" />
  },
  {
    id: "neon",
    title: "Banco Neon",
    description: "Use meu código MARCE1635861 e veja seu dinheiro render até 160% do CDI!",
    amount: "160% CDI",
    code: "MARCE1635861",
    url: "https://app.neon.com.br/r2Ar?pid=MGM&af_app_invites=MARCE1635861&af_dp=banconeon://onboarding/start?inviteCode=MARCE1635861&deep_link_sub1=banconeon://onboarding/start?inviteCode=MARCE1635861&deep_link_value=onboarding&af_web_dp=https://neon.com.br/indicacoes?id=237ebe26-0aeb-4d41-897b-773e82fc4e1c",
    buttonText: "Abrir Conta Neon",
    variant: "finance-orange",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

export const FinanceBenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ganhe R$20 e Mais Benefícios
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-6">
            com Nossos Parceiros Financeiros
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais! 
            Aproveite essas oportunidades imperdíveis com PagBank, PicPay e Banco Neon.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.id} 
              className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-0"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
                <div className="text-2xl font-bold text-primary">
                  {benefit.amount}
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
                
                {benefit.code && (
                  <div className="p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Código:</span>
                    <div className="text-lg font-bold text-foreground">{benefit.code}</div>
                  </div>
                )}

                <Button
                  variant={benefit.variant}
                  size="lg"
                  className="w-full font-semibold"
                  onClick={() => window.open(benefit.url, '_blank')}
                >
                  {benefit.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm">
            ✅ Instituições regulamentadas pelo Banco Central do Brasil
          </p>
          <p className="text-white/70 text-sm mt-2">
            🔒 Segurança e confiabilidade garantidas
          </p>
        </div>
      </div>
    </section>
  );
};