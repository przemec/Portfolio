import { active_section } from '$store';

let sections = ['main', 'about', 'skills', 'projects', 'contact'];

export default () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && active_section.set(entry.target.id);
      });
    },
    {
      threshold: 0.5
    }
  );
  sections.forEach((section) => {
    const section_element = document.querySelector(`#${section}`);
    if (section_element) observer.observe(section_element);
  });
};
