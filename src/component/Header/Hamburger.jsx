function Hamburger({ menuOpen, setMenuOpen }){

    
    console.log(menuOpen);

    return (
        <>
            <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Hamburger;