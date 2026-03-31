import { projectsByYear } from "./projects.js";

const timelineRoot = document.querySelector("#timeline-root");
const yearCount = document.querySelector("#year-count");
const projectCount = document.querySelector("#project-count");
const latestYear = document.querySelector("#latest-year");

const allProjects = projectsByYear.flatMap((entry) => entry.projects);

yearCount.textContent = String(projectsByYear.length);
projectCount.textContent = String(allProjects.length);
latestYear.textContent = String(projectsByYear[0]?.year ?? "-");

timelineRoot.innerHTML = projectsByYear
  .map(
    ({ year, projects }) => `
      <article class="timeline-year">
        <div class="year-heading">
          <p class="year-label">Year</p>
          <h3>${year}</h3>
        </div>
        <div class="project-list">
          ${projects
            .map(
              (project, index) => `
                <article class="project-card">
                  <p class="project-meta">Project ${String(projects.length - index).padStart(2, "0")}</p>
                  <h4>${project.title}</h4>
                  <p class="project-description">${project.description}</p>
                  <a class="project-link" href="./projects/${project.slug}.html">Open project page</a>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    `
  )
  .join("");
