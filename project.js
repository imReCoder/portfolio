const projects = {
  alu: {
    title: 'Obfuscated 32-Bit ALU',
    subtitle: 'VLSI Design — Academic Project',
    image: 'images/project-stadia.png',
    sections: ['Overview', 'Highlights', 'Technical Details', 'Methodology', 'Tools & Technologies'],
    role: 'Lead Designer',
    roleDesc: 'Architecture Design, Verilog HDL Implementation, Verification, Power Analysis',
    timeline: 'Academic Project',
    overview: 'Architected the implementation of logic obfuscation in Verilog HDL to enhance security while maintaining full functionality in a 32-bit ALU design. Utilized the Vedic multiplication algorithm to minimize power consumption and design complexity.',
    overviewExtra: 'Developed an optimized architecture for Binary-Coded Decimal (BCD) addition to enhance computational efficiency, combining security-focused obfuscation with high-performance arithmetic.',
    highlightIcon: '🔐',
    highlightLabel: 'The Vision',
    highlightText: 'A secure, power-efficient ALU architecture that uses logic obfuscation to protect intellectual property while maintaining full computational capability.',
    contextLabel: 'Technical Details',
    contextHeading: 'Security meets performance.',
    contextText: 'The project focused on implementing logic obfuscation techniques in a 32-bit ALU to prevent reverse engineering while preserving correct functionality. The Vedic multiplication approach significantly reduced gate count and power consumption compared to traditional multiplier implementations.',
    contextExtra: 'Binary-Coded Decimal addition was optimized using a novel carry-lookahead approach, enabling faster arithmetic operations while maintaining the obfuscation layer across all functional units.',
    techStack: ['Verilog HDL', 'Synopsys VCS', 'Xilinx Vivado', 'MATLAB', 'Static Timing Analysis', 'Design Rule Check', 'Logic Synthesis']
  },
  switch: {
    title: '4-Port Switch/Router',
    subtitle: 'RTL Design & Verification — Academic Project',
    image: 'images/project-testhub.png',
    sections: ['Overview', 'Highlights', 'Technical Details', 'Verification', 'Tools & Technologies'],
    role: 'RTL Design Engineer',
    roleDesc: 'RTL Implementation, UVM Testbench Development, STA Checks, Coverage Analysis',
    timeline: 'Academic Project',
    overview: 'Co-implemented a parameterized 4-port switching datapath with per-port FIFOs and store-and-forward capability, coordinating pipeline adjustments based on Static Timing Analysis checks.',
    overviewExtra: 'Built a UVM-style environment with constrained-random traffic, reporting coverage metrics and failures to speed debug cycles. Led verification efforts by integrating SVA assertions and Python-based log analysis.',
    highlightIcon: '🔀',
    highlightLabel: 'The Challenge',
    highlightText: 'Design a fully parameterized, verifiable 4-port network switch capable of handling concurrent traffic with deterministic latency and zero data loss.',
    contextLabel: 'Verification',
    contextHeading: 'Verification-driven design.',
    contextText: 'The verification strategy utilized constrained-random stimulus generation through a UVM-based testbench environment. Coverage metrics were tracked across functional, code, and assertion coverage to ensure comprehensive validation.',
    contextExtra: 'Python-based log analysis scripts were developed to parse simulation outputs, correlate events across ports, and generate regression reports ensuring consistent results across design iterations.',
    techStack: ['Verilog HDL', 'SystemVerilog', 'UVM', 'SVA Assertions', 'Python', 'Synopsys VCS', 'JasperGold']
  },
  pcie: {
    title: 'PCIe Transaction Layer',
    subtitle: 'Digital Design — Academic Project',
    image: 'images/project-cards.png',
    sections: ['Overview', 'Highlights', 'Technical Details', 'Architecture', 'Tools & Technologies'],
    role: 'Design Engineer',
    roleDesc: 'Endpoint Architecture, BAR0 Decode Logic, Credit Counter Implementation, Assertion-based Verification',
    timeline: 'Academic Project',
    overview: 'Contributed to the design of a PCIe Endpoint handling Memory Read/Write requests, BAR0 address decoding, credit counters, and up to eight outstanding reads with proper completions.',
    overviewExtra: 'Implemented BAR0 decode logic, outstanding read tracking, and credit counter updates in Verilog HDL, and added targeted assertions to support verification of the transaction layer protocol.',
    highlightIcon: '⚡',
    highlightLabel: 'The Goal',
    highlightText: 'Build a compliant PCIe Transaction Layer endpoint capable of handling memory-mapped I/O with efficient credit-based flow control.',
    contextLabel: 'Architecture',
    contextHeading: 'Protocol-compliant endpoint design.',
    contextText: 'The endpoint implements the PCIe Transaction Layer Protocol (TLP) for memory read and write operations. BAR0 address decoding maps incoming requests to the correct internal registers and memory regions.',
    contextExtra: 'Credit counters manage flow control between the endpoint and root complex, ensuring no buffer overflow conditions while maximizing throughput with support for up to eight outstanding read requests.',
    techStack: ['Verilog HDL', 'SystemVerilog Assertions', 'Synopsys VCS', 'Quartus Prime', 'Waveform Analysis', 'Protocol Verification']
  },
  irrigation: {
    title: 'Smart Drip Irrigation',
    subtitle: 'IoT — Academic Project, VIT-AP University',
    image: 'images/project-stadia.png',
    sections: ['Overview', 'Highlights', 'System Design', 'Sensors & Control', 'Tools & Technologies'],
    role: 'Project Lead',
    roleDesc: 'System Architecture, Arduino Programming, Sensor Integration, Mobile App Interface',
    timeline: 'Academic Project',
    overview: 'Designed and built an Arduino-based smart irrigation system that automates drip irrigation based on real-time humidity, temperature, and soil moisture sensor readings.',
    overviewExtra: 'The system monitors environmental conditions and waters plants only when needed, conserving water while ensuring optimal plant health. Sensor data is transmitted to a mobile interface for remote monitoring.',
    highlightIcon: '💧',
    highlightLabel: 'The Impact',
    highlightText: 'An intelligent irrigation system that conserves water by precisely controlling drip irrigation based on real-time environmental data — accessible from a mobile device.',
    contextLabel: 'System Design',
    contextHeading: 'Sensor-driven automation.',
    contextText: 'The Arduino-based controller reads humidity, temperature, and soil moisture sensors at configurable intervals. When readings fall below threshold values, the system activates solenoid valves to deliver precise amounts of water through the drip irrigation network.',
    contextExtra: 'Mobile connectivity allows farmers to monitor conditions remotely and adjust threshold parameters without physical access to the control unit, making the system practical for large-scale agricultural deployments.',
    techStack: ['Arduino', 'C/C++', 'DHT11 Sensor', 'Soil Moisture Sensor', 'Solenoid Valves', 'Mobile Interface', 'IoT Protocols']
  },
  vehicle: {
    title: 'Vehicle Speed Control',
    subtitle: 'Embedded Systems — Academic Project, VIT-AP University',
    image: 'images/project-testhub.png',
    sections: ['Overview', 'Highlights', 'Control System', 'Safety Features', 'Tools & Technologies'],
    role: 'Design Engineer',
    roleDesc: 'Embedded System Design, Speed Regulation Algorithm, Sensor Integration, Safety Logic',
    timeline: 'Academic Project',
    overview: 'Designed an embedded system to automatically control vehicle speed to prevent accidents. The system provides a way to regulate speed without harming others, removing the need for manual speed control during driving.',
    overviewExtra: 'The proposed work uses an embedded controller to continuously monitor vehicle speed and automatically apply braking when speeds exceed safe thresholds, particularly in accident-prone zones.',
    highlightIcon: '🚗',
    highlightLabel: 'The Problem',
    highlightText: 'Road accidents caused by overspeeding remain a leading cause of fatalities — this system aims to eliminate human error from speed regulation entirely.',
    contextLabel: 'Safety Features',
    contextHeading: 'Autonomous speed regulation.',
    contextText: 'The embedded controller interfaces with the vehicle\'s speedometer and braking system. Speed zones are pre-programmed or dynamically updated via GPS, and the system automatically adjusts throttle and braking to maintain safe speeds.',
    contextExtra: 'Fail-safe mechanisms ensure that the system degrades gracefully in case of sensor failures, always defaulting to a safe operating mode rather than losing control.',
    techStack: ['Embedded C', 'Microcontroller', 'Speed Sensors', 'GPS Module', 'Motor Control', 'Safety Logic', 'PCB Design']
  },
  insect: {
    title: 'Insect Detector & Agriculture',
    subtitle: 'Agriculture IoT — Academic Project, VIT-AP University',
    image: 'images/project-cards.png',
    sections: ['Overview', 'Highlights', 'Detection System', 'Solar Power', 'Tools & Technologies'],
    role: 'Project Lead',
    roleDesc: 'Detection System Design, Solar Power Integration, Mobile Alert System, Irrigation Control',
    timeline: 'Academic Project',
    overview: 'Built an agricultural monitoring system that detects insects or pests entering crop areas and sends mobile alerts. The system uses solar power as backup, enabling drip irrigation to water plants while maximizing power efficiency.',
    overviewExtra: 'The solar panel rotates according to the position of the sun to maximize energy harvest, making the project self-sustaining and ideal for remote agricultural deployments without reliable power infrastructure.',
    highlightIcon: '🌱',
    highlightLabel: 'Innovation',
    highlightText: 'A self-sustaining agricultural protection system combining solar-powered pest detection with automated irrigation — designed for rural deployments without grid power.',
    contextLabel: 'Solar Power',
    contextHeading: 'Sun-tracking energy system.',
    contextText: 'The solar panel is mounted on a servo-driven tracking system that follows the sun\'s position throughout the day, maximizing energy capture. The captured energy powers both the detection sensors and the irrigation control system.',
    contextExtra: 'A battery backup ensures continuous operation during cloudy conditions and nighttime, when pest activity may be highest. The system prioritizes critical functions (detection and alerts) when power reserves are low.',
    techStack: ['Arduino', 'Solar Panel', 'Servo Motors', 'IR Sensors', 'GSM Module', 'Battery Management', 'Drip Irrigation']
  }
};

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const p = projects[id];

if (!p) {
  document.getElementById('projContent').innerHTML =
    '<div class="proj-hero"><h1 class="proj-heading">Project Not Found</h1><p class="proj-sub">The requested project does not exist.</p></div>';
} else {
  document.title = `${p.title} — Moksha Vignan`;

  const sidebarNav = document.getElementById('sidebarNav');
  sidebarNav.innerHTML = p.sections
    .map((s, i) => `<button class="sidebar-link${i === 0 ? ' active' : ''}" data-sec="${s}">${s}</button>`)
    .join('');

  const techPillsUrl = p.techStack.map(t => `<li>${t}</li>`).join('');

  document.getElementById('projContent').innerHTML = `
      <div class="proj-hero">
        <h1 class="proj-heading">${p.title}</h1>
        <p class="proj-sub">${p.subtitle}</p>
      </div>

      <div class="proj-screenshot">
        <div class="mockup">
          <div class="win-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="mockup-bar">
            <div class="mockup-nav"><span>←</span> <span>→</span> <span>↻</span></div>
            <div class="mockup-url"></div>
            <div class="mockup-actions"><span>⊕</span> <span>⋮</span></div>
          </div>
          <div class="mockup-screen">
            <img src="${p.image}" alt="${p.title}">
          </div>
        </div>
      </div>

      <div class="section" id="sec-${p.sections[0]}">
        <div class="two-col">
          <div>
            <div class="meta-label">My Role</div>
            <div class="meta-value"><strong>${p.role}</strong> — ${p.roleDesc}</div>
            <div class="meta-label">Timeline & Status</div>
            <div class="meta-value">${p.timeline}</div>
          </div>
          <div>
            <div class="meta-label">${p.sections[0]}</div>
            <p class="sec-text">${p.overview}</p>
            <p class="sec-text">${p.overviewExtra}</p>
          </div>
        </div>
      </div>

      <div class="proj-sep"></div>

      <div class="callout" id="sec-${p.sections[1]}">
        <div class="callout-icon">${p.highlightIcon}</div>
        <div class="callout-label">${p.highlightLabel}</div>
        <p class="callout-text">${p.highlightText}</p>
      </div>

      <div class="section" id="sec-${p.sections[2]}">
        <div class="sec-tag">
          <span class="sec-dot"></span>
          <span class="sec-label">${p.contextLabel}</span>
        </div>
        <h2 class="sec-heading">${p.contextHeading}</h2>
        <p class="sec-text">${p.contextText}</p>
        <p class="sec-text">${p.contextExtra}</p>
      </div>

      <div class="proj-sep"></div>

      <div class="section" id="sec-${p.sections[p.sections.length - 1]}">
        <div class="sec-tag">
          <span class="sec-dot"></span>
          <span class="sec-label">Tools & Technologies</span>
        </div>
        <h2 class="sec-heading">Tech Stack</h2>
        <ul class="tech-list">${techPillsUrl}</ul>
      </div>
  `;

  sidebarNav.querySelectorAll('.sidebar-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(`sec-${btn.dataset.sec}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        sidebarNav.querySelectorAll('.sidebar-link').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', () => {
    const parts = document.querySelectorAll('[id^="sec-"]');
    let current = '';
    parts.forEach(part => {
      const rect = part.getBoundingClientRect();
      if (rect.top <= 200) current = part.id.replace('sec-', '');
    });
    if (current) {
      sidebarNav.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.toggle('active', link.dataset.sec === current);
      });
    }
  });
}
