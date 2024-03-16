export default function functionGetApi(elementID) {
   fetch(`http://localhost:1337/user/${elementID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      // body: "",
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         throw res;
      })
      .then((data) => {
         console.log(data);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
