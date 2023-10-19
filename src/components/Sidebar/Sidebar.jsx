import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { SidebarData } from './SidebarData';

const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: #A8DADC; /* Light Sky Blue */
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #264653; /* Dark Slate Blue */

  &:hover {
    cursor: pointer;
  }
`;

const SidebarMenu = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #E9C46A; /* Soft Yellow */
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? '0' : '-100%')};
  transition: 0.4s;
  z-index: 10;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 40px;
  padding: 0.75rem 0;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 16px;
  text-decoration: none;
  color: #264653; /* Dark Slate Blue */

  &:hover {
    background-color: #A8DADC; /* Light Sky Blue */
    color: #264653; /* Dark Slate Blue */
    width: 100%;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    margin: 0 0.5rem;
  }
`;

const Sidebar = () => {
  const [close, setClose] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setClose(!close);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setClose(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </MenuIconOpen>
      </Navbar>

      <SidebarMenu close={close} ref={sidebarRef} onMouseLeave={toggleSidebar}>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: '12px' }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
