document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.section-header');
    const skillsSection = document.getElementById('skills');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling as HTMLElement;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    const toggleSkillsButton = document.getElementById('toggle-skills');
    toggleSkillsButton?.addEventListener('click', () => {
        if (skillsSection) {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        }
    });
});

