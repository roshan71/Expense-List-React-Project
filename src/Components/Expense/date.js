function Date(pro){
    return(
        <div className="expense-date">
        <div className="expense-date__month">{pro.edate.toLocaleString('en-US',{month:'long'})}</div>
         <div className="expense-date__year">{pro.edate.getFullYear()}</div>
        <div className="expense-date__day">{pro.edate.toLocaleString('en-US',{day:"2-digit"})}</div>
        </div>
    );
}
export default Date;