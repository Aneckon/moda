import { AboutCourse } from "../aboutCourse";
import { Contact } from "../contact";
import CourseDetails from "../courseDetails";
import { Learn } from "../learn";
import { Partners } from "../partners";
import { Reviews } from "../reviews";
import { Stats } from "../stats";
import { WhyUs } from "../whyUs";

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'modadonna-pmu-sections.counters-section':
      Block = Stats;
      break;
    case 'modadonna-pmu-sections.about-section':
      Block = AboutCourse;
      break;
    case 'modadonna-pmu-sections.details-section':
      Block = CourseDetails;
      break;
    case 'modadonna-pmu-sections.learn-section':
      Block = Learn;
      break;
    case 'modadonna-pmu-sections.why-us-section':
      Block = WhyUs;
      break;
    case 'modadonna-pmu-sections.partners-section':
      Block = Partners;
      break;
    case 'modadonna-pmu-sections.feedback-section':
      Block = Reviews;
      break;
    case 'modadonna-pmu-sections.contact-us-section':
      Block = Contact;
      break;
  }

  return Block ? <Block key={`index-${index}`} index={index} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return blocks?.map(getBlockComponent);
};

export default BlockManager;
