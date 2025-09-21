import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", current: true, href: "/" },
  { name: "About", current: false, href: "about" },
  { name: "Projects", current: false, href: "projects" },
  { name: "Contact", current: false, href: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === "/") {
      // if already on home page, make it return to the top
      const section = document.getElementById(sectionId);    
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });        
      }
    } else {
      // Not on home, navigate there first
      navigate("/", { replace: false });

      // Wait for the DOM to update after navigation
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to wait for home page to load      
    }
  };

  return (
    <Disclosure
      as="nav"
      className=" bg-white sticky top-0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Rajit Abdillah"
                src="/my-logo-2.png"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (                
                  <a
                    key={item.name}
                    onClick={() => handleScrollOrNavigate(item.href)} // no "#" needed
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-black hover:bg-violet-600 hover:text-white"
                        : "text-black hover:bg-violet-600 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">          
          {navigation.map((item) => (            
            <DisclosureButton            
              key={item.name}
              as="a"
              onClick={() => handleScrollOrNavigate(item.href)}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-black hover:bg-violet-600 hover:text-white"
                  : "text-black hover:bg-violet-600 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}              
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
