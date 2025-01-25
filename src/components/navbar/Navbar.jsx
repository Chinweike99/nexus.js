import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const navBar = [
        {id: 6, name: "Home", url: "/"},
        {id: 1, name: "Potfolio", url: "/portfolio"},
        {id: 2, name: "Blog", url: "/blog"},
        {id: 3, name: "About", url: "/about"},
        {id: 4, name: "Contact", url: "/contact"},
        {id: 5, name: "Dashboard", url: "/dashboard"},
    ] 




  return (
    <>
        <div>
            {navBar.map(clicks =>{
                return (
                    <div key={clicks.id}>
                        <Link href={clicks.url}>{clicks.name}</Link>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Navbar