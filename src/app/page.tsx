import { CopilotSidebar } from "@copilotkit/react-ui";
// import FrontendAction from "./components/FrontendAction";

import ConnectingData from "./components/ConnectingData";
import Layout from "./components/Layout";
import { Nav } from "./navigation";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Main Content Section */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          {/* <FrontendAction />

         */}
         <ConnectingData />
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/2 h-full p-4 md:fixed top-0 right-0">
          <CopilotSidebar
            defaultOpen={true}
            clickOutsideToClose={false}
            hitEscapeToClose={true}
            instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
            labels={{
              title: "Sidebar Assistant",
              initial: "How can I help you today?",
            }}
          >
          </CopilotSidebar>
        </div>
      </div>
    </Layout>
  );
}
