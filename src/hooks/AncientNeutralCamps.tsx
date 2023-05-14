import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/units.css"

interface Item {
    id: number;
    name: string;
    img:string;
    health: number,
    XP_bounty: string,
    mana:number,
    mana_regen:number,
    health_regen: number,
    gold_bounty: string,
    attack_range: number,
    armor: number,
    magic_resist: string,
    attack_speed: number,
    damage: number,
}

const Structures: React.FC = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Item[]>('http://127.0.0.1:8000/ancientneutralcamps');
                setItems(response.data);
            } catch (error) {
                setError('Failed to fetch items');
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section id="structures">
            {/*Line Creeps*/}
            <section className='table_wrapper'>
                <div>
                    <label>Units</label>
                    <h1>Structures</h1>
                </div>
                {items.map((item) => (
                    <div className="units_table_wrapper" key={item.id}>
                        <h2 className="units_h2">{item.name}</h2>
                        <div className="units_table">
                            <div className="table_column">
                                <img src={item.img}/>
                            </div>
                            <span className="span"></span>
                            <div className="table_column">
                                <p className="stats">Health:
                                    <p className="stats_value">{item.health}</p>
                                </p>
                                <p className="stats">Mana:
                                    <p className="stats_value">{item.mana}</p>
                                </p>
                                <p className="stats">Health Regen:
                                    <p className="stats_value">{item.health_regen}</p>
                                </p>
                                <p className="stats">Mana Regen:
                                    <p className="stats_value">{item.mana_regen}</p>
                                </p>
                                <p className="stats">Нагорода у золоті:
                                    <p className="stats_value">{item.gold_bounty}</p>
                                </p>
                                <p className="stats">XP bounty:
                                    <p className="stats_value">{item.XP_bounty}</p>
                                </p>
                            </div>
                            <span className="span"></span>
                            <div className="table_column">
                                <p className="stats">Скор. атаки:
                                    <p className="stats_value">{item.attack_speed}</p>
                                </p>
                                <p className="stats">Damage:
                                    <p className="stats_value">{item.damage}</p>
                                </p>
                                <p className="stats">Attack Range:
                                    <p className="stats_value">{item.attack_range}</p>
                                </p>
                                <p className="stats">Armor:
                                    <p className="stats_value">{item.armor}</p>
                                </p>
                                <p className="stats">Magic Resist:
                                    <p className="stats_value">{item.magic_resist}</p>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Structures;