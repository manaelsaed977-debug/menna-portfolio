export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  targetIndustry: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  category: 'Anomaly Detection' | 'Predictive Maintenance' | 'Drilling Optimization' | 'HSE Safety';
  featured: boolean;
  demoData?: {
    anomalyType: string;
    sampleTelemetry: { [key: string]: number };
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  karatePrinciple: string;
}

export interface ToolItem {
  name: string;
  category: 'AI & Machine Learning' | 'Industrial Systems & IoT' | 'Core Engineering' | 'Data Infrastructure';
  level: string;
  desc: string;
  iconName: string;
}

export interface MetricStat {
  value: string;
  label: string;
  detail: string;
}
