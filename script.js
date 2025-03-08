const educationData = [
      { university: "LNM Institute of Information Technology", degree: "B.Tech. in Computer Science Engineering", location: "Jaipur, Rajasthan", dates: "Aug 2021 – Present", cgpa: "7.15" },
      { university: "Central Academy Sr. Sec. School", degree: "XII", location: "Bhilwara, Rajasthan", dates: "2019-2020", percentage: "97%" }
    ];

    const workHistoryData = [
      { title: "React Intern", company: "Celebal Technologies", dates: "Jun 2024 - Aug 2024", description: ["Developed an e-commerce platform using React, integrating Razorpay for payments and NodeMailer for email automation.", "Utilized React Hooks, Context API, React Router, Redux, and Axios for efficient state management and API interactions.", "Collaborated with designers, backend developers, and QA teams to deliver high-quality features and improvements.", "Maintained version control using Git and GitHub, contributing to a cohesive and productive work environment."] }
    ];

    const projectsData = [
        { name: "Real-Time Stock Portfolio Tracker", technologies: ["React.js", "Node.js", "MongoDB", "WebSockets", "Express.js"], description: ["Developed a comprehensive web app using React, Node.js, and MongoDB, integrating financial APIs for live market data.", "Enhanced investment analysis capabilities with real-time news updates via WebSocket technology and reduced API call latency using caching.", "Implemented robust user authentication and authorization for secure data management.", "Focused on creating a seamless user experience through efficient backend and frontend development."] },
        { name: "Anonymous Feedback", technologies: ["Next.js", "React.js", "MongoDB", "Typescript"], description: ["Developed a secure web application with user registration, verification code integration, and JWT-based session management.", "Implemented multi-factor authentication (MFA) for enhanced security and used bcrypt for password encryption and decryption.", "Designed a dynamic dashboard using Next.js and advanced React hooks for efficient state management.", "Utilized MongoDB for robust and scalable data management.", "Deployed the application on Vercel, leveraging cloud infrastructure for high availability and scalability."] }
    ];


    const achievementsData = [
      { name: "TEDxLNMIIT’24 Core Member", details: ["Planning and Coordination: Oversaw coordination with speakers and planned their visit.", "Leadership and Management: Led a team of 7 members, delegated responsibilities, optimized event preparation, and established clear communication channels."] },
      { name: "Media Cell LNMIIT Core Member", details: ["Management and Design: Hosted events (Open Mics and Podcasts) and oversaw design aspects, ensuring cohesive branding and boosting the club’s visibility.", "Helped create engaging experiences and strengthened the club’s presence within the campus community."] }
    ];

    const technicalSkillsData = {
      languages: ["C++", "Javascript", "Python"],
      courses: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "SQL", "OOPs", "Git"]
    };

    function createElement(tag, className, textContent, attributes) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (textContent) element.textContent = textContent;
      if (attributes) Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
      return element;
    }

    function renderEducation() {
        const educationContainer = document.querySelector('.education-container');
        educationData.forEach(item => {
          const card = createElement('div', 'container', null, {});
          const uni = createElement('p', '', item.university);
          const deg = createElement('p', '', item.degree);
          const loc = createElement('p', '', item.location);
          const date = createElement('p', '', item.dates);
          const cgpa = createElement('p', '', `CGPA: ${item.cgpa}`);
          card.appendChild(uni);
          card.appendChild(deg);
          card.appendChild(loc);
          card.appendChild(date);
          card.appendChild(cgpa);
          educationContainer.appendChild(card);
        });
      }
      
    function renderWorkExp() {
      const workExpContainer = document.querySelector('.workexperience-container');
      workHistoryData.forEach(item => {
        const card = createElement('div', 'container', null, {});
        const title = createElement('h3', '', item.title);
        const company = createElement('p', '', item.company);
        const dates = createElement('p', '', item.dates);
        const descriptionList = createElement('ul', '', null, {});
        item.description.forEach(desc => {
          const descItem = createElement('li', '', desc);
          descriptionList.appendChild(descItem);
        });
        card.appendChild(title);
        card.appendChild(company);
        card.appendChild(dates);
        card.appendChild(descriptionList);
        workExpContainer.appendChild(card);
      });
    }
    function renderProjects() {
      const projectsContainer = document.querySelector('.projects-container');
      projectsData.forEach(item => {
        const card = createElement('div', 'container project-item', null, {});
        const title = createElement('h3', '', item.name);
        const techList = createElement('ul', '', null, {});
        item.technologies.forEach(tech => {
          const techItem = createElement('li', '', tech);
          techList.appendChild(techItem);
        });
        const descriptionList = createElement('ul', '', null, {});
        item.description.forEach(desc => {
          const descItem = createElement('li', '', desc);
          descriptionList.appendChild(descItem);
        });
        card.appendChild(title);
        card.appendChild(techList);
        card.appendChild(descriptionList);
        projectsContainer.appendChild(card);
      });
    }

    function renderAchievements() {
      const achievementsContainer = document.querySelector('.achievements-container');
      achievementsData.forEach(item => {
        const card = createElement('div', 'container', null, {});
        const title = createElement('h3', '', item.name);
        const detailsList = createElement('ul', '', null, {});
        item.details.forEach(detail => {
          const detailItem = createElement('li', '', detail);
          detailsList.appendChild(detailItem);
        });
        card.appendChild(title);
        card.appendChild(detailsList);
        achievementsContainer.appendChild(card);
      });
    }

    function renderSkills() {
      const skillsContainer = document.querySelector('.skills-container');
      const languagesList = createElement('ul', '', null, {});
      technicalSkillsData.languages.forEach(lang => {
        const langItem = createElement('li', '', lang);
        languagesList.appendChild(langItem);
      });
      const coursesList = createElement('ul', '', null, {});
      technicalSkillsData.courses.forEach(course => {
        const courseItem = createElement('li', '', course);
        coursesList.appendChild(courseItem);
      });

      skillsContainer.appendChild(createElement('h3','', 'Languages'));
      skillsContainer.appendChild(languagesList);
      skillsContainer.appendChild(createElement('h3','', 'Courses'));
      skillsContainer.appendChild(coursesList);

    }

    renderEducation();
    renderWorkExp();
    renderProjects();
    renderAchievements();
    renderSkills();