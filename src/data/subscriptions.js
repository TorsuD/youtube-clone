import mojo from "../assets/images/mojo.jpeg";
import sunny from "../assets/images/sunny.jpeg";
import cs from "../assets/images/cs.jpeg";
import dj from "../assets/images/dj.jpeg";
import ltt from "../assets/images/ltt.jpeg";
import relaxedGuy from "../assets/images/relaxed-guy.jpeg";

export const subscriptions = [
  {
    title: "WatchMojo.com",
    icon: (
      <img
        src={mojo}
        alt="Mojo"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: true,
    dot: false,
  },

  {
    title: "The Relaxed Guy",
    icon: (
      <img
        src={relaxedGuy}
        alt="Relaxed Guy"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: true,
    dot: false,
  },

  {
    title: "Linus Tech Tips",
    icon: (
      <img
        src={ltt}
        alt="Linus Tech Tips"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: true,
    dot: false,
  },

  {
    title: "Danny Jones",
    icon: (
      <img
        src={dj}
        alt="Danny Jones"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: true,
    dot: false,
  },

  {
    title: "CS50",
    icon: (
      <img
        src={cs}
        alt="CS50"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: true,
    dot: false,
  },

  {
    title: "SunnyV2",
    icon: (
      <img
        src={sunny}
        alt="Sunny"
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
        }}
      />
    ),
    live: false,
    dot: true,
  },
];
