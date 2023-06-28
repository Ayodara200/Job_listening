// All DOM elements
const domElements = {
    jobsContainer: document.querySelector('.jobs'),
    searchContainer: document.querySelector('.search'),
    searchFilters: document.querySelector('.search-content'),
    clear: document.querySelector('.clear'),
}


// Function for fetching data
const fetchData = async () => {
    //const res = await fetch("./JsonFile/data.json");
    //const data = await res.json();

    var data = [
        {
            "id": 1,
            "company": "Photosnap",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 2,
            "company": "Manage",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
        },
        {
            "id": 3,
            "company": "Account",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        },
        {
            "id": 4,
            "company": "MyHome",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 5,
            "company": "Loop Studios",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["Ruby", "Sass"]
        },
        {
            "id": 6,
            "company": "FaceIt",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
        },
        {
            "id": 7,
            "company": "Shortly",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
        },
        {
            "id": 8,
            "company": "Insure",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
        },
        {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
        },
        {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        }
    ]
    
    return data;

};



const makeCards = (item) => {
    return `
        ${cardBorder(item.featured, item)}
        <h2 class="profile flex">
            <img class="image" src=${item.logo} alt="">
            <div class="company-desc">
                <div class="company-field">
                    <span class="company">${item.company}</span>
                    ${createNewFlags(item.new, item.featured)}
                </div>
                <div class="job-position">${item.position}</div>
                <div class="job-info flex">
                    <span class="posted info">${item.postedAt}</span>
                    <ul class="flex">
                        <li class="contract info">${item.contract}</li>
                        <li class="country info">${item.location}</li>
                    </ul>
                </div>
            </div>
        </h2>
        <h2 class="skills flex">
            <span class="role filter">${item.role}</span>
            <span class="level filter">${item.level}</span>
            ${createLang(item.languages)}
            ${createTools(item.tools)}
        </h2>
    </div>
    `;
};


// Show cards
const showCards = () => {
    let cards = "";
    fetchData().then((data) => {
        data.forEach((text) => {
            cards += makeCards(text);
            domElements.jobsContainer.innerHTML = cards;
        });
    })
};

showCards();

// Add featured border
const cardBorder = (featured) => {
    if (featured) {
        return `<div class="wrapper flex featured-border">`;
    }

    return `<div class="wrapper flex">`;
};


// Create New Cards
const createNewFlags = (newFlag, featuredFlag) => {
    let flag = "";
    if (newFlag) flag += `<span class="new">New!</span>`
    if (featuredFlag) {
        flag += `<span class="featured">Featured</span>`;
    }
    return flag;
};


// Create Language Cards
const createLang = (langs) => {
    let langCards = "";
    langs.forEach((lang) => {
        langCards += `<span class="lang filter">${lang}</span>`;
    });
    return langCards;
};

// Create Tools Cards
const createTools = (tools) => {
    let toolCards = "";
    tools.forEach((tool) => {
        toolCards += `<span class="lang filter">${tool}</span>`;
    });
    return toolCards;
};


// Display Search Bar
const displaySearch = (e) => {
    let element = e.target;
    if (element.classList.contains('filter')) {
        domElements.searchContainer.classList.remove('hidden');
        displayFilter(element);
    }
};

let filterArray = [];

// Display filter on Search
const displayFilter = (ele) => {
    let filter = "";
    if (!filterArray.includes(ele.textContent)) {
        filterArray.push(ele.textContent);
    }

    filterArray.forEach((element) => {
        filter += `
        <div class="search-filter">
        <span class="filter-content">${element}
        <span class="filter-remove"> &#9747;</span>
        </span>
        </div> 
        `;
        domElements.searchFilters.innerHTML = filter;
        filterJob();
    })

};

// Update jobs list by changing filters
const filterJob = (data) => {
    if (filterArray.length !== 0) {
        let cards = "";
        fetchData().then((data) => {
            data.forEach((text) => {
                if (validJobs(text)) {
                    cards += makeCards(text);
                    domElements.jobsContainer.innerHTML = cards;
                }
            });
        })
    }
    else {
        domElements.searchContainer.classList.add('hidden');
        showCards(data);
    }
}

// Jobs are valid or not
const validJobs = (item) => {
    let isValid = true;
    filterArray.forEach(elem => {
        if (item.role !== elem && item.level !== elem && !item.languages.includes(elem) && !item.tools.includes(elem)) {
            isValid = false;
        }
    })
    return isValid;
}


// Remove filter
const removeFilter = (e) => {
    let element = e.target;
    if (element.classList.contains('filter-remove')) {
        const elementToRemove = element.parentElement;
        let index = filterArray.indexOf(elementToRemove.textContent.split(" ")[0].trim());
        filterArray.splice(index, 1);
        elementToRemove.remove();
        filterJob();
    }
}

// Clear Search
const clearSearch = () => {
    domElements.searchContainer.classList.add('hidden');
    filterArray = [];
    filterJob();
}

// All DOM Event Listeners
domElements.jobsContainer.addEventListener('click', displaySearch);
domElements.searchFilters.addEventListener('click', removeFilter);
domElements.clear.addEventListener('click', clearSearch);