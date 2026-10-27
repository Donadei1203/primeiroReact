import { useState } from "react";
import './header.css'

    function Header() {
        return (
            <header>
                <div>
                    <h1>Logo</h1>
                </div>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Contato</a>
                </nav>
            </header>
        )
    }

export default Header