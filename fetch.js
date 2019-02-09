// load new page content via .fetch when link is clicked and animate it
let collectionsLink = document.querySelector('#collections-link');
let newLink = document.querySelector('#new-link');
let trendingLink = document.querySelector('#trending-link');
let popularLink = document.querySelector('#popular-link');

let linkArray = [collectionsLink, newLink, trendingLink, popularLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', () => {
        switch (eachLink) {
            case collectionsLink:
                fetchPage(eachLink, 'collections.html');
                break;

            case newLink:
                fetchPage(eachLink, 'newPage.html');
                break;

            case trendingLink:
                fetchPage(eachLink, 'trending.html');
                break;

            case popularLink:
                fetchPage(eachLink, 'popular.html');
                break;
        }
    })
})

function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
        .then((response) => {
            return response.text()
        })
        .then((html) => {
            let doc = new DOMParser().parseFromString(html, 'text/html');

            anime({
                targets: '.text-section h1, .text-section p, .text-section div',
                translateX: 700,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
                complete: (anim) => {
                    document.querySelector('.column-wrapper').remove();
                },
            })

            setTimeout(function () {
                document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));
            
                anime({
                    targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
                    translateX: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeOutExpo'
                })
            }, 700);
        })
}