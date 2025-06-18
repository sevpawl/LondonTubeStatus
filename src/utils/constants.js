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
    name: 'Special Service',
    bgColor: 'bg-purple-200',
    icon: Clock,
    iconColor: 'text-purple-600',
  },
  1: {
    name: 'Closed',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  2: {
    name: 'Suspended',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  3: {
    name: 'Part Suspended',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  4: {
    name: 'Planned Closure',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  5: {
    name: 'Part Closure',
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
  },
  6: {
    name: 'Severe Delays',
    bgColor: 'bg-red-200',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
  },
  7: {
    name: 'Reduced Service',
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
  },
  8: {
    name: 'Bus Service',
    bgColor: 'bg-yellow-200',
    icon: Bus,
    iconColor: 'text-yellow-600',
  },
  9: {
    name: 'Minor Delays',
    bgColor: 'bg-yellow-200',
    icon: Hourglass,
    iconColor: 'text-yellow-600',
  },
  10: {
    name: 'Good Service',
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
  },
  11: {
    name: 'Part Closed',
    bgColor: 'bg-orange-200',
    icon: Construction,
    iconColor: 'text-orange-600',
  },
  12: {
    name: 'Exit Only',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  13: {
    name: 'No Step Free Access',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
  14: {
    name: 'Change of Frequency',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  15: {
    name: 'Diverted',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  16: {
    name: 'Not Running',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  17: {
    name: 'Issues Reported',
    bgColor: 'bg-gray-300',
    icon: Hammer,
    iconColor: 'text-gray-700',
  },
  18: {
    name: 'No Issues',
    bgColor: 'bg-green-200',
    icon: ThumbsUp,
    iconColor: 'text-green-600',
  },
  19: {
    name: 'Information',
    bgColor: 'bg-blue-200',
    icon: Hammer,
    iconColor: 'text-blue-600',
  },
  20: {
    name: 'Service Closed',
    bgColor: 'bg-gray-300',
    icon: Ban,
    iconColor: 'text-gray-700',
  },
};

export { statusColors, lineColors, statusMap };
