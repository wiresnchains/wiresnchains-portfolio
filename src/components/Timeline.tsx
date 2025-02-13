import { ReactNode } from "react";
import { FiMapPin } from "react-icons/fi";

import "../styles/components/Timeline.scss";

export function Timeline({ children }: { children: ReactNode }) {
    return (
        <div className="timeline">
            {children}
        </div>
    );
}

export function TimelineEvent({ children }: { children: ReactNode }) {
    return (
        <div className="timeline-event">
            <div className="timeline-container">
                {children}
            </div>
            <div className="time-line"></div>
            <span className="time-pin">
                <FiMapPin />
            </span>
        </div>
    );
}

export function TimelineBlock({ children }: { children: ReactNode }) {
    return (
        <div className="timeline-block">
            {children}
        </div>
    );
}
