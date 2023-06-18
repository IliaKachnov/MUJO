import { useState } from "react";

const accordionStyles = {
  // maxWidth: "500px",
  transition: "all 0.3s ease-in-out",
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "10px",
  background: "inherit",
  fontWeight: "300",
  fontSize: '20px',
  lineHeight: "20px",
  color: '#999993',
  transition: "all 0.3s ease-in-out",
};

const accordionContentStyles = {
  fontWeight: "300",
  fontSize: '16px',
  lineHeight: "20px",
  color: '#999993',
  padding: "10px",
  background: "inherit",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
};

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;