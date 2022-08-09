import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cx from 'classnames';

import Logo from '../images/logo-title.svg';
import * as Icons from '../components/Icons';

function MenuItem({ title, children, currentPath, pathname }) {
  const isActive = pathname === currentPath;
  return (
    <li
      className={cx('mb-[10px] rounded', {
        active: isActive,
      })}
    >
      <NavLink
        end
        to={pathname}
        className={cx(
          `block truncate transition duration-150 py-[8px] px-[10px] hover:text-slate-400`,
          {
            'bg-white': isActive,
          }
        )}
      >
        <div className="flex items-center">
          {children}
          <span
            className={cx('text-sm font-medium leading-[14px] ml-[5px]', {
              'text-[#8894FF]': isActive,
            })}
          >
            {title}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 z-40 lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={cx(
          `flex flex-col`,
          `z-40 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0`,
          'bg-[#F7F8FA]',
          'p-[25px] pl-[30px]',
          'w-[200px]'
        )}
      >
        {/* Sidebar header */}
        <div className="flex mb-[26px] pr-3 sm:px-2">
          {/* Logo */}
          <NavLink end to="/" className="block">
            <img src={Logo} />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul>
              {/* Dashboard */}
              <MenuItem
                pathname="/dashboard"
                currentPath={pathname}
                title="Dashboard"
              >
                <Icons.IconChart isActive={pathname.includes('/dashboard')} />
              </MenuItem>
              {/* Requests */}
              <MenuItem
                pathname="/requests"
                currentPath={pathname}
                title="Demandes"
              >
                <Icons.IconDocument isActive={pathname.includes('/requests')} />
              </MenuItem>
              {/* Users */}
              <MenuItem
                pathname="/users"
                currentPath={pathname}
                title="Utilisateurs"
              >
                <Icons.IconMale isActive={pathname.includes('/users')} />
              </MenuItem>
            </ul>

            <Link to="/logout" className="block text-[12px] mt-[96px]">
              Se deconnecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
