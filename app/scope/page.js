export const metadata = {
  title: 'Scope & Status — Aptitude',
  description: 'Current scope and development status of the Aptitude vision-first assembly learning system.',
};

export default function ScopePage() {
  const StatusBadge = ({ status }) => {
    let bg, text;
    if (status.includes('Complete')) {
      bg = '#e8ff47'; text = '#2e3307';
    } else if (status.includes('Partial')) {
      bg = '#e8ff4744'; text = '#e8ff47';
    } else {
      bg = '#ffffff0a'; text = '#71717a';
    }
    return (
      <span className="px-2 py-0.5 text-[11px] font-medium rounded-full whitespace-nowrap"
            style={{ backgroundColor: bg, color: text }}>
        {status}
      </span>
    );
  };

  const sections = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
      title: 'Physical Workcell',
      rows: [
        ['Overall', 'Partial', ''],
        ['Workbench / mounting', 'Complete', ''],
        ['Robot installation', 'Complete', ''],
        ['Data acquisition PC', 'Complete', ''],
        ['GPU PC', 'Complete', ''],
        ['Network (DDS / multi-host)', 'Complete', ''],
        ['Global cameras (D455)', 'Partial (Verified)', 'Only 2 global cams'],
        ['Eye-in-hand cameras (D405)', 'Complete', ''],
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
      title: 'Digital Twin',
      rows: [
        ['Overall', 'Partial', ''],
        ['Workcell model', 'To Be Verified', ''],
        ['Robot models', 'To Be Verified', ''],
        ['Joint state control', 'To Be Verified', ''],
        ['Camera simulation', 'To Be Verified', ''],
        ['Robot visualization', 'To Be Verified', ''],
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>),
      title: 'Calibration',
      subsections: [
        { subtitle: 'Targets & Fixtures', rows: [
          ['ArUco cube generator', 'To Be Verified', ''],
          ['ArUco plate generator', 'To Be Verified', ''],
          ['ChArUco plate generator', 'To Be Verified', ''],
          ['Printable marker sheets', 'To Be Verified', ''],
          ['Target preview/rendering', 'To Be Verified', ''],
        ]},
        { subtitle: 'Computation & Transforms', rows: [
          ['ArUco world frame estimation', 'To Be Verified', ''],
          ['Eye-camera transforms', 'To Be Verified', ''],
          ['TF publication', 'To Be Verified', ''],
          ['Marker filtering / rejection', 'To Be Verified', ''],
          ['Simulation validation (Gazebo)', 'To Be Verified', ''],
        ]},
        { subtitle: 'Full Calibration Chain', rows: [
          ['Workbench → global frame', 'To Be Verified', ''],
          ['Robot base → global frame', 'To Be Verified', ''],
          ['Eye-in-hand → global', 'To Be Verified', ''],
          ['Wrist → camera', 'To Be Verified', ''],
          ['Gripper pinch → robot', 'To Be Verified', ''],
        ]},
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
      title: 'Visualization',
      rows: [
        ['Individual camera views', 'To Be Verified', ''],
        ['Global fused view', 'To Be Verified', ''],
        ['Eye-in-hand transformed view', 'To Be Verified', ''],
        ['Instance visualization', 'To Be Verified', ''],
        ['Reconstruction viewers', 'To Be Verified', ''],
        ['Grasp visualization', 'To Be Verified', ''],
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
      title: 'Perception',
      subsections: [
        { subtitle: 'Multi-Camera Geometry', rows: [
          ['Multi-camera fusion', 'To Be Verified', ''],
          ['Frame alignment', 'To Be Verified', ''],
          ['World coordinate mapping', 'To Be Verified', ''],
        ]},
        { subtitle: 'Object Segmentation', rows: [
          ['FastSAM segmentation', 'To Be Verified', ''],
          ['Heuristic segmentation', 'To Be Verified', ''],
          ['Instance cloud extraction', 'To Be Verified', ''],
          ['Multi-camera merging', 'To Be Verified', ''],
          ['Clustering segmentation', 'To Be Verified', ''],
        ]},
        { subtitle: 'Learned Segmentation', rows: [
          ['Synthetic dataset generation', 'To Be Verified', ''],
          ['YOLOv8 training', 'To Be Verified', ''],
          ['Real-time inference', 'To Be Verified', ''],
          ['Shape-based labeling', 'To Be Verified', ''],
        ]},
        { subtitle: 'Reconstruction', rows: [
          ['TSDF reconstruction', 'To Be Verified', ''],
          ['Photogrammetry pipeline', 'To Be Verified', ''],
          ['TSDF vs photogrammetry comparison', 'To Be Verified', ''],
        ]},
        { subtitle: 'Object Identity & Pose', rows: [
          ['CAD database', 'To Be Verified', ''],
          ['FPFH + RANSAC pose', 'To Be Verified', ''],
          ['ICP refinement', 'To Be Verified', ''],
          ['Color-aware matching', 'To Be Verified', ''],
          ['Projective ICP', 'To Be Verified', ''],
        ]},
        { subtitle: 'Object Assets', rows: [
          ['CAD asset storage', 'To Be Verified', ''],
          ['Object metadata', 'To Be Verified', ''],
          ['Grasp generation', 'To Be Verified', ''],
          ['Grasp visualization', 'To Be Verified', ''],
        ]},
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>),
      title: 'Object / Task / Config Graph',
      rows: [
        ['Object pose tracker', 'To Be Verified', ''],
        ['Config graph manager', 'To Be Verified', ''],
        ['Predicate generation', 'To Be Verified', ''],
        ['Task graph generation', 'To Be Verified', ''],
        ['Graph visualization', 'To Be Verified', ''],
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      title: 'Integration Layer',
      rows: [
        ['Submodule orchestration', 'To Be Verified', ''],
        ['Build system', 'To Be Verified', ''],
        ['Launch orchestration', 'To Be Verified', ''],
        ['CI pipeline', 'To Be Verified', ''],
        ['Dependency management', 'To Be Verified', ''],
        ['Asset integration', 'To Be Verified', ''],
        ['DDS configuration', 'To Be Verified', ''],
      ],
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>),
      title: 'Robotic Manipulation',
      rows: [
        ['Overall', 'Partial (Verified)', 'MoveIt-based simulation present'],
        ['Motion planning (MoveIt)', 'Partial (Verified)', 'Integrated with Gazebo + ROS2'],
        ['Joint trajectory execution (sim)', 'Partial (Verified)', 'Simulation-level execution'],
        ['Navigation to object', 'To Be Verified', ''],
        ['Grasp execution', 'To Be Verified', ''],
        ['Pick and place', 'To Be Verified', ''],
      ],
    },
  ];

  const renderTable = (rows) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dark-border">
            <th className="text-left py-2.5 px-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Subscope</th>
            <th className="text-left py-2.5 px-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Status</th>
            <th className="text-left py-2.5 px-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([sub, status, notes], i) => (
            <tr key={i} className="border-b border-dark-border/50 hover:bg-white/[0.02] transition">
              <td className="py-2.5 px-3 text-zinc-300 text-sm">{sub}</td>
              <td className="py-2.5 px-3"><StatusBadge status={status} /></td>
              <td className="py-2.5 px-3 text-zinc-600 text-xs">{notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-section">
      <div className="mb-12 animate-fade-in">
        <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                         text-[11px] font-semibold uppercase tracking-widest mb-5">
          Status
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Scope & Status
        </h1>
        <div className="rounded-2xl border border-dark-border bg-dark-card p-5 text-sm text-zinc-500">
          <strong className="text-zinc-400">Disclaimer:</strong> This page may be updated by AI agents
          using internal discussions, repo changes, and meeting notes. Treat as a working summary.
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-12">
        {[
          { label: 'Complete', bg: '#e8ff47', color: '#2e3307' },
          { label: 'Partial', bg: '#e8ff4744', color: '#e8ff47' },
          { label: 'To Be Verified', bg: '#ffffff0a', color: '#71717a' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-full"
                  style={{ backgroundColor: l.bg, color: l.color }}>{l.label}</span>
            <span className="text-xs text-zinc-600">{l.label === 'Complete' ? 'Validated' : l.label === 'Partial' ? 'Evidenced' : 'Exists unvalidated'}</span>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((s) => (
          <div key={s.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                {s.icon}
              </span>
              {s.title}
            </h2>
            {s.rows && renderTable(s.rows)}
            {s.subsections && s.subsections.map((sub) => (
              <div key={sub.subtitle} className="mt-6">
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 pl-3 border-l-2 border-accent/30">
                  {sub.subtitle}
                </h3>
                {renderTable(sub.rows)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
