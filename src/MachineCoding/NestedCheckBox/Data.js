export const checkboxData = [
  {
    id: 1,
    label: "Frontend",
    checked: false,
    children: [
      {
        id: 2,
        label: "React",
        checked: false,
        children: [
          { id: 3, label: "Hooks", checked: false, children: [] },
          { id: 4, label: "Context API", checked: false, children: [] },
        ],
      },
      {
        id: 5,
        label: "Angular",
        checked: false,
        children: [],
      },
    ],
  },
  {
    id: 6,
    label: "Backend",
    checked: false,
    children: [
      {
        id: 7,
        label: "Node.js",
        checked: false,
        children: [
          { id: 8, label: "Express", checked: false, children: [] },
          { id: 9, label: "NestJS", checked: false, children: [] },
        ],
      },
      {
        id: 10,
        label: "Python",
        checked: false,
        children: [],
      },
    ],
  },
];