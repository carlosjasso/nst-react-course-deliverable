import { CSSProperties } from "react";
import { LayoutProps } from "../types/LayoutProps";
import "../styles/Layout.css";
import Github from "./Github";

const transitionValue: string = "all .5s ease";

function Layout({ backgroundColor, children }: LayoutProps) {
    const backgroundStyle: CSSProperties = {
        backgroundColor,
        transition: transitionValue, 
        WebkitTransition: transitionValue, 
        MozTransition: transitionValue
    };

    return (
        <main className='main-container' style={backgroundStyle}>
            <a href="https://github.com/carlosjasso/nst-react-course-deliverable" className="github-corner" target="_blank">
                <Github octocatColor={backgroundColor} />
            </a>
            { children }
        </main>
    );
}

export default Layout;