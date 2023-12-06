import React from 'react'

const CategoryFilters = () => {
    return (
        <>
            <div className="filterButtons justify-center gap-4 my-4 flex flex-wrap">
            <button className="btn btn-outline btn-success">ALL</button>
            <button className="btn btn-outline btn-primary">COFFEE</button>
            <button className="btn btn-outline btn-primary">AUTUMN LEAVES</button>
            <button className="btn btn-outline btn-primary">ROSEWOOD SYMPHONY</button>
            <button className="btn btn-outline btn-primary">JASMINE</button>
            <button className="btn btn-outline btn-primary">WHITE LILY</button>
            <button className="btn btn-outline btn-primary">LAVENDER</button>
            </div>
        </>
    )
}

export default CategoryFilters