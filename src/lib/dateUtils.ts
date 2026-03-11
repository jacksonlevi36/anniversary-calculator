import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addYears,
  addMonths,
  isBefore,
  startOfDay,
} from 'date-fns';

export interface AnniversaryResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextAnniversary: {
    years: number;
    months: number;
    days: number;
    date: Date;
  };
}

export function calculateAnniversary(anniversaryDate: Date): AnniversaryResult {
  const today = startOfDay(new Date());
  const anniversary = startOfDay(anniversaryDate);

  // Calculate total time passed
  const years = differenceInYears(today, anniversary);
  const months = differenceInMonths(today, anniversary);
  const totalDays = differenceInDays(today, anniversary);

  // Get anniversary date components
  const currentYear = today.getFullYear();
  const anniversaryMonth = anniversary.getMonth();
  const anniversaryDay = anniversary.getDate();

  // Calculate next anniversary
  let nextAnniversaryYear = currentYear;
  let nextAnniversaryDate = new Date(currentYear, anniversaryMonth, anniversaryDay);

  if (isBefore(nextAnniversaryDate, today) || nextAnniversaryDate.getTime() === today.getTime()) {
    nextAnniversaryYear = currentYear + 1;
    nextAnniversaryDate = new Date(nextAnniversaryYear, anniversaryMonth, anniversaryDay);
  }

  // Calculate time until next anniversary
  const totalMonthsUntilNext = differenceInMonths(nextAnniversaryDate, today);
  const monthsUntilNext = totalMonthsUntilNext % 12;
  const yearsUntilNext = differenceInYears(nextAnniversaryDate, today);
  const dateAfterMonths = addMonths(today, totalMonthsUntilNext);
  const daysUntilNext = differenceInDays(nextAnniversaryDate, dateAfterMonths);

  // Remaining months and days
  const remainingMonths = months % 12;
  const lastMonthAnniversary = addMonths(addYears(anniversary, years), remainingMonths);
  const remainingDays = differenceInDays(today, lastMonthAnniversary);

  return {
    years,
    months: remainingMonths,
    days: remainingDays,
    totalDays,
    nextAnniversary: {
      years: yearsUntilNext,
      months: monthsUntilNext,
      days: daysUntilNext,
      date: nextAnniversaryDate,
    },
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getAnniversaryMessage(years: number): string {
  const messages: Record<number, string> = {
1:  'Happy Anniversary! A beautiful journey of love begins.',
2:  'Happy Anniversary! Stronger together every single day.',
3:  'Happy Anniversary! A bond built on trust and care.',
4:  'Happy Anniversary! Love that grows deeper with time.',
5:  'Happy Anniversary! A lifetime of smiles together.',
6:  'Happy Anniversary! Forever grateful for this love.',
7:  'Happy Anniversary! Together is the best place to be.',
8:  'Happy Anniversary! A story written with love.',
9:  'Happy Anniversary! Built on faith, respect, and devotion.',
10: 'Happy Anniversary! Celebrating a love that lasts!',
15: 'Happy Anniversary! Side by side through everything.',
20: 'Happy Anniversary! A promise kept every day.',
25: 'Happy Anniversary! Hearts united as one.',
30: 'Happy Anniversary! Love that stands the test of time.',
40: 'Happy Anniversary! A partnership full of grace.',
50: 'Happy Anniversary! Cherishing every shared moment!',
60: 'Happy Anniversary! A lifetime of beautiful memories.'
  };

  return messages[years] || `Happy ${years}th Anniversary! Celebrating your beautiful journey of love.`;
}

export function getTraditionalGift(years: number): string {
  const gifts: Record<number, string> = {
    1: 'Paper',
    2: 'Cotton',
    3: 'Leather',
    4: 'Linen',
    5: 'Wood',
    6: 'Iron',
    7: 'Wool',
    8: 'Bronze',
    9: 'Pottery',
    10: 'Tin',
    11: 'Steel',
    12: 'Silk',
    13: 'Lace',
    14: 'Ivory',
    15: 'Crystal',
    20: 'China',
    25: 'Silver',
    30: 'Pearl',
    35: 'Coral',
    40: 'Ruby',
    45: 'Sapphire',
    50: 'Gold',
    55: 'Emerald',
    60: 'Diamond',
  };

  return gifts[years] || 'Love';
}
