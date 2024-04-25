import './categories.css'

function Categories({categories,setCatName}){

    let cat = categories.map((v,i)=>{

        return(
        <li key={i} className="item" onClick={()=>setCatName(v)} >{v}</li>
        )
    })

    return(

        <>
        <div className="categories">
       <h3>Categories</h3>
        
        <ul className="catItmes">
            {cat}
        </ul>

        </div>
        </>
    )

}
export default Categories;