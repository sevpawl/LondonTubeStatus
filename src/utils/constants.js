import {
  AlertTriangle,
  Ban,
  ThumbsUp,
  Construction,
  Hourglass,
  Hammer,
  Clock,
  Bus,
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

// status map to combine status type by number, color, icon, icon color

const statusMap = {
  'special service': {
    bgColor: 'bg-purple-200',
    icon: Clock,
    iconColor: 'text-purple-600',
    statusLevel: 0,
  },
  closed: {
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
    statusLevel: 1,
  },
  suspended: {
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
    statusLevel: 2,
  },
  'part suspended': {
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
    statusLevel: 3,
  },
  'planned closure': {
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
    statusLevel: 4,
  },
  'part closure': {
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
    statusLevel: 5,
  },
  'severe delays': {
    bgColor: 'bg-red-200',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
    statusLevel: 6,
  },
  'reduced service': {
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
    statusLevel: 7,
  },
  'bus service': {
    bgColor: 'bg-yellow-200',
    icon: Bus,
    iconColor: 'text-yellow-600',
    statusLevel: 8,
  },
  'minor delays': {
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
    statusLevel: 9,
  },
  'good service': {
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
    statusLevel: 10,
  },
  'part closed': {
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
    statusLevel: 11,
  },
  'exit only': {
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
    statusLevel: 12,
  },
  'no step free access': {
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
    statusLevel: 13,
  },
  'change of frequency': {
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
    statusLevel: 14,
  },
  diverted: {
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
    statusLevel: 15,
  },
  'not running': {
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
    statusLevel: 16,
  },
  'issues reported': {
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
    statusLevel: 17,
  },
  'no issues': {
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
    statusLevel: 18,
  },
  information: {
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
    statusLevel: 19,
  },
  'service closed': {
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
    statusLevel: 20,
  },
};

export { statusColors, lineColors, statusMap };
