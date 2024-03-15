import Welcome from "../Welcome/Welcome";
import "./Dashboard.scss";
import Daily from "../Daily/Daily";

// import workingOnNewChapter from "../GetData/TestFile";

function Dashboard() {
   // workingOnNewChapter();
   return (
      <div className="DashboardWrapper">
         <Welcome userId={12} />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
               <Daily />
               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     width: "835px",
                     justifyContent: "space-between",
                  }}
               >
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "blue",
                     }}
                  ></div>
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "green",
                     }}
                  ></div>
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "yellow",
                     }}
                  ></div>
               </div>
            </div>
            <div
               style={{
                  backgroundColor: "cyan",
                  width: "260px",
                  marginLeft: "30px",
               }}
            >
               {/* <div></div>
               <div></div>
               <div></div>
               <div></div> */}
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
