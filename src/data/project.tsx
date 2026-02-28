import type { Project } from '../types';

// TODO AL : Source from bff
export const projects: Project[] = [
    {
        title: "Weather-Driven Task Automator",
        description: "AWS Lambda function that interfaces with Pirate Weather (API) to inject conditional chores into Todoist based on local weather forecasts and certain logic.",
        tech: ["Python", "AWS Lambda", "REST API", "Todoist"],
        type: "Automation",
        link: "https://github.com/wildfan46/task-checker"
    },
    {
        title: "Portfolio Website",
        description: "This front end web project.",
        tech: ["React", "TypeScript", "Fly.io", "Vite"],
        type: "Front End",
        link: "https://github.com/wildfan46/portfolio-ui"
    },
    {
        title: "Portfolio Website BFF",
        description: "A RESTful API built with Python and Lambda, designed to manage data and API Integrations for the Portfolio website.",
        tech: ["Python", "AWS Lambda", "Rest API", "Todoist", "DNS Routing"],
        type: "Backend",
        link: "https://github.com/wildfan46/portfolio-ui-bff"
    },
    {
        title: "Discord Count Bot",
        description: "A Discord bot built with Python that tracks and counts specific activities in a server, providing statistics and insights.",
        tech: ["Python", "DynamoDB", "Discord API", "Rest API", "DNS Routing"],
        type: "Backend",
        link: "https://github.com/wildfan46/discord-count-bot"
    }
];