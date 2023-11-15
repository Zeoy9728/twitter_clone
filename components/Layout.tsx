import { FollowBar } from "./Layout/FollowBar";
import Siderbar from "./Layout/Siderbar";

interface LayoutProps {
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) =>{
    return (
      <div className="h-screen bg-black  ">
        {/* <div className="text-white left-0 border w-1/12 border-green-400"> */}
        {/* <div> */}
        {/* <Siderbar />   */}
        {/* </div> */}
        {/* </div> */}
        <div className="flex flex-row">
          <div className="container border-2 border-green-500 h-screen w-3/12 px-2">
            <Siderbar />
          </div>
          <div className="container border-2 border-purple-400">{children}</div>
          <div className="container border-2 border-sky-500  w-4/12">
            <FollowBar />
          </div>
        </div>
        {/* <div className="container border-2  border-green-500">

        </div> */}
        {/* <div className="container h-full mx-auto xl:px-30 max-w-6xl border-x-2">
          <div className="border border-red-500">
            <Siderbar />
          </div>

          <div className="grid grid-col-4 h-full  ">
            {/* <Siderbar /> */}
        {/* <div
              className="
              col-span-3
               
              border-x-[3px]
              border-neutral-800
              "
            >
              <Siderbar />
              {children}
            </div>
          </div>
        </div> */}
      </div>
    );
}

export default Layout