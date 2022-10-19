import React from "react";
import UserInfo from "./UserInfo";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../context/authContext";
import { admin } from "../../../app/store";
import { IconButton, PopBtn } from "../../../utils";
import { toogleSidebar } from "../../../features";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChatBubbleLeftRightIcon,
  BellIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector(admin);
  const { logoutUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  function logout() {
    navigate("/", { state: { from: location }, replace: true });
    logoutUser();
  }

  return (
    <nav className="flex h-full items-center justify-between px-4">
      {/* menu button */}
      <IconButton
        Icon={isSidebarOpen ? Bars3BottomRightIcon : Bars3BottomLeftIcon}
        onClick={() => dispatch(toogleSidebar(!isSidebarOpen))}
      />

      {/* discussion notification user info */}
      <div className="flex items-center gap-x-2">
        {/* discussion */}
        <IconButton Icon={ChatBubbleLeftRightIcon} />
        {/* notification */}
        <IconButton notify Icon={BellIcon} />
        {/* user info */}
        <UserInfo className={`flex flex-col gap-x-2 bg-white font-medium`}>
          <PopBtn
            onClick={() => logout()}
            className="font-inter text-base capitalize tracking-tight"
          >
            Log out
          </PopBtn>
        </UserInfo>
      </div>
    </nav>
  );
};

export default Navbar;
