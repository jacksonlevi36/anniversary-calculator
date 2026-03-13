import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Heart, CalendarIcon, RotateCcw, Copy, Share2, Sparkles } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { calculateAnniversary, formatDate, getAnniversaryMessage, type AnniversaryResult } from '@/lib/dateUtils';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';

export default function AnniversaryCalculator() {
  const [husbandName, setHusbandName] = useState('');
  const [wifeName, setWifeName] = useState('');
  const [date, setDate] = useState<Date>();
  const [result, setResult] = useState<AnniversaryResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
    if (result !== null && resultRef.current) {
      // 1. Auto-Scroll
      resultRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });

      // 2. Celebration (Confetti)
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result]);
  const handleCalculate = () => {
    if (!date || !husbandName.trim() || !wifeName.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for animation
    setTimeout(() => {
      const calculation = calculateAnniversary(date);
      setResult(calculation);
      setIsCalculating(false);
      toast.success('Anniversary calculated successfully!');
    }, 800);
  };

  const handleReset = () => {
    setHusbandName('');
    setWifeName('');
    setDate(undefined);
    setResult(null);
    toast.info('Form reset successfully');
  };

  const handleCopyResult = () => {
    if (!result || !date) return;
    
    const text = `💕 Anniversary Calculation for ${husbandName} & ${wifeName} 💕

📅 Anniversary Date: ${formatDate(date)}
⏰ Time Together: ${result.years} years, ${result.months} months, ${result.days} days
📈 Total Days: ${result.totalDays.toLocaleString()} days
🎉 Next Anniversary: In ${result.nextAnniversary.years} years, ${result.nextAnniversary.months} months, ${result.nextAnniversary.days} days

${getAnniversaryMessage(result.years)}

Calculated with Anniversary Calculator
    `.trim();
    
    navigator.clipboard.writeText(text);
    toast.success('Result copied to clipboard!');
  };

  const handleShare = async () => {
    if (!result) return;
    
    const shareData = {
      title: 'Our Anniversary Calculation',
      text: `${husbandName} & ${wifeName} have been together for ${result.years} years, ${result.months} months, and ${result.days} days!`,
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
      handleCopyResult();
    }
  };

  const handleDownloadResult = async () => {
  if (!resultRef.current) return;

  const actionButtons = document.getElementById('action-buttons');
  if (actionButtons) {
    actionButtons.style.display = 'none';
  }

  try {
    const canvas = await html2canvas(resultRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    const link = document.createElement('a');
    link.download = `anniversary-calculation-${husbandName}-${wifeName}.png`;
    link.href = canvas.toDataURL();
    link.click();

    toast.success('Result downloaded!');
  } catch {
    toast.error('Failed to download result');
  } finally {
    if (actionButtons) {
      actionButtons.style.display = 'flex';
    }
  }
};

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Card */}
      <Card className="overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Husband Name */}
            <div className="space-y-2">
              <Label htmlFor="husbandName" className="text-base font-medium flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Husband's Name
              </Label>
              <Input
                id="husbandName"
                placeholder="Enter husband's name"
                value={husbandName}
                onChange={(e) => setHusbandName(e.target.value)}
                className="h-12 text-lg border-2 focus:border-primary transition-colors"
              />
            </div>

            {/* Wife Name */}
            <div className="space-y-2">
              <Label htmlFor="wifeName" className="text-base font-medium flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Wife's Name
              </Label>
              <Input
                id="wifeName"
                placeholder="Enter wife's name"
                value={wifeName}
                onChange={(e) => setWifeName(e.target.value)}
                className="h-12 text-lg border-2 focus:border-primary transition-colors"
              />
            </div>

            {/* Anniversary Date */}
            <div className="space-y-2 md:col-span-2">
              <Label className="text-base font-medium flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                Anniversary Date
              </Label>
<Input
  type="text"
  inputMode="numeric"
  placeholder="MM/DD/YYYY"
  maxLength={10}
  value={date ? format(date, 'MM/dd/yyyy') : ''}
  onChange={(e) => {
    let val = e.target.value.replace(/\D/g, ""); // Sirf numbers rakho
    if (val.length > 2 && val.length <= 4) {
      val = val.slice(0, 2) + "/" + val.slice(2);
    } else if (val.length > 4) {
      val = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4, 10);
    }
    
    // UI update karne ke liye value set karein
    e.target.value = val;

    // Agar date mukammal hai (10 characters), toh state update karein
    if (val.length === 10) {
      const parsedDate = new Date(val);
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate);
      }
    } else if (val.length === 0) {
      setDate(undefined);
    }
  }}
  className="w-full h-12 text-lg border-2"
/>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="flex-1 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isCalculating ? (
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Heart className="mr-2 h-5 w-5" />
              )}
              {isCalculating ? 'Calculating Love...' : 'Calculate Anniversary'}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="h-14 px-6 border-2 hover:bg-muted transition-colors"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div ref={resultRef} className="mt-20 space-y-6 pt-24">
          {/* Main Result Card */}
          <Card className="overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {husbandName} <span className="text-primary">&</span> {wifeName}
                </h3>
                <p className="text-muted-foreground">
                  Celebrating their love since {date && formatDate(date)}
                </p>
              </div>

              {/* Time Together Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-background/80 border border-primary/20">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{result.years}</div>
                  <div className="text-sm text-muted-foreground mt-1">Years</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/80 border border-primary/20">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{result.months}</div>
                  <div className="text-sm text-muted-foreground mt-1">Months</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/80 border border-primary/20">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{result.days}</div>
                  <div className="text-sm text-muted-foreground mt-1">Days</div>
                </div>
              </div>

              {/* Total Days */}
              <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                <div className="text-lg text-muted-foreground mb-1">Total Days Together</div>
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {result.totalDays.toLocaleString()}
                </div>
              </div>

              {/* Next Anniversary */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Next Anniversary In</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{result.nextAnniversary.years}</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{result.nextAnniversary.months}</div>
                    <div className="text-xs text-muted-foreground">Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{result.nextAnniversary.days}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  On {formatDate(result.nextAnniversary.date)}
                </div>
              </div>

              {/* Anniversary Message */}
              <div className="mt-6 p-6 rounded-xl bg-background border-2 border-primary/20 text-center">
                <p className="text-lg md:text-xl font-medium text-foreground italic">
                  "{getAnniversaryMessage(result.years)}"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div id="action-buttons" className="flex flex-wrap gap-3 justify-center">
            <Button onClick={handleCopyResult} variant="outline" className="border-2">
              <Copy className="mr-2 h-4 w-4" />
              Copy Result
            </Button>
            <Button onClick={handleShare} variant="outline" className="border-2">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={handleDownloadResult} variant="outline" className="border-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Download Result
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
