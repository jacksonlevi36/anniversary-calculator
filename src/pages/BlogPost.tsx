import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Heart, Calculator, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/seo/SEO';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/components/seo/SEO';

const blogPosts = {
  'how-to-calculate-anniversary-date-accurately': {
    title: 'How to Calculate Anniversary Date Accurately',
    excerpt: 'Learn the precise methods to calculate your anniversary in years, months, and days.',
    content: `
      <div className="max-w-4xl mx-auto py-12 px-6 bg-background text-foreground">
      <img src="/blog-image-1.jpeg" alt="Article Image" className="w-full h-auto rounded-lg my-6 shadow-md" />
  <h1 className="text-4xl font-bold text-primary mb-8">Understanding Anniversary Calculations</h1>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Calculating your anniversary accurately is more than just counting years. It involves understanding the exact time you've spent together, accounting for leap years, varying month lengths, and the precise day count. Whether you're celebrating your first year or your golden jubilee, knowing the exact numbers adds a special touch to your celebration.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">The Basic Calculation Method</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The simplest way to calculate your anniversary is to subtract your wedding date from the current date. However, this basic method doesn't give you the complete picture. For a more accurate calculation:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Count complete years first</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Calculate remaining months</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Determine exact days</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Account for leap years in your calculation</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Using Our Anniversary Calculator </h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Our free <a href="/" style="color: #E91E8C; font-weight: 600; text-decoration: underline;"><strong>anniversary calculator</strong></a> takes all the complexity out of this process. takes all the complexity out of this process. Simply enter your anniversary date, and our tool will instantly provide you with:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Total years together</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Complete months</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Exact days</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Countdown to your next anniversary</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Why Accuracy Matters</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Knowing the exact time you've been together helps you appreciate the journey you've shared. It's not just about the years - it's about every day, every month, and every moment that has brought you closer together. Many couples find that seeing the total days together creates a deeper appreciation for their relationship.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Tips for Remembering Your Anniversary</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    While calculating your anniversary is important, remembering it is crucial! Here are some tips:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Set calendar reminders a week in advance</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Create annual traditions that make the date memorable</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Take photos each year to document your journey</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Share your calculation with friends and family</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Conclusion</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Calculating your anniversary accurately helps you celebrate your love story with precision. Use our free <a href="/" className="text-primary font-semibold underline hover:opacity-80"><strong>anniversary calculator</strong></a> to discover exactly how long you've been together and create beautiful memories with your personalized anniversary card.
  </p>
</div>
    `,
    date: '2026-3-9',
    readTime: '5 min read',
    category: 'Guide',
    author: 'Sarah Mitchell',
    image: '/og-image.jpg',
  },
  'wedding-anniversary-milestones-by-year': {
    title: 'Wedding Anniversary Milestones by Year',
    excerpt: 'Explore the traditional and modern anniversary gifts and meanings for each year of marriage.',
    content: `
    <img src="/blog-image-2.jpeg" alt="Article Image" className="w-full h-auto rounded-lg my-6 shadow-md" />
      <h2>The Tradition of Anniversary Milestones</h2>
      <p>Anniversary milestones have been celebrated for centuries, with each year of marriage associated with specific materials that symbolize the growing strength and value of the relationship. From the delicate paper of the first anniversary to the enduring diamond of the sixtieth, each milestone tells a unique story.</p>
      
      <h2>The First Decade: Building Foundations</h2>
      <p>The first ten years of marriage establish the foundation of your lifelong journey together:</p>
      <ul>
        <li><strong>1st Year - Paper:</strong> Like a blank page, your story is just beginning</li>
        <li><strong>2nd Year - Cotton:</strong> Your lives become interwoven like cotton fibers</li>
        <li><strong>3rd Year - Leather:</strong> Your relationship grows durable and flexible</li>
        <li><strong>4th Year - Linen:</strong> Comfort and practicality define your partnership</li>
        <li><strong>5th Year - Wood:</strong> Deep roots and growing strength</li>
        <li><strong>6th Year - Iron:</strong> Unbreakable and strong</li>
        <li><strong>7th Year - Wool:</strong> Warmth and comfort in each other</li>
        <li><strong>8th Year - Bronze:</strong> Beautifully aged and resilient</li>
        <li><strong>9th Year - Pottery:</strong> Shaped by life's experiences</li>
        <li><strong>10th Year - Tin:</strong> Flexible yet durable</li>
      </ul>
      
      <h2>Milestone Anniversaries</h2>
      <p>Certain anniversaries are considered particularly significant:</p>
      <ul>
        <li><strong>25th Year - Silver:</strong> A quarter-century of precious memories</li>
        <li><strong>30th Year - Pearl:</strong> Rare and beautiful, formed through time</li>
        <li><strong>40th Year - Ruby:</strong> Passion that burns as bright as ever</li>
        <li><strong>50th Year - Gold:</strong> Half a century of golden moments</li>
        <li><strong>60th Year - Diamond:</strong> Unbreakable, eternal love</li>
      </ul>
      
      <h2>Modern vs Traditional Gifts</h2>
      <p>While traditional gifts have historical significance, modern alternatives offer contemporary options. For example, the first anniversary's traditional paper gift can be complemented with a modern clock gift, symbolizing the timeless nature of your love.</p>
      
      <h2>Celebrating Your Milestone</h2>
      <p>Each milestone deserves special recognition. Consider:</p>
      <ul>
        <li>Renewing your vows</li>
        <li>Taking a special trip together</li>
        <li>Creating a photo album of your years together</li>
        <li>Hosting a celebration with loved ones</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Understanding anniversary milestones helps you appreciate the journey of your marriage. Each year brings new meaning and significance to your relationship. Use our <a href="/" style="color: #E91E8C; font-weight: 600; text-decoration: underline;"><strong>anniversary calculator</strong></a> to track your progress and celebrate each milestone with joy.</p>
    `,
    date: '2026-3-9',
    readTime: '8 min read',
    category: 'Traditions',
    author: 'Emma Richardson',
    image: '/og-image.jpg',
  },
  'anniversary-gift-ideas-by-year': {
    title: 'Anniversary Gift Ideas by Year',
    excerpt: 'Find the perfect anniversary gift based on traditional and modern themes.',
    content: `
    <img src="/blog-image-3.jpeg" alt="Article Image" className="w-full h-auto rounded-lg my-6 shadow-md" />
      <div className="max-w-4xl mx-auto py-12 px-6 bg-background text-foreground">
  <h1 className="text-4xl font-bold text-primary mb-8">The Art of Anniversary Gifting</h1>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Finding the perfect anniversary gift can be both exciting and challenging. The traditional and modern anniversary gift themes provide wonderful inspiration, but the best gifts come from understanding your partner and celebrating your unique journey together.
  </p>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">First Anniversary: Paper</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Traditional paper gifts offer endless possibilities:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized love letter or poem</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Custom illustration of your wedding venue</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>First edition of their favorite book</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Tickets to a concert or show</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized map of where you met</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Fifth Anniversary: Wood</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Wood symbolizes the strong roots of your relationship:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Custom wooden photo frame with your wedding picture</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized wooden jewelry box</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Wooden watch with engraving</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Hand-carved decorative piece</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Wooden recipe box for family favorites</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Tenth Anniversary: Tin/Aluminum</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Flexible yet durable, like your decade of love:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Custom tin sign with your wedding date</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Aluminum jewelry</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized tin of their favorite treats</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Aluminum photo print</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Decorative tin boxes for keepsakes</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Twenty-Fifth Anniversary: Silver</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    A quarter-century deserves precious recognition:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Silver jewelry (necklace, bracelet, cufflinks)</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Silver photo frame with family picture</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized silver keepsake box</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Silver-plated serving pieces</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Silver charm bracelet with milestone charms</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Fiftieth Anniversary: Gold</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Golden jubilee calls for golden gifts:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Gold jewelry or watch</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Gold-framed photo collage</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Golden anniversary party</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Gold-dipped rose</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Family tree in gold frame</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Budget-Friendly Ideas</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    Meaningful gifts don't have to be expensive:
  </p>
  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Handwritten love letter</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>DIY photo album</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Home-cooked special dinner</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Memory jar with notes</span>
    </li>
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="text-primary mt-1">•</span>
      <span>Personalized playlist</span>
    </li>
  </ul>

  <h2 className="text-3xl font-bold text-primary mt-10 mb-6 border-b border-primary/20 pb-2">Conclusion</h2>
  
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
    The perfect anniversary gift reflects your love and appreciation. Whether you follow traditional themes or create your own, what matters most is the thought and love behind the gesture. Use our <a href="/" style="color: #E91E8C; font-weight: 600; text-decoration: underline;"><strong>anniversary calculator</strong></a> to find out exactly how long you've been together, then celebrate with the perfect gift!
  </p>
</div>
    `,
    date: '2026-3-9',
    readTime: '10 min read',
    category: 'Gifts',
    author: 'Jessica Thompson',
    image: '/og-image.jpg',
  },
  'how-many-days-since-my-marriage': {
    title: 'How Many Days Since My Marriage?',
    excerpt: 'Curious about exactly how many days you\'ve been married?',
    content: `
    <img src="/blog-image-4.jpeg" alt="Article Image" className="w-full h-auto rounded-lg my-6 shadow-md" />
      <h2>The Significance of Counting Days</h2>
      <p>While we often celebrate anniversaries in years, there's something special about knowing the exact number of days you've been married. Each day represents a shared sunrise, a moment of laughter, a challenge overcome together, and a memory created.</p>
      
      <h2>Why Count the Days?</h2>
      <p>Knowing your total days married offers a unique perspective:</p>
      <ul>
        <li><strong>Appreciation:</strong> Seeing a large number reminds you of your journey</li>
        <li><strong>Milestones:</strong> Celebrate day 1,000, 5,000, or 10,000</li>
        <li><strong>Reflection:</strong> Each day represents growth and love</li>
        <li><strong>Sharing:</strong> A fun fact to share with friends and family</li>
      </ul>
      
      <h2>How to Calculate Days Married</h2>
      <p>Calculating the exact number of days requires:</p>
      <ul>
        <li>Your exact wedding date</li>
        <li>Today's date</li>
        <li>Accounting for leap years</li>
        <li>Considering month lengths</li>
      </ul>
      
      <h2>Special Day Milestones</h2>
      <p>Certain day counts are worth celebrating:</p>
      <ul>
        <li><strong>100 days:</strong> Your first major milestone</li>
        <li><strong>500 days:</strong> A year and a half of love</li>
        <li><strong>1,000 days:</strong> Nearly three years together</li>
        <li><strong>5,000 days:</strong> Over 13 years of marriage</li>
        <li><strong>10,000 days:</strong> More than 27 years together</li>
        <li><strong>25,000 days:</strong> A lifetime of love (about 68 years)</li>
      </ul>
      
      <h2>Using Our Calculator</h2>
      <p>Our anniversary calculator makes it easy to find out exactly how many days you've been married. Simply enter your wedding date, and we'll instantly show you:</p>
      <ul>
        <li>Total days married</li>
        <li>Complete years</li>
        <li>Remaining months and days</li>
        <li>Days until your next anniversary</li>
      </ul>
      
      <h2>Celebrating Day Milestones</h2>
      <p>Make day milestones special:</p>
      <ul>
        <li>Take a photo on significant day counts</li>
        <li>Share the number on social media</li>
        <li>Plan a special date for major milestones</li>
        <li>Create a tradition around day counting</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Every day of marriage is a gift. Knowing exactly how many days you've been married helps you appreciate the journey you've shared. Use our free <a href="/" style="color: #E91E8C; font-weight: 600; text-decoration: underline;"><strong>anniversary calculator</strong></a> to discover your day count and celebrate your love story!</p>
    `,
    date: '2026-3-9',
    readTime: '4 min read',
    category: 'Calculator',
    author: 'Michael Chen',
    image: '/og-image.jpg',
  },
  'anniversary-celebration-ideas': {
    title: 'Anniversary Celebration Ideas',
    excerpt: 'Make your anniversary unforgettable with these creative celebration ideas.',
    content: `
    <img src="/blog-image-5.jpeg" alt="Article Image" className="w-full h-auto rounded-lg my-6 shadow-md" />
      <h2>Creating Unforgettable Anniversary Memories</h2>
      <p>Your anniversary is a celebration of your unique love story. Whether you prefer grand gestures or intimate moments, there are countless ways to make your special day memorable. Here are ideas for every style and budget.</p>
      
      <h2>Romantic Getaways</h2>
      <p>Escape together to create new memories:</p>
      <ul>
        <li><strong>Beach Retreat:</strong> Sunset walks and ocean views</li>
        <li><strong>Mountain Cabin:</strong> Cozy fires and starry nights</li>
        <li><strong>City Escape:</strong> Fine dining and cultural experiences</li>
        <li><strong>Countryside B&B:</strong> Peaceful relaxation together</li>
        <li><strong>Return to Your Honeymoon Spot:</strong> Relive the magic</li>
      </ul>
      
      <h2>Intimate At-Home Celebrations</h2>
      <p>Sometimes the best celebrations are at home:</p>
      <ul>
        <li><strong>Candlelight Dinner:</strong> Cook together or order from your favorite restaurant</li>
        <li><strong>Movie Marathon:</strong> Watch your wedding video and favorite films</li>
        <li><strong>Memory Lane:</strong> Go through photo albums and reminisce</li>
        <li><strong>Home Spa:</strong> Relax with massages and a bubble bath</li>
        <li><strong>Stargazing:</strong> Set up a cozy spot in your backyard</li>
      </ul>
      
      <h2>Adventure Celebrations</h2>
      <p>For couples who love excitement:</p>
      <ul>
        <li>Hot air balloon ride</li>
        <li>Skydiving or bungee jumping</li>
        <li>Hiking to a scenic viewpoint</li>
        <li>Taking a dance class together</li>
        <li>Going on a road trip</li>
      </ul>
      
      <h2>Traditional Celebrations</h2>
      <p>Classic ways to mark your anniversary:</p>
      <ul>
        <li>Renew your vows</li>
        <li>Visit your wedding venue</li>
        <li>Recreate your first date</li>
        <li>Exchange traditional anniversary gifts</li>
        <li>Host a dinner party with loved ones</li>
      </ul>
      
      <h2>Budget-Friendly Ideas</h2>
      <p>Celebrating doesn't have to be expensive:</p>
      <ul>
        <li>Picnic in the park</li>
        <li>Sunset watching</li>
        <li>Free museum days</li>
        <li>DIY wine tasting at home</li>
        <li>Writing love letters to each other</li>
      </ul>
      
      <h2>Creating Annual Traditions</h2>
      <p>Establish traditions that make each anniversary special:</p>
      <ul>
        <li>Take a photo in the same spot every year</li>
        <li>Write each other a letter</li>
        <li>Plant something together</li>
        <li>Try a new restaurant</li>
        <li>Create an anniversary time capsule</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The best anniversary celebration is one that reflects your unique relationship. Whether you choose adventure, romance, or simplicity, what matters most is celebrating the love you share. Use our <a href="/" style="color: #E91E8C; font-weight: 600; text-decoration: underline;"><strong>anniversary calculator</strong></a> to find out exactly how long you've been together, then plan the perfect celebration!</p>
    `,
    date: '2026-3-9',
    readTime: '7 min read',
    category: 'Celebration',
    author: 'Amanda Foster',
    image: '/og-image.jpg',
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('Shared successfully!');
      } catch {
        toast.error('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const structuredData = [
    generateArticleSchema({
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      authorName: post.author,
    }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${slug}` },
    ]),
  ];

  return (
    <>
      <SEO
        title={`${post.title} | Anniversary Calculator Blog`}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div>By {post.author}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/10">
            <CardContent className="p-6 md:p-10">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-ul:marker:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-muted-foreground">Enjoyed this article? Share it with others!</p>
                  <div className="flex gap-3">
                    <Button onClick={handleShare} variant="outline" className="border-2">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Link to="/#calculator">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Anniversary
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link key={key} to={`/blog/${key}`}>
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-xs text-primary font-medium mb-2">{relatedPost.category}</div>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
