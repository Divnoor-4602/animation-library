export const CARDS = [
  {
    id: 1,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/3c/ea/f6/3ceaf676a15b5d134c9b1bfe6b9d701b.jpg",
  },
  {
    id: 2,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/05/15/ba/0515ba45111d07155fb6f7cc34fe04a2.jpg",
  },
  {
    id: 3,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/fe/11/39/fe1139c4de7a9f6907989a042fdc7ffd.jpg",
  },
  {
    id: 4,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/3c/ea/f6/3ceaf676a15b5d134c9b1bfe6b9d701b.jpg",
  },
  {
    id: 5,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/79/00/97/7900978b58477c205d542f51221984db.jpg",
  },
  {
    id: 6,
    title: "Coffee",
    url: "https://i.pinimg.com/736x/08/0e/ae/080eaebf90f4a415794e627daa77b498.jpg",
  },
  {
    id: 7,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/3c/ea/f6/3ceaf676a15b5d134c9b1bfe6b9d701b.jpg",
  },
  {
    id: 9,
    title: "Coffee",
    url: "https://i.pinimg.com/1200x/2f/65/e3/2f65e3ec4c5b832dc7e0adc4faaa2616.jpg",
  },
];

export const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];
