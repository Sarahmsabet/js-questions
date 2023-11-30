// ? 5. Modify the array of object below with (for of ) like this:
// todo : If the  gamer_id is 1002 change the gamer_name as you like

let gamers_data = [
  {
    gamer_id: 1001,
    gamer_name: "Jason",
  },
  {
    gamer_id: 1002,
    gamer_name: "Ali",
  },
  {
    gamer_id: 1003,
    gamer_name: "Mathew",
  },
];

// ! Answer
const [first, second, third] = gamers_data;
for (userId of gamers_data) {
    // second.gamer_name = "yekishun kheili khube";
    if(second.gamer_id===1002){
      second.gamer_name="yekishun kheili khube(Ali)";
    }
}
console.log(gamers_data);