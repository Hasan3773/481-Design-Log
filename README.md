# 481-Design-Log

Design log website for our MTE 481 capstone (Fall 2026): a low-cost version of the AIREAL free-air haptic device, integrated with video playback and a video game.

**Team:** Quinn, Nush, Theresa, Hasan

**Live site:** https://hasan3773.github.io/481-Design-Log/

## Logging a completed task

Open `entries.js` and add an object to the `ENTRIES` list:

```js
{
  member: "Hasan",               // Quinn | Nush | Theresa | Hasan
  date: "2026-09-24",            // YYYY-MM-DD
  area: "software",              // mechanical | electrical | software | general
  title: "Short summary of the task",
  details: "What was done, results, decisions, and next steps.",
  link: "https://..."            // optional (CAD, photos, docs, etc.)
},
```

Commit and push to `main`. GitHub Pages redeploys the site in about a minute. Entries show up in that member's column, newest first.

Upcoming tasks go in the `TODO` object in the same file. They show as an "Up next" list at the top of each member's column. When one is done, remove it from `TODO` and log it in `ENTRIES`.

The course rubric grades entries on detail, dates and names, individual contributions, and regular logging, so post often and be specific.

## Files

- `index.html`: page content (overview, requirements, tasks)
- `entries.js`: team log entries
- `app.js`: renders the team log columns
- `styles.css`: styling
