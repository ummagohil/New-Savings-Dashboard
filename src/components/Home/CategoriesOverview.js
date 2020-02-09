import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const CategoriesOverview = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)

	const data = Object.keys(categories).map(function(key) {
		return categories[key]})
		.flat()
		.map(a => Math.round(a.value).toLocaleString())
	console.log(data)

	return (
		<>
			<p className="text-2xl text-blue-base">Categories</p>
			<hr />
			<div className="flex">
				<div className="w-1/4">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />
					£{data[0]}
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faHeart} />
					<br />
					£{data[1]}
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />
					£{data[2]}
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faHome} />
					<br />
					£{data[3]}
				</div>
			</div>
		</>
	)
}

export default CategoriesOverview
