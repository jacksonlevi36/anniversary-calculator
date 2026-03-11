import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/components/seo/SEO';
import { Link } from 'react-router-dom';

export default function Terms() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms & Conditions', url: '/terms' },
  ]);

  return (
    <>
      <SEO
        title="Terms & Conditions | Anniversary Calculator"
        description="Read our Terms and Conditions to understand the rules and regulations for using our anniversary calculator service."
        canonical="/terms"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our anniversary calculator service.
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
  <h1 className="text-4xl font-bold text-primary mb-8">Agreement to Terms</h1>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    By visiting and using Anniversary Calculator, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    These Terms apply to all visitors who use our website to calculate anniversary dates, years, or months through our online calculator tools.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Description of Service</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Anniversary Calculator provides free online tools designed to help couples track and celebrate their relationship milestones.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our services may include:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Anniversary date calculations (years, months, and days)</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Countdown to upcoming anniversaries</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Tools such as wedding anniversary calculator, marriage anniversary calculator, and dating anniversary calculator</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Anniversary card generation and download features</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Informational blog content related to anniversaries and celebrations</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our goal is to provide an easy and reliable way for users to calculate anniversary dates and relationship milestones.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Intellectual Property</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    All content, features, design elements, and functionality available on Anniversary Calculator are the property of the website owner and are protected by copyright, trademark, and other intellectual property laws.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    You may not:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Reproduce or distribute our content without permission</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Modify or create derivative works based on our website</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Use our branding or trademarks without written consent</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Scrape, copy, or data-mine our anniversary calculator tool</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Unauthorized use of our content may violate intellectual property laws.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">User Conduct</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    When using our website or our anniversary calculator service, you agree not to:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Use the service for any illegal or unauthorized purpose</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Attempt to gain unauthorized access to our systems or servers</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Interfere with other users' ability to use the website</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Upload malicious software, viruses, or harmful code</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Engage in any activity that disrupts or damages the functionality of the website</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We reserve the right to restrict access to users who violate these Terms.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Disclaimer of Warranties</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The Anniversary Calculator website and all related tools are provided on an <strong className="text-foreground font-semibold">"AS IS"</strong> and <strong className="text-foreground font-semibold">"AS AVAILABLE"</strong> basis.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not guarantee that:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The service will always be uninterrupted or error-free</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The anniversary calculator will provide perfectly accurate results in every situation</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Technical errors will always be corrected immediately</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The website will be free from viruses or harmful components</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Users should verify important dates independently.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Limitation of Liability</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    To the maximum extent permitted by law, Anniversary Calculator, its owners, partners, or affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or calculator tools.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    This includes any reliance on the results generated by our anniversary date calculator.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Accuracy of Calculations</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    While our anniversary calculator is designed to provide accurate results when users calculate anniversary years, months, and days, we cannot guarantee absolute accuracy in all situations.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Users are responsible for verifying important dates before making decisions based on the calculator results.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Third-Party Links</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website may contain links to third-party websites or services.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not control these websites and are not responsible for their content, privacy practices, or policies. Users should review the terms and privacy policies of those websites separately.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Termination</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We reserve the right to suspend or terminate access to our website at any time if a user violates these Terms or engages in activities that harm the service.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Governing Law</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    These Terms and Conditions shall be governed and interpreted in accordance with applicable laws, without regard to conflict of law principles.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Changes to Terms</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We may update or modify these Terms and Conditions at any time. When updates occur, the revised version will be posted on this page along with the updated date.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Users are encouraged to review this page periodically.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Contact Information</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you have any questions regarding these Terms and Conditions or our <Link to="/" className="text-primary hover:underline font-medium">
  anniversary calculator
</Link> service, you can contact us at:
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    📧 <a href="mailto:legal@anniversarycalculator.com" className="text-primary hover:underline">legal@anniversarycalculator.com</a>
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Entire Agreement</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    These Terms constitute the entire agreement between you and Anniversary Calculator regarding the use of our website and services and supersede any previous agreements or understandings.
  </p>
</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
