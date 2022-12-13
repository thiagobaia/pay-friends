import { HeaderModel } from "./Header.model";

//assets
import menuBurger from "../../../../assets/component/Header/fi-rs-menu-burger.svg";
import logo from "../../../../assets/component/Header/logo.png";
import heartVector from "../../../../assets/component/Header/heart-vector.svg";
import shoppingBag from "../../../../assets/component/Header/fi-rs-shopping-bag.svg";

export const Header = () => {
  return (
    <div className="w-full h-28 bg-orange-500 rounded-t-xl justify-center items-center flex">
      <div className="w-1504 h-14 flex justify-between mx-4">
        <div className="flex items-center">
          <img className="w-7 h-9 cursor-pointer" src={menuBurger} alt="menuBurger" />
          <img className="w-32 h-32 cursor-pointer" src={logo} alt="logo" />
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="flex items-center gap-10">
          <div
            className="relative transition-all w-min-content before:absolute before:top-8 hover:before:w-auto 
                        hover:before:bg-white-100 hover:before:left-0 hover:before:content-['Favoritos'] 
                          hover:before:text-xs hover:before:font-light hover:before:px-2"
          >
            <img
              className="cursor-pointer"
              src={heartVector}
              alt="heartVector"
            />
          </div>
          <div
            className="relative transition-all w-min-content before:absolute before:top-8 hover:before:w-auto 
                        hover:before:bg-white-100 hover:before:left-0 hover:before:content-['Sacola'] 
                          hover:before:text-xs hover:before:font-light hover:before:px-2"
          >
            <img
              className="cursor-pointer"
              src={shoppingBag}
              alt="shoppingBag"
            />
          </div>

          <div className="flex items-center gap-8">
            <div>
              <p>Bem-vindo!</p>
            </div>
            <div className="flex gap-2">
              <p className="bg-gray-900 text-white-100 font-semibold rounded-md p-2 text-center text-xs cursor-pointer hover:bg-gray-800 hover:transition-all hover:delay-100">Entrar</p>
              <p className="bg-gray-900 text-white-100 font-semibold rounded-md p-2 text-center text-xs cursor-pointer hover:bg-gray-800 hover:transition-all hover:delay-100">Cadastrar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
