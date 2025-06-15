import {
  AlertTriangle,
  Ban,
  ThumbsUp,
  Construction,
  Hourglass,
  Hammer,
} from 'lucide-react';

// status indicator colors

const statusColors = {
  goodService: 'bg-green-500',
  minorDelays: 'bg-yellow-300',
  severeDelays: 'bg-red-500',
  partClosure: 'bg-red-600',
  planned: 'bg-purple-500',
  suspended: 'bg-black',
};

// line colors

const lineColors = {
  bakerloo: 'bg-[#b44a0b]',
  central: 'bg-[#e02b24]',
  circle: 'bg-[#ffcc00]',
  district: 'bg-[#008039]',
  elizabeth: 'bg-[#7055a6]',
  hammersmithCity: 'bg-[#d79caf]',
  jubilee: 'bg-[#9ea7aa]',
  metropolitan: 'bg-[#a10060]',
  northern: 'bg-[#1a1a1a]',
  overground: 'bg-[#f17a10]',
  piccadilly: 'bg-[#003b8f]',
  victoria: 'bg-[#00a3e0]',
  waterlooCity: 'bg-[#99d1bf]',
};

// status map to combine status type, color, icon, icon color

const statusMap = {
  'good service': {
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
  },
  'minor delays': {
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
  },
  'severe delays': {
    bgColor: 'bg-red-200',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
  },
  'part closure': {
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
  },
  'planned': { 
    bgColor: 'bg-blue-200', 
    icon: Hammer, 
    iconColor: 'text-blue-600'
   },
    'suspended': { 
      bgColor: 'bg-gray-300', 
      icon: Ban, 
      iconColor: 'text-gray-700'
   },
};

export { statusColors, lineColors, statusMap };
