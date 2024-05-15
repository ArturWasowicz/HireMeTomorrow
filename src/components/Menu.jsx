import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { useState, useEffect, useMemo } from "react";


export default function Menu() {
  const [menuState, setMenuState] = useState({
    activeMenuItem: null,
    showInfo: {},
  });

  const handleMenuClick = (menuItem) => {
    setMenuState((prevState) => ({
      activeMenuItem: menuItem,
      showInfo: { ...prevState.showInfo, [menuItem]: true },
    }));

    setTimeout(() => {
      setMenuState((prevState) => ({
        ...prevState,
        showInfo: { ...prevState.showInfo, [menuItem]: false },
      }));
    }, 1500);
  };

  const handleHover = (menuItem) => {
    setMenuState((prevState) => ({
      activeMenuItem: menuItem,
      showInfo: { ...prevState.showInfo, [menuItem]: true },
    }));
  };

  const handleMouseLeave = (menuItem) => {
    setMenuState((prevState) => ({
      ...prevState,
      showInfo: { ...prevState.showInfo, [menuItem]: false },
    }));
  };

  // Überwacht Änderungen am Zustand von showInfo und setzt active zurück, wenn alle Pop-Infos ausgeblendet sind
  //? .every() Methode (aus Javascript)überprüft, ob jedes Element in einem Array eine bestimmte Bedingung erfüllt. Sie nimmt eine Funktion als Argument, die angibt, welche Bedingung erfüllt sein muss. Diese Funktion kann dynamisch sein, je nachdem, welche Bedingungen die Anwendung benötigt. Wenn die Bedingung für alle Elemente im Array erfüllt ist, gibt every true zurück, ansonsten false.

  // Memoize die Kalkulation von allHidden um die Performance zu verbessern
  const allHidden = useMemo(() => {
    return Object.keys(menuState.showInfo).every((key) => !menuState.showInfo[key]);
  }, [menuState]);

  useEffect(() => {
    if (allHidden && menuState.activeMenuItem) {
      setMenuState((prevState) => ({ ...prevState, activeMenuItem: null }));
    }
  }, [allHidden, menuState.activeMenuItem]);

  return (
    <div className="menu">
      <div className="container menu-container">
        <div className="icon-container">
          <a
            href="#"
            onMouseEnter={() => handleHover("#")}
            onMouseLeave={() => handleMouseLeave("#")}
            onClick={() => handleMenuClick("#")}
            className={menuState.activeMenuItem === "#" ? "active" : ""}
            aria-label="Home"
            title="Home" // Titel für Hover
          >
            <AiOutlineHome />
          </a>
          {menuState.showInfo["#"] && <div className="pop-up-icon">Home</div>}
        </div>

        <div className="icon-container about">
          <a
            href="#About"
            onMouseEnter={() => handleHover("#About")}
            onMouseLeave={() => handleMouseLeave("#About")}
            onClick={() => handleMenuClick("#About")}
            className={menuState.activeMenuItem === "#About" ? "active" : ""}
            aria-label="About"
            title="About" // Titel für Hover
          >
            <FiUser />
          </a>
          {menuState.showInfo["#About"] && <div className="pop-up-icon">About</div>}
        </div>

        <div className="icon-container">
          <a
            href="#Experience"
            onMouseEnter={() => handleHover("#Experience")}
            onMouseLeave={() => handleMouseLeave("#Experience")}
            onClick={() => handleMenuClick("#Experience")}
            className={menuState.activeMenuItem === "#Experience" ? "active" : ""}
            aria-label="Experience"
            title="Experience" // Titel für Hover
          >
            <RiServiceLine />
          </a>
          {menuState.showInfo["#Experience"] && <div className="pop-up-icon">Experience</div>}
        </div>

        <div className="icon-container">
          <a
            href="#Projects"
            onMouseEnter={() => handleHover("#Projects")}
            onMouseLeave={() => handleMouseLeave("#Projects")}
            onClick={() => handleMenuClick("#Projects")}
            className={menuState.activeMenuItem === "#Projects" ? "active" : ""}
            aria-label="Projects"
            title="Projects" // Titel für Hover
          >
            <GoProjectSymlink />
          </a>
          {menuState.showInfo["#Projects"] && <div className="pop-up-icon">Projects</div>}
        </div>

        <div className="icon-container">
          <a
            href="#Contact"
            onMouseEnter={() => handleHover("#Contact")}
            onMouseLeave={() => handleMouseLeave("#Contact")}
            onClick={() => handleMenuClick("#Contact")}
            className={menuState.activeMenuItem === "#Contact" ? "active" : ""}
            aria-label="Contact"
            title="Contact" // Titel für Hover
          >
            <GrContact />
          </a>
          {menuState.showInfo["#Contact"] && <div className="pop-up-icon">Contact</div>}
        </div>
        <h4 className="navigation-text"></h4>
      </div>
    </div>
  );
}
