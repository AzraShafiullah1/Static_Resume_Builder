document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.section-header');
    var skillsSection = document.getElementById('skills');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
            else {
                content.style.display = 'block';
            }
        });
    });
    var toggleSkillsButton = document.getElementById('toggle-skills');
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection) {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        }
    });
});
