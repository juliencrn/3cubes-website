import { GithubIcon, InstagramIcon, TwitterIcon } from "../Icons";

interface Member {
  pseudo: string;
  name: string;
  description: string;
  // image: StaticImageData;
  link: {
    instagram?: string;
    twitter?: string;
    github?: string;
  };
}

interface PropTypes {
  members: Member[];
}

export default function TeamSection({ members }: PropTypes) {
  return (
    <section id="team" className="py-12 ">
      <div className="max-w-7xl mx-auto sm:my-12 md:my-16">
        <h2 className="max-w-5xl mx-auto h2 mb-6  text-center px-6">team</h2>
        <div className="flex flex-wrap">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TeamMember = (props: Member) => {
  const { pseudo, name, description, link } = props;

  return (
    <article className="w-full sm:w-1/2 p-6 mb-6 md:mt-12">
      <div className="flex flex-col lg:flex-row">
        <div className="aspect-square w-1/2 sm:1/4 lg:w-2/5 mb-4 lg:mb-0">
          <div className="rounded-full overflow-hidden m-auto aspect-square flex relative">
            {/* <Image {...image} alt={pseudo} placeholder="blur" /> */}
          </div>
        </div>
        <div className="w-full lg:w-3/5 lg:pl-4">
          <div className="flex justify-start">
            <h4 className="h3 ">{pseudo}</h4>
            <Links link={link} />
          </div>
          <p className="text-emerald-600 ">AKA {name}</p>
          <p className="mt-2 lg:mt-1">
            <i>
              {`"`}
              {description}
              {`"`}
            </i>
          </p>
        </div>
      </div>
    </article>
  );
};

const Links = ({ link }: { link: Member["link"] }) => (
  <div className="text-emerald-600 flex">
    {link.github && (
      <a href={link.github} target="_blank" rel="noreferrer" className="ml-2 ">
        <GithubIcon />
      </a>
    )}
    {link.twitter && (
      <a
        href={link.twitter}
        target="_blank"
        rel="noreferrer"
        className="ml-2 pb-2"
      >
        <TwitterIcon />
      </a>
    )}
    {link.instagram && (
      <a
        href={link.instagram}
        target="_blank"
        rel="noreferrer"
        className="ml-2"
      >
        <InstagramIcon />
      </a>
    )}
  </div>
);
