const Total = ({exercises1, exercises2, exercises3})=>{
    const total = exercises1 + exercises2 + exercises3;
    return(
        <>
        <p>Number of exercises : {total}</p>
        </>
    )
}

export default Total;
