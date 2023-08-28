import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
        <p className="desc text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          alias quos quam vero veritatis ea hic unde est fuga consequuntur
          cumque ducimus vel, consequatur iure ipsam magnam! Ex, sequi quis.
        </p>
        {/* Feed */}
        <Feed />
      </h1>
    </section>
  );
};

export default Home;
