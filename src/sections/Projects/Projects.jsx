import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://drive.google.com/file/d/1u632TPjXg_Yd52Tq5NQzP9RVW0PTV6c0/view?usp=sharing"
          h3="ASP.NET(DB backup)"
          p="API App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://thabang077.github.io/Andile-Ramakgale-Personal-Website/"
          h3="Web Dev"
          p="Portifolio Website"
        />
        <ProjectCard
          src={hipsster}
          link="https://drive.google.com/file/d/1isAR0ZsCAU-vdace-kOcCQq3ibkHvoAn/view?usp=share_link"
          h3="ASP.NET(DB backup)"
          p="Syncfusion and jQuery"
        />
        <ProjectCard
          src={fitLift}
          link="https://thabang077.github.io/WeedBliss/"
          h3="HTML CSS JS"
          p="Weedbliss App"
        />
      </div>
    </section>
  );
}

export default Projects;
