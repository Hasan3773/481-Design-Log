// Team log entries.
//
// To log a completed task, add an object to ENTRIES below:
//
//   {
//     member: "Hasan",               // Quinn | Nush | Theresa | Hasan
//     date: "2026-09-24",            // YYYY-MM-DD
//     area: "software",              // mechanical | electrical | software | general
//     title: "Set up design log site",
//     details: "What was done, results, and any links.",
//     link: "https://..."            // optional
//   },
//
// Entries are sorted newest first automatically.

const MEMBERS = ["Quinn", "Nush", "Theresa", "Hasan"];

const ENTRIES = [
  {
    member: "Hasan",
    date: "2026-10-18",
    area: "software",
    title: "Researched perception options",
    details: "Compared RGB + pose estimation, stereo cameras, ToF cameras and mmWave radar for tracking the user. Chose two synced IR-sensitive (NoIR) cameras as a stereo pair: about 1–3 cm accuracy, works in the dark, roughly $60 in total."
  },
  {
    member: "Hasan",
    date: "2026-10-18",
    area: "general",
    title: "Updated design log",
    details: "Updated the project description and task breakdown to reflect the design decisions: air nozzles, a fixed 3D-printed nozzle, stand mounting and a two-camera IR setup."
  },
  {
    member: "Nush",
    date: "2026-10-18",
    area: "general",
    title: "Created design decision matrix",
    details: "Built the decision matrix used to compare design options against our criteria."
  },
  {
    member: "Nush",
    date: "2026-10-18",
    area: "mechanical",
    title: "Researched eye diaphragm vs. fixed nozzle",
    details: "Compared a variable eye diaphragm with a fixed nozzle. Chose a fixed 3D-printed nozzle: the aperture can stay static, a moving aperture could disrupt vortex formation, and the gimbal handles aiming."
  },
  {
    member: "Quinn",
    date: "2026-10-18",
    area: "general",
    title: "Researched related patents",
    details: "Looked into existing patents related to free-air haptic devices."
  },
  {
    member: "Quinn",
    date: "2026-10-18",
    area: "general",
    title: "Created Gantt chart",
    details: "Made the project Gantt chart to schedule work packages across the term."
  },
  {
    member: "Theresa",
    date: "2026-10-18",
    area: "mechanical",
    title: "Researched ultrasonic transducers vs. air jets",
    details: "Compared the two approaches on range, latency, power, cost and noise. Air jets reach 1–3 m versus about 60–80 cm for ultrasonic arrays and cost less; the trade-off is more noise and latency."
  },
  {
    member: "Theresa",
    date: "2026-10-18",
    area: "mechanical",
    title: "Reviewed papers on air jet technologies",
    details: "Reviewed published work on air jet and vortex ring haptics, including AIREAL."
  }
];
