

function Rating(props){
    const{rating,numReviews}=props;
    return(
        <div className="rating">
            <span>
                <i
                className={
                    rating>=1
                    ?'fa-solid fa-star'
                    :rating>=0.5
                    ?'fa-solid fa-star-half-stroke'
                    :'fa-regular fa-star'
                }
                />
                </span>
            <span>
                <i
                className={
                    rating>=2
                    ?'fa-solid fa-star'
                    :rating>=1.5
                    ?'fa-solid fa-star-half-stroke'
                    :'fa-regular fa-star'
                }
                />
                </span>

                <span>
                <i
                className={
                    rating>=3
                    ?'fa-solid fa-star'
                    :rating>=2.5
                    ?'fa-solid fa-star-half-stroke'
                    :'fa-regular fa-star'
                }
                />
                </span>

                <span>
                <i
                className={
                    rating>=4
                    ?'fa-solid fa-star'
                    :rating>=3.5
                    ?'fa-solid fa-star-half-stroke'
                    :'fa-regular fa-star'
                }
                />
                </span>

                <span>
                <i
                className={
                    rating>=5
                    ?'fa-solid fa-star'
                    :rating>=4.5
                    ?'fa-solid fa-star-half-stroke'
                    :'fa-regular fa-star'
                }
                />
                </span>
                <span>{numReviews}reviews</span>
 </div>
    );
}

export default Rating;

















//full star-<i class="fa-solid fa-star"></i>
//half star-<i class="fa-solid fa-star-half-stroke"></i>
//empty star-<i class="fa-regular fa-star"></i>