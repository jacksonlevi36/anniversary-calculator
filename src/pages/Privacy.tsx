import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/components/seo/SEO';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ]);

  return (
    <>
      <SEO
        title="Privacy Policy | Anniversary Calculator"
        description="Read the Privacy Policy of our Anniversary Calculator to learn how we protect your data while you use our anniversary date calculator and related tools."
        canonical="/privacy"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Introduction</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Welcome to Anniversary Calculator, an online platform that helps couples calculate anniversary dates, months, and years using a simple and accurate calculator tool.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We respect your privacy and are committed to protecting any information collected when you use our website, including tools such as our wedding anniversary calculator, marriage anniversary calculator, or dating anniversary calculator.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    This Privacy Policy explains what data we collect, how we use it, and your rights regarding that information.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Information We Collect</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We collect only limited information necessary to operate and improve our services.
  </p>

  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Usage Data</h3>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We may collect information about how visitors interact with our website, including pages visited, time spent on the site, and interactions with tools like our <Link to="/" className="text-primary hover:underline font-medium">
  anniversary calculator
</Link>.
  </p>

  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Device Information</h3>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We may collect technical information such as browser type, device type, and operating system to ensure our anniversary calculator tool works properly on all devices.
  </p>

  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies</h3>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website may use cookies to enhance user experience, remember preferences, and analyze traffic to improve our anniversary date calculator and other features.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">How We Use Your Information</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The information we collect may be used to:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Provide and maintain our anniversary calculator service</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Improve the performance of our anniversary date calculator</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Analyze website usage and user behavior</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Enhance user experience on our platform</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Display relevant advertisements through services such as Google AdSense</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not store personal anniversary dates or relationship information entered into the calculator.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Data Security</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We take reasonable security measures to protect your information.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our security practices include:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Secure data transmission using SSL/TLS encryption</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Regular security monitoring and updates</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Protection against unauthorized access</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our anniversary calculator processes calculations in real time and does not store personal relationship or anniversary data on our servers.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Third-Party Services</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website may use trusted third-party services to improve functionality.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    These services may include:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>
        <strong className="text-foreground font-semibold">Google Analytics</strong><br />
        Used to understand website traffic and user behavior.
      </span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>
        <strong className="text-foreground font-semibold">Google AdSense</strong><br />
        Used to display advertisements that support our free <strong className="text-foreground font-semibold">anniversary calculator tool</strong>.
      </span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>
        <strong className="text-foreground font-semibold">Hosting Providers</strong><br />
        Used to securely host and maintain our website infrastructure.
      </span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    These third-party services may collect information in accordance with their own privacy policies.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Your Privacy Rights</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Depending on your location, you may have the following rights regarding your personal data:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to access your data</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to correct inaccurate information</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to request deletion of data</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to restrict processing</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to object to certain data uses</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>The right to data portability</span>
    </li>
  </ul>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you wish to exercise any of these rights, you can contact us.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Children's Privacy</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our website and tools, including the anniversary calculator, are not intended for children under the age of 13.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We do not knowingly collect personal information from children. If you believe that a child has provided personal data on our website, please contact us and we will promptly remove the information.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Changes to This Privacy Policy</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    When updates occur, we will revise the Last Updated date on this page.
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    We encourage users to review this policy periodically.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Contact Us</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    If you have any questions about this Privacy Policy or how our anniversary calculator service operates, you can contact us at:
  </p>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    📧 <a href="mailto:anniversarycalculator@gmail.com" className="text-primary hover:underline">anniversarycalculator@gmail.com</a>
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Consent</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    By using our website and tools such as our anniversary calculator, wedding anniversary calculator, or anniversary date calculator, you consent to this Privacy Policy and agree to its terms.
  </p>
</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
