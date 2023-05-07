import '../../styles/navigationBar.css'


const NavBar = () => {
    return (
        <section className='nav_container'>
            <div className='nav_categories'>
                {/*Basics*/}
                <div>
                    <button className='nav_button section'>Основи</button>
                    <div className='subButton_container'>
                        <button className='nav_button subSection'>Герої</button>
                        <button className='nav_button subSection'>Предмети</button>
                        <button className='nav_button subSection'>Линии, крипы, башни</button>
                    </div>
                </div>
                {/*Mechanics*/}
                <div>
                    <button className='nav_button section'>Механики</button>
                    <div className='subButton_container'>
                        <button className='nav_button subSection'>Уровень существ</button>
                        <button className='nav_button subSection'>Золото и награды за убийство</button>
                        <button className='nav_button subSection'>Опыт</button>
                        <button className='nav_button subSection'>Добивание существ</button>
                        <button className='nav_button subSection'>Урон</button>
                        <button className='nav_button subSection'>Смерть</button>
                        <button className='nav_button subSection'>Характеристики существа</button>
                        <button className='nav_button subSection'>Способности</button>
                        <button className='nav_button subSection'>Эффекты состояния</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default NavBar;