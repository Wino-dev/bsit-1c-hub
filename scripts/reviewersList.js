import { renderHeader } from "./render/renderHeader.js";
import { sideMenuToggle } from "./sideMenuToggle.js";
import { initSideMenuHyperlinks } from "./sideMenuHyperlinks.js";
import { renderSidebar } from "./render/renderSidebar.js";
import { initSideBarHyperlinks } from "./sideBarHyperlinks.js";
import { renderReviewersList } from "./render/renderReviewersList.js";

renderHeader();
renderSidebar();
sideMenuToggle();
initSideMenuHyperlinks();
initSideBarHyperlinks();
renderReviewersList();