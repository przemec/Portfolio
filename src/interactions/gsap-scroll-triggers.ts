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
      toggleActions: 'play complete none none',
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
        start: 'top center',
        toggleActions: 'play complete none none'
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

  let contact_timeline = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: 0.4
    },
    scrollTrigger: {
      trigger: '#contact',
      start: 'top center'
    }
  });
  if (!ismobile)
    contact_timeline
      .from('#contact h1', {
        duration: 0.3,
        stagger: -0.3,
        y: '-2rem'
      })
      .from('#contact p', { y: '-2rem' })
      .from('#contact button', { y: '-2rem' })
      .from('#contact a', { scale: 0.6 });

  gsap.to('#vertical_links a', {
    scrollTrigger: {
      trigger: '#contact',
      toggleActions: 'play none none reverse',
      start: 'center 60%'
    },
    x: '100%',
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
  });
};
