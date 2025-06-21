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

// tube lines configuration (excluding elizabeth and overground - different API endpoints)
const tubeLines = [
  { id: 'bakerloo', name: 'bakerloo', color: '#b44a0b' },
  { id: 'central', name: 'central', color: '#e02b24' },
  { id: 'circle', name: 'circle', color: '#ffcc00' },
  { id: 'district', name: 'district', color: '#008039' },
  { id: 'hammersmith-city', name: 'hammersmith & city', color: '#d79caf' },
  { id: 'jubilee', name: 'jubilee', color: '#9ea7aa' },
  { id: 'metropolitan', name: 'metropolitan', color: '#a10060' },
  { id: 'northern', name: 'northern', color: '#1a1a1a' },
  { id: 'piccadilly', name: 'piccadilly', color: '#003b8f' },
  { id: 'victoria', name: 'victoria', color: '#00a3e0' },
  { id: 'waterloo-city', name: 'waterloo & city', color: '#99d1bf' },
];

// helper to get line color by id
const getLineColor = (lineId) => {
  const line = tubeLines.find((l) => l.id === lineId);
  return line ? line.color : '#808080'; // fallback to gray
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

export { statusColors, statusMap, tubeLines, getLineColor };
