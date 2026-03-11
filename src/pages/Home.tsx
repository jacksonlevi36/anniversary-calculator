import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calculator, Sparkles, Gift, Share2, Smartphone, CheckCircle, ChevronDown } from 'lucide-react';
import AnniversaryCalculator from '@/components/calculator/AnniversaryCalculator';
import SEO from '@/components/seo/SEO';
import { generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/SEO';

const benefits = [
  {
    icon: Calculator,
    title: 'Accurate Calculations',
    description: 'Get precise calculations of your anniversary in years, months, and days with our advanced date logic.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Cards',
    description: 'Generate stunning floral anniversary cards that you can download and share with your loved ones.',
  },
  {
    icon: Gift,
    title: 'Free & Easy',
    description: 'Completely free to use with no registration required. Calculate your anniversary in seconds.',
  },
  {
    icon: Share2,
    title: 'Shareable Results',
    description: 'Share your anniversary calculations and cards on social media or download them for keepsakes.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile phones.',
  },
  {
    icon: CheckCircle,
    title: 'No Registration',
    description: 'Use our tool instantly without creating an account or providing personal information.',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Enter Names & Date',
    description: 'Fill in the husband\'s name, wife\'s name, and your anniversary date in the calculator.',
  },
  {
    step: 2,
    title: 'Click Calculate',
    description: 'Hit the calculate button and watch as we instantly compute your anniversary details.',
  },
  {
    step: 3,
    title: 'Get Results & Card',
    description: 'View your results and create a beautiful anniversary card to celebrate your love.',
  },
];

const faqs = [
  {
    question: 'How do I calculate my anniversary date?',
    answer: 'Simply enter your wedding or relationship start date in our anniversary calculator. The tool will automatically calculate how many years, months, and days you\'ve been together, plus show a countdown to your next anniversary.',
  },
  {
    question: 'Can I calculate anniversary in months?',
    answer: 'Yes! Our calculator shows your anniversary in years, months, and days. You can see the total months you\'ve been together, as well as the breakdown of complete years and remaining months.',
  },
  {
    question: 'How accurate is the anniversary calculator?',
    answer: 'Our anniversary calculator uses precise date-fns library calculations to ensure 100% accuracy. It accounts for leap years and varying month lengths to give you the exact time you\'ve been together.',
  },
  {
    question: 'Can I download the anniversary card?',
    answer: 'Absolutely! After calculating your anniversary, you can choose from 4 beautiful floral card designs and download them in high-quality 1080x1080 resolution, perfect for sharing on social media.',
  },
  {
    question: 'Is the anniversary calculator free to use?',
    answer: 'Yes, our anniversary calculator is completely free to use. No registration, no hidden fees - just enter your details and calculate your love story instantly.',
  },
  {
    question: 'What is a wedding anniversary calculator?',
    answer: 'A wedding anniversary calculator is a tool that helps you determine exactly how long you\'ve been married by calculating the time elapsed since your wedding date in years, months, and days.',
  },
];

export default function Home() {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Structured data
  const structuredData = [
    generateWebApplicationSchema(),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: 'Home', url: '/' }]),
  ];

  return (
    <>
      <SEO
        title="Anniversary Calculator | Calculate Your Love Story"
        description="Free anniversary calculator to find out how many years, months, and days you've been together. Create beautiful anniversary cards and celebrate your love story."
        keywords="anniversary calculator, calculate anniversary, wedding anniversary calculator, marriage anniversary calculator, anniversary date calculator, dating anniversary calculator"
        canonical="/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <Heart
                className="text-primary/20"
                style={{
                  width: `${20 + i * 8}px`,
                  height: `${20 + i * 8}px`,
                }}
                fill="currentColor"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Free Anniversary Calculator Tool</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Calculate Your{' '}
            <span className="text-primary relative">
              Love Story
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 100 4 150 6C200 8 250 4 298 2"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-secondary"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Discover the exact time you've been together with our anniversary calculator and create a beautiful anniversary card to celebrate your love journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button
              onClick={scrollToCalculator}
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 rounded-full transition-all hover:scale-105"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Start Calculating
            </Button>
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-medium border-2 rounded-full hover:bg-primary/5"
              >
                Read Our Blog
              </Button>
            </Link>
          </div>

          {/* Stats */}
          {/* Scroll Indicator */}
        
        </div>
         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
      </section>

      {/* Calculator Section */}
      <section
        id="calculator"
        ref={calculatorRef}
        className="py-20 md:py-32 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Anniversary Calculator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your details below to calculate your anniversary and discover how long 
              you've been on this beautiful journey together.
            </p>
          </div>

          <AnniversaryCalculator />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your anniversary in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {howItWorks.map((item) => (
                <Card
                  key={item.step}
                  className="relative border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Use Our Anniversary Calculator?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect tool for celebrating your love story
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="group border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our anniversary calculator
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="border-2 border-primary/10 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Calculate Your Love Story?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have discovered their anniversary details 
            and created beautiful cards to celebrate their love.
          </p>
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl rounded-full transition-all hover:scale-105"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Now
          </Button>
        </div>
      </section>
    </>
  );
}
