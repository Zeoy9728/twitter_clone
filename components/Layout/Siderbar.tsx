import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa"
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi"
import SideBarTweetButton from "./SideBarTweetButton";

const Siderbar = () =>{
    const items = [
      {
        label: "Home",
        href: "/",
        icon: BsHouseFill,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: BsBellFill,
      },
      {
        label: "Profile",
        href: "/user/123",
        icon: FaUser
      }
    ];

    return (
      <div className="col-span-1  w-60 md: pr-6 border border-yellow-500">
        <div className="flex flex-col items-start w-60 border border-purple-500">
          <div className="space-y-3 lg: w-60 border border-green-500">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
            <SidebarItem onClick={() => {}} label="Logout" icon={BiLogOut} />
            <SideBarTweetButton />
            {/* <SidebarItem onClick={() => {}} label="Logout" icon={BiLogOut} /> */}
          </div>
        </div>
      </div>
    );
}
export default Siderbar