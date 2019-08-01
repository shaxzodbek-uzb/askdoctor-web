const clinicRouter = [
  {
    path: "/clinics",
    name: "Clinics",
    component: () => import("@/views/clinics/index"),
    meta: { title: "Клиники" }
  },
  {
    path: "clinics/:id(\\d+)",
    component: () => import("@/views/clinics/show"),
    name: "EditClinic",
    meta: { title: "Show", noCache: true, activeMenu: "roles" },
    hidden: true
  }
];

export default clinicRouter;
