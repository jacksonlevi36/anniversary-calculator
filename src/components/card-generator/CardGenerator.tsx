import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import { getAnniversaryMessage, formatDate } from '@/lib/dateUtils';
import type { AnniversaryResult } from '@/lib/dateUtils';

interface CardGeneratorProps {
  husbandName: string;
  wifeName: string;
  anniversaryDate: Date;
  result: AnniversaryResult;
}

const cardTemplates = [
  { id: 1, name: 'Pink Roses', image: '/card-template-1.jpg' },
  { id: 2, name: 'Blush Peonies', image: '/card-template-2.jpg' },
  { id: 3, name: 'Floral Wreath', image: '/card-template-3.jpg' },
  { id: 4, name: 'Romantic Bouquet', image: '/card-template-4.jpg' },
];

export default function CardGenerator({ husbandName, wifeName, anniversaryDate, result }: CardGeneratorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrevTemplate = () => {
    setSelectedTemplate((prev) => (prev === 0 ? cardTemplates.length - 1 : prev - 1));
  };

  const handleNextTemplate = () => {
    setSelectedTemplate((prev) => (prev === cardTemplates.length - 1 ? 0 : prev + 1));
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    setIsGenerating(true);
    toast.info('Generating your anniversary card...');
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `anniversary-card-${husbandName}-${wifeName}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      
      toast.success('Anniversary card downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate card. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const currentTemplate = cardTemplates[selectedTemplate];
  const message = getAnniversaryMessage(result.years);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Template Selector */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center text-foreground">Choose Your Card Design</h3>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevTemplate}
            className="rounded-full border-2 hover:bg-primary/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {cardTemplates.map((template, index) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedTemplate === index
                    ? 'border-primary ring-2 ring-primary/30 scale-110'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextTemplate}
            className="rounded-full border-2 hover:bg-primary/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Selected: <span className="font-medium text-primary">{currentTemplate.name}</span>
        </p>
      </div>

      {/* Card Preview */}
      <div className="flex justify-center">
        <div className="relative">
          {/* The Actual Card */}
          <div
            ref={cardRef}
            className="relative w-[360px] h-[360px] md:w-[540px] md:h-[540px] overflow-hidden rounded-lg shadow-2xl"
            style={{
              backgroundImage: `url(${currentTemplate.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Card Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
              {/* Names */}
              <div className="mb-4 md:mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 drop-shadow-sm">
                  {husbandName}
                </h2>
                <div className="my-1 md:my-2">
                  <span className="text-lg md:text-2xl text-primary font-semibold">&</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 drop-shadow-sm">
                  {wifeName}
                </h2>
              </div>

              {/* Anniversary Info */}
              <div className="mb-4 md:mb-6">
                <p className="text-sm md:text-lg text-gray-600 mb-1">Celebrating</p>
                <p className="text-3xl md:text-5xl font-bold text-primary drop-shadow-sm">
                  {result.years}
                </p>
                <p className="text-lg md:text-2xl text-gray-700 font-medium">
                  Wonderful Years
                </p>
              </div>

              {/* Date */}
              <div className="mb-4 md:mb-6">
                <p className="text-xs md:text-sm text-gray-500">
                  Since {formatDate(anniversaryDate)}
                </p>
              </div>

              {/* Message */}
              <div className="max-w-[280px] md:max-w-[400px]">
                <p className="text-xs md:text-base text-gray-700 italic leading-relaxed">
                  "{message}"
                </p>
              </div>

              {/* Footer */}
              <div className="absolute bottom-4 md:bottom-6">
                <p className="text-[10px] md:text-xs text-gray-400">
                  Made with ♥ at AnniversaryCalculator.com
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse" />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-secondary rounded-full animate-pulse delay-300" />
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleDownload}
          disabled={isGenerating}
          className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isGenerating ? (
            <Sparkles className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Download className="mr-2 h-5 w-5" />
          )}
          {isGenerating ? 'Generating Card...' : 'Download Anniversary Card'}
        </Button>
      </div>

      {/* Card Info */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Perfect size for sharing on social media (1080×1080)</p>
      </div>
    </div>
  );
}
