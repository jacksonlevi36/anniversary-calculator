import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Heart } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/components/seo/SEO';

const blogPosts = [
  {
    slug: 'how-to-calculate-anniversary-date-accurately',
    title: 'How to Calculate Anniversary Date Accurately',
    excerpt: 'Learn the precise methods to calculate your anniversary in years, months, and days. Discover tips for tracking your special day and understanding different anniversary calculation methods.',
    date: '2026-03-09',
    readTime: '5 min read',
    category: 'Guide',
  },
  {
    slug: 'wedding-anniversary-milestones-by-year',
    title: 'Wedding Anniversary Milestones by Year',
    excerpt: 'Explore the traditional and modern anniversary gifts and meanings for each year of marriage. From paper to diamond, discover what each milestone represents.',
    date: '2026-03-09',
    readTime: '8 min read',
    category: 'Traditions',
  },
  {
    slug: 'anniversary-gift-ideas-by-year',
    title: 'Anniversary Gift Ideas by Year',
    excerpt: 'Find the perfect anniversary gift based on traditional and modern themes. Creative ideas for every budget and every year of your journey together.',
    date: '2026-03-09',
    readTime: '10 min read',
    category: 'Gifts',
  },
  {
    slug: 'how-many-days-since-my-marriage',
    title: 'How Many Days Since My Marriage?',
    excerpt: 'Curious about exactly how many days you\'ve been married? Learn how to calculate the exact number of days and why this number matters for your relationship.',
    date: '2026-03-09',
    readTime: '4 min read',
    category: 'Calculator',
  },
  {
    slug: 'anniversary-celebration-ideas',
    title: 'Anniversary Celebration Ideas',
    excerpt: 'Make your anniversary unforgettable with these creative celebration ideas. From romantic getaways to intimate at-home celebrations, find inspiration for your special day.',
    date: '2026-03-09',
    readTime: '7 min read',
    category: 'Celebration',
  },
];

export default function Blog() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <SEO
        title="Blog | Anniversary Calculator"
        description="Read our blog for anniversary tips, gift ideas, celebration inspiration, and guides on calculating your special day. Learn about anniversary traditions and milestones."
        canonical="/blog"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover tips, guides, and inspiration for celebrating your love story. 
            From anniversary traditions to gift ideas, we've got you covered.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                      <Heart className="w-3 h-3" />
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Calculate Your Anniversary?
          </h2>
          <p className="text-muted-foreground mb-8">
            Use our free anniversary calculator to discover exactly how long you've been together.
          </p>
          <Link
            to="/#calculator"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            <Heart className="w-5 h-5 mr-2" />
            Calculate Now
          </Link>
        </div>
      </section>
    </>
  );
}
