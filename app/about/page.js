import Link from 'next/link';

export const metadata = {
  title: 'About Aptitude — Common Lab Ventures',
  description: 'Aptitude is a vision-first system for learning assembly tasks from a human demonstration.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-section">
      {/* Header */}
      <div className="mb-14 animate-fade-in">
        <span className="inline-block px-3 py-1 rounded-full border border-accent/20 text-accent
                         text-[11px] font-semibold uppercase tracking-widest mb-5">
          About
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Aptitude
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Vision-first assembly learning by observation
        </p>
      </div>

      {/* Pipeline callout */}
      <div className="rounded-2xl border border-dark-border bg-dark-card p-6 mb-14">
        <p className="text-sm font-mono text-zinc-500 text-center">
          human demonstration → scene understanding → action understanding → task graph → executable recipe
        </p>
      </div>

      <div className="prose mx-auto">
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
            happened, in what order, with what parts, tools, and constraints.
          </li>
          <li>
            <strong>Machine-readable</strong> — a task graph with nodes, relations, preconditions,
            effects, and state transitions. Something software can inspect, simulate, verify, or
            map to robot skills.
          </li>
        </ul>
        <p>
          The primary product is not a robot demo. It is a new kind of artifact: a structured,
          reusable, inspectable representation of assembly knowledge.
        </p>
        <p>
          The system does this in five steps: capture the workspace in 3D using calibrated multi-view
          RGB-D cameras; reconstruct object-centric state by fitting known CAD models to the observed
          scene; infer meaningful state changes from continuous observations; compile those into a
          directed task graph; and emit a recipe in whatever form the audience needs.
        </p>

        <h2>Approach</h2>
        <p>
          <strong>This is not video analytics.</strong> We do not care about dwell-time charts or
          zone presence detection. We want to tell you what actually transformed in the scene.
        </p>
        <p>
          <strong>This is not documentation from CAD.</strong> CAD describes what the product is
          supposed to be. It does not capture how a skilled worker assembled it under real conditions.
        </p>
        <p>
          <strong>This is not trajectory imitation.</strong> What transfers across setups is not the
          exact path a wrist took. What transfers is the semantic structure: which object to
          manipulate, what relation to establish, what state marks success.
        </p>

        <h2>Why the Recipe Comes First</h2>
        <p>
          A structured recipe makes knowledge visible. Once the procedure exists as a real artifact,
          you can reason about it, compare it across operators, simulate changes, and plan around it.
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

        <h2>Following Along</h2>
        <p>
          If you are interested in robotics, 3D vision, human-object interaction, or learning
          from demonstration — follow along or reach out.
        </p>
      </div>
    </div>
  );
}
