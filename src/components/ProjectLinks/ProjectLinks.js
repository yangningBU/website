import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './ProjectLinks.css';

const ProjectLink = ({letter}) => (
  <Link href={`/project/${letter}`} class={style.project}>
    <div>{letter}</div>
  </Link>
)

const ProjectLinks = () => (
  <div class={style.wrapper}>
    <ProjectLink letter="A"/>
    <ProjectLink letter="B"/>
    <ProjectLink letter="C"/>
  </div>
)

export default ProjectLinks;