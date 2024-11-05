import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <header>
                    <Header />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>

    )
}

export default Layout