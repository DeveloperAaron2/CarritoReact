import { useFilters } from '../hooks/useFilters';
import './Filters.css'
import { useId } from "react"

export function Filters () {
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const { filters, setFilters } = useFilters()

    function handleChaneMinPrice(event){
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>A partir de </label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChaneMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Teléfonos</option>
                </select> 
            </div>
        </section>
    )

}