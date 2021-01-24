export function ErrorText(props) {
    return (
        <p style={{
            "fontSize": "10px",
            "color": "#f97878",
            "margiTop": "10px"
        }}>{props.message}</p>
    )
}
export default props => (

    <div className="input-block">
        <label htmlFor={props.id} className={`input-label ${props.className}`}>* {props.labelText}</label>
        <input type={props.type} name={props.id} id={props.id} onChange={props.inptInline} placeholder={props.placeholder} value={props.state[props.id]} />
        {props.state.errors[`${props.id}Error`] ? <ErrorText message={props.state.errors[`${props.id}Error`]} /> : ""
        }
    </div>


)