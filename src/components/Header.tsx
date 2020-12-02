import React from 'react'

const Header: React.FC = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">#JlJl</a>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Главная</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Фотографии</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Музыка</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Проекты</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                                <button className="btn btn-outline my-2 my-sm-0" type="submit">Найти</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header