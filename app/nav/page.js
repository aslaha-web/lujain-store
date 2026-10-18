
import React from 'react'
import Link from 'next/link'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        LUJAIN<span>.</span>
      </Link>

      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/productList">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link href="/productList" className="navbar-button">
        Explore Collection <span>↗</span>
      </Link>
    </nav>
  )
}
