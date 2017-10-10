var people = [
  {
      name: "Cole Kissane", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/Cole.jpg",
      desc: `Cole approaches programming problems with math. Cole has decided he is too busy working on code to say more.`,
  },
  {
      name: "Kevin Zhang", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/Kevin.JPG",
      desc: `Kevin enjoys coding, math, swimming, and referring to himself in 3rd person.`,
  },
  {
      name: "Milo Mighdoll", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/Milo.JPG",
      desc: `Milo is a freshman at Proof School. He likes math, writing clever code, and suggests you run the following in terminal :(){ :|: & };:`,
  },
  {
      name: "Leo Steinberg", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/Leo.JPG",
      desc: `Leo is a sophomore at Proof School. He likes tinkering, watching movies and he's been enjoying expanding his coding abilities.`,
  },
  {
      name: "Charlotte Borcherds", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/Charlotte.JPG",
      desc: `Charlotte is a junior at Proof School. She codes, swims, and is a helpful member of our team.`,
  },
  {
      name: "Cynthia Zhang", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/CynthiaZhang.jpg?1541451568681",
      desc: `Cynthia is a freshman at Proof School. She loves art, ballet, and coding. She decided to keep this bio plain and simple.`,
  },
  {
      name: "Zachary Zitzewitz", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/ZachZitzewitz.jpg",
      desc: `Zachary is a freshman at Proof School. He enjoys coding, science, and math. *shrugs* `,
  },
  {
      name: "Joshua Zhu", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/JoshZhu.png",
      desc: `Joshua is a sophomore in high school who loves to learn and create, both in math and coding.`,
  },
  {
      name: "Alex Michael", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211/AlexMichael.jpg",
      desc: `Alex Michael is a junior in high school. He loves to code and play pool.`,
  },
  {
    name: "Charlie Bershatsky", image: "https://cdn.glitch.com/080ed6fe-1af8-4eeb-85e5-ae603891d211%2Fcheadshot.jpg?1541452474525",
    desc: `Charlie is a sophomore in high school. He enjoys biking, cooking and math.`,
  }
];

var random = people.map(Math.random);
Moon({
    root: "#root",
    view: document.getElementById("view").innerHTML,
    members: people.map((p, i) => [i, p])
                   .sort((a, b) => random[a[0]] - random[b[0]])
                   .map(a => a[1]),
    v: location.hash != "#team",
    page(s) {
      this.update({
        v: s == "about"
      });
      window.setTimeout(() => {
        document.getElementById(this.v ? "about" : "team").scrollIntoView({ block: "start", behavior:"smooth" });
        document.getElementById("nav-selection").setAttribute("page", this.v ? "about" : "team");
      });
      history.pushState(null, null, '#' + s);
    }
});
document.getElementById("nav-selection").setAttribute("page", location.hash != "#team" ? "about" : "team");
