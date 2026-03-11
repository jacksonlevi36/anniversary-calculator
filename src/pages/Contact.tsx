import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Send, Heart } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/components/seo/SEO';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <SEO
        title="Contact Us | Anniversary Calculator"
        description="Get in touch with the Anniversary Calculator team. We'd love to hear from you! Send us your questions, feedback, or suggestions."
        canonical="/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you for visiting Anniversary Calculator. If you have any questions about our anniversary calculator,
            need help using the anniversary date calculator, or want to share feedback about our tool, feel free to contact us.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our <Link to="/" className="text-primary hover:underline font-medium">
  anniversary calculator
</Link>? Need help creating your card? 
                Or just want to share your love story? We're here to help!
              </p>

              <div className="space-y-6">
                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For general inquiries and support
                      </p>
                      <a
                        href="mailto:hello@anniversarycalculator.com"
                        className="text-primary hover:underline"
                      >
                        hello@anniversarycalculator.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Connect with us on social platforms
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Facebook
                        </a>
                        <span className="text-muted-foreground">|</span>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Twitter
                        </a>
                        <span className="text-muted-foreground">|</span>
                        <a
                          href="https://instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                      <h3 className="font-semibold text-foreground">We Love Hearing From You!</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Your feedback helps us improve and create better experiences for couples 
                      celebrating their love stories. Don't hesitate to reach out!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/10 shadow-xl shadow-primary/5">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Your Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 border-2 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 border-2 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what's on your mind..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border-2 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Send className="mr-2 h-5 w-5 animate-pulse" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
