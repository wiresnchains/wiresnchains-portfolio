import { ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "../styles/components/Dropdown.scss";

export function DropdownMenu({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="dropdown-menu">
            <button className="dropdown-toggle">{title} <span className="icon-open"><FaChevronUp /></span> <span className="icon-closed"><FaChevronDown /></span></button>
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

export function DropdownItem({ children }: { children: ReactNode }) {
    return (
        <li className="dropdown-item">
            {children}
        </li>
    );
}
