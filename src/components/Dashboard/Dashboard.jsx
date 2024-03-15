import Welcome from "../Welcome/Welcome";
import "./Dashboard.scss";

// import workingOnNewChapter from "../GetData/TestFile";

function Dashboard() {
   // workingOnNewChapter();
   return (
      <div className="DashboardWrapper">
         <Welcome userId={12} />
      </div>
   );
}

export default Dashboard;
