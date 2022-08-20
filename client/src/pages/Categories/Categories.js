import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {getCategory} from "../../redux/features/posts/postsSlice";
import CardMain from "../../components/CardMain/CardMain";

const Categories = () => {
    const {category} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {posts, loading} = useSelector((state) => ({...state.posts}))
    useEffect(() => {
        dispatch(getCategory(category))
    }, [location]);
    console.log()

    return (
        <div>
            {
                loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <div>
                        {
                            posts.map(user=>(
                                <CardMain post={user} key={user._id}/>
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
};

export default Categories;
