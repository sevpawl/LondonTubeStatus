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

// status map keyed by TfL API severity codes (0-20)

const statusMap = {
  0: {
    name: 'special service',
    bgColor: 'bg-purple-200',
    icon: Clock,
    iconColor: 'text-purple-600',
  },
  1: {
    name: 'closed',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  2: {
    name: 'suspended',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  3: {
    name: 'part suspended',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  4: {
    name: 'planned closure',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  5: {
    name: 'part closure',
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
  },
  6: {
    name: 'severe delays',
    bgColor: 'bg-red-200',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
  },
  7: {
    name: 'reduced service',
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
  },
  8: {
    name: 'bus service',
    bgColor: 'bg-yellow-200',
    icon: Bus,
    iconColor: 'text-yellow-600',
  },
  9: {
    name: 'minor delays',
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
  },
  10: {
    name: 'good service',
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
  },
  11: {
    name: 'part closed',
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
  },
  12: {
    name: 'exit only',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  13: {
  name: 'no step free access',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  14: {
    name: 'change of frequency',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  15: {
    name: 'diverted',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  16: {
    name: 'not running',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  17: {
    name: 'issues reported',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  18: {
    name: 'no issues',
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
  },
  19: {
    name: 'information',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  20: {
    name: 'service closed',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
};

export { statusColors, lineColors, statusMap };
