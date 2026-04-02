export const metadata = {
  title: 'Scope & Status — Aptitude',
  description: 'Current scope and development status of the Aptitude vision-first assembly learning system.',
};

/**
 * Scope & Status page — renders the project status tables.
 */
export default function ScopePage() {
  // Status badge component
  const StatusBadge = ({ status }) => {
    let bg, text;
    if (status.includes('Complete')) {
      bg = '#e8ff47'; text = '#2e3307';
    } else if (status.includes('Partial')) {
      bg = '#e8ff4766'; text = '#5c670e';
    } else {
      bg = '#f1f3f5'; text = '#868e96';
    }
    return (
      <span
        className="px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap"
        style={{ backgroundColor: bg, color: text }}
      >
        {status}
      </span>
    );
  };

  // Section data
  const sections = [
    {
      emoji: '🧱',
      title: 'Physical Workcell',
      rows: [
        ['Overall', 'Partial', ''],
        ['Workbench / mounting', 'Complete', ''],
        ['Robot installation', 'Complete', ''],
        ['Data acquisition PC', 'Complete', ''],
        ['GPU PC', 'Complete', ''],
        ['Network (DDS / multi-host)', 'Complete', ''],
        ['Global cameras (D455)', 'Partial (Verified)', 'Only 2 global cams installed'],
        ['Eye-in-hand cameras (D405)', 'Complete', ''],
      ],
    },
    {
      emoji: '🧪',
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
      emoji: '📐',
      title: 'Calibration',
      subsections: [
        {
          subtitle: 'Targets & Fixtures',
          rows: [
            ['ArUco cube generator', 'To Be Verified', ''],
            ['ArUco plate generator', 'To Be Verified', ''],
            ['ChArUco plate generator', 'To Be Verified', ''],
            ['Printable marker sheets', 'To Be Verified', ''],
            ['Target preview/rendering', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Computation & Transforms',
          rows: [
            ['ArUco world frame estimation', 'To Be Verified', ''],
            ['Eye-camera transforms', 'To Be Verified', ''],
            ['TF publication', 'To Be Verified', ''],
            ['Marker filtering / rejection', 'To Be Verified', ''],
            ['Simulation validation (Gazebo)', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Full Calibration Chain',
          rows: [
            ['Workbench → global frame', 'To Be Verified', ''],
            ['Robot base → global frame', 'To Be Verified', ''],
            ['Eye-in-hand → global', 'To Be Verified', ''],
            ['Wrist → camera', 'To Be Verified', ''],
            ['Gripper pinch → robot', 'To Be Verified', ''],
          ],
        },
      ],
    },
    {
      emoji: '👁️',
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
      emoji: '🧠',
      title: 'Perception',
      subsections: [
        {
          subtitle: 'Multi-Camera Geometry',
          rows: [
            ['Multi-camera fusion', 'To Be Verified', ''],
            ['Frame alignment', 'To Be Verified', ''],
            ['World coordinate mapping', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Object Segmentation',
          rows: [
            ['FastSAM segmentation', 'To Be Verified', ''],
            ['Heuristic segmentation', 'To Be Verified', ''],
            ['Instance cloud extraction', 'To Be Verified', ''],
            ['Multi-camera merging', 'To Be Verified', ''],
            ['Clustering segmentation', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Learned Segmentation',
          rows: [
            ['Synthetic dataset generation', 'To Be Verified', ''],
            ['YOLOv8 training', 'To Be Verified', ''],
            ['Real-time inference', 'To Be Verified', ''],
            ['Shape-based labeling', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Reconstruction',
          rows: [
            ['TSDF reconstruction', 'To Be Verified', ''],
            ['Photogrammetry pipeline', 'To Be Verified', ''],
            ['TSDF vs photogrammetry comparison', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Object Identity & Pose',
          rows: [
            ['CAD database', 'To Be Verified', ''],
            ['FPFH + RANSAC pose', 'To Be Verified', ''],
            ['ICP refinement', 'To Be Verified', ''],
            ['Color-aware matching', 'To Be Verified', ''],
            ['Projective ICP', 'To Be Verified', ''],
          ],
        },
        {
          subtitle: 'Object Assets',
          rows: [
            ['CAD asset storage', 'To Be Verified', ''],
            ['Object metadata', 'To Be Verified', ''],
            ['Grasp generation', 'To Be Verified', ''],
            ['Grasp visualization', 'To Be Verified', ''],
          ],
        },
      ],
    },
    {
      emoji: '🔗',
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
      emoji: '⚙️',
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
      emoji: '🤖',
      title: 'Robotic Manipulation',
      rows: [
        ['Overall', 'Partial (Verified)', 'MoveIt-based simulation and planning present'],
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
          <tr className="border-b-2 border-surface-200">
            <th className="text-left py-2 px-3 font-semibold text-surface-900">Subscope</th>
            <th className="text-left py-2 px-3 font-semibold text-surface-900">Status</th>
            <th className="text-left py-2 px-3 font-semibold text-surface-900">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([subscope, status, notes], i) => (
            <tr key={i} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
              <td className="py-2 px-3 text-surface-700">{subscope}</td>
              <td className="py-2 px-3"><StatusBadge status={status} /></td>
              <td className="py-2 px-3 text-surface-500 text-xs">{notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight mb-3">
          🗂️ Scope & Status
        </h1>
        <div className="rounded-xl border border-surface-200 bg-surface-50 p-4 text-sm text-surface-600">
          <strong>Disclaimer:</strong> This page may be updated by AI agents using internal discussions, 
          repo changes, meeting notes, and other project artifacts. It may contain errors, omissions, 
          or stale status — treat it as a working summary rather than a definitive operational record.
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: '#e8ff47', color: '#2e3307' }}>
            Complete
          </span>
          <span className="text-xs text-surface-500">Validated end-to-end</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: '#e8ff4766', color: '#5c670e' }}>
            Partial
          </span>
          <span className="text-xs text-surface-500">Evidenced but not complete</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-surface-100 text-surface-600">
            To Be Verified
          </span>
          <span className="text-xs text-surface-500">Exists but not validated</span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title} className="animate-fade-in">
            <h2 className="text-xl font-bold text-surface-900 mb-4 flex items-center gap-2">
              <span>{section.emoji}</span> {section.title}
            </h2>

            {section.rows && renderTable(section.rows)}

            {section.subsections && section.subsections.map((sub) => (
              <div key={sub.subtitle} className="mt-6">
                <h3 className="text-sm font-semibold text-surface-700 mb-2 uppercase tracking-wider">
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
