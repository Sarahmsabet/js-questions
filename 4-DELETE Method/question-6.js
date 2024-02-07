//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
const getData = async () => {
  const getThem = await fetch(
    "https://65c102d0dc74300bce8d28bb.mockapi.io/users"
  );
  const dataIs = await getThem.json();
  const filterUsers = dataIs.filter((user) => user.lastName === "Dalton");
  filterUsers.forEach(async (element) => {
    await fetch(
      `https://65c102d0dc74300bce8d28bb.mockapi.io/users/${element.id}`,
      { method: "DELETE" }
    );
  });
};
getData();
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
const getUserId = async () => {
  const getThereId = await fetch(
    "https://65c102d0dc74300bce8d28bb.mockapi.io/users"
  );
  const dataIs = await getThereId.json();
  const filterUsersId = dataIs.filter((user) => user.id % 2 === 0);
  filterUsersId.forEach(async (element) => {
    await fetch(
      `https://65c102d0dc74300bce8d28bb.mockapi.io/users/${element.id}`,
      { method: "DELETE" }
    );
  });
};
getUserId();
//*End of story :)
