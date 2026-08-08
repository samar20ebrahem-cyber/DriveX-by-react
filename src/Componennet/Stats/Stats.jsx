import { stats } from '../../data/Stats.js'
export function Stats() {
    return (
        <>
            <section className='stats-section'>
                <div className="stats-container">
                    {
                        stats.map((item) => (
                            <div className="stats-card" key={item.id}>
                                <h2>{item.number}</h2>
                                <p>{item.label}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
import './Stats.css'