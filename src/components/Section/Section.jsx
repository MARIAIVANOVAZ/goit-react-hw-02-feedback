import PropTypes from "prop-types";
import s from "./Section.module.css"

const Section = ({ title, children }) => {
    return (< section >
        <div className={s.container}>
        <h2>{title}</h2>
            {children}
        </div>
        
        </section>)
}
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}
export default Section;