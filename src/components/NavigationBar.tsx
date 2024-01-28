import Link from "next/link"
import { SmallButton } from "./Button"

function NavigationBar() {
  return (
    <footer>
      <nav className="navbar fixed bottom-0 left-0 w-full bg-grey-transparent flex-row justify-between h-16 p-4 flex gap-4 font-text">
        <Link href="/">
          <SmallButton
            label={"Home"}
            className={"bg-white text-blue w-16 h-9 rounded-md"}
          />
        </Link>
        <Link href="/form">
          <SmallButton
            label={"Profile"}
            className={"bg-blue text-white w-16 h-9 rounded-md"}
          />
        </Link>
        <Link href="/map">
          <SmallButton
            label={"Map"}
            className={"bg-green text-white w-16 h-9 rounded-md"}
          />
        </Link>
      </nav>
    </footer>
  )
}

export default NavigationBar
