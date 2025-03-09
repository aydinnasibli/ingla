import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactPageButton from './ContactPageButton'

function Layout({ children }) {
    return (
        <>
            <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className='lg:sticky lg:top-0 lg:z-50 '>
                    <Header />
                </header>
                <main>
                    {children}
                    <ContactPageButton />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>

    )
}

export default Layout