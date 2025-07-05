import Menu from '../../components/menu/menu';


function NotFound() {
  return (
    <header>


      <div class="header">
        <div class="grid grid-cols-3 gap-4">
          <div ><img class="w-50 h-20 rounded-4xl" src="/icono_logo.png" alt="" /></div>
          <div > <Menu /></div>
          <div class="header-right"><div class="relative">
            <img class="w-10 h-10 rounded-full" src="/usuarioOnLine.png" alt="" />
            <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div></div>
        </div>

      </div>
    </header>
  )
}

export default NotFound
