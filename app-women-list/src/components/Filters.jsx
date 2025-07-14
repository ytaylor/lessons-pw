const Filters = ({ countries, fields, onChange, selected }) => (
    <div className="filters">
        <select name="country" value={selected.country} onChange={onChange}>
            <option value="">Todos los países</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
        <select name="field" value={selected.field} onChange={onChange}>
            <option value="">Todas las áreas</option>
            {fields.map((f, i) => <option key={i} value={f}>{f}</option>)}
        </select>
    </div>
);
export default Filters;
