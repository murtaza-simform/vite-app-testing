import ExpandableText from "../components/ExpandableText";
import Onboarding from "../components/Onboarding";
import TermsAndConditions from "../components/TermsAndConditions";

const PlaygroundPage = () => {
  return (
    <>
      <Onboarding />
      <br />
      <br />
      <TermsAndConditions />
      <br />
      <br />
      <ExpandableText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, numquam nemo eius reprehenderit, pariatur nobis, ex temporibus odio sint amet asperiores at assumenda provident quasi ipsa aliquid expedita maiores. Suscipit, fugiat architecto recusandae cumque, dolores cum similique atque excepturi voluptates ab veritatis deserunt officiis impedit et explicabo quidem? Dolor autem esse sapiente, illum tenetur officia voluptatem, provident dolore consequuntur, error tempore porro. Officia, repellat. Numquam velit placeat autem dolore doloremque voluptas cupiditate libero suscipit sint, tempore culpa officia aut, debitis minus quo et corrupti delectus illum? Nesciunt sequi ad veritatis itaque aspernatur, quod iste voluptate, adipisci, alias necessitatibus officia voluptas." />
    </>
  );
};

export default PlaygroundPage;
