import gsap from 'gsap';

export default () => {
  const { matches: ismobile } = window.matchMedia('(max-width: 800px)');

  let skills_timeline = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.4
    },
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 30%'
    }
  });
  if (!ismobile)
    skills_timeline
      .from('#skills h1', {
        y: '-5rem'
      })
      .from('#skills-carousel .skills-wrapper', {
        duration: 0.3,
        stagger: -0.3
      })
      .from('#carousel-navigation .button-next', {
        x: '-5rem'
      })
      .from(
        '#carousel-navigation .button-prev',
        {
          x: '5rem'
        },
        '<'
      );

  let project_wrappers = document.querySelectorAll('.project-wrapper');
  gsap.from('#projects h1', {
    scrollTrigger: {
      trigger: project_wrappers[0],
      start: '-20rem center'
    },
    y: '-3rem',
    opacity: 0,
    duration: 0.4
  });
  project_wrappers.forEach((project) => {
    let title = project.querySelector('h2');
    let description = project.querySelector('p');
    let links = project.querySelectorAll('.horizontal-section-wrapper');
    let preview = project.querySelector('.project-preview');

    let project_timeline = gsap.timeline({
      defaults: {
        opacity: 0,
        duration: 0.4
      },
      scrollTrigger: {
        trigger: project,
        start: 'top center'
      }
    });
    if (ismobile)
      project_timeline.from(project, {
        duration: 0.1
      });

    project_timeline
      .from(title, {
        y: '-2rem',
        delay: 0.4
      })
      .from(
        description,
        {
          y: '-2rem'
        },
        '<0.2'
      )
      .from(
        links,
        {
          y: '-5rem',
          stagger: 0.1
        },
        '<0.2'
      )
      .from(preview, { scale: 0.6 });
  });
};
