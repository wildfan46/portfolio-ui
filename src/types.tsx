export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    type: 'Full Stack' | 'Backend' | 'Automation' | 'Front End';

}

export interface Experience {
    company: string;
    location: string;
    roles: Role[];
}

export interface Role {
    title: string;
    team: string;
    date: string;
    impact: string;
    tags: string[];
}