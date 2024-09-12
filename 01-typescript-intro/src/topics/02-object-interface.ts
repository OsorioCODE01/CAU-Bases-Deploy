const skills: string[] = ["bash", "counter", "healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // el ? puede hacer que sea undefined o una string
}

const strider: Character = {
  name: "strider",
  hp: 100,
  skills: ["bash", "counter"],
  hometown: "Mi casa",
};

strider.hometown = "Rivendell";
console.table(strider);

export {};
