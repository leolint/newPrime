function inspectObject() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('inView');
            }
        });
    });

    const targetElements = document.querySelectorAll('[data-observeWrapper]');

    targetElements.forEach(function (element) {
        observer.observe(element);
    });
}



inspectObject()