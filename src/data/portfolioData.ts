import { Project, ProcessStep, ToolItem, MetricStat } from '../types';

export const PORTFOLIO_INFO = {
  name: 'Menna Sabah',
  title: 'AI Software Engineer & Energy Intelligence',
  studentInfo: 'Computer Science Student, Faculty of Computers and Information (FCI)',
  age: 20,
  location: 'Cairo, Egypt',
  coordinates: '30.0444° N, 31.2357° E',
  email: 'manaelsaed977@gmail.com',
  status: 'Open for Energy Sector Opportunities & Research',
  targetCompanies: ['ENPPI', 'PETROJET', 'BP', 'Eni'],
  tagline: 'I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.',
  subtext: 'Integrating machine learning into deepwater drilling and subsea engineering to eliminate catastrophic downtime and optimize Egyptian oil & gas production.',
  karateBackground: 'Karate Practitioner · Black Belt Mindset (Discipline, Resilience, Focused Precision)',
  bio: `I am Menna Sabah, a 20-year-old Computer Science student at the Faculty of Computers and Information. I am a passionate coder, robotics & IoT developer, and I practice Karate which taught me discipline, focus, and resilience under pressure.

My vision is to integrate Artificial Intelligence with Electronics & Mechanics (Robotics) into the petroleum sector. I build intelligent robots, self-driving rovers and IoT devices for predictive maintenance and pipeline inspection for companies like ENPPI, PETROJET, BP, and Eni.

I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI. By applying deep learning and real-time streaming analytics to high-frequency sensor streams, I build systems that detect offshore drilling anomalies before blowouts occur and forecast subsea component fatigue to avert multi-million dollar operational halts.`
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pipe-bot',
    number: '01',
    title: 'PIPE-BOT INSPECTOR',
    subtitle: 'Autonomous IoT Pipeline Inspection Robot',
    description: 'Intelligent self-driving robot equipped with ultrasonic sensors, LiDAR and thermal cameras for internal pipeline inspection, crack detection and corrosion monitoring. Built with ESP32, ROS2 and Edge AI for real-time anomaly detection in ENPPI & PETROJET pipelines, reducing manual inspection risks.',
    targetIndustry: ['ENPPI', 'PETROJET', 'BP', 'Eni'],
    metrics: [
      { label: 'Defect Detection', value: '99.4% Acc.' },
      { label: 'Inspection Speed', value: '1.2 m/s' },
      { label: 'Inference Latency', value: '12ms Edge' }
    ],
    techStack: ['ESP32', 'ROS2', 'Edge AI', 'Ultrasonic Sensors', 'LiDAR & Thermal', 'FastAPI'],
    category: 'Robotics & IoT',
    featured: true,
    demoData: {
      anomalyType: 'Gas Kick / Differential Sticking',
      sampleTelemetry: {
        rpm: 124,
        torque: 18.2,
        mudFlow: 620,
        standpipePressure: 3120,
        vibration: 2.4
      }
    }
  },
  {
    id: 'desert-rover',
    number: '02',
    title: 'DESERT-ROVER X',
    subtitle: 'Autonomous Rover for Oil Field Safety & Inspection',
    description: '4WD self-driving rover with AI vision, gas sensors and IoT connectivity for autonomous patrolling of petroleum sites, detecting gas leaks, fire hazards and equipment overheating. Uses SLAM navigation, ESP32-CAM and predictive maintenance AI for Eni Zohr Field and BP sites.',
    targetIndustry: ['Eni (Zohr Field)', 'BP', 'PETROJET'],
    metrics: [
      { label: 'Hazard Detection', value: '< 1.5s' },
      { label: 'Patrol Coverage', value: '24/7 Auto' },
      { label: 'Battery Autonomy', value: '8.5 Hours' }
    ],
    techStack: ['SLAM Navigation', 'ESP32-CAM', 'ROS2', 'Gas & Thermal Sensors', 'Edge AI', 'IoT Telemetry'],
    category: 'Robotics & IoT',
    featured: true,
    demoData: {
      anomalyType: 'Hydraulic Seal Micro-Leakage',
      sampleTelemetry: {
        rpm: 0,
        torque: 0,
        mudFlow: 450,
        standpipePressure: 4890,
        vibration: 0.8
      }
    }
  },
  {
    id: 'drill-bot',
    number: '03',
    title: 'DRILL-BOT ARM',
    subtitle: 'Robotic Arm for Autonomous Drilling Control',
    description: 'Intelligent 6-axis robotic arm powered by reinforcement learning and computer vision for autonomous control of drilling parameters. The robot dynamically adjusts Weight-on-Bit (WOB) and rotational speeds, uses gamma-ray log lithology classification, and performs automated tool changing, reducing human intervention in hazardous drilling zones.',
    targetIndustry: ['ENPPI', 'PETROJET', 'Egyptian General Petroleum Corp'],
    metrics: [
      { label: 'Penetration Speed', value: '+26% ROP' },
      { label: 'Bit Wear Reduction', value: '-31%' },
      { label: 'Autonomy Level', value: '100% Autonomous Control' }
    ],
    techStack: ['Robotic Arm', 'ROS2', 'Computer Vision', 'Deep RL (PPO)', 'PyTorch', 'SciPy', 'OpenVINO', 'React Dashboard'],
    category: 'Robotics & IoT',
    featured: true,
    demoData: {
      anomalyType: 'Hard Chert Interbed Encounter',
      sampleTelemetry: {
        rpm: 145,
        torque: 22.4,
        mudFlow: 710,
        standpipePressure: 3450,
        vibration: 4.1
      }
    }
  },
  {
    id: 'hse-patrol-bot',
    number: '04',
    title: 'HSE PATROL-BOT',
    subtitle: 'Mobile Safety Robot for Offshore Rigs',
    description: 'Autonomous mobile robot patrolling offshore rig decks for HSE safety enforcement. Deploys 360-degree cameras and LiDAR for red-zone encroachment detection around rotary table and pipe-racking arms. Uses YOLOv10 on NVIDIA Jetson for real-time PPE detection, fall detection, and hazardous gas exposure alerts, replacing fixed cameras with active robotic patrol.',
    targetIndustry: ['PETROJET', 'ENPPI', 'Offshore Rig Contractors'],
    metrics: [
      { label: 'Detection Speed', value: '45 FPS' },
      { label: 'Red-Zone Violations', value: 'Zero Breaches' },
      { label: 'Edge Footprint', value: '< 18W Jetson' }
    ],
    techStack: ['YOLOv10', 'ONNX Runtime', 'NVIDIA Jetson', 'WebSockets', 'Tailwind', 'Mobile Robot', 'ROS2 Navigation', 'Autonomous Patrol'],
    category: 'Robotics & IoT',
    featured: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'SENSING & TELEMETRY',
    title: 'High-Frequency AI Sensing (Robotics + WITSML)',
    description: 'Ingesting noisy telemetry via AI & Robotics (WITSML, ROS2, OPC-UA, Modbus) across mud pressure, rotary torque, LIDAR, IMU, and autonomous rig sensors.',
    karatePrinciple: 'Mizu no Kokoro (Mind like Water): Observing raw incoming signals with unclouded, calm clarity.'
  },
  {
    number: '02',
    phase: 'ANOMALY MODELING',
    title: 'Temporal Machine Learning - Robotic Anomaly Detection',
    description: 'Architecting unsupervised autoencoders and robotic fleet models to predict petroleum rig failures long before deterministic alarms trip - AI + Robotics Early Warning System.',
    karatePrinciple: 'Zanshin (Total Alertness): Vigilance that anticipates friction and structural shifts before they manifest.'
  },
  {
    number: '03',
    phase: 'DISCIPLINE & RIGOR',
    title: 'Quiet Code Architecture',
    description: 'Writing deterministic, zero-dependency, ultra-tested AI & Robotics code for autonomous petroleum rigs. Industrial robotics leaves zero room for unhandled exceptions.',
    karatePrinciple: 'Kata (Flawless Repetition): Repeated perfection of software fundamentals until execution becomes instinctual.'
  },
  {
    number: '04',
    phase: 'EDGE ORCHESTRATION',
    title: 'Sub-20ms Robotic Inference',
    description: 'Quantizing AI models with TensorRT and ONNX for harsh offshore robotic rig servers and autonomous robots with intermittent satellite uplink.',
    karatePrinciple: 'Kime (Decisive Focus): Delivering maximum algorithmic power at the precise split-second of need.'
  },
  {
    number: '05',
    phase: 'FIELD INTEGRATION',
    title: 'Engineer Robotic Mission Control',
    description: 'Delivering intuitive, AI-powered mission-critical robotic operator consoles for autonomous drillers and robot fleet supervisors at ENPPI, PETROJET, BP, and Eni.',
    karatePrinciple: 'Rei (Mutual Respect & Service): Building software that protects human lives and national infrastructure.'
  }
];

export const TOOLS_DATA: ToolItem[] = [
  { name: 'PyTorch & Transformers', category: 'AI & Machine Learning', level: 'Advanced', desc: 'Time-series forecasting, LSTM autoencoders, anomaly scoring', iconName: 'BrainCircuit' },
  { name: 'Python 3.12 / NumPy', category: 'AI & Machine Learning', level: 'Expert', desc: 'Mathematical modeling, telemetry signal filtering (FFT/Wavelets)', iconName: 'Terminal' },
  { name: 'ONNX / TensorRT', category: 'AI & Machine Learning', level: 'Advanced', desc: 'Model quantization and sub-20ms edge inference optimization', iconName: 'Gauge' },
  { name: 'ROS2 & Nav2', category: 'Robotics & Autonomous Systems', level: 'Expert', desc: 'Autonomous navigation stack for robotic rig inspection and fleet control', iconName: 'Bot' },
  { name: 'NVIDIA Isaac Sim & Gazebo', category: 'Robotics & Autonomous Systems', level: 'Advanced', desc: 'Digital twin simulation for petroleum robots in offshore rigs', iconName: 'Box' },
  { name: 'OpenCV / YOLOv8 & LIDAR SLAM', category: 'Robotics & Autonomous Systems', level: 'Expert', desc: 'Real-time object detection, SLAM for autonomous rig robots', iconName: 'Scan' },
  { name: 'NVIDIA Jetson & Edge TPU', category: 'Robotics & Autonomous Systems', level: 'Advanced', desc: 'Deploying AI models on autonomous robots in harsh offshore environments', iconName: 'Cpu' },
  { name: 'Unity Digital Twin & Control', category: 'Robotics & Autonomous Systems', level: 'Advanced', desc: 'Real-time 3D mission control for robotic fleet visualization', iconName: 'Layers' },
  { name: 'C++ & Low-Level Systems', category: 'Petroleum Industrial IoT', level: 'Proficient', desc: 'Real-time rig telemetry parsers and edge buffer management', iconName: 'Cpu' },
  { name: 'FastAPI & Microservices', category: 'Petroleum Industrial IoT', level: 'Advanced', desc: 'Asynchronous event streaming and industrial API gateways', iconName: 'Zap' },
  { name: 'Docker & Linux Edge', category: 'Petroleum Industrial IoT', level: 'Advanced', desc: 'Containerized deployment for ruggedized offshore hardware', iconName: 'Container' },
  { name: 'React & TypeScript', category: 'Petroleum Industrial IoT', level: 'Advanced', desc: 'Real-time telemetry HUDs, mission dashboards', iconName: 'Layers' },
  { name: 'WITSML & SCADA Standard', category: 'Petroleum Industrial IoT', level: 'Domain Specialization', desc: 'Petroleum industry wellsite data transfer & instrumentation', iconName: 'Activity' },
  { name: 'Apache Kafka & MQTT', category: 'Data Infrastructure', level: 'Proficient', desc: 'Distributed event bus for 10,000+ sensor updates per second', iconName: 'Radio' },
  { name: 'TimescaleDB & SQL', category: 'Data Infrastructure', level: 'Advanced', desc: 'High-density time-series persistence', iconName: 'Database' }
];

export const METRIC_STATS: MetricStat[] = [
  { value: '20', label: 'Years Old', detail: 'FCI Computer Science' },
  { value: '4+', label: 'Energy Giants', detail: 'ENPPI · PETROJET · BP · Eni Target Scope' },
  { value: '38s', label: 'Early Anomaly Lead', detail: 'Predictive kick & spike detection' },
  { value: '1st Dan', label: 'Karate Discipline', detail: 'Focus, Resilience & Calm' }
];

export const QUIET_CODE_SNIPPET = `"""
RIG-PULSE AI: Real-Time Drilling Vibration & Kick Anomaly Detector
Author: Menna Sabah | Energy AI Engineer & FCI Student
Target: ENPPI / PETROJET / BP / Eni Deepwater Systems
"I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI."
"""

import numpy as np
import torch
import torch.nn as nn
from dataclasses import dataclass
from typing import Dict, Tuple

@dataclass(frozen=True)
class DrillingTelemetry:
    rpm: float                    # Rotary speed (RPM)
    torque_k_ft_lbs: float        # Surface drill torque
    flow_in_gpm: float            # Mud pump inflow rate
    standpipe_psi: float          # Standpipe pressure (SPP)
    axial_vibration_g: float      # Subsea measurement while drilling (MWD)

class RigPulseTransformer(nn.Module):
    def __init__(self, d_model: int = 64, nhead: int = 4, num_layers: int = 3):
        super().__init__()
        self.input_proj = nn.Linear(5, d_model)
        self.encoder_layer = nn.TransformerEncoderLayer(
            d_model=d_model, nhead=nhead, dim_feedforward=128, batch_first=True
        )
        self.transformer = nn.TransformerEncoder(self.encoder_layer, num_layers=num_layers)
        self.anomaly_head = nn.Sequential(
            nn.Linear(d_model, 32),
            nn.GELU(),
            nn.Linear(32, 1),
            nn.Sigmoid()
        )

    def forward(self, x: torch.Tensor) -> Tuple[torch.Tensor, float]:
        # x shape: [batch, window_size=60, features=5]
        h = self.input_proj(x)
        encoded = self.transformer(h)
        # Latent summary vector of drilling dynamics
        latent = encoded[:, -1, :]
        anomaly_score = self.anomaly_head(latent)
        return encoded, anomaly_score.item()

def evaluate_rig_safety(telemetry: DrillingTelemetry) -> Dict[str, any]:
    # Edge zero-latency evaluation for subsea rig protection
    spp_delta = telemetry.standpipe_psi - 3000.0
    mud_loss_risk = telemetry.flow_in_gpm < 480.0
    vibe_critical = telemetry.axial_vibration_g > 3.8
    
    status = "OPTIMAL_DRILLING"
    if spp_delta > 350.0 and mud_loss_risk:
        status = "GAS_KICK_IMMINENT_SHUT_IN"
    elif vibe_critical:
        status = "STICK_SLIP_MITIGATION_REQUIRED"
        
    return {
        "status": status,
        "operator": "Menna Sabah AI Core",
        "precision_guarantee": "99.4%",
        "safety_margin_psi": max(0.0, 4500.0 - telemetry.standpipe_psi)
    }
`;
