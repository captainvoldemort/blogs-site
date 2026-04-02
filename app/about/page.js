import Link from 'next/link';

export const metadata = {
  title: 'About Aptitude — Common Lab Ventures',
  description: 'Aptitude is a vision-first system for learning assembly tasks from a human demonstration.',
};

/**
 * About page — content from the Aptitude project description.
 */
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight mb-4">
          Aptitude
        </h1>
        <p className="text-xl text-surface-500 leading-relaxed">
          Vision-first assembly learning by observation
        </p>
      </div>

      <div className="prose mx-auto">
        {/* Core transformation */}
        <div className="rounded-xl border border-surface-200 p-6 mb-10 not-prose animate-fade-in"
             style={{ animationDelay: '0.1s', backgroundColor: '#e8ff470d' }}>
          <p className="text-sm font-mono text-surface-600 text-center">
            human demonstration → scene understanding → action understanding → task graph → executable recipe
          </p>
        </div>

        <h2>The Problem</h2>
        <p>
          Manufacturing has no shortage of documentation. CAD models, BOMs, work instructions, 
          inspection sheets, cycle-time dashboards. But the thing that is usually missing is the 
          one that matters most for automation: a <strong>machine-readable representation</strong> of 
          how assembly is actually carried out in the real world.
        </p>
        <p>
          A video records what happened. A manual describes the intended process. Neither captures 
          the procedure in a form that software can act on. The questions that matter — which object 
          is being manipulated, what relation is being established, what conditions must hold before 
          the next step, what changed in the assembly state — are left unanswered.
        </p>
        <p>That gap is what we are trying to close.</p>

        <h2>What We're Building</h2>
        <p>
          We watch manual assembly with multiple depth cameras and compile what we see into an 
          object-centric task graph. That task graph is something a human can inspect, a digital 
          twin can replay, and a robot can eventually execute.
        </p>
        <p>The output has two forms:</p>
        <ul>
          <li>
            <strong>Human-readable</strong> — a structured recipe with visual keyframes: what 
            happened, in what order, with what parts, tools, and constraints. The kind of thing 
            a process engineer can review and approve.
          </li>
          <li>
            <strong>Machine-readable</strong> — a task graph with nodes, relations, preconditions, 
            effects, and state transitions. Something software can inspect, simulate, verify, or 
            map to robot skills.
          </li>
        </ul>
        <p>
          The primary product is not a robot demo. It is a new kind of artifact: a structured, 
          reusable, inspectable representation of assembly knowledge. Robot execution is a 
          downstream destination, not where the system starts.
        </p>
        <p>
          The system does this in five steps: capture the workspace in 3D using calibrated multi-view 
          RGB-D cameras; reconstruct object-centric state by fitting known CAD models to the observed 
          scene; infer meaningful state changes (pick, place, align, insert, tighten) from continuous 
          observations; compile those into a directed task graph; and emit a recipe in whatever form 
          the audience needs.
        </p>

        <h2>Approach</h2>
        <p>
          <strong>This is not video analytics.</strong> We do not care about dwell-time charts or zone 
          presence detection. Other companies do that well. They tell you how long a worker spent on a 
          step. We want to tell you what actually transformed in the scene.
        </p>
        <p>
          <strong>This is not documentation from CAD.</strong> CAD describes what the product is 
          supposed to be. It does not capture how a skilled worker assembled it under real conditions — 
          the tolerance compensations, the support strategies, the tool sequences, the ordering choices 
          that are obvious to an experienced operator and invisible to software.
        </p>
        <p>
          <strong>This is not trajectory imitation.</strong> What transfers across setups is not the 
          exact path a wrist took on one day. What transfers is the semantic structure: which object to 
          manipulate, what relation to establish, what state marks success, what dependencies constrain 
          the order.
        </p>
        <p>
          The near-term bias is toward systems that are grounded in real demonstrations, predictable 
          enough to inspect and trust, and designed to fail in controlled ways. We are not interested 
          in overclaiming capability or treating lab-only demos as the finish line.
        </p>

        <h2>Why the Recipe Comes First</h2>
        <p>
          In many manufacturing environments, the stronger economic story is not labor substitution. 
          It is throughput and programmability. Can you identify the rate-limiting step? Can you 
          understand the procedure around it? Can you make that knowledge reusable so the next 
          production run or product variant does not start from scratch?
        </p>
        <p>
          A structured recipe makes this visible. Once the procedure exists as a real artifact, you 
          can reason about it, compare it across operators, simulate changes, and plan around it. 
          The recipe has value well before any robot arm moves.
        </p>

        <h2>Build In Public</h2>
        <p>
          This project is being built in public. Progress, failures, experiments, and learnings are 
          documented openly as the system evolves.
        </p>
        <ul>
          <li>Updates are on the <Link href="/">home page</Link></li>
          <li>Scope and current status are on the <Link href="/scope">Scope & Status page</Link></li>
          <li>Longer essays are in the <Link href="/posts">Posts</Link> section</li>
        </ul>
        <p>
          This is a prototype system. Many components are partial, noisy, or still evolving. 
          The public site documents reality, not just progress.
        </p>

        <h2>Following Along</h2>
        <p>
          If you are interested in robotics, 3D vision, human-object interaction, or learning 
          from demonstration — follow along or reach out.
        </p>
      </div>
    </div>
  );
}
