import CategoriyItem from "./CategoriyItem";

export default function CategoriyList({catalog =[]}) {

    return(
        <div className={`list`}>
            {catalog.map(item=> {
                return <CategoriyItem key={item.idCategory} {...item}/>
            })}
        </div>
    )
}
