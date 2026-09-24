(function () {
  const grid = document.getElementById("member-grid");
  const AREAS = ["mechanical", "electrical", "software", "general"];

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-CA", {
      year: "numeric", month: "short", day: "numeric"
    });
  }

  MEMBERS.forEach(function (name) {
    const entries = ENTRIES
      .filter(function (e) { return e.member === name; })
      .sort(function (a, b) { return b.date.localeCompare(a.date); });

    const col = el("section", "member");
    col.setAttribute("aria-label", name + "'s completed tasks");

    const head = el("header", "member-head");
    head.appendChild(el("span", "avatar", name.charAt(0)));
    head.appendChild(el("h3", null, name));
    head.appendChild(el("span", "count", entries.length + (entries.length === 1 ? " entry" : " entries")));
    col.appendChild(head);

    const list = el("ol", "entries");
    if (entries.length === 0) {
      list.appendChild(el("li", "empty", "No completed tasks logged yet."));
    }
    entries.forEach(function (e) {
      const area = AREAS.indexOf(e.area) >= 0 ? e.area : "general";
      const item = el("li", "entry " + area);
      const meta = el("div", "entry-meta");
      const time = el("time", null, formatDate(e.date));
      time.setAttribute("datetime", e.date);
      meta.appendChild(time);
      meta.appendChild(el("span", "chip " + area, area));
      item.appendChild(meta);
      item.appendChild(el("h4", null, e.title));
      if (e.details) item.appendChild(el("p", null, e.details));
      if (e.link) {
        const a = el("a", "entry-link", "Link →");
        a.href = e.link;
        a.target = "_blank";
        a.rel = "noopener";
        item.appendChild(a);
      }
      list.appendChild(item);
    });
    col.appendChild(list);
    grid.appendChild(col);
  });
})();
