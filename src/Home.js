import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
          title="Drive"
          description="Pic up me. Bro Bro Sorry Broooooo"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
          title="親愛なる母"
          description="ばあちゃんクッキング"
        />
        <Card
          src="https://volleyball-assist.com/pic-labo/beachvolleyball640.jpg"
          title="バレーボール"
          description="バレーボール全日本女子"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
          title="Drive"
          description="Pic up me. Bro Bro Sorry Broooooo"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
          title="CAMP"
          description="CAMPHACK"
        />
        <Card
          src="https://volleyball-assist.com/pic-labo/beachvolleyball640.jpg"
          title="バレーボール"
          description="バレーボール全日本女子"
        />
      </div>
    </div>
  );
}

export default Home;
