//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const put = async () => {
  const changeInformation = await fetch(
    "https://65c102d0dc74300bce8d28bb.mockapi.io/users/1",
    {
      method: "PUT",
      body: JSON.stringify({
        firstName: "Lufy",
        lastName: "monkey. D",
        phoneNumber: "(945) 635-3854",
      }),
      headers: { "content-type": "application/json" },
    }
  );
  console.log(changeInformation);
  const changed = await changeInformation.json();
  console.log(changed);
};
put();
//*To be continue...
