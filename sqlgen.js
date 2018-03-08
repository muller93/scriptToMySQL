let name = ['Bed', 'Chair', 'Table', 'Vase', 'Computer', 'TV', 'Armchair', 'Speaker', 'Picture', 'Gardrobe', 'Carpet'];
let purpose = ['to eat', 'to sit', 'to lie', 'to drink', 'to rest'];
let dimnesions = ['30x40', '50x50', '80x20', '10x10', '150x120', '180x180', '90x90'];
let color = ['Brown', 'Red', 'Black', 'White', 'Green', 'Yellow', 'Blue'];

const nameGen = () => {
  return name[Math.floor(Math.random() * name.length)];
};

const purposeGen = () => {
  return purpose[Math.floor(Math.random() * purpose.length)];
};

const dimnesionsGen = () => {
  return dimnesions[Math.floor(Math.random() * dimnesions.length)];
};
const colorGen = () => {
  return color[Math.floor(Math.random() * color.length)];
};

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let id = 0;
for (let i = 0; i < 622; i++) {
  id++;
  console.log("insert into furnitures (id, name, purpose, dimnesions, room, color, has_foot, num_of_legs) values (" + id + ", '" + nameGen() + "', '" + purposeGen() + "', '" + dimnesionsGen() + "', + " + getRandomInt(5) + " + '" + colorGen() + "', 0, " + getRandomInt(4));
}

