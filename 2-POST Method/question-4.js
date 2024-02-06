// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */
const user = async () => {
  ////////// fetch
  users.forEach(async (element) => {
    const user = await fetch(
      "https://65c102d0dc74300bce8d28bb.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify(element),
        headers: { "content-type": "application/json" },
      }
    );
    console.log(user);
    const data = await user.json();
    console.log(data);
  });
  //////////axios
  // const user = await axios.post(
  //   "https://65c102d0dc74300bce8d28bb.mockapi.io/users",
  //   users,
  //   {
  //     headers: { "content-type": "application/json" },
  //   }
  // );
  // console.log(user);
};
user();
//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */
const firstNameInput = document.querySelector("#fName");
const lastNameInput = document.querySelector("#lName");
const phoneNumberInput = document.querySelector("#pNumber");
const formEle = document.querySelector("form");

//*To be continue...
