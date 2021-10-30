let projects = [
    {
        id: "hermes",
        title: "Hermes",
        links: [
            {
                title: "Visit Webpage",
                url: "https://hermes.ksdfg.dev/"
            },
            {
                title: "Backend Code",
                url: "https://github.com/ksdfg/hermes-backend"
            },
            {
                title: "Frontend Code",
                url: "https://github.com/ksdfg/hermes-frontend"
            }
        ],
        description: [
            `
            A web application for WhatsApp messaging automation.
            `,
            `
            Hermes allows a user to automate sending a message to multiple people (whether they are or aren't in your
            contacts list) from a CSV file with your number. You can also use placeholders in the message body that will
            be replaced with values from the CSV file.
            `
        ]
    },
    {
        id: "revamp",
        title: "Rev-AMP",
        links: [
            {
                title: "Backend Code",
                url: "https://github.com/rev-amp/backend"
            },
            {
                title: "Frontend Code",
                url: "https://github.com/rev-amp/frontend"
            }
        ],
        description: [
            `
            A reliable, efficient and versatile Academics Management Platform.
            `,
            `
            Web Application for academic organisations (schools, colleges etc.) to handle student - course allocation,
            Lecture Scheduling, Timetable generation based on courses you belong to (for both students and professors)
            and Assignments.
            `
        ]
    },
    {
        id: "workgroup",
        title: "Workgroup",
        links: [
            {
                title: "Go reference",
                url: "https://pkg.go.dev/github.com/ksdfg/workgroup"
            },
            {
                title: "Source Code",
                url: "https://github.com/ksdfg/Hermes"
            }
        ],
        description: [
            `
            A small utility to manage the lifetime of a set of related goroutines.
            `,
            `
            Built as a replacement with revamped internal working and extended functionality for
            <a href="https://pkg.go.dev/github.com/heptio/workgroup" rel="noopener noreferrer" target="_blank">
            heptio/workgroup</a>, because that became an internal library of
            <a href="https://github.com/projectcontour/contour/tree/main/internal/workgroup" rel="noopener noreferrer"
            target="_blank">contour</a>, and most of the other libraries I found were nowhere as simple as this, leaving
             me to make an alternative myself.
            `
        ]
    },
    {
        id: "neko-chan",
        title: "Neko Chan",
        links: [
            {
                title: "Source Code",
                url: "https://github.com/ksdfg/neko-chan-telebot"
            },
            {
                title: "TELEGRAM : @ksdfgisabot",
                url: "https://t.me/ksdfgisabot"
            }
        ],
        description: [
            `
            A modular telegram bot running on python3 with a MongoDB database.
            `,
            `
            Updated version of
            <a href="https://github.com/skittles9823/SkittBot" rel="noopener noreferrer" target="_blank">SkittBot</a>
            with some features from
            <a href="https://github.com/skittles9823/skitt_bot" rel="noopener noreferrer" target="_blank">skitt_bot</a>
            to work with latest version of python-telegram-bot.
            `
        ]
    },
    {
        id: "ara-ara-ufufu",
        title: "Ara Ara Ufufu!",
        links: [
            {
                title: "Source Code",
                url: "https://github.com/ksdfg/ARA-ARA"
            },
            {
                title: "Visit Webpage",
                url: "https://ara-ara.ksdfg.dev/"
            }
        ],
        description: [
            `
            A mock anime review website.
            `,
            `
            Built with Django and SQLAlchemy database as my Web Technologies Lab Project. I'm quite proud of the work done on
            the frontend with the CSS and the fluid user experience throughout the site. If someone is interested in
            maintaining the content on the site, please contact me.
            `
        ]
    },
    {
        id: "meetings-channel",
        title: "Meetings Channel",
        links: [
            {
                title: "Source Code",
                url: "https://github.com/ksdfg/Meetings-Channel"
            }
        ],
        description: [
            `
            Automated Tool that forwards all links that come on WhatsApp and Mail to Telegram.
            `,
            `
            Built using Python and Selenium and deployed with Docker. Was mainly developed to avoid opening WhatsApp for
            lecture links, but also works as a great way of archiving all meeting links that get buried under spam.
            `
        ]
    },
    {
        id: "horrible-downloader",
        title: "Horrible Downloader",
        links: [
            {
                title: "Source Code",
                url: "https://github.com/ksdfg/horrible_downloader"
            }
        ],
        description: [
            `
            Automated Torrent downloading tool for anime.
            `,
            `
            Automatically download all episodes of the currently airing anime that you are watching that you haven't already,
            as well as download multiple episodes of an anime without a batch file.
            `
        ]
    }
]

function loadIndex() {
    document.getElementById("nav-content").innerHTML += projects.map(project => (
        `<a href="#${project.id}" onClick="closeNav()">${project.title}</a>`
    )).join("\n")
}

function loadProjects() {
    document.body.innerHTML += projects.map((project, index) => (
        `
            <div class="w3-container page" id="${project.id}">
                <div class="w3-container content" style="text-align: ${index % 2 === 0 ? " left" : " right"}">
                    <h1>
                        ${project.title}
                        <a style="text-decoration: none; margin-left: 24px" href="#${project.id}"
                           onclick="copyTextToClipboard('https://ksdfg.dev/#${project.id}')">
                            <svg class="icon" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"/>
                            </svg>
                        </a>
                    </h1>

                    <div class="project-links" style="justify-content: ${index % 2 === 0 ? "flex-start" : "flex-end"}">
                        ${
                            project.links.map(link => (
                                `
                                <a class="w3-btn w3-border w3-border-white" href=${link.url}
                                   rel="noopener noreferrer" target="_blank">
                                    <h3>${link.title}</h3>
                                </a>
                                `
                            )).join("\n")
                        }
                    </div>

                    ${project.description.map(desc => (`<h2>${desc}</h2>`)).join("\n")}
                </div>
            </div>
        `
    )).join("\n\n")
}