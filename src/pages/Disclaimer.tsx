import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/components/seo/SEO';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Disclaimer', url: '/disclaimer' },
  ]);

  return (
    <>
      <SEO
        title="Disclaimer | Anniversary Calculator"
        description="Read our Disclaimer to understand the limitations and proper use of our anniversary calculator service."
        canonical="/disclaimer"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Disclaimer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about the use and limitations of our anniversary calculator service.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/10">
            <CardContent className="p-6 md:p-10 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-6">Last Updated: January 1, 2024</p>

              <div className="max-w-4xl mx-auto py-12 px-6 bg-background text-foreground">
  <h1 className="text-4xl font-bold text-primary mb-8">General Disclaimer</h1>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The information and tools provided on Anniversary Calculator are for general informational and entertainment purposes only.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    While we strive to ensure that our anniversary calculator and related tools function correctly, we make no guarantees regarding the completeness, accuracy, reliability, or availability of the information provided on this website.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    All use of the website and its services is at your own risk.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Calculation Accuracy</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our anniversary date calculator uses standard calendar-based date calculation methods to determine the time between two dates.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    However, users should be aware that:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Calculations are based on standard calendar systems</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Leap years are included in calculations where applicable</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Month calculations may use estimated values in some cases</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Certain regional or cultural date variations may not be considered</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Although <Link to="/" className="text-primary hover:underline font-medium">

  our anniversary calculator tool

</Link> aims to provide accurate results when users calculate anniversary years, months, or days, users should verify important dates independently for official or legal purposes.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">No Professional Advice</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The content and tools available on this website do not constitute professional advice of any kind.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    This includes but is not limited to:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Legal advice</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Financial advice</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Relationship counseling</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Religious or spiritual guidance</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you require professional assistance, please consult a qualified expert in the relevant field.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">External Links</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website may contain links to third-party websites that are not controlled or maintained by us.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not guarantee the accuracy, reliability, or relevance of information found on external websites. Visiting third-party links is done at your own discretion and risk.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Affiliate Disclosure</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Anniversary Calculator may participate in affiliate marketing programs.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    This means we may earn a commission when users make purchases through certain links on our website. These commissions help support the maintenance and development of our free anniversary calculator service and come at no additional cost to users.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Advertising Disclaimer</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website may display advertisements through third-party advertising networks such as Google AdSense.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We are not responsible for the content, claims, or accuracy of advertisements displayed on our website. Advertisers are responsible for ensuring their advertisements comply with applicable laws and regulations.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Personal Responsibility</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    By using our <strong className="text-foreground font-semibold">anniversary calculator</strong> or any other features on this website, you accept full responsibility for your actions.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Users are responsible for:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Verifying important anniversary calculations independently</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Using downloaded content appropriately</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Maintaining the security of their devices and internet connection</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Complying with applicable laws and regulations</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Service Availability</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not guarantee that our website or anniversary calculator tool will always be available without interruption.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The service may experience downtime due to maintenance, updates, or technical issues beyond our control.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Changes to Service</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We reserve the right to modify, suspend, or discontinue any part of our website or services at any time without prior notice.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We are not liable for any loss or inconvenience caused by such changes.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Indemnification</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    By using this website, you agree to indemnify and hold harmless Anniversary Calculator, its owners, affiliates, and partners from any claims, damages, losses, or expenses arising from your use of the website or its tools.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Contact Us</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you have any questions regarding this Disclaimer or our <Link to="/" className="text-primary hover:underline font-medium">
  anniversary calculator
</Link> service, you can contact us at:
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    📧 <a href="mailto:hello@anniversarycalculator.com" className="text-primary hover:underline">hello@anniversarycalculator.com</a>
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Acceptance of This Disclaimer</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    By accessing and using the Anniversary Calculator website, you acknowledge that you have read, understood, and agreed to this Disclaimer.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you do not agree with any part of this Disclaimer, you should discontinue using the website immediately.
  </p>
</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
