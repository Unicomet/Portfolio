
export default function Card({children, title, image, url, alt}){
    
    return (
        <div className="card w-auto bg-base-200 shadow-xl">
            <figure className="h-2/5"><img src={image} alt={alt} className="object-fill h-full w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {children}
            </div>
            <div className="justify-center">
                    <a href={url} target="_blank" className="w-full">
                        <button className="btn btn-secondary w-full">Check out</button>
                    </a>
            </div>
        </div>        
    )
}   