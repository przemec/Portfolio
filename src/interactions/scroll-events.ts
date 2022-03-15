import { active_section } from '$store';

export const updateHeaderDisplay = (scrollY: number, isDirectionDown: boolean) => {
  document.getElementsByTagName('header')[0].classList.toggle('ishidden', isDirectionDown);
  document.getElementsByTagName('header')[0].classList.toggle('isscrolled', Math.floor(scrollY - 5) > 0);
};
export const updateScrollTipDisplay = (scrollY: number) => {
  document.getElementById('scroll-tip').classList.toggle('isscrolled', scrollY > 0);
  document.getElementById('scroll-tip').classList.toggle('istop', Math.floor(scrollY) <= 0);
};

let sections = ['main', 'about', 'skills', 'projects', 'contact'];
export const updateActiveSection = () => {
  sections.forEach((section) => {
    const section_element = document.querySelector(`#${section}`);
    const { top: element_top } = section_element.getBoundingClientRect();
    element_top < Math.floor(window.innerHeight / 3) && active_section.set(section);
  });
};
