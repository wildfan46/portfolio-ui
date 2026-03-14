import { LayoutDashboard, Scale, Target, Zap } from "lucide-react";
import type { Principle } from "../types.tsx";

export const principles: Principle[] = [
    {
        title: "Efficiency First",
        icon: <Zap size={14} className="text-amber-400" />,
        description: "Prioritize event-driven architectures and serverless compute to minimize idle costs and latency."
    },
    {
        title: "Results-Oriented Design",
        icon: <Target size={14} className="text-emerald-400" />,
        description: "Build for the outcome. Choose 'boring' technology that is proven to scale over the latest trend."
    },
    {
        title: "Observability Matters",
        icon: <LayoutDashboard size={14} className="text-blue-400" />,
        description: "System health is non-negotiable. Implement comprehensive logging, monitoring, and alerting from day one."
    },
    {
        title: "Calculated Trade-offs",
        icon: <Scale size={14} className="text-blue-400" />,
        description: "Every architectural choice (SQL vs NoSQL, Monolith vs Microservice) must be justified by business needs."
    }
];