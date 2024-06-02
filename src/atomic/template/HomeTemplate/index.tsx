import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export interface HomeTemplateProps {
  whatsappLink: string;
  githubLink: string;
  gitlabLink: string;
  linkedinLink: string;
}
export function HomeTemplate({
  githubLink,
  gitlabLink,
  linkedinLink,
  whatsappLink,
}: HomeTemplateProps) {
  return (
    <div>
      <Section1
        githubLink={githubLink}
        gitlabLink={gitlabLink}
        linkedinLink={linkedinLink}
        whatsappLink={whatsappLink}
      />

      <Section2 />
    </div>
  );
}
