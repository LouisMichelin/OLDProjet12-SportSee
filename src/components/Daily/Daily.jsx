import React, { useState, useEffect } from "react";
import "./Daily.scss";
// import { Bar } from "react-chartjs-2";
import {
   // Chart as ChartJS,
   // CategoryScale,
   // LinearScale,
   // BarElement,
   // Title,
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   Rectangle,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";

function Daily({ userId }) {
   // ---------------------------------------------------------------
   // const [data, setData] = useState(null);
   // const [loading, setLoading] = useState(true);
   // const [error, setError] = useState(null);
   // useEffect(() => {
   //    fetch(`http://localhost:1337/user/${userId}/activity`)
   //       .then((response) => {
   //          if (response.ok) {
   //             return response.json();
   //          }
   //          throw response;
   //       })
   //       .then((data) => {
   //          setData(data);
   //          console.log(data);
   //       })
   //       .catch((error) => {
   //          console.error("Error fetching data : ", error);
   //          setError(error);
   //       })
   //       .finally(() => {
   //          setLoading(false);
   //       });
   // }, [userId]);
   // if (loading) return "Loading...";
   // if (error) return "Error!";
   // const userData = data.data;
   // const userSessions = userData.sessions;
   // ---------------------------------------------------------------
   const data = [
      {
         day: 1,
         poids: 80,
         calories: 240,
         // amt: 75,
      },
      {
         day: 2,
         poids: 80,
         calories: 220,
         // amt: 75,
      },
      {
         day: 3,
         poids: 80,
         calories: 280,
         // amt: 75,
      },
   ];
   return (
      <div className="DailyWrapper">
         <>
            <div className="DailyTitle">Mon Titre de Graph</div>
            {/* {userSessions.map((activity) => {
               return (
                  <div key={Math.random()}>
                     {activity.day} - {activity.kilogram} - {activity.calories}
                  </div>
               );
            })} */}

            {/* <Bar className="DailyBar" data={barData} /> */}
            <ResponsiveContainer width={765} height={185}>
               <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <Legend
                     margin="10%"
                     layout="horizontal"
                     verticalAlign="top"
                     align="right"
                     height={50}
                  />
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis type="number" domain={[0, 500]} />
                  <Tooltip />
                  <Bar
                     dataKey="poids"
                     fill="black"
                     barSize={10}
                     radius={[4, 4, 0, 0]}
                     paddingRight={5}
                     // activeBar={<Rectangle fill="grey" stroke="blue" />}
                  />
                  <Bar
                     dataKey="calories"
                     fill="red"
                     barSize={10}
                     radius={[4, 4, 0, 0]}
                     // activeBar={<Rectangle fill="orange" stroke="purple" />}
                  />
               </BarChart>
            </ResponsiveContainer>
         </>
      </div>
   );
}

export default Daily;
