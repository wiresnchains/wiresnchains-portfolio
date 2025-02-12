import { ReactNode } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "../styles/components/Dropdown.scss";

export function DropdownMenu({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="dropdown-menu">
            <button className="dropdown-toggle">{title} <span className="icon-open"><FiChevronUp /></span> <span className="icon-closed"><FiChevronDown /></span></button>
            <DropdownList>
                {children}
            </DropdownList>
        </div>
    );
}

function DropdownList({ children }: { children: ReactNode }) {
    return (
        <ul className="dropdown-list">
            {children}
        </ul>
    );
}

export function DropdownItem({ active, children }: { active?: boolean, children: ReactNode }) {
    return (
        <li className={"dropdown-item" + (active ? " active" : "")}>
            {children}
        </li>
    );
}
