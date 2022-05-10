import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

registerApplication(
  "@uma/gatitos",
  // @ts-ignore
  () => System.import("@uma/gatitos"),
  (location) => location.pathname === "/gatitos"
);

registerApplication(
  "@uma/pagos",
  // @ts-ignore
  () => System.import("@uma/pagos"),
  (location) => location.pathname === "/"
);

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

layoutEngine.activate();
start()