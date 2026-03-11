import { Heart, Target, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/seo/SEO';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every feature in our anniversary calculator is designed with care to help couples celebrate their love journey.',
  },
  {
    icon: Target,
    title: 'Precision First',
    description: 'Our system uses advanced date algorithms to calculate anniversary dates and years accurately, ensuring reliable results every time.',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Our anniversary date calculator is simple, fast, & easy for anyone to use, whether you want to calculate anniversary months, years, or special milestones.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Design',
    description: 'We believe celebrating love should be beautiful, which is why our cards are elegantly designed.',
  },
];

export default function About() {
  const structuredData = [
    generateOrganizationSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ]),
  ];

  return (
    <>
      <SEO
        title="About Us | Anniversary Calculator"
        description="Learn about Anniversary Calculator - the free online tool helping couples celebrate their love story. Discover our mission, values, and story."
        canonical="/about"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to Anniversary Calculator, a free and easy-to-use online tool designed to help couples celebrate their special milestones.
            Our platform allows you to quickly calculate anniversary dates, discover your anniversary year, and find the exact time you have spent together.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Anniversary Calculator started with a simple idea: love deserves to be celebrated with accuracy and meaning.
                  While many online tools could calculate anniversary dates, most of them were basic and lacked features that couples truly needed.
                  We wanted to build something better, a tool that could easily calculate wedding anniversaries, show anniversary months & years,
                  and help couples keep track of their relationship milestones.
                </p>
                <p>
                  In 2026, we set out to create a tool that not only calculates anniversaries with 
                  perfect accuracy but also helps couples create beautiful memories through personalized 
                  anniversary cards.
                </p>
                <p>
                  Today, <Link to="/" className="text-primary hover:underline font-medium">

  our tool

</Link> has helped over 50,000 couples discover their anniversary details 
                  and create stunning cards to share their love stories with the world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Heart className="w-32 h-32 text-primary" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Anniversary Calculations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">25K+</div>
              <div className="text-white/80">Cards Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Countries Using Our Tool</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">4.9</div>
              <div className="text-white/80">Average User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our mission is to help couples celebrate their relationship milestones with ease.
            We want to provide the most reliable anniversary calculator online where users can quickly calculate wedding anniversaries,
            track their anniversary year, and celebrate every stage of their love story. Whether you want to calculate anniversary dates,
            find your marriage anniversary, or track your dating anniversary, our platform is here to make every celebration special.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="font-medium">Made with love for couples worldwide</span>
          </div>
        </div>
      </section>
    </>
  );
}
