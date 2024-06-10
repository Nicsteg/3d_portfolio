import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Nursery Assistant",
        company_name: "Kawamoto Orchid Nursery",
        icon: mongodb, // Placeholder icon
        iconBg: "#b7e4c7",
        date: "Oct 2017 – Present",
        points: [
            "Helped customers select and care for orchids, improving customer satisfaction and loyalty.",
            "Managed inventory and restocked supplies to ensure availability for customers.",
            "Facilitated the timely fulfillment of customer orders by efficiently coordinating the pick-up and delivery of plants."
        ],
    },
    {
        title: "Server",
        company_name: "Ichiriki Japanese Nabe Restaurant",
        icon: express, // Placeholder icon
        iconBg: "#fbc3bc",
        date: "Jan 2018 – Dec 2018",
        points: [
            "Greeted and seated guests promptly, provided menus and explained daily specials.",
            "Provided attentive service throughout the meal and promptly resolved any issues."
        ],
    },
    {
        title: "Sales Associate",
        company_name: "Twin Island Surf",
        icon: tailwindcss, // Placeholder icon
        iconBg: "#accbe1",
        date: "Nov 2016 - Dec 2017",
        points: [
            "Maintained an organized and visually appealing store environment.",
            "Arranged displays, stocked merchandise, and processed transactions efficiently."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: redux, // Assuming use of Redux in complex state management
        theme: 'btn-back-green',
        name: 'Snack-Squad',
        description: 'Developed a website using Bootstrap-react and Meteor for the University of Hawaii community to find local food options.',
        link: 'https://github.com/YourGitHubUsername/snack-squad',
    },
    {
        iconUrl: nextjs, // Assuming use of Next.js for server-side rendering
        theme: 'btn-back-blue',
        name: 'PokeGUI',
        description: 'A Java-based GUI application representing a Pokemon species hierarchy.',
        link: 'https://github.com/YourGitHubUsername/pokegui',
    },
    {
        iconUrl: nodejs, // Assuming backend usage with Node.js
        theme: 'btn-back-red',
        name: 'SHA-1 Project',
        description: 'Replicated a simple SHA-1 hash function in C++ to deepen understanding of cryptographic hashing.',
        link: 'https://github.com/YourGitHubUsername/sha1-project',
    }
];